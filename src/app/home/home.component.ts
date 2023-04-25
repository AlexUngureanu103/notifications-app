import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor( private announcementService: AnnouncementService ){}

  title = 'notifications-app';

  ngOnInit() {
    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    });
    this.filteredAnnouncements = this.announcements;
    this.announcementService.serviceCall();
  }

  filteredAnnouncements : Announcement[];
  announcements: Announcement[]

  onCategorySelected(id: string) {
    this.filteredAnnouncements = this.announcements.filter(a => a.categoryId === id);
  }
  onResetFilters(){
   this.filteredAnnouncements = this.announcements;
  }

}
