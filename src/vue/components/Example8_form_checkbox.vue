<script>
export default {
  data() {
    return {
      skill: [],
      SKILLS: ['react', 'vue', 'angular'],
    };
  },
};
</script>

<template>
  <div class="example">
    <h1>checkbox</h1>
    <h4>skill:{{ skill }}</h4>
    <!-- checkbox 一樣用 v-model -->
    <template v-for="name in SKILLS" :key="name">
      <label class="mr-4">
        <input
          v-model="skill"
          type="checkbox"
          :value="name"
        >
        <span>{{ name }}</span>
      </label>
    </template>
  </div>
</template>
