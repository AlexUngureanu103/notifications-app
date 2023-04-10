import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  serviceCall() {
    console.log("Service was called");
   }
  constructor() { }

  categories: Category[] = [
    { id: 1, name: 'Course' },
    { id: 2, name: 'General' },
    { id: 3, name: 'Laboratory' }
  ];

  announcements: Announcement[] = [
    {
      title: 'Notification 1',
      message: 'Message 1',
      author: 'Author 1',
      category: this.categories[0],
      imageUrl: 'url',
      id: 0
    },
    {
      title: 'Notification 2',
      message: 'Message 2',
      author: 'Author 2',
      category: this.categories[1],
      imageUrl: 'url',
      id: 1
    },
    {
      title: 'Notification 3',
      message: 'Message 3',
      author: 'Author 3',
      category: this.categories[2],
      imageUrl: 'url',
      id: 2
    }
  ];
  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  addAnnouncement(announcement: Announcement): void {
    if(announcement.id === -1)
    {
      announcement.id = this.announcements[this.announcements.length-1].id +1;
      this.announcements.push(announcement);
    }
    else{
      const index = this.announcements.findIndex(a => a.id === announcement.id);
      if (index !== -1) {
        this.announcements[index] = announcement;
      }
    }
  }
  getCategories(): Category[]{
    return this.categories;
  }
  deleteAnnouncement(announcement :Announcement) {
    const index = this.announcements.findIndex(a => a.id === announcement.id);
    if (index !== -1) {
      this.announcements.splice(index, 1);
    }
  }
  getAnnouncementById(id: number) : Announcement{
    const index = this.announcements.findIndex(a => a.id === id);
    if (index !== -1) {
      return this.announcements[index];
    }
    else{
      let newAnnouncement: Announcement = {
        title: '',
        message: '',
        author: '',
        category: this.categories[0],
        imageUrl: '',
        id: this.announcements[this.announcements.length-1].id +1
      }
      this.announcements.push(newAnnouncement);
      return newAnnouncement
    }
  }

}
