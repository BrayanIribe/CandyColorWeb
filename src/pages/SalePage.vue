<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <div>
        <b-modal
          id="customers-modal"
          title="Seleccionar cliente"
          ref="customerModal"
          size="xl"
          :hide-header-close="cliente.id <= 0"
          :no-close-on-esc="cliente.id <= 0"
          :no-close-on-backdrop="cliente.id <= 0"
          hide-footer
        >
          <b-alert variant="info" :show="cliente.id <= 0"
            >Por favor seleccione un cliente para hacer una nota de
            venta.</b-alert
          >
          <CustomersPage @onSelectedRow="onCustomerSelected" :isModal="true" />
        </b-modal>

        <p class="text-right" v-if="documento.folio > 0">
          Folio: {{ documento.serie }}-{{ documento.folio }}
        </p>
        <div class="row">
          <div class="col-10">
            <span v-if="cliente.id > 0">Cliente: {{ $customer }}</span>
          </div>
          <div class="col-2">
            <b-btn
              class="i-new-btn"
              variant="info"
              @click="toggleCustomersModal"
              >Seleccionar</b-btn
            >
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-7">
          <h5>Observaciones</h5>
          <b-form-textarea
            rows="3"
            max-rows="6"
            v-model="observaciones"
            :disabled="$loading"
          />
        </div>
        <div class="col-5">
          <h3 class="text-center">Total: {{ $currency($total) }} MXN</h3>
          <h6>Código</h6>
          <b-input
            placeholder="Ej. 123"
            v-model="codigoTxt"
            @keyup.enter="submitCodigo"
            autofocus
          />
          <div class="row mb-3">
            <div class="col-6">
              <small class="text-muted">[cantidad]*[codigo]</small>
            </div>
            <div class="col-6">
              <small class="text-muted">CAN[codigo] - Cancelar</small>
            </div>
          </div>
        </div>
      </div>
      <b-table
        class="m-0"
        bordered
        hover
        :items="conceptos"
        :fields="fields"
        selectable
        select-mode="single"
        @row-selected="onConceptoRowSelected"
      >
        <template #cell(precio)="data">
          {{ $currency(data.value) }}
        </template>
        <template #cell(subtotal)="data">
          {{ $currency(data.value) }}
        </template>
      </b-table>
      <div
        class="
          i-no-data-container
          border
          d-flex
          align-items-center
          justify-content-center
        "
        v-if="!conceptos || conceptos.length <= 0"
      >
        <h4 class="text-muted fw-normal">Sin registros que mostrar.</h4>
      </div>
      <div class="row mt-3">
        <div class="col-10">
          <b-btn
            class="i-new-btn"
            variant="danger"
            @click="attemptCancelProduct"
            :disabled="!selectedConcepto || loading"
            >Cancelar</b-btn
          >
        </div>
        <div class="col-2">
          <b-btn
            class="i-new-btn"
            variant="success"
            @click="submit"
            :disabled="$loading"
            >Guardar</b-btn
          >
        </div>
      </div>
    </IContainer>
  </div>
</template>
  
  <script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";
import CustomersPage from "./CustomersPage.vue";

const ID_TIPO_DOCUMENTO = 0;

export default {
  components: { IHomeHeader, IContainer, CustomersPage },
  data() {
    return {
      documento: {
        id: ID_TIPO_DOCUMENTO,
        folio: 0,
        serie: "?",
      },
      cliente: {
        id: 0,
        serie: "?",
      },
      codigoTxt: "",
      fields: [
        { key: "cantidad", label: "Cantidad" },
        { key: "descripcion", label: "Descripción" },
        { key: "precio", label: "Precio" },
        { key: "subtotal", label: "Subtotal" },
      ],
      observaciones: "",
      conceptos: [],
      selectedConcepto: null,
    };
  },
  computed: {
    $total() {
      const { conceptos } = this;

      let total = 0;

      for (const concepto of conceptos) {
        total += concepto.subtotal;
      }

      return total;
    },
    $customer() {
      const { id, nombre } = this.cliente;
      return `${id} - ${nombre}`;
    },
  },
  methods: {
    onConceptoRowSelected(rows) {
      this.selectedConcepto = rows && rows.length ? rows[0] : null;
    },
    async attemptCancelProduct(ask = true) {
      const idx = this.selectedConcepto
        ? this.conceptos.findIndex((e) => e.idx === this.selectedConcepto.idx)
        : -1;

      if (idx === -1) {
        this.$error("Debe seleccionar un concepto para cancelar.");
        return;
      }

      if (ask) {
        const result = await this.$swal({
          title: "¿Desea cancelar el registro seleccionado?",
          text: `Esta acción será irrevocable. Cancelará el producto "${this.conceptos[idx].descripcion}".`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
          reverseButtons: true,
        });
        if (!result || !result.value) return;
      }

      this.conceptos.splice(idx, 1);
      this.$ok("Se ha cancelado el concepto con éxito.");
    },
    onCustomerSelected(customer) {
      if (!customer) return;

      const { cliente } = this;
      cliente.id = customer.id;
      cliente.nombre = customer.nombre;
      this.$refs.customerModal.hide();
    },
    toggleCustomersModal() {
      this.$refs.customerModal.show();
    },
    async submit() {
      if (this.$loading) return;

      const { cliente, documento, conceptos, $total, observaciones } = this;

      if (documento.folio <= 0) {
        this.$error("Debe seleccionar un documento.");
        return;
      }

      if (cliente.id <= 0) {
        await this.$error("Debe seleccionar un cliente.");
        this.$refs.customerModal.show();
        return;
      }

      if (!conceptos || conceptos.length <= 0) {
        await this.$error("Debe tener productos la nota de venta.");
        return;
      }

      if ($total <= 0) {
        this.$error(
          "No puede terminar la nota de venta con un total de ceros."
        );
        return;
      }

      const result = await this.$swal({
        title: "¿Desea terminar la nota de venta?",
        text: `Esta acción será irrevocable.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        reverseButtons: true,
      });
      if (!result || !result.value) return;

      const usuario = this.$store.state.user;

      const form = {
        idCliente: cliente.id,
        idUsuario: usuario.id,
        idProveedor: null,
        tipoDocumento: documento.id,
        subtotal: $total,
        total: $total,
        observaciones,
        serie: documento.serie,
        folio: documento.folio,
        conceptos,
      };

      const response = await this.$api.documentos.create(form);
      if (response.status === 201) {
        await this.$ok("Se ha registrado la nota de venta con éxito.");
        this.$router.go();
      } else {
        await this.$error(
          "Ocurrió un problema al intentar guardar el documento."
        );
      }
    },
    async submitCodigo() {
      if (this.$loading) return;

      const $codigo = this.codigoTxt;

      // Reestablcer cuadro de texto de codigo
      this.codigoTxt = "";

      const comando = $codigo.substring(0, 3).toLowerCase();
      // Si el comando es cancelar, entonces determinar el codigo CAN[codigo]
      if (comando === "can") {
        const codigo = $codigo.substring(3);
        const conceptoIdx = this.conceptos.findIndex(
          (e) => e.codigo === codigo
        );
        if (conceptoIdx === -1) {
          this.$error(
            `No se encontró un producto registrado con el código "${codigo}".`
          );
          return;
        }
        this.selectedConcepto =
          conceptoIdx === -1 ? null : this.conceptos[conceptoIdx];
        this.attemptCancelProduct(false);
        return;
      }
      // Si no hay comando, entonces agregar el producto.
      const quantityIdx = $codigo.indexOf("*");
      const codigo =
        quantityIdx !== -1 ? $codigo.substring(quantityIdx + 1) : $codigo;
      const cantidad =
        quantityIdx !== -1 ? parseFloat($codigo.substring(0, quantityIdx)) : 1;

      if (isNaN(cantidad) || cantidad <= 0) {
        this.$error("La cantidad debe ser mayor a cero.");
        return;
      }

      const response = await this.$api.productos.fetchByCodigo(codigo);

      if (response.status === 200) {
        const producto = response.data;
        const idx = -1; // this.conceptos.findIndex((e) => e.id === producto.id);
        if (idx !== -1) {
          this.conceptos[idx].cantidad += cantidad;
        } else {
          const subtotal = cantidad * producto.precio;
          this.conceptos.push({
            idx: new Date().getTime(),
            cantidad,
            ...producto,
            subtotal,
          });
        }

        this.$ok(`Se agregó el producto "${producto.descripcion}" a la nota.`);
      } else if (response.status === 404) {
        this.$error(`No se encontraron resultados con el código "${codigo}".`);
      } else {
        this.$error("Se ha recibido una respuesta inválida del servidor.");
      }
    },
  },
  async created() {
    const responseDocumento = await this.$api.documentos.getDocumentoFolio(
      ID_TIPO_DOCUMENTO
    );
    if (responseDocumento.status === 200) {
      this.documento = responseDocumento.data;
      this.documento.id = ID_TIPO_DOCUMENTO;
    }
    this.$refs.customerModal.show();
  },
};
</script>
  
  <style>
</style>