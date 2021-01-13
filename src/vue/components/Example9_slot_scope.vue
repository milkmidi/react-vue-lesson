<script>
export default {
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" value="Header slot" />
    </div>
    <div class="card-body">
      <slot value="可以傳值給 slot" />
    </div>
  </div>
</template>
