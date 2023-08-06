import { Component, Input } from '@angular/core';
import { imageObj } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-upcoming-section',
  templateUrl: './upcoming-section.component.html',
  styleUrls: ['./upcoming-section.component.scss']
})



export class UpcomingSectionComponent {
  @Input() upcoming_data : imageObj[]= [];
  
  constructor(
  ){}

  ngOnInit(){
  }
}
