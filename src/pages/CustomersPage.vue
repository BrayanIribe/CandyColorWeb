<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/customer/new"
      />
      <IDatagrid :fields="fields" />
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
    };
  },
};
</script>

<style>
.i-m-container {
}
</style>