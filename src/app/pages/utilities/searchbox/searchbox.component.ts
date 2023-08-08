import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  searchText:string='';
  @Input() showButtons:boolean=false;

  constructor(private _router:Router){}

  ngOnInit(){
  }

  redirection(val:string){
    this._router.navigate([`/${val}`]);
  }
}
