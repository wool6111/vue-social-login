import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVueKakaoSdk } from 'vue3-kakao-sdk';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createVueKakaoSdk('API KEY'));

app.mount('#app');

declare global {
	interface Window {
		naver_id_login?: any;
	}
}
