<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import PrismCode from './components/PrismCode';
import * as Syntax from './components/.syntax';

import Example0 from './components/Example0_state.vue';
import Example0Composition from './components/Example0_state_composition.vue';
import Example1 from './components/Example1_props.vue';

export default {
  components: {
    Example0,
    Example0Composition,
    Example1,
    PrismCode,
  },
  setup() {
    const exampleIdx = ref(window.currentIndex || 0);

    const handler = ({ detail }) => {
      exampleIdx.value = detail;
    };
    onMounted(() => {
      window.addEventListener('changeExample', handler);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('changeExample', handler);
    });
    return {
      exampleIdx,
      Syntax,
    };
  },
};
</script>

<template>
  <div class="vue-app">
    <div class="text-center">
      <img class="logo" src="../assets/vue.png">
    </div>
    <section v-if="exampleIdx === 0">
      <Example0 />
      <PrismCode :code="Syntax.Example0_state" />
    </section>

    <section v-if="exampleIdx === 0" data-name="Composition API">
      <Example0Composition />
      <PrismCode :code="Syntax.Example0_state_composition" />
    </section>

    <section v-if="exampleIdx === 1">
      <Example1 name="milkmidi" data-value="9527" />
      <PrismCode :code="Syntax.Example1_props" />
    </section>
  </div>
</template>

<style>
</style>
