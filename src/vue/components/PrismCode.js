import { h, ref, onMounted } from 'vue';
export default {
  props:{
    code:{
      type: String,
      required: true
    }
  },
  setup(props){
    const domRef = ref(null);

    onMounted(() => {
      window.Prism.highlightElement(domRef.value);
    });

    return () => {
      return h('pre', {
        class: 'language-html',
        ref: domRef,
      }, props.code);
    }
  },
}
