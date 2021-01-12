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
  methods: {
    atClick2() {
      // 或是直接使用 this.$refs 取得
      this.$refs.domRef.focus();
    }
  }
};
</script>

<template>
  <div class="example">
    <input ref="domRef" class="form-control">
    <button class="btn" @click="atClick">focusInput</button>
    <button class="btn" @click="atClick2">focusInput</button>
  </div>
</template>
