import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isAdmin:boolean = false;
  constructor(private _router:Router){}

  redirect(val:string){
    this._router.navigate([`/${val}`]);
  }
}
