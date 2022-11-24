<template>
  <div>
    <IHomeHeader/>
    <IContainer>
        <ISearchContainer
        placeholder="Buscar por Id o nombre"
        toNew="/supplier/new"
      />
      <IDatagrid :fields="fields" /> 
    </IContainer>
  </div>
</template>

<script>
import IHomeHeader from '@/components/IHomeHeader.vue';
import IContainer from '@/components/IContainer.vue';
import ISearchContainer from '@/components/ISearchContainer.vue';
import IDatagrid from '@/components/IDatagrid.vue';

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
}
</script>

<style>

</style>