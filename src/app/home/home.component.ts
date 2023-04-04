import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement/announcement';
import { Category } from '../announcement/category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  title = 'notifications-app';
  author = 'auth';
  announcements :Announcement[];

  selectedCategory :Category;
  filteredAnnouncements =[];

  onCategorySelected(category:Category){
    this.selectedCategory = category;
    this.filterAnnouncements();
  }
  filterAnnouncements(){
    if(this.selectedCategory  === null){
      this.filteredAnnouncements = this.announcements;
      return;
    }
    this.filteredAnnouncements = this.announcements.filter(announcement => {
      return announcement.category.name === this.selectedCategory.name;
    })
  }
  message ="msg";

  constructor(private announcementService: AnnouncementService) { }
  ngOnInit(): void {
    this.announcementService.serviceCall();
    this.announcementService.getAnnouncements().subscribe(announcements =>{
      this.announcements = announcements;
    });
  }

}
