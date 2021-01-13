<script >
import {
  computed, onMounted, onUnmounted, provide, ref
} from 'vue';
import Example10Inject from './Example10_inject.vue';

export default {
  components: {
    Example10Inject
  },
  provide() {
    return {
      theme: computed(() => this.theme), // reactive
      toggleTheme: this.toggleTheme
    };
  },
  setup() {
    const foo = ref(9527);
    provide('foo', foo);

    let timeoutId;
    onMounted(() => {
      timeoutId = setInterval(() => {
        foo.value += 1;
      }, 1000);
    });
    onUnmounted(() => clearInterval(timeoutId));
  },
  data: () => ({
    theme: 'light'
  }),
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
};
</script>

<template>
  <div class="example" :class="'theme-' + theme">
    <Example10Inject />
  </div>
</template>
