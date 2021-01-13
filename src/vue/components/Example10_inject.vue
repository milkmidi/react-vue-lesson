<script>
import { inject } from 'vue';

export default {
  inject: ['theme', 'toggleTheme'],
  setup() {
    const foo = inject('foo');
    return { foo };
  }
};
</script>

<template>
  <div class="border p-1">
    <!-- 使用 component provide 需要寫 value -->
    <h3>{{ theme.value }}</h3>
    <!-- 使用 compositoin provide 不需要寫 .value -->
    <h3>{{ foo }}</h3>
    <button class="btn" @click="toggleTheme">toggleTheme</button>
  </div>
</template>
