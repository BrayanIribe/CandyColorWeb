<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/order/new"
      />
      <IDatagrid
        :fields="fields"
        :items="items"
        :showEditButton="false"
        @onDelete="onDelete"
      />
    </IContainer>
  </div>
</template>
  
  <script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";
import ISearchContainer from "@/components/ISearchContainer";
import IDatagrid from "@/components/IDatagrid.vue";

const ID_TIPO_DOCUMENTO = 1;

export default {
  components: { IHomeHeader, IContainer, ISearchContainer, IDatagrid },
  data() {
    return {
      fields: [
        { key: "documento", label: "Documento" },
        {
          key: "cliente.text",
          label: "Cliente",
        },
        { key: "observaciones", label: "Observaciones" },
        { key: "total", label: "Total" },
      ],
      items: [],
    };
  },
  methods: {
    async fetch() {
      const response = await this.$api.documentos.fetch(ID_TIPO_DOCUMENTO);
      if (response.status === 200) {
        this.items = response.data;
      }
    },
    async onDelete(row) {
      const response = await this.$api.documentos.delete(row.id);
      if (response.status === 200) {
        this.$ok("Se ha eliminado el documento con éxito.");
        this.fetch();
      } else {
        this.$error("Ocurrió un problema al intentar eliminar el documento.");
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