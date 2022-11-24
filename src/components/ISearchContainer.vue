<template>
  <div class="i-search-container">
    <div class="row">
      <div class="col-sm-6 mb-3 d-flex">
        <b-form-group label="Búsqueda" style="width: 90%">
          <b-form-input :placeholder="placeholder" required></b-form-input>
        </b-form-group>
        <b-btn variant="warning" class="i-search-btn">Buscar</b-btn>
      </div>
      <div
        class="col-sm-4 d-flex align-items-end justify-content-end offset-sm-2"
      >
        <b-btn class="i-new-btn" variant="primary" :to="toNew">Nuevo</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ISearchContainer",
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    toNew: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
.i-search-btn {
  height: 38px;
  width: 100%;
  max-width: 150px;
  margin-left: 10px;
  margin-top: 31px;
}
.i-new-btn {
  max-width: 150px;
  width: 100%;
  margin-bottom: 15px;
}
</style>