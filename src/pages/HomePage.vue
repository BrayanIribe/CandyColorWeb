<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <div
        class="i-m-container d-flex align-items-center justify-content-center"
      >
        <h1>Inicio</h1>
      </div>
    </IContainer>
  </div>
</template>

<script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";

export default {
  components: { IHomeHeader, IContainer },
};
</script>

<style>
.i-m-container {
  width: 100vw;
  height: 80vh;
}
</style>