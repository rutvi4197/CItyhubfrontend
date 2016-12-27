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
import { AnsclassComponent } from './shared/ansclass/ansclass.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CityTblComponent,
    HeaderComponent,
    AddcityComponent,
    EditcityComponent,
    AnsTblComponent,
    AnsclassComponent
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
