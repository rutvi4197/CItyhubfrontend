import { Routes,RouterModule } from '@angular/router';
import { CityTblComponent } from './city-tbl/city-tbl.component';
import { AddcityComponent } from './city-tbl/addcity.component';
import { EditcityComponent } from './city-tbl/editcity.component';
import { AnsTblComponent } from './ans-tbl/ans-tbl.component';
import { EventQueTblComponent } from './event-que-tbl/event-que-tbl.component';
import { EventComponent } from './event/event.component';
import { ApproveComponent } from './event/approve.component';
import { CatTblComponent } from './cat-tbl/cat-tbl.component';
import { AddcatComponent } from './cat-tbl/addcat.component';
import { EditcatComponent } from './cat-tbl/editcat.component';
import { PaymentTblComponent } from './payment-tbl/payment-tbl.component';
import { TestimonialTblComponent } from './testimonial-tbl/testimonial-tbl.component';
import { VenueTblComponent } from './venue-tbl/venue-tbl.component';
import { UserTblComponent } from './user-tbl/user-tbl.component';
import { WalletTblComponent } from './wallet-tbl/wallet-tbl.component';

const router:Routes=[
    {path:'',redirectTo:'/allwallet',pathMatch:'full'},
    {path:'allcity',component:CityTblComponent},
    {path:'addcity',component:AddcityComponent},
    {path:'editcity/:id',component:EditcityComponent},
    {path:'allans',component:AnsTblComponent},
    {path:'allque',component:EventQueTblComponent},
    {path:'approve',component:ApproveComponent},
    {path:'allevent',component:EventComponent},
    {path:'allcat',component:CatTblComponent},
    {path:'addcat',component:AddcatComponent},
    {path:'editcat/:id',component:EditcatComponent},
    {path:'allpay',component:PaymentTblComponent},
    {path:'alltest',component:TestimonialTblComponent},
    {path:'allvenue',component:VenueTblComponent},
    {path:'alluser',component:UserTblComponent},
    {path:'allwallet',component:WalletTblComponent}
];

export const routing=RouterModule.forRoot(router);