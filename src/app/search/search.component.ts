import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  searchResults: string[] = [];

  searchValue: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchValue = params.get('searchValue') || '';
      this.performSearch(this.searchValue);
    });
  }

  performSearch(searchValue: string) {
    // Implement the logic to fetch search results based on the searchValue
    // console.log('Search value:', searchValue);

    this.searchResults = [
      `Result for "${searchValue}" 1`,
      `Result for "${searchValue}" 2`,
      `Result for "${searchValue}" 3`
    ];
  }



  performSearch0(query: string) {
    // Replace this with actual search logic
    this.searchResults = [
      `Result for "${query}" 1`,
      `Result for "${query}" 2`,
      `Result for "${query}" 3`
    ];
  }
}
