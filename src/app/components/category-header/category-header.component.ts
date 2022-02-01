import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss'],
})
export class CategoryHeaderComponent implements OnInit {
  @Input() categoryTitle: any;
  constructor() {}

  ngOnInit(): void {}
}
