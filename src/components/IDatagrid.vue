<template>
  <div class="i-datagrid">
    <b-table
      class="m-0"
      bordered
      hover
      :items="items"
      :fields="fields"
      select-mode="single"
      selectable
      @row-selected="onRowSelected"
      ref="dtTable"
    />
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
        <b-pagination v-if="false" />
        <span v-if="false"
          >Mostrando desde {{ items.length }} hasta
          {{ items.length }} registros.</span
        >
      </div>
      <div class="col-sm-6 d-flex align-items-start justify-content-end">
        <b-btn
          class="i-new-btn"
          type="button"
          variant="warning"
          :disabled="selectedRow === null"
          @click="$emit('onEdit', selectedRow)"
          v-if="showDeleteButton"
          >Editar</b-btn
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b-btn
          class="i-new-btn"
          type="button"
          variant="danger"
          :disabled="selectedRow === null"
          @click="attemptDelete"
          v-if="showDeleteButton"
          >Eliminar</b-btn
        >
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
    showDeleteButton: {
      type: Boolean,
      default() {
        return true;
      },
    },
    showEditButton: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      selectedRow: null,
    };
  },
  methods: {
    onRowSelected(rows) {
      this.selectedRow = rows[0];
      this.$emit("onSelectedRow", this.selectedRow);
    },
    async attemptDelete() {
      const row = this.selectedRow;
      if (row === null) return;

      const result = await this.$swal({
        title: "¿Desea eliminar el registro seleccionado?",
        text: `Esta acción será irrevocable.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        reverseButtons: true,
      });
      if (!result || !result.value) return;

      this.$emit("onDelete", row);
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