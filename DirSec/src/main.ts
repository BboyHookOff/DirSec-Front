import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
// import { startConnection } from './services/signalRService';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(router);
app.use(pinia);

// startConnection();

app.mount('#app');
