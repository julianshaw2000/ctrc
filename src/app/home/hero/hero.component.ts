import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatChipsModule, NgStyle],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  backgroundImageUrl: string = 'assets/logocircle.png';


  careIssues: string[] = [
    "Behavioural difficulties / challenges",
    "Epilepsy seizure disorder",
    "Autism",
    "A prognosis of dementia",
    "Mild mental health issues"
  ];



}
