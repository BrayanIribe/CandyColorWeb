<template>
  <div>
    <IHomeHeader v-if="!isModal" />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/customer/new"
        v-if="!isModal"
      />
      <IDatagrid
        :fields="fields"
        :items="items"
        :showDeleteButton="!isModal"
        :showEditButton="!isModal"
        @onSelectedRow="(row) => $emit('onSelectedRow', row)"
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
  props: {
    isModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "rfc", label: "RFC" },
        { key: "telefono", label: "Teléfono" },
      ],
      items: [],
    };
  },
  methods: {
    async fetch() {
      const response = await this.$api.clientes.fetch();
      if (response.status === 200) {
        this.items = response.data;
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