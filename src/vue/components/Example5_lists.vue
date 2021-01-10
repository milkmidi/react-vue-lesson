<script>

export default {
  data() {
    return {
      lists: ['vue', 'React', 'angular', 'jQuery']
    };
  },
};
</script>

<template>
  <ul class="border">
    <li v-for="text in lists" :key="text">{{ text }}</li>
  </ul>

  <ul class="border">
    <template v-for="text in lists" :key="text">
      <li>{{ text }}</li>
      <hr>
    </template>
  </ul>
</template>
