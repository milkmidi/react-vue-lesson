<script>
import { ref } from 'vue';

export default {
  setup() {
    // composition 無法使用 this
    const domRef = ref();
    const atClick = () => {
      domRef.value.focus();
    };
    return {
      domRef,
      atClick
    };
  },
  mounted() {
    // 或是直接使用 this.$refs 取得
    console.log(this.$refs.domRef);
  }
};
</script>

<template>
  <div>
    <input ref="domRef" class="form-control">
    <button class="btn" @click="atClick">focusInput</button>
  </div>
</template>
