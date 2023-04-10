import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(private announcementService: AnnouncementService) { }

  categories : Category[];

  ngOnInit() {
    this.categories = this.announcementService.getCategories();
  }

  @Output() categorySelected = new EventEmitter<Category>();
  @Output() resetFilters = new EventEmitter<void>();

  onCategorySelected(category: Category) {
    this.categorySelected.emit(category);
  }
  onResetFilters(){
    this.resetFilters.emit();
  }
}
