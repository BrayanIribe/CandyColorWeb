<template>
  <div>
    <IHomeHeader></IHomeHeader>
    <IContainer>
        <h2 class="d-flex align-items-center justify-content-center mt-3"> Tipo de reporte</h2>
        <b-form-select v-model="selected" :options="options" class="d-flex align-items-center justify-content-center mt-3"></b-form-select>
    </IContainer>
  </div>
</template>

<script>
import IHomeHeader from '@/components/IHomeHeader.vue';
import IContainer from '@/components/IContainer.vue';

export default {
    components: { IHomeHeader, IContainer },
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
};

</script>

<style>

</style>