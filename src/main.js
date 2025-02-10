import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleDown, faLocationDot,faVectorSquare ,faBed, faSignsPost, faArrowLeft, faEnvelope, faPhoneVolume, faCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)
library.add(faAngleDown,faLocationDot, faCirclePlus,faVectorSquare,faBed,faCheck ,faSignsPost,faArrowLeft,faEnvelope,faPhoneVolume);

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
