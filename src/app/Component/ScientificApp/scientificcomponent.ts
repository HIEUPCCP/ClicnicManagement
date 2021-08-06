import { Component, OnInit } from "@angular/core";
import { BrandInfo } from "src/app/Models/BrandModelInfo";
import { MecineInfo } from "src/app/Models/MecineCategoryModelInfo";
import { OriginInfo } from "src/app/Models/OriginModelInfo";
import { PriceInfo } from "src/app/Models/PriceModelInfo";
import { ScientificInfo } from "src/app/Models/ScientificModelInfo";
import { LibraryServiceApi } from "src/app/Services/Librarysreviceapi";



@Component({
    
    templateUrl: './scientificcomponent.html'
})
export class ScientificAppComponent implements OnInit{
    scientfics:ScientificInfo;
  scientfic:ScientificInfo[];
  brands=BrandInfo;
  origins=OriginInfo;
  medicines=MecineInfo;
  prices=PriceInfo;
 
constructor(
    private libraryseviceapi:LibraryServiceApi
){}
    ngOnInit(){
       

        console.log( this.libraryseviceapi.ScientificList());
       
        this.libraryseviceapi.ScientificList().then(
            res=>{
            
            this.scientfic=res;
            console.log("rs:"+this.scientfic);
           
            },
            err=>{
                console.log(err);
            }
                    );
       
    }
   
}