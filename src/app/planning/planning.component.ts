import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BudgetComponent } from './budget/budget.component';
import { FaqComponent } from './faq/faq.component';
import { FindcareComponent } from './findcare/findcare.component';
import { DefplanComponent } from './defplan/defplan.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [
    MatExpansionModule,
    BudgetComponent,
    FaqComponent,
    FindcareComponent,
    DefplanComponent,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  accSelected = 1;

  accSelect(num: number) {
    console.log(num);
    this.accSelected = num;
  }
}
