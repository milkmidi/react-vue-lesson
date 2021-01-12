import reactRefresh from '@vitejs/plugin-react-refresh';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  build: {
    base: './',
  },
  plugins: [reactRefresh(), vue()]
};
