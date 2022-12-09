<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <form class="row" @submit="login">
        <div class="col-3 mb-3"></div>
        <b-form-group label="Usuario o email" class="col-6 mb-3">
          <b-form-input
            v-model="form.usuario"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <div class="col-3 mb-3"></div>
        <div class="col-3 mb-3"></div>
        <b-form-group label="Contraseña" class="col-6 mb-5">
          <b-form-input
            v-model="form.password"
            type="password"
            :disabled="$loading"
            required
          ></b-form-input>
        </b-form-group>
        <div class="col-3 mb-3"></div>
        <div class="col-4 mb-3"></div>
        <div class="col-4 mb-3">
          <b-button
            variant="dark"
            class="i-login-btn"
            type="submit"
            :disabled="$loading"
            >Iniciar sesión</b-button
          >
        </div>
        <div class="col-4 mb-3"></div>
      </form>
    </IContainer>
  </div>
</template>

<script>
import IContainer from "@/components/IContainer.vue";
import IHomeHeader from "@/components/IHomeHeader";

export default {
  components: { IContainer, IHomeHeader },
  data() {
    return {
      form: {
        usuario: "",
        password: "",
      },
    };
  },
  methods: {
    async login(e) {
      if (this.$loading) return;

      const { usuario, password } = this.form;

      if (e) e.preventDefault();

      const response = await this.$api.auth.login(usuario, password);

      if (response.status !== 201) {
        const text =
          response.status === 403
            ? "Credenciales inválidas."
            : response.data.message;
        this.$error(text);
        return;
      }

      const { token } = response.data;
      if (typeof token !== "string" || token.length <= 0) return;

      localStorage.setItem("token", token);
      await new Promise((solve) => setTimeout(solve, 100));

      const checkinResponse = await this.$api.auth.checkin();
      if (checkinResponse.status === 200) {
        this.$store.commit("setUser", checkinResponse.data);
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style>
.i-login-btn {
  display: block;
  width: 100%;
}

.i-register-link {
  display: block;
  text-decoration: none;
  text-align: center;
}
</style>