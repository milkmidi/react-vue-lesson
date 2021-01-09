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
    <h1>props.name:{{ name }}</h1>
    <!-- 因為 props 裡沒有定義 count, 就讀不到 -->
    <h2>notdefined props count: {{ count }}</h2>
  </div>
</template>
