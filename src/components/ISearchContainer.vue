<template>
  <div class="i-search-container">
    <div class="row mt-5">
      <div class="col-sm-6 mb-3 d-flex">
        <b-form-group label="Búsqueda" style="width: 90%" v-if="false">
          <b-form-input :placeholder="placeholder" required></b-form-input>
        </b-form-group>
        <b-btn variant="warning" class="i-search-btn" v-if="false"
          >Buscar</b-btn
        >
        <h1 v-if="!isModal">{{ $route.name }}</h1>
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
    isModal: {
      type: Boolean,
      default: false,
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