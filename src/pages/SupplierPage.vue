<template>
    <div>
      <IHomeHeader />
      <IContainer class="mt-5">
        <h1>{{ $title }}</h1>
        <hr />
        <form class="row mt-5" @submit="submit">
          <b-form-group class="col-sm-5 mb-4" label="Nombre">
            <b-form-input v-model="form.nombre" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="RFC">
            <b-form-input v-model="form.rfc" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 mb-4" label="Referencia">
            <b-form-input v-model="form.referencia" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Teléfono">
            <b-form-input v-model="form.telefono" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 mb-4" label="Calle">
            <b-form-input v-model="form.calle" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Número">
            <b-form-input v-model="form.numero" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 mb-4" label="Colonia">
            <b-form-input v-model="form.colonia" required></b-form-input>
          </b-form-group>
          <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Código postal">
            <b-form-input v-model="form.codigoPostal" required></b-form-input>
          </b-form-group>
          <div class="col-sm-12 mb-3 mt-5">
            <b-btn
              class="i-save-btn"
              type="submit"
              block
              variant="primary"
              :disabled="$loading"
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
      return {
        form: {
          id: 0,
          nombre: "",
          rfc: "",
          referencia: "",
          telefono: "",
          calle: "",
          numero: "",
          colonia: "",
          codigoPostal: "",
        },
      };
    },
    computed: {
      $title() {
        if (this.form.id === 0) return "Agregar proveedor";
        return "Editar proveedor";
      },
    },
    methods: {
    async submit(e) {
      // Si el servidor esta ocupado, abortar la peticion
      if (this.$loading) return;
      // Si se desencadeno la llamada por un formulario submit HTML5, abortar el envio nativo
      if (e) e.preventDefault();

      const response =
        this.form.id === 0
          ? await this.$api.proveedores.create(this.form)
          : await this.$api.proveedores.update(this.form.id, this.form);
      if (response.status === 200 || response.status === 201) {
        await this.$ok("Se ha guardado el proveedor con éxito.");
        this.$router.back();
      } else {
        await this.$error(
          "Ha ocurrido un problema al intentar guardado el proveedor."
        );
      }
    },
  },
  async created(){
    const { id } = this.$route.params;
    this.form.id = id === "new" ? 0 : parseInt(id, 10);

    if(this.form.id > 0){
      const response = await this.$api.proveedores.fetchById(this.form.id);
      if (response.status === 200) {
        this.form = response.data;
      } else {
        this.form.id = 0;
      }
    }
  },
  };
  </script>
  
  <style>

  </style>