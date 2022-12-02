<template>
  <div>
    <IHomeHeader></IHomeHeader>
    <IContainer>
      <h2 class="d-flex align-items-center justify-content-center mt-3 mb-5">
        Tipo de reporte
      </h2>
      <div class="row">
        <div class="col-sm-6">
          <label
            v-for="(reporte, idx) of reportes"
            :key="`reporte-${idx}`"
            :for="`reporte-${idx}`"
            class="d-block mb-5"
          >
            <input
              type="radio"
              name="reporte_seleccionado"
              :id="`reporte-${idx}`"
              :value="idx"
              v-model="reporte_idx"
            />
            {{ reporte.name }}
          </label>
        </div>
        <div class="col-sm-6 text-center pt-3">
          <img
            style="max-height: 300px"
            :src="'/img/report-' + reportes[reporte_idx].id + '.png'"
          />
        </div>
      </div>
      <b-button variant="primary" class="mt-3" size="lg"
        >Generar reporte</b-button
      >
    </IContainer>
  </div>
</template>

<script>
import IHomeHeader from "@/components/IHomeHeader.vue";
import IContainer from "@/components/IContainer.vue";

export default {
  components: { IHomeHeader, IContainer },
  data() {
    return {
      reporte_idx: 0,
      reportes: [
        { id: "sales", name: "Reporte de ventas diario" },
        { id: "suppliers", name: "Reporte de compras mensual por proveedor" },
        { id: "customers", name: "Reporte de pedidos de clientes" },
      ],
    };
  },
};
</script>

<style>
</style>