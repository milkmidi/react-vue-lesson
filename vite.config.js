import reactRefresh from '@vitejs/plugin-react-refresh';
import vue from '@vitejs/plugin-vue';
import syntaxPlugin from './vite-plugins/syntaxPlugin';

/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh(), vue(), syntaxPlugin()]
}
