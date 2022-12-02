<template>
    <div>
      <IHomeHeader />
      <IContainer>
        <ISearchContainer
          placeholder="Buscar por Id o cliente"
          toNew="/order/new"
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
          { key: "customer", label: "Cliente" },
          { key: "status", label: "Estatus" },
          { key: "total", label: "Total" },
        ],
      };
    },
  };
  </script>
  
  <style>
  
  </style>