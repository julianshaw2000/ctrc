import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from '../about/footer/footer.component';
// import { HeroComponent } from '../hero/hero.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,
    MatToolbarModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    MatCardModule, HeroComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
