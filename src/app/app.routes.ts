import { Routes } from '@angular/router';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { UpdateComponent } from './products/update/update.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { ViewEditComponent } from './products/view-edit/view-edit.component';
import { LoginComponent } from './users/login/login.component';
import { WhishlistComponent } from './users/whishlist/whishlist.component';
import { LogoutComponent } from './users/logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

   // {path:'products/add-product', component:AddProductsComponent},
    //{path:'products/update', component:UpdateComponent},
    //{path:'products/view/product', component:ViewProductsComponent},
    //{path:'products/view/edit', component:ViewEditComponent},

        {
        path:'products', children:[

        {path:'', component:ViewProductsComponent},
        {path:'add-product', component:AddProductsComponent},
        {path:'update', component:UpdateComponent},
        {path:'view/edit', component:ViewEditComponent}
        ]
    },

    {
        path:'users',children:[
        {path:'', component:LoginComponent},
        {path:'whishlist', component:WhishlistComponent},
        {path:'logout', component:LogoutComponent}
        ]
    },

    {path:'**', component:PageNotFoundComponent},
    {path:'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
    {path:'', redirectTo:'products/view/product', pathMatch:'full'}
    

];
