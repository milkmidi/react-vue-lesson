<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const atClick = () => {
      // ref 都要加 .value, 但在 template 不需要
      count.value += 1;
    };

    const data = reactive({
      name: 'milkmidi'
    });
    return {
      count,
      atClick,
      data,
    };
  },
};
</script>

<template>
  <div class="example">
    <h1>Count:{{ count }}</h1>
    <button class="btn" @click="atClick">addCount1</button>
    <button class="btn" @click="atClick()">addCount2</button>
    <button class="btn" @click="count++">addCount3</button>
    <h2>data.name:{{ data.name }}</h2>
    <button class="btn" @click="data.name = '9527'">updateName</button>
  </div>
</template>
