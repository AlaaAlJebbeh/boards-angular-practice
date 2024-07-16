import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  //@Input({required:true}) imageHeader!:{src:string; alt:string};
  //@Input({required:true}) titleHeader!:string;

  imageHeader = input.required<{src:string; alt:string}>();
  titleHeader = input.required<string>();

}
