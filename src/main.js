import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRouter } from './router/setup';
import { setupStore } from './store/setup';
import { useLayout } from './plugins/layout';
import { useProgressBar } from './plugins/progress-bar';
import { useClickOutside } from './plugins/click-outside';

const app = createApp(App);

setupRouter(app);
setupStore(app);

useLayout(app);
useProgressBar(app);
useClickOutside(app);

app.mount('#app');
