// import App from '../App.vue';
import desktop_home from '../components/desktop/HomePage.vue';
import desktop_guide from '../components/desktop/GuidePage.vue';
import desktop_summary from '../components/desktop/Summary.vue';

const routes = [
    { name: 'home', path: '/', component: desktop_home },
    { name: 'guide', path: '/guide', component: desktop_guide },
    { name: 'summary', path: '/summary', component: desktop_summary },
];

export default routes;