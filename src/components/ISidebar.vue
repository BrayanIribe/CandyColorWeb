<template>
  <div
    class="i-sidebar border-right shadow"
    :class="{ 'i-show': $show }"
    @mouseleave="hideSidebar"
    @click="hideSidebar"
  >
    <div class="i-sb-close">
      <font-awesome-icon icon="fa-solid fa-close" />
    </div>
    <ISidebarOption
      :text="route.name"
      :href="route.path"
      v-for="route of $routes"
      :key="route.name"
    />
  </div>
</template>

<script>
import ISidebarOption from "./ISidebarOption.vue";
import routes from "@/router";

export default {
  components: { ISidebarOption },
  data() {
    return {
      routes: [
        "Clientes",
        "Proveedores",
        "Inventario",
        "Pedidos",
        "Ventas",
        "Compras",
        "Reportes",
      ],
    };
  },
  computed: {
    $show() {
      return this.$store.state.showSidebar;
    },
    $routes() {
      return routes.filter((e) => e.showSidebar === true);
    },
  },
  methods: {
    hideSidebar() {
      this.$store.commit("hideSidebar");
    },
  },
};
</script>

<style>
.i-sidebar {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 200px;
  background-color: white;
  height: 100%;
  padding: 1rem;
  padding-top: 5rem;
  transition: transform 0.2s;
  transform: translateX(-200px);
}

.i-sidebar.i-show {
  transform: translateX(0px);
}

.i-sidebar img {
  width: 100%;
  max-height: 100%;
  margin-bottom: 3rem;
}

.i-sb-close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer !important;
}
</style>