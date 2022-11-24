<template>
    <div>
      <IHomeHeader />
      <IContainer class="mt-5">
        <h1>{{ $title }}</h1>
        <hr />
        <form class="row mt-5">
          <b-form-group class="col-sm-5 mb-4" label="ID">
            <b-form-input required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Nombre">
            <b-form-input required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 mb-4" label="Código de barras">
            <b-form-input required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Existencia">
            <b-form-input required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 mb-4" label="Costo">
            <b-form-input required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Precio">
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
        if (id === "new") return "Agregar Producto/Materia Prima";
        return "Editar Producto/Materia Prima";
      },
    },
  };
  </script>
  
  <style>

  </style>