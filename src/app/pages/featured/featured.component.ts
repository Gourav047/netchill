import { Component } from '@angular/core';
import { feature } from 'src/dummyData/upcommingData';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  isLogin:boolean=true;
  showButtons:boolean=false;
  featuredData:any[]=feature;

  ngOnInit(){

  }
}
