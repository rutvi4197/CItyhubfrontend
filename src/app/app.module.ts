import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';
import { CityTblComponent } from './city-tbl/city-tbl.component';
import { CitydataService } from './shared/citydata.service';
import { HeaderComponent } from './header.component';
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
<<<<<<< HEAD
import { ReapproveComponent } from './event/reapprove.component';
=======
import { CityfilterPipe } from './city-tbl/cityfilter.pipe';
import { EventfilterPipe } from './event/eventfilter.pipe';
import { UserpipePipe } from './user-tbl/userpipe.pipe';

>>>>>>> 97e5804a9845696f5b66ac34c03e9d1bb47ac980
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CityTblComponent,
    HeaderComponent,
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
<<<<<<< HEAD
    ReapproveComponent
=======
    CityfilterPipe,
    EventfilterPipe,
    UserpipePipe    
>>>>>>> 97e5804a9845696f5b66ac34c03e9d1bb47ac980
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
