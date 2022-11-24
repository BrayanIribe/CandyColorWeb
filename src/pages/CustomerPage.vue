<template>
  <div>
    <IHomeHeader />
    <IContainer class="mt-5">
      <h1>{{ $title }}</h1>
      <hr />
      <form class="row mt-5">
        <b-form-group class="col-sm-5 mb-4" label="Nombre">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="RFC">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 mb-4" label="Referencia">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Teléfono">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 mb-4" label="Calle">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Número">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 mb-4" label="Colonia">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Código postal">
          <b-form-input required></b-form-input>
        </b-form-group>
        <div class="col-sm-12 mb-3 mt-5">
          <b-btn
            class="i-save-btn"
            type="button"
            @click="$router.back()"
            block
            variant="primary"
            >Guardar</b-btn
          >
        </div>
      </form>
    </IContainer>
  </div>
</template>

<script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";

export default {
  components: { IHomeHeader, IContainer },
  data() {
    return {};
  },
  computed: {
    $title() {
      const { id } = this.$route.params;
      if (id === "new") return "Agregar cliente";
      return "Editar cliente";
    },
  },
};
</script>

<style>
.i-m-container {
}
</style>