<template>
  <div id="app">
    <ISidebar />
    <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script>
import ISidebar from "./components/ISidebar";

export default {
  name: "App",
  components: { ISidebar },
  async created() {
    const checkinResponse = await this.$api.auth.checkin();
    if (checkinResponse.status === 200) {
      this.$store.commit("setUser", checkinResponse.data);
      console.log("[+] Done checkin.", checkinResponse.data);
    } else {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  },
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
