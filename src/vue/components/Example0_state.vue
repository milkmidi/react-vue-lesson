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
  <section data-name="Example0_state">
    <h1>{{count}}</h1>
    <button class="btn btn-primary" @click="atClick">addCount</button>
  </section>
</template>