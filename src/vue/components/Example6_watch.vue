<script>
import {
  ref, watch, watchEffect
} from 'vue';

export default {
  setup() {
    const name = ref('milkmidi');
    // watch method 1
    watch(name, (value) => {
      console.log(value);
    });
    // watch method 2
    watchEffect(() => {
      console.log('name is:', name.value);
    });

    return { name };
  },
  data() {
    return {
      count: 0,
      deepObj: {
        a: {
          b: {
            c: {
              name: 'milkmidi'
            }
          }
        }
      }
    };
  },
  watch: {
    count(newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue === 5) {
        alert('hi, vue');
        this.count = 0;
      }
    },
    // 這裡也可以 watch setup 的值
    name(newValue) {
      console.log('watch name', newValue);
    },
    'deepObj.a.b.c.name': function (newValue) {
      console.log('deepObj.a.b.c.name', newValue);
    },
    deepObj: {
      handler(newValue) {
        console.log('deepObj name', newValue.a.b.c.name);
      },
      deep: true,
    }
  }
};
</script>

<template>
  <div>
    <h1>count 到 5 就會跳 Alert:{{ count }}</h1>
    <h3>name:{{ name }}</h3>
    <button class="btn" @click="count++">addCount</button>
    <button class="btn" @click="name = +new Date() + ''">setName</button>
    <button class="btn" @click="deepObj.a.b.c.name=Math.random()">setDeepObj</button>
  </div>
</template>
