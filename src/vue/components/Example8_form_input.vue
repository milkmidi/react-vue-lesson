<script>
export default {
  data() {
    return {
      name: ''
    };
  },
};
</script>

<template>
  <div class="example">
    <h1>input</h1>
    <h4>name:{{ name }}</h4>
    <input v-model="name" class="form-control" type="text">
    <!-- 上面這行等於下面這行 -->
    <input
      type="text" class="form-control"
      :value="name"
      @input="name = $event.target.value"
    >
  </div>
</template>
