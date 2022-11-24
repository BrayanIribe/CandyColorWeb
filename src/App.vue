<template>
  <div id="app">
    <ISidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import ISidebar from "./components/ISidebar";

export default {
  name: "App",
  components: { ISidebar },
};
</script>

<style>
.i-border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.bg-pink {
  background-color: #ff0bbb;
}

.text-pink {
  color: #ff0bbb !important;
}

.i-save-btn {
  width: 100%;
}
</style>
