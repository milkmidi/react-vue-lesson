<script>

export default {
  data() {
    return {
      show: true
    };
  },
};
</script>

<template>
  <div>
    <button class="btn mb-1" @click="show=!show">switch show:{{ show }}</button>
    <h1 v-if="show" class="border p-3 bg-vue text-white rounded">React</h1>
    <h2 v-show="show" class="border p-3 bg-vue text-white rounded">css display block/none</h2>
  </div>
</template>
