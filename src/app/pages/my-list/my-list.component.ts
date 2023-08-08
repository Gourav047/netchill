import { Component } from '@angular/core';
import { myList } from 'src/dummyData/upcommingData';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {

  isLogin:boolean=true;
  showButtons:boolean=false;
  listData:any=myList;
  showList:boolean=true;

  constructor(){

  }

  ngOnInit(){
    this.showList = this.listData.length>0??false;
  }
}
