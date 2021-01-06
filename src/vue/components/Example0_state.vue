<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    atClick(){
      this.count += 1;
    }
  },
};
</script>

<template>
  <h1>{{count}}</h1>
  <button class="btn" @click="atClick">addCount</button>
  <button class="btn" @click="atClick()">addCount</button>
  <button class="btn" @click="count += 1">addCount</button>
</template>