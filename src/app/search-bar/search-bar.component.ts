import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

/** @title Simple form field */
@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrl: 'search-bar.component.scss',
  standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, FormsModule], // Add FormsModule to imports
  changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  searchValue: string = '';

  router = inject(Router);

  clearSearch() {
    console.log('clear search');
  }

  getSearchResults() {

    if (this.searchValue.length > 0) {
      this.router.navigate(['/search', this.searchValue]);
    }

  }
}
