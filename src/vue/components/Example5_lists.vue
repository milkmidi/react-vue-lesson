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
  <div class="example">
    <ul class="border">
      <li v-for="text in lists" :key="text">{{ text }}</li>
    </ul>

    <ul class="border">
      <template v-for="text in lists" :key="text">
        <li>{{ text }}</li>
        <hr>
      </template>
    </ul>
  </div>
</template>
