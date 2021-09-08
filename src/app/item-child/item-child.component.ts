import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Detail } from '../detail';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.scss']
})
export class ItemChildComponent implements OnInit {
  url=environment.fileUrl;
  @Input()
  amazonD!: Detail;
  

  constructor() { }

  ngOnInit(): void {
  }
  selectProduct(){
  alert(JSON. stringify(this.amazonD));
  
  }
}
