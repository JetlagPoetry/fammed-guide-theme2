// import App from '../App.vue';
import home_page from '../components/HomePage.vue';
import guide_page from '../components/GuidePage.vue';
import summary_page from '../components/Summary.vue';

const routes = [
    { name: 'home', path: '/', component: home_page },
    { name: 'guide', path: '/guide', component: guide_page },
    { name: 'summary', path: '/summary', component: summary_page },
];

export default routes;