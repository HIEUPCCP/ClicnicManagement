import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MecineInfo } from "../Models/MecineCategoryModelInfo";
import { ScientificInfo } from "../Models/ScientificModelInfo";

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceApi{
    private Base_url: string = 'https://localhost:44323/api/scientific/';
  constructor(
    private httpCilent: HttpClient
  ){}
  ScientificList(){
    return this.httpCilent.get(this.Base_url + 'findall').toPromise().then(res => res as ScientificInfo[]);
  }
  DetailScientific(id: string){
    return this.httpCilent.get(this.Base_url + 'find/'+ id).toPromise().then(res => res as ScientificInfo);
  }
  MecineType(){
    return this.httpCilent.get(this.Base_url + 'machineCategory').toPromise().then(res => res as MecineInfo[]);
  }
  ScientificDetail(id: string){
    return this.httpCilent.get(this.Base_url + 'finddetail/'+ id).toPromise().then(res => res as ScientificInfo);
  }
  searchType(typeid: number){
    return this.httpCilent.get(this.Base_url + 'searchtype/'+ typeid).toPromise().then(res => res as ScientificInfo[]);
  }
  searchKey(keyword: string){
    return this.httpCilent.get(this.Base_url + 'search/'+ keyword).toPromise().then(res => res as ScientificInfo[]);
  }
}