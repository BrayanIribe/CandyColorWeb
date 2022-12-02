import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CustomersPage from './pages/CustomersPage';
import CustomerPage from './pages/CustomerPage';
import SuppliersPage from './pages/SuppliersPage';
import SupplierPage from './pages/SupplierPage';
import InventoryPage from './pages/InventoryPage';
import AddModInventoryPage from './pages/AddModInventoryPage';
import OrdersPage from './pages/OrdersPage';
import SalesPage from './pages/SalesPage';
import PurchasesPage from './pages/PurchasesPage';
import ReportsPage from './pages/ReportsPage';
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    { path: '/', component: HomePage, name: 'Inicio', showSidebar: true, },
    { path: '/customers', component: CustomersPage, name: 'Clientes', showSidebar: true, },
    { path: '/customer/:id', component: CustomerPage, name: 'CU Clientes', },
    { path: '/login', component: LoginPage, name: 'Login', hideMenu: true, showSidebar: true },
    { path: '/suppliers', component: SuppliersPage, name: 'Proveedores', showSidebar: true, },
    { path: '/supplier/:id', component: SupplierPage, name: 'CU Proveedor', },
    { path: '/inventory/:id', component: AddModInventoryPage, name: 'CU Inventario', },
    { path: '/inventory', component: InventoryPage, name: 'Inventario', showSidebar: true, },
    { path: '/order', component: OrdersPage, name: 'Pedidos', showSidebar: true, },
    { path: '/sales', component: SalesPage, name: 'Ventas', showSidebar: true, },
    { path: '/reports', component: ReportsPage, name: 'Reportes', showSidebar: true,},
    { path: '/purchases', component: PurchasesPage, name: 'Compras', showSidebar: true, },

    { path: '*', component: NotFoundPage, name: '404', },
];

export default routes;