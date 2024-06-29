import { Injectable } from '@angular/core';
import { BackgroundComponent } from '../about/background/background.component';
import { DefaboutComponent } from '../about/defabout/defabout.component';
import { DifferentComponent } from '../about/different/different.component';
import { ServicesComponent } from '../about/services/services.component';
import { VisionComponent } from '../about/vision/vision.component';
import { WhatwedoComponent } from '../about/whatwedo/whatwedo.component';
import { DefcareComponent } from '../care/defcare/defcare.component';
import { HolidayComponent } from '../care/holiday/holiday.component';
import { HomecareComponent } from '../care/homecare/homecare.component';
import { OutreachComponent } from '../care/outreach/outreach.component';
import { RespiteComponent } from '../care/respite/respite.component';
import { SupportComponent } from '../care/support/support.component';
import { TransComponent } from '../care/trans/trans.component';

interface PanelItem {
  title: string;
  component: any;
}

interface PanelSets {
  [key: string]: PanelItem[];
}

@Injectable({
  providedIn: 'root'
})


export class PanelDataService {
  private panelSets: PanelSets = {
    set1: [
      { title: 'About Us', component: DefaboutComponent },
      { title: 'What we do', component: WhatwedoComponent },
      { title: 'Background and History', component: BackgroundComponent },
      { title: 'Why we are different', component: DifferentComponent },
      { title: 'Range of Services', component: ServicesComponent },
      { title: 'Vision', component: VisionComponent },
    ],
    set2: [
      { title: 'Overview', component: DefaboutComponent },
      { title: 'Services Provided', component: WhatwedoComponent },
      { title: 'Company History', component: BackgroundComponent },
      { title: 'Unique Qualities', component: DifferentComponent },
      { title: 'Our Services', component: ServicesComponent },
      { title: 'Our Vision', component: VisionComponent },
    ],
    care: [
      { title: 'Care work', component: DefcareComponent },
      { title: 'Holiday', component: HolidayComponent },
      { title: 'Homecare', component: HomecareComponent },
      { title: 'Outreach', component: OutreachComponent },
      { title: 'Respite', component: RespiteComponent },
      { title: 'Support', component: SupportComponent },
      { title: 'Transitional', component: TransComponent },
    ]
  };

  getPanelData(set: string): PanelItem[] {
    return this.panelSets[set] || [];
  }
}
