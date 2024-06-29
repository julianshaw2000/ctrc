import { Component, OnInit, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
// import { PanelDataService } from './panel-data.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PanelDataService } from '../_service/panel-data.service';

@Component({
  selector: 'app-care',
  standalone: true,
  imports: [
    MatExpansionModule, MatButtonModule, CommonModule
  ],
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.scss']
})
export class CareComponent implements OnInit {
  accSelected = 1;
  panelData: any[] = [];

  private panelDataService: PanelDataService = inject(PanelDataService);

  ngOnInit(): void {
    this.loadPanelData('care');
  }

  accSelect(num: number) {
    console.log(num);
    this.accSelected = num;
  }

  loadPanelData(set: string) {
    this.panelData = this.panelDataService.getPanelData(set);
  }

  // Method to switch data sets, can be called from the template
  switchSet(set: string) {
    this.loadPanelData(set);
  }
}
