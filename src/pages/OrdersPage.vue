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
        { key: "customer", label: "Cliente" },
        { key: "status", label: "Estatus" },
        { key: "total", label: "Total" },
      ],
      items: [
        {
          id: 1,
          customer: "Andres Urias",
          status: "PENDIENTE DE PAGO",
          total: "$50.00 MXN",
        },
        {
          id: 2,
          customer: "Miguel Sanez",
          status: "CANCELADO SIN ANTICIPACION",
          total: "$60.00 MXN",
        },
        {
          id: 3,
          customer: "Rafael Gutierrez",
          status: "Entregado",
          total: "$300.00 MXN",
        },
      ],
    };
  },
};
</script>
  
  <style>
</style>