import { h, ref, onMounted } from 'vue';

const CLASS_PATTERN = / class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/g;

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    clearClassName: {
      type: Boolean,
      default: true,
    }
  },
  setup(props) {
    const domRef = ref(null);

    onMounted(() => {
      window.Prism.highlightElement(domRef.value);
    });

    const formatCode = props.clearClassName
      ? props.code.replace(CLASS_PATTERN, '')
      : props.code;

    return () => h('pre', {
      class: 'language-html border',
      ref: domRef,
    }, formatCode);
  },
};
