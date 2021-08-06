import { BrandInfo } from "./BrandModelInfo";
import { MecineInfo } from "./MecineCategoryModelInfo";
import { OriginInfo } from "./OriginModelInfo";
import { PriceInfo } from "./PriceModelInfo";

export class ScientificInfo{
    id : number;
     name :string ;
      illustration:string;
     inventedYear:number;
     description: string;
     quantity:number;
     status:boolean;
      brandId: number;
      originId: number;
      machineCategoryId: number;
      priceid: number;

      brand:BrandInfo[];
      machineCategory:MecineInfo[];
      origin:OriginInfo[];
      price:PriceInfo[];
}