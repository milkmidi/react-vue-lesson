<script>
import Example9Slot1 from './Example9_slot_1.vue';
import Example9SlotScope from './Example9_slot_scope.vue';

export default {
  components: {
    Example9Slot1,
    Example9SlotScope
  }
};
</script>

<template>
  <div class="example">
    <Example9Slot1>
      <img src="https://fakeimg.pl/250x100/" alt="">
    </Example9Slot1>

    <hr>
    <Example9SlotScope v-slot="{value}">
      <h3>{{ value }}</h3>
    </Example9SlotScope>

    <hr>
    <Example9SlotScope>
      <template #default="{value}">
        <h3>default:{{ value }}</h3>
      </template>
      <template #header="{value}">
        <h3>header:{{ value }}</h3>
      </template>
    </Example9SlotScope>
  </div>
</template>
