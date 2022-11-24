<template>
    <div>
      <IHomeHeader />
      <IContainer class="mt-5">
        <h1>{{ $title }}</h1>
        <hr />
        
      </IContainer>
    </div>
  </template>
  
  <script>
  import IContainer from "@/components/IContainer";
  import IHomeHeader from "@/components/IHomeHeader";
  
  export default {
    components: { IHomeHeader, IContainer },
    data() {
      return {};
    },
    computed: {
      $title() {
        const { id } = this.$route.params;
        if (id === "new") return "Agregar cliente";
        return "Editar cliente";
      },
    },
  };
  </script>
  
  <style>
  
  </style>