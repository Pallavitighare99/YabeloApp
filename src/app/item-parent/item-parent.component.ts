import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-item-parent',
  templateUrl: './item-parent.component.html',
  styleUrls: ['./item-parent.component.scss']
})
export class ItemParentComponent implements OnInit {
  pallData  : any=[];
  query: any;

  constructor(private pService : ProductService) { }

  ngOnInit(): void {

    this.pService.loadProduct().subscribe((data : Detail[])=>{
      console.log("---------inside service ------------")
       console.log(data);
       this.pallData=data;
       console.log("---------data received ------------"+ this.pallData.length)
      
     });

    
  }

}
