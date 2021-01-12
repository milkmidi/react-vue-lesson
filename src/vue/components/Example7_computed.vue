<script>
const computeExpensiveValue = (value) => {
  console.log('computeExpensiveValue');
  let r = value;
  for (let i = 0; i < 100000000; i += 1) {
    r += 1;
  }
  return r;
};

export default {
  data() {
    return {
      count: 0,
      count2: 0,
    };
  },
  computed: {
    memoizedValue() {
      console.time();
      const result = computeExpensiveValue(this.count);
      console.timeEnd();
      return result;
    }
  }
};
</script>

<template>
  <div class="example">
    <h1>count:{{ count }}</h1>
    <button class="btn" @click="count++">setCount</button>
    <h2>memoizedValue: {{ memoizedValue }}</h2>
    <h1>count2: {{ count2 }}</h1>
    <button class="btn" @click="count2++">setCount2</button>
  </div>
</template>
