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
import { BookTblComponent } from './book-tbl/book-tbl.component';
import { LikeTblComponent } from './like-tbl/like-tbl.component';
import { OfferTblComponent } from './offer-tbl/offer-tbl.component';
import { AddofferComponent } from './offer-tbl/addoffer.component';
import { UpdateofferComponent } from './offer-tbl/updateoffer.component';
import { ReapproveComponent } from './event/reapprove.component';
import { AdduserComponent } from './user-tbl/adduser.component';
import { EdituserComponent } from './user-tbl/edituser.component';
import { UpdatevenueComponent } from './venue-tbl/updatevenue.component';
import { AddvenueComponent } from './venue-tbl/addvenue.component';
import { UpdatetestComponent } from './testimonial-tbl/updatetest.component';
const router:Routes=[   
    {path:'',redirectTo:'/approve',pathMatch:'full'},
    {path:'allcity',component:CityTblComponent},
    {path:'addcity',component:AddcityComponent},
    {path:'editcity/:id',component:EditcityComponent},
    {path:'allans',component:AnsTblComponent},
    {path:'allque',component:EventQueTblComponent},
    {path:'approve',component:ApproveComponent},
    {path:'allevent',component:EventComponent},
    {path:'bookevent/:id',component:BookTblComponent},
    {path:'likeevent',component:LikeTblComponent},
    {path:'allcat',component:CatTblComponent},
    {path:'addcat',component:AddcatComponent},
    {path:'editcat/:id',component:EditcatComponent},
    {path:'allpay',component:PaymentTblComponent},
    {path:'allreview',component:TestimonialTblComponent},
    {path:'allvenue',component:VenueTblComponent},
    {path:'alluser',component:UserTblComponent},
    {path:'allwallet',component:WalletTblComponent},
    {path:'alloffer',component:OfferTblComponent},
    {path:'addoffer',component:AddofferComponent},
    {path:'editoffer/:id',component:UpdateofferComponent},
    {path:'allusers',component:UserTblComponent},
    {path:'allreapprove',component:ReapproveComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'edituser/:id',component:EdituserComponent},
    {path:'addvenue',component:AddvenueComponent},
    {path:'editvenue/:id',component:UpdatevenueComponent},
    {path:'edittestimonial/:id',component:UpdatetestComponent}

];

export const routing=RouterModule.forRoot(router);