import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import "normalize.css";
import App from './App.vue';
import TransactionForm from './components/TransactionForm.vue';
import TransactionList from './components/TransactionList.vue';
import FinanceReport from './components/FinanceReport.vue';
import store from './store';

const routes = [
  { path: '/', component: TransactionList },
  { path: '/add-transaction', component: TransactionForm },
  { path: '/reports', component: FinanceReport }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
