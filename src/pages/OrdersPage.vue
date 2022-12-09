<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o cliente"
        toNew="/order/new"
      />
      <IDatagrid :fields="fields" :items="items" />
    </IContainer>
  </div>
</template>
  
  <script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";
import ISearchContainer from "@/components/ISearchContainer";
import IDatagrid from "@/components/IDatagrid.vue";

export default {
  components: { IHomeHeader, IContainer, ISearchContainer, IDatagrid },
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "cliente", label: "Cliente" },
        { key: "status", label: "Estado" },
        { key: "total", label: "Total" },
      ],
      items: [
      ],
    };
  },
  methods: {
    async fetch() {
      const response = await this.$api.documentos.fetch();
      if (response.status === 200) {
        this.items = response.data;
      }
    },
  },
  created() {
    this.fetch();
  },
};
</script>
  
  <style>
</style>