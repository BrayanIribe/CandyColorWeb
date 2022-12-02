<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/supplier/new"
      />
      <IDatagrid :fields="fields" :items="items" />
    </IContainer>
  </div>
</template>

<script>
import IHomeHeader from "@/components/IHomeHeader.vue";
import IContainer from "@/components/IContainer.vue";
import ISearchContainer from "@/components/ISearchContainer.vue";
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
      items: [
        {
          id: 1,
          name: "Rodri",
          rfc: " ",
          phone: "+1 (55) 938 2019",
        },
        {
          id: 2,
          name: "Pascu",
          rfc: " ",
          phone: "+1 (55) 408 2514",
        },
        {
          id: 3,
          name: "Sofi",
          rfc: " ",
          phone: "+1 (55) 124 7623",
        },
      ],
    };
  },
};
</script>

<style>
</style>