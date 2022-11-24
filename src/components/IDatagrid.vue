<template>
  <div class="i-datagrid">
    <b-table class="m-0" bordered hover :items="items" :fields="fields" />
    <div
      class="
        i-no-data-container
        border
        d-flex
        align-items-center
        justify-content-center
      "
      v-if="!items || items.length <= 0"
    >
      <h4 class="text-muted fw-normal">Sin registros que mostrar.</h4>
    </div>
    <div class="row mt-3">
      <div class="col-sm-6">
        <slot></slot>
        <b-pagination />
        <span>Mostrando desde 0 hasta 0 registros.</span>
      </div>
      <div class="col-sm-6 d-flex align-items-start justify-content-end">
        <b-btn class="i-new-btn" variant="danger" disabled>Eliminar</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IDatagrid",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.i-no-data-container {
  width: 100%;
  height: 400px;
  border-top-width: 0px !important;
}
</style>