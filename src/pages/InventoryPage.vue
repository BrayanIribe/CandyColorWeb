<template>
  <div>
    <IHomeHeader />
    <IContainer>
      <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/inventory/new"
      />
      <IDatagrid :fields="fields" :items="items">
        <b-button variant="success" class="mb-3" v-b-modal.modal-1
          >Modificar Existencia</b-button
        >
        <b-modal id="modal-1" title="Modificar Existencia">
          <b-form-input
            id="range-1"
            v-model="value"
            type="number"
            min="0"
          ></b-form-input>
        </b-modal>
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
      items: [
        {
          id: 1,
          description: "Galletas Maria",
          code: "112891289312",
          isMatter: false,
          existence: 10,
          cost: "$5.00 MXN",
        },
        {
          id: 2,
          description: "Panditas 45 gr",
          code: "54898978989",
          isMatter: true,
          existence: 22,
          cost: "$35.00 MXN",
        },
        {
          id: 3,
          description: "Azúcar kg",
          code: "3444",
          isMatter: true,
          existence: 50,
          cost: "$32.00 MXN",
        },
      ],
    };
  },
};
</script>

<style>
</style>