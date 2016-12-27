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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CityTblComponent,
    HeaderComponent,
    AddcityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CitydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
