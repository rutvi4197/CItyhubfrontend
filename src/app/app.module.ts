import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';
import { CityTblComponent } from './city-tbl/city-tbl.component';
import { CitydataService } from './shared/citydata.service';
import { routing } from './app.routing';
import { AddcityComponent } from './city-tbl/addcity.component';
import { EditcityComponent } from './city-tbl/editcity.component';
import { AnsTblComponent } from './ans-tbl/ans-tbl.component';
import { AnsdataService } from './shared/ansdata.service';
import { BookTblComponent } from './book-tbl/book-tbl.component';
import { BookdataService } from './shared/bookdata.service';
import { EventQueTblComponent } from './event-que-tbl/event-que-tbl.component';
import { EventQuedataService } from './shared/event-quedata.service';
import { EventComponent } from './event/event.component';
import { ApproveComponent } from './event/approve.component';
import { EventdataService } from './shared/eventdata.service';
import { LikeTblComponent } from './like-tbl/like-tbl.component';
import { LikedataService } from './shared/likedata.service';
import { CatdataService } from './shared/catdata.service';
import { CatTblComponent } from './cat-tbl/cat-tbl.component';
import { AddcatComponent } from './cat-tbl/addcat.component';
import { EditcatComponent } from './cat-tbl/editcat.component';
import { PaymentTblComponent } from './payment-tbl/payment-tbl.component';
import { PaymentdataService } from './shared/paymentdata.service';
import { TestimonialTblComponent } from './testimonial-tbl/testimonial-tbl.component';
import { TestimonialdataService } from './shared/testimonialdata.service';
import { VenueTblComponent } from './venue-tbl/venue-tbl.component';
import { VenuedataService } from './shared/venuedata.service';
import { WalletTblComponent } from './wallet-tbl/wallet-tbl.component';
import { UserTblComponent } from './user-tbl/user-tbl.component';
import { WalletdataService } from './shared/walletdata.service';
import { UserdataService } from './shared/userdata.service';
import { OfferTblComponent } from './offer-tbl/offer-tbl.component';
import { OfferdataService } from './shared/offerdata.service';
import { AddofferComponent } from './offer-tbl/addoffer.component';
import { UpdateofferComponent } from './offer-tbl/updateoffer.component';
import { ReapproveComponent } from './event/reapprove.component';
import { CityfilterPipe } from './city-tbl/cityfilter.pipe';
import { EventfilterPipe } from './event/eventfilter.pipe';
import { UserpipePipe } from './user-tbl/userpipe.pipe';
import { CatfilterPipe } from './cat-tbl/catfilter.pipe';
import { TestpipePipe } from './testimonial-tbl/testpipe.pipe';
import { WalletpipePipe } from './wallet-tbl/walletpipe.pipe';
import { OfferpipePipe } from './offer-tbl/offerpipe.pipe';
import { LikepipePipe } from './like-tbl/likepipe.pipe';
import { QuepipePipe } from './event-que-tbl/quepipe.pipe';
import { AnspipePipe } from './ans-tbl/anspipe.pipe';
import { AddwalletComponent } from './wallet-tbl/addwallet.component';
import { EditwalletComponent } from './wallet-tbl/editwallet.component';
import { AddeventComponent } from './event/addevent.component';
import { EditeventComponent } from './event/editevent.component';
import { AdduserComponent } from './user-tbl/adduser.component';
import { EdituserComponent } from './user-tbl/edituser.component';
import { AddvenueComponent } from './venue-tbl/addvenue.component';
import { UpdatevenueComponent } from './venue-tbl/updatevenue.component';
import { VenuepipePipe } from './venue-tbl/venuepipe.pipe';
import { UpdatetestComponent } from './testimonial-tbl/updatetest.component';
import { AddlikeComponent } from './like-tbl/addlike.component';
import { EditlikeComponent } from './like-tbl/editlike.component';
import { AddqueComponent } from './event-que-tbl/addque.component';
import { EditqueComponent } from './event-que-tbl/editque.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CityTblComponent,
    AddcityComponent,
    EditcityComponent,
    AnsTblComponent,
    BookTblComponent,
    EventQueTblComponent,
    EventComponent,
    ApproveComponent,
    LikeTblComponent,
    CatTblComponent,
    AddcatComponent,
    EditcatComponent,
    PaymentTblComponent,
    TestimonialTblComponent,
    VenueTblComponent,
    WalletTblComponent,
    UserTblComponent,
    OfferTblComponent,
    AddofferComponent,
    UpdateofferComponent,
    ReapproveComponent,
    CityfilterPipe,
    UserpipePipe,
    EventfilterPipe,
    CatfilterPipe,
    TestpipePipe,
    WalletpipePipe,
    OfferpipePipe,
    LikepipePipe,
    QuepipePipe,
    AnspipePipe,
    AddwalletComponent,
    EditwalletComponent,
    AddeventComponent,
    EditeventComponent,
    AdduserComponent,
    EdituserComponent,
    AddvenueComponent,
    UpdatevenueComponent,
    VenuepipePipe,
    UpdatetestComponent,
    AddlikeComponent,
    EditlikeComponent,
    AddqueComponent,
    EditqueComponent
  ],
    
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CitydataService,AnsdataService,BookdataService,EventQuedataService,
  EventdataService,CatdataService,PaymentdataService,TestimonialdataService,
  VenuedataService,UserdataService,VenuedataService,WalletdataService,LikedataService,
  OfferdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
