<script>
import Example0 from './components/Example0_state.vue';
import Example0Composition from './components/Example0_state_composition.vue';
import Example1 from './components/Example1_props.vue';

export default {
  components: {
    Example0,
    Example0Composition,
    Example1,
  }
}
</script>

<template>
<div class="vue-app">
  <div class="text-center">
    <img class="logo" src="../assets/vue.png" />
  </div>
  <Example0 />
  <Example0Composition />
  <Example1 name="milkmidi" data-value="9527" />
</div>
</template>

<style>
</style>