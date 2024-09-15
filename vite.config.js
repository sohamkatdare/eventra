import { resolve } from 'path'
import { defineConfig } from 'vite'

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html';
        }
        next();
      });
    },
  };
};

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        org_home: resolve(__dirname, 'src/org_home/index.html'),
        org_signup: resolve(__dirname, 'src/org_signup/index.html'),
        ind_signup: resolve(__dirname, 'src/ind_signup/index.html'),
        ind_login: resolve(__dirname, 'src/ind_login/index.html'),
        org_login: resolve(__dirname, 'src/org_login/index.html'),
        org_events: resolve(__dirname, 'src/org_events/index.html'),
        org_announcements: resolve(__dirname, 'src/org_announcements/index.html'),
        org_analytics: resolve(__dirname, 'src/org_analytics/index.html'),
        ind_home: resolve(__dirname, 'src/ind_home/index.html'),
        ind_findEvents: resolve(__dirname, 'src/ind_findEvents/index.html'),
        ind_events: resolve(__dirname, 'src/ind_events/index.html'),
        compose_event: resolve(__dirname, 'src/compose_event/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          return 'assets/' + assetInfo.name;
        },
      },
    },
  },
  appType: 'mpa', // disable history fallback
  plugins: [
    rewriteSlashToIndexHtml(),
  ],
});