import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  searchText:string='';

  constructor(){}

  ngOnInit(){
    
  }

  redirection(val:string){
    window.location.href = val;
  }
}
