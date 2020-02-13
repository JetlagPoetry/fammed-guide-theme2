// import App from '../App.vue';
import home_page from '../components/HomePage.vue';
import guide_page from '../components/GuidePage.vue';
import summary_page from '../components/Summary.vue';

const routes = [
    { path: '/', component: home_page },
    { path: '/guide', component: guide_page },
    { path: '/summary', component: summary_page },
];

export default routes;