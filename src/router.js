import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CustomersPage from './pages/CustomersPage';
import CustomerPage from './pages/CustomerPage';
import SuppliersPage from './pages/SuppliersPage';
import SupplierPage from './pages/SupplierPage';
import InventoryPage from './pages/InventoryPage';
import AddModInventoryPage from './pages/AddModInventoryPage';
import OrdersPage from './pages/OrdersPage';
import OrderPage from './pages/OrderPage';
import SalesPage from './pages/SalesPage';
import SalePage from './pages/SalePage';
import PurchasesPage from './pages/PurchasesPage';
import PurchasePage from './pages/PurchasePage';
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
    { path: '/order/:id', component: OrderPage, name: 'CU Pedido', },
    { path: '/order', component: OrdersPage, name: 'Pedidos', showSidebar: true, },
    { path: '/sale/:id', component: SalePage, name: 'CU Venta', },
    { path: '/sales', component: SalesPage, name: 'Ventas', showSidebar: true, },
    { path: '/purchases', component: PurchasesPage, name: 'Compras', showSidebar: true, },
    { path: '/purchase/:id', component: PurchasePage, name: 'CU Compra', },
    { path: '*', component: NotFoundPage, name: '404', },
];

export default routes;