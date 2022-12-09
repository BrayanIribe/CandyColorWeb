<template>
    <div>
      <IHomeHeader />
      <IContainer>
        <div>
          <p class="text-right">Folio S-1</p>
          <div class="row"> 
            <div class="col-10">
                <span>Proveedor: {{ $supplier }}</span>
            </div>
            <div class="col-2">
                <b-btn class="i-new-btn" variant="info">Seleccionar</b-btn>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-7">
            <h5>Observaciones</h5>
            <b-form-textarea rows="3" max-rows="6"/>
          </div>
          <div class="col-5">
            <h3 class="text-center" >Total: $ {{$price}} MXN</h3>
            <h6>Código</h6>
            <b-input placeholder="Ej. 123"/>
            <div class="row">
              <div class="col-7"><p>[cantidad]*[codigo]</p> </div>
              <div class="col-5"><p>CAN[codigo] - Cancelar</p></div>
            </div>
          </div>
        </div>
        <b-table class="m-0" bordered hover :items="items" :fields="fields" />
        <div
          class="
            i-no-data-container
            border
            d-flex
            align-items-center
            justify-content-center
          "
          v-if="!items || items.length <= 0"
        >
          <h4 class="text-muted fw-normal">Sin registros que mostrar.</h4>
        </div>
        <div class="row mt-3">
          <div class="col-10"><b-btn class="i-new-btn" variant="danger" @click="$router.back()">Cancelar</b-btn></div>
          <div class="col-2"><b-btn class="i-new-btn" variant="success" @click="$router.back()">Guardar</b-btn></div>
        </div>
      </IContainer>
    </div>
  </template>
  
  <script>
  import IContainer from "@/components/IContainer";
  import IHomeHeader from "@/components/IHomeHeader";
  
  export default {
    components: { IHomeHeader, IContainer, },
    props: {
      items: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        fields: [
          { key: "amount", label: "Cantidad" },
          { key: "description", label: "Descripción" },
          { key: "price", label: "Precio" },
          { key: "subtotal", label: "Subtotal" },
          { key: "serie", label: "Serie" },
        ],
      };
    },
    computed:{
      $price() {
        return "0.00";
      },
      $supplier() {
        return "1 - Proveedor general";
      }
    }
  };
  </script>
  
  <style>
  
  </style>