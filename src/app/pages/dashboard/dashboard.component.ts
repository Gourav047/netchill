import { Component } from '@angular/core';
import {upcommingData , featureDataSet} from '../../../dummyData/upcommingData'

export interface imageObj {
  source:string|null,
  name:string|null;
}
type feature = {
  source:string|null
}

type newRelease = {
  source:string|null,
  title:string|null
}

export interface featureData { 
 feature:feature[],
 newRelease:newRelease[]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  
  upcoming_data:imageObj[]=upcommingData;
  feature_data:featureData = featureDataSet;
  isLogin:boolean=true;

  constructor(){}

  ngOnInit(){

  }
}
