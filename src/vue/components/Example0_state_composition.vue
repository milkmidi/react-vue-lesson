<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const atClick = () => {
      // ref 都要加 .value, 但在 template 不需要
      count.value += 1;
    };
    return {
      count,
      atClick,
    };
  },
};
</script>

<template>
  <h1>Count:{{ count }}</h1>
  <button class="btn" @click="atClick">addCount1</button>
  <button class="btn" @click="atClick()">addCount2</button>
  <button class="btn" @click="count++">addCount3</button>
</template>
