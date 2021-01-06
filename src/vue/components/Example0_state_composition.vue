<script>
import { ref } from 'vue';

export default {
  setup(){
    const count = ref(0);
    const atClick = () => {
      count.value += 1;
    }
    return {
      count,
      atClick,
    }
  }
};
</script>

<template>
  <h1>{{count}}</h1>
  <button class="btn" @click="atClick">addCount</button>
</template>