// import App from '../App.vue';
import home_page from '../components/HomePage.vue';
import guide_page from '../components/GuidePage.vue';

const routes = [
    { path: '/', component: home_page },
    { path: '/guide', component: guide_page },
];

export default routes;