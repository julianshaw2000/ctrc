import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqService } from '../../_service/faq.service';
import { Faq } from '../../_models/faq';
//import { FaqService } from './faq.service'; // Adjust the path accordingly

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  template: `
    <div class="container">
      <mat-accordion>
        <mat-expansion-panel *ngFor="let faq of faqs">
          <mat-expansion-panel-header>
            <mat-panel-title class="title">
              {{faq.question}}
            </mat-panel-title>
          </mat-expansion-panel-header>
          <p>{{faq.response}}</p>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
  styles: [`
    .title {
      font-size: 1.2em;
    }
    .container {
      padding: 20px;
    }
  `]
})
export class FaqComponent {
  faqs: Faq[];

  constructor(private faqService: FaqService) {
    this.faqs = this.faqService.getFaqs();
  }
}
