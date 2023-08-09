import { Component } from '@angular/core';
import { upcommingData, featureDataSet } from '../../../dummyData/upcommingData'
import { AccountService } from 'src/app/environment/models/account/account.service';
import { Router } from '@angular/router';

export interface imageObj {
  source: string | null,
  name: string | null;
}
type feature = {
  source: string | null
}

type newRelease = {
  source: string | null,
  title: string | null
}

export interface featureData {
  feature: feature[],
  newRelease: newRelease[]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  upcoming_data: imageObj[] = upcommingData;
  feature_data: featureData = featureDataSet;
  isLogin: boolean;
  showButtons: boolean;

  constructor(private _accountService: AccountService,  private _router: Router) {
    this.isLogin = this._accountService.isAuthenticated();
    this.showButtons = this._accountService.isAuthenticated();
  }

  ngOnInit() {
    console.log(this.isLogin);
  }

  logout(){
    this._accountService.set(false);
    this._router.navigate(['/login']);
  }
}
