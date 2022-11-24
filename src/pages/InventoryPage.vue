<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/inventory/new"
      />
      <IDatagrid :fields="fields">
        <b-button variant="success" class="mb-3" disabled
          >Modificar Existencia</b-button
        >
      </IDatagrid>
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
        { key: "description", label: "Descripción" },
        { key: "code", label: "Código de barras" },
        { key: "isMatter", label: "Es Materia" },
        { key: "existence", label: "Existencia" },
        { key: "cost", label: "Costo" },
      ],
    };
  },
};
</script>

<style>
</style>