import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ScientificInfo } from "src/app/Models/ScientificModelInfo";
import { LibraryServiceApi } from "src/app/Services/Librarysreviceapi";



@Component({
    
    templateUrl: './detailscientificcomponent.html'
})
export class DetailScientificComponent implements OnInit{
  
    scientfics:ScientificInfo;

    constructor(
        private libraryseviceapi:LibraryServiceApi,
        private activatedroute:ActivatedRoute
    ){}
    ngOnInit(){
        this.activatedroute.paramMap.subscribe(params =>{
            var id=params.get('id');
            this.libraryseviceapi.ScientificDetail(id).then(
              res =>{
                this.scientfics=res;
              },
              err =>{
                console.log(err);
              }
            )
           
    
        });
    }
   
}