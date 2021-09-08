import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Detail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url=environment.fileUrl;

  pData  : Detail[]=[];

  constructor( private http: HttpClient) { }

  loadProduct():any{
    console.log(this.url);
    const url1=`${this.url}`;
    console.log(url1);
    return this.http.get(url1);

    /*this.http.get<Detail[]>(url1).subscribe(data=>{
     console.log("---------inside service ------------")
      console.log(data);
      this.pData=data;
      console.log("---------data received ------------")
      return this.pData;
    });*/
    
  }
}
