<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    atClick() {
      this.count += 1;
    },
    atClickWithParameter(value, event) {
      this.count += value;
      console.log(event);
    }
  },
};
</script>

<template>
  <div class="example">
    <h1>count:{{ count }}</h1>
    <button class="btn" @click="atClick">addCount1</button>
    <!-- vue 黑魔法，@click="atClick()" 並不是執行 atClick() -->
    <button class="btn" @click="atClick()">addCount2</button>
    <button class="btn" @click="count += 1">addCount3</button>
    <!-- 一定要寫 $event -->
    <button class="btn" @click="atClickWithParameter(5, $event)">atClickWithParameter</button>
  </div>
</template>
