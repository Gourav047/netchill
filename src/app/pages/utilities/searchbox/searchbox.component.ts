import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  searchText:string='';
  @Input() showButtons:boolean=false;

  constructor(){}

  ngOnInit(){
  }

  redirection(val:string){
    window.location.href = val;
  }
}
