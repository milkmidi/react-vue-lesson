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
  <section data-name="Example0_state composition">
    <h1>{{count}}</h1>
    <button class="btn btn-primary" @click="atClick">addCount</button>
  </section>
</template>