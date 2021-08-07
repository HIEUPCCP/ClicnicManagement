import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailScientificComponent } from './Component/DetailScientfic/detailscientificcomponent';
import { MedicalAppComponent } from './Component/MedicalApp/medicalcomponent';

import { ScientificAppComponent } from './Component/ScientificApp/scientificcomponent';

import { LibraryServiceApi } from './Services/Librarysreviceapi';

@NgModule({
  declarations: [
    AppComponent,
   MedicalAppComponent,
   ScientificAppComponent,
   DetailScientificComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LibraryServiceApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
