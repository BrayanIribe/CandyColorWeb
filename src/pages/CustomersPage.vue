<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/customer/new"
      />
      <IDatagrid
        :fields="fields"
        :items="items"
        @onDelete="onDelete"
        @onEdit="(row) => $router.push('/customer/' + row.id)"
      />
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
        { key: "name", label: "Nombre" },
        { key: "rfc", label: "RFC" },
        { key: "phone", label: "Teléfono" },
      ],
      items: [],
    };
  },
  methods: {
    async fetch() {
      const response = await this.$api.clientes.fetch();
      if (response.status === 200) {
        // this.items = response.data;
        this.items = [
          {
            id: 1,
            name: "GIBRAN",
            rfc: "GRD850825PR9",
            phone: "+1 (55) 938 2019",
          },
          {
            id: 2,
            name: "MARTHA",
            rfc: "MAP801402JM7",
            phone: "+1 (55) 408 2514",
          },
          {
            id: 3,
            name: "ELVA",
            rfc: "ELV090402LM7",
            phone: "+1 (55) 124 7623",
          },
        ];
      }
    },
    async onDelete(row) {
      const response = await this.$api.clientes.delete(row.id);
      if (response.status === 200) {
        this.$ok("Se ha eliminado el cliente con éxito.");
        this.fetch();
      } else {
        this.$error("Ocurrió un problema al intentar eliminar el cliente.");
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