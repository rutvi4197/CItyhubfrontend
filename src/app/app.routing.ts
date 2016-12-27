import { Routes,RouterModule } from '@angular/router';
import { CityTblComponent } from './city-tbl/city-tbl.component';
import { AddcityComponent } from './city-tbl/addcity.component';

const router:Routes=[
    {path:'',redirectTo:'/allcity',pathMatch:'full'},
    {path:'allcity',component:CityTblComponent},
    {path:'addcity',component:AddcityComponent}
];

export const routing=RouterModule.forRoot(router);