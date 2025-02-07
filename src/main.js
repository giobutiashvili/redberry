import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleDown, faLocationDot,faVectorSquare ,faBed, faSignsPost } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)
library.add(faAngleDown,faLocationDot,faVectorSquare,faBed,faSignsPost);

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
