<template>
  <div class="i-sidebar-option">
    <router-link class="text-pink" :to="href">{{ text }} </router-link>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    data: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style>
.i-sidebar-option a {
  text-decoration: none;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: block;
  transition: 200ms;
  position: relative;
  left: 0;
}

.i-sidebar-option a:hover {
  left: 20px;
}

.i-sidebar-option a:hover > .i-router-arrow {
  position: relative;
  right: 0;
}
</style>