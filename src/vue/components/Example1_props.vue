<script>
export default {
  props: {
    name: {
      type: String,
      default: 'defaultValue'
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>
