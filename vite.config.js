import reactRefresh from '@vitejs/plugin-react-refresh';
import vue from '@vitejs/plugin-vue';

/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh(), vue()]
}
