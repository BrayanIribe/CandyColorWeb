import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CustomersPage from './pages/CustomersPage';
import CustomerPage from './pages/CustomerPage';
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    { path: '/', component: HomePage, name: 'Inicio', showSidebar: true, },
    { path: '/customers', component: CustomersPage, name: 'Clientes', showSidebar: true, },
    { path: '/customer/:id', component: CustomerPage, name: 'CU Clientes', },
    { path: '/login', component: LoginPage, name: 'Login', hideMenu: true, showSidebar: true },
    { path: '*', component: NotFoundPage, name: '404', },
];

export default routes;