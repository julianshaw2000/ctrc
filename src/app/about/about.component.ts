import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DefaboutComponent } from './defabout/defabout.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { BackgroundComponent } from './background/background.component';
import { DifferentComponent } from './different/different.component';
import { ServicesComponent } from './services/services.component';
import { StaffComponent } from './staff/staff.component';
import { VisionComponent } from './vision/vision.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatExpansionModule, DefaboutComponent,
    WhatwedoComponent, BackgroundComponent, DifferentComponent,
    ServicesComponent, StaffComponent, VisionComponent, MatButtonModule,
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  accSelected = 1;
  accSelect(num: number) {
    console.log(num);
    this.accSelected = num;
  }

}
