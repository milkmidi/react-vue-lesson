<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      console.log('vue composition onMounted');
    });
    onUnmounted(() => {
      console.log('vue composition onUnmounted');
    });
  },
  mounted() {
    // dom 已更新，所以 this.$refs.root 有值
    console.log('vue mounted');
    console.log(this.$refs.root);
  },
  unmounted() {
    // dom 已更新，所以 this.$refs.root 會是 null
    console.log('vue unmounted');
    console.log(this.$refs.root);
  }
};
</script>

<template>
  <div class="border p-3 bg-vue text-white rounded">
    <h1 ref="root">Vue, lifecycle</h1>
  </div>
</template>
