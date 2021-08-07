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
   
  scientfic:ScientificInfo[];
  mecinetype:MecineInfo[];
  typeid:number;
  keyword:string;
 
constructor(
    private libraryseviceapi:LibraryServiceApi
){}
    ngOnInit(){
    this.typeid=1
    
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
            //
            this.libraryseviceapi.MecineType().then(
                res=>{
            
                    this.mecinetype=res;
                   
                    },
                    err=>{
                        console.log(err);
                    }
            );
       
    }
    selectsearch(e:any){
        this.libraryseviceapi.searchType(this.typeid).then(
            res => {
              this.scientfic = res;
              console.log(this.scientfic);
            },
            err => {
                console.log(err);
            }
          );
    }
    searchkey(){
        this.libraryseviceapi.searchKey(this.keyword).then(
            res => {
              this.scientfic = res;
              console.log(this.scientfic);
            },
            err => {
                console.log(err);
            }
          );
    }
}