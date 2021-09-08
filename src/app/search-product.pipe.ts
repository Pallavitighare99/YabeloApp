import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(pdata: any, query: string): any {
    console.log(' pdata : '+ pdata);
    console.log(' query : '+ query);
    //return pdata;
    let result : any = [] ;
   //let  criteriaList : any  = ["tName"];
    let  criteriaList : any  = ["p_category"];
   
 
        if( query == null || query == 'undefined' || query == "")
        {
           console.log("If..");
          result = pdata;
           
          
        }
        else{
           console.log("Else..");
        
         for(var i = 0; i < pdata.length; i++ )
         {
           console.log("Else.1.");
              for( var j = 0 ; j < criteriaList.length; j++)
               {
                  var tempObj = pdata[i];
                  console.log("Else.2. "+ tempObj[criteriaList[j]]);
                  if(tempObj[criteriaList[j]].toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase()) != -1) 
                  {
                    console.log("Else.2.Match");
                    result.push(pdata[i]);
                    break;
                  }
                  
                }
          }
            }
          return result;
         }
        }
