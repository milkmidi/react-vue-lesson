<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    // compositoin API 無法存取 this
    onMounted(() => {
      console.log('vue composition onMounted');
    });
    onUnmounted(() => {
      console.log('vue composition onUnmounted');
    });
  },
  mounted() {
    console.log('vue mounted');
    console.log(this.$refs.root);
  },
  unmounted() {
    console.log('vue unmounted');
    console.log(this.$refs.root);
  }
};
</script>

<template>
  <h1 ref="root">Vue, lifecycle</h1>
</template>
