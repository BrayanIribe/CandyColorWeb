<template>
  <div>
    <IHomeHeader />
    <IContainer class="mt-5">
      <h1>{{ $title }}</h1>
      <hr />
      <form class="row mt-5" @submit="submit">
        <b-form-group class="col-sm-5 mb-4" label="ID">
          <b-form-input
            :value="form.id === 0 ? '' : form.id"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Descripcion">
          <b-form-input
            v-model="form.descripcion"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 mb-4" label="Código de barras">
          <b-form-input
            v-model="form.codigo"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Existencia">
          <b-form-input
            v-model="form.existencia"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 mb-4" label="Costo">
          <b-form-input
            v-model="form.costo"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-sm-5 offset-sm-2 mb-4" label="Precio">
          <b-form-input
            v-model="form.precio"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
          class="col-sm-12"
          v-model="form.esMateria"
          :value="true"
          :unchecked-value="false"
        >
          Este producto es materia prima.
        </b-form-checkbox>
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
        esMateria: 0,
        descripcion: "",
        codigo: "",
        existencia: 0,
        costo: "",
        precio: "",
      },
    };
  },
  computed: {
    $title() {
      if (this.form.id === 0) return "Agregar Producto";
      return "Editar Producto";
    },
  },
  methods: {
    async submit(e) {
      if (e) e.preventDefault();

      const response =
        this.form.id === 0
          ? await this.$api.productos.create(this.form)
          : await this.$api.productos.update(this.form.id, this.form);
      if (response.status === 200 || response.status === 201) {
        await this.$ok("Se ha guardado el producto con éxito.");
        this.$router.back();
      } else {
        await this.$error(
          "Ha ocurrido un problema al intentar guardado el producto."
        );
      }
    },
  },
  async created() {
    const { id } = this.$route.params;
    this.form.id = id === "new" ? 0 : parseInt(id, 10);

    if (this.form.id > 0) {
      const response = await this.$api.productos.fetchById(this.form.id);
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