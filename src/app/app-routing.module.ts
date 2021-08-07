import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Component/AboutUs/aboutus.component';
import { BlogDetailComponent } from './Component/BlogDetail/blogdetail.component';
import { BlogListComponent } from './Component/BlogList/bloglist.component';
import { BusinessAppComponent } from './Component/BusinessApp/business.component';
import { ContactUsComponent } from './Component/ContactUs/contact.component';
import { DetailScientificComponent } from './Component/DetailScientfic/detailscientificcomponent';
import { EduccationAppComponent } from './Component/EduccationApp/educcation.component';
import { HomeComponent } from './Component/Home/home.component';
import { MedicalAppComponent } from './Component/MedicalApp/medicalcomponent';
import { ScientificAppComponent } from './Component/ScientificApp/scientificcomponent';

import { ServiceComponent } from './Component/Services/service.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'service',component:ServiceComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'bloglist',component:BlogListComponent},
  {path:'blogdetail',component:BlogDetailComponent},
  {path:'scientific',component:ScientificAppComponent},
  {path:'medical',component:MedicalAppComponent},
  {path:'education',component:EduccationAppComponent},
  {path:'business',component:BusinessAppComponent},
  {path:'scientificdetail',component:DetailScientificComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
