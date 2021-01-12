/* eslint-disable no-useless-escape */
import { h, ref, onMounted } from 'vue';

const CLASS_PATTERN = / class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/g;

type Props = {
  code: string;
  clearClassName: boolean;
}

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
  setup(props:Props) {
    const {
      code,
      clearClassName,
    } = props;
    const domRef = ref<HTMLElement>(null);

    onMounted(() => {
      window.Prism.highlightElement(domRef.value);
    });

    const formatCode = clearClassName
      ? code.replace(CLASS_PATTERN, '')
      : code;

    return () => h('pre', {
      class: 'language-html border',
      ref: domRef,
    }, formatCode);
  },
};
