<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/inventory/new"
      />
      <IDatagrid
        :fields="fields"
        :items="items"
        @onSelectedRow="onRowSelected"
        @onDelete="onDelete"
        @onEdit="(row) => $router.push('/inventory/' + row.id)"
      >
        <b-button
          variant="success"
          class="mb-3"
          v-b-modal.modal-1
          :disabled="selectedRow === null"
          >Modificar Existencia</b-button
        >
        <b-modal
          id="modal-1"
          title="Modificar Existencia"
          @ok="onSubmitExistencia"
          ok-title="Guardar"
          cancel-title="Cancelar"
        >
          <b-form-input
            type="number"
            min="0"
            required
            v-model="form.existencia"
            :disabled="selectedRow === null"
            autofocus
          ></b-form-input>
        </b-modal>
      </IDatagrid>
    </IContainer>
  </div>
</template>

<script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";
import ISearchContainer from "@/components/ISearchContainer";
import IDatagrid from "@/components/IDatagrid.vue";

export default {
  components: { IHomeHeader, IContainer, ISearchContainer, IDatagrid },
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "descripcion", label: "Descripción" },
        { key: "codigo", label: "Código de barras" },
        { key: "esMateria", label: "Es Materia" },
        { key: "existencia", label: "Existencia" },
        { key: "costo", label: "Costo" },
      ],
      items: [],
      form: {
        existencia: 0,
      },
      selectedRow: null,
    };
  },
  methods: {
    onRowSelected(row) {
      this.selectedRow = row;
      if (row) this.form.existencia = row.existencia;
    },
    async fetch() {
      const response = await this.$api.products.fetch();
      if (response.status === 200) {
        this.items = response.data;
      }
    },
    async onDelete(row) {
      const response = await this.$api.products.delete(row.id);
      if (response.status === 200) {
        this.$ok("Se ha eliminado el producto con éxito.");
        this.fetch();
      } else {
        this.$error("Ocurrió un problema al intentar eliminar el producto.");
      }
    },
    async onSubmitExistencia() {
      const form = { ...this.selectedRow, existencia: this.form.existencia };
      const response = await this.$api.products.update(form.id, form);
      if (response.status === 200) {
        this.$ok("Se ha modificado la existencia del producto correctamente.");
        this.fetch();
      } else {
        this.$error(
          "Ha ocurrido un problema al intentar modificar la existencia."
        );
      }
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>