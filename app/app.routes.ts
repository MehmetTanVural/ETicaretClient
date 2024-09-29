import { Routes } from '@angular/router';
import { CustomerComponent } from './admin/components/customer/customer.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { RegisterComponent } from './ui/components/register/register.component';
import { LoginComponent } from './ui/components/login/login.component';

export const routes: Routes = [
    { path:"customer", component: CustomerComponent},
    { path:"dashboard", component: DashboardComponent},
    { path:"orders", component: OrdersComponent},
    { path:"products", component: ProductsComponent},
    { path:"baskets", component: BasketsComponent},
    { path:"register", component: RegisterComponent},
    { path:"login", component: LoginComponent},
    { path:"", component: HomeComponent},
    { path:"admin", component: LayoutComponent, children: [
        { path:"", component: DashboardComponent},
        { path:"customer", component: CustomerComponent},
        { path:"products", component: ProductsComponent},
        { path:"orders", component: OrdersComponent},
        // { path:"customer", loadChildren : () => import("./admin/components/customer/customer.component")
        //     .then(component => component.CustomerComponent)},
                // { path:"products", loadChildren : () => import("./admin/components/products/products.component")
                //     .then(component => component.ProductsComponent)},
                //         { path:"orders", loadChildren : () => import("./admin/components/orders/orders.component")
                //             .then(component => component.OrdersComponent)},
    ]},
    {path:"", component:HomeComponent},
    {path:"baskets", loadChildren : ()=> import("./ui/components/baskets/baskets.component").then(component => component.BasketsComponent)},
    {path:"products", loadChildren : ()=> import("./ui/components/products/products.component").then(component => component.ProductsComponent)},


];
