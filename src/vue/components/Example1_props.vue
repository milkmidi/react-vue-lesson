<script>
export default {
  props: {
    name: {
      type:String,
      default: 'defaultValue'
    }
  },
};
</script>

<template>
  <section data-name="Example1_props">
    <h1>{{name}}</h1>
  </section>
</template>