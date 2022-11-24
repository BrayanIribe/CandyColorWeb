<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <form class="row">
        <b-form-group label="Usuario o email" class="col-12 mb-3">
          <b-form-input required></b-form-input>
        </b-form-group>
        <b-form-group label="Contraseña" class="col-12 mb-5">
          <b-form-input type="password" required></b-form-input>
        </b-form-group>
        <div class="col-12 mb-3">
          <b-button variant="dark" class="i-login-btn" to="/"
            >Iniciar sesión</b-button
          >
        </div>
      </form>
    </IContainer>
  </div>
</template>

<script>
import IContainer from "@/components/IContainer.vue";
import IHomeHeader from "@/components/IHomeHeader";

export default {
  components: { IContainer, IHomeHeader },
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