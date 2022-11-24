<template>
  <div class="i-home-header row bg-pink text-white">
    <div class="col-3">
      <div class="i-menu-btn" @click="showSidebar" v-if="$showSidebar">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
    </div>
    <div class="col-6">
      <div class="d-block text-center">
        <router-link to="/">
          <img src="/img/logo.png" class="i-logo" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import routes from "@/router";

export default {
  computed: {
    $showSidebar() {
      const route = routes.find((e) => e.name === this.$route.name);
      return route.hideMenu !== true;
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit("showSidebar");
    },
  },
};
</script>

<style>
.i-home-header {
  padding: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.i-menu-btn {
  font-size: 1.2rem;
}

.i-logo {
  width: 100%;
  max-width: 120px;
  max-height: 50px;
}

.i-menu-btn {
  position: absolute;
  left: 2rem;
  font-size: 1.3rem;
}
</style>