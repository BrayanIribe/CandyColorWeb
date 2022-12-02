<template>
  <div>
    <IHomeHeader />
    <div class="i-m-container d-flex align-items-center justify-content-center">
      <img src="/img/dashboard.png" />
    </div>
  </div>
</template>

<script>
import IHomeHeader from "@/components/IHomeHeader";

export default {
  components: { IHomeHeader },
};
</script>

<style>
.i-m-container {
  width: 100vw;
  height: 90vh;
  background-color: #eff0f2;
  padding: 1rem;
}

.i-m-container img {
  max-height: 100%;
}
</style>