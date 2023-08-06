import { Component, Input } from '@angular/core';
import { featureData } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent {

  @Input() feature_data : featureData = {
    feature:[],
    newRelease:[]
  }

  
}
