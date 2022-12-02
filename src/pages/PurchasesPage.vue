<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o proveedor"
        toNew="/purchase/new"
      />
      <IDatagrid :fields="fields" :items="items" :showDeleteButton="false" />
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
        { key: "supplier", label: "Proveedor" },
        { key: "status", label: "Estatus" },
        { key: "total", label: "Total" },
      ],
      items: [
        {
          id: 1,
          supplier: "Sonrics",
          status: "Completado",
          total: "$30.00 MXN",
        },
        {
          id: 2,
          supplier: "Marinela",
          status: "Cancelado",
          total: "$50.00 MXN",
        },
        {
          id: 3,
          supplier: "Gamesa",
          status: "Pendiente",
          total: "$300.00 MXN",
        },
      ],
    };
  },
};
</script>
  
  <style>
</style>