<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/customer/new"
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
        { key: "name", label: "Nombre" },
        { key: "rfc", label: "RFC" },
        { key: "phone", label: "Teléfono" },
      ],
      items: [
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
      ],
    };
  },
};
</script>

<style>
</style>