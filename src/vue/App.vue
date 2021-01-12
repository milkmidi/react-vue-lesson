<script>
import {
  onMounted, onBeforeUnmount, ref
} from 'vue';
import PrismCode from './components/PrismCode';
import * as Syntax from './components/.syntax';

import Example0 from './components/Example0_state.vue';
import Example0Composition from './components/Example0_state_composition.vue';
import Example1 from './components/Example1_props.vue';
import Example2 from './components/Example2_ref.vue';
import Example3 from './components/Example3_lifecycle.vue';
import Example4 from './components/Example4_conditional_rendering.vue';
import Example5 from './components/Example5_lists.vue';
import Example6 from './components/Example6_watch.vue';
import Example7 from './components/Example7_computed.vue';

export default {
  components: {
    PrismCode,
    Example0,
    Example0Composition,
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
  },
  setup() {
    const exampleIdx = ref(window.currentIndex || 0);
    const show = ref(true);

    const handler = ({ detail }) => {
      exampleIdx.value = detail;
    };
    onMounted(() => {
      window.addEventListener('changeExample', handler);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('changeExample', handler);
    });

    return {
      exampleIdx,
      Syntax,
      show,
    };
  },
};
</script>

<template>
  <div class="vue-app">
    <div class="text-center">
      <img class="logo" src="../assets/vue.png">
    </div>
    <template v-if="exampleIdx === 0">
      <section>
        <h6>
          <p>使用 data, 並回傳 Object</p>
          <p>要更新值就直接寫 this.xxx = 新值, vue 會自動重新 render</p>
          <p>template 偵聽函式可以直接寫參數 atClick(5)</p>
          <a
            target="_blank"
            href="https://v3.vuejs.org/guide/data-methods.html#data-properties"
            class="btn btn-link"
          >Document</a>
        </h6>
        <Example0 />
        <PrismCode :code="Syntax.Example0_state" />
      </section>
      <section data-name="Composition API">
        <h6>
          <p>Vue3 新的 Composition API</p>
          <p>使用 ref 或 reactive 來宣告變數</p>
          <p>Vue.ref 和 React.useRef 有點像，差別在於</p>
          <p>Vue.ref 更新值會重新 render component, 而 React.useRef 不會</p>
        </h6>
        <Example0Composition />
        <PrismCode :code="Syntax.Example0_state_composition" />
      </section>
    </template>

    <section v-if="exampleIdx === 1">
      <h6>
        <p>props 一定要定義，不然 vue 會讀不到</p>
        <p>如果傳了該 Component 未定義的 props, 會放到 html 的 attributes</p>
      </h6>
      <Example1 name="milkmidi" :count="9527" />
      <PrismCode :code="Syntax.Example1_props" />
    </section>

    <section v-if="exampleIdx === 2">
      <h6>
        <p>Vue 使用 ref, 或是 this.$refs</p>
      </h6>
      <hr>
      <Example2 />
      <PrismCode :code="Syntax.Example2_ref" />
    </section>

    <section v-if="exampleIdx === 3">
      <h6>
        <p>mounted, unmounted</p>
      </h6>
      <div class="switch">
        <input v-model="show" type="checkbox">
        <span />
      </div>

      <hr>
      <Example3 v-if="show" />
      <PrismCode :code="Syntax.Example3_lifecycle" />
    </section>

    <section v-if="exampleIdx === 4">
      <h6>
        <p>使用 v-if, v-show</p>
        <p>v-if 會整個 DOM 建立/刪除</p>
        <p>v-show 是 css display block/none</p>
      </h6>
      <hr>
      <Example4 />
      <PrismCode :code="Syntax.Example4_conditional_rendering" />
    </section>

    <section v-if="exampleIdx === 5">
      <h6>
        <p>使用 v-for="value in yourList"</p>
        <p>一次回圈想要產生二個以上的 tag, 可以使用 template tag</p>
      </h6>
      <hr>
      <Example5 />
      <PrismCode :code="Syntax.Example5_lists" />
    </section>

    <section v-if="exampleIdx === 6">
      <h6>
        <p>使用 Component watch</p>
        <p>使用 compositionAPI watch</p>
        <p>使用 compositionAPI watchEffect</p>
      </h6>
      <hr>
      <Example6 />
      <PrismCode :code="Syntax.Example6_watch" />
    </section>

    <section v-if="exampleIdx === 7">
      <h6>
        <p>使用 Component watch</p>
        <p>使用 compositionAPI watch</p>
        <p>使用 compositionAPI watchEffect</p>
      </h6>
      <hr>
      <Example7 />
      <PrismCode :code="Syntax.Example7_computed" />
    </section>
  </div>
</template>

<style>
</style>
