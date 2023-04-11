import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  baseURL: string = "https://newsapi20221108120432.azurewebsites.net/api/Announcements"
  serviceCall() {
    console.log("Service was called");
   }
  constructor(private http: HttpClient) { }

  categories: Category[] = [
    { id: "1", name: 'Course' },
    { id: "2", name: 'General' },
    { id: "3", name: 'Laboratory' }
  ];

  announcements: Announcement[] = [
    /*{
      title: 'Notification 1',
      message: 'Message 1',
      author: 'Author 1',
      categoryId: this.categories[0].id,
      imageUrl: 'url',
      id: 0
    },
    {
      title: 'Notification 2',
      message: 'Message 2',
      author: 'Author 2',
      categoryId: this.categories[1].id,
      imageUrl: 'url',
      id: 1
    },
    {
      title: 'Notification 3',
      message: 'Message 3',
      author: 'Author 3',
      categoryId: this.categories[2].id,
      imageUrl: 'url',
      id: 2
    }*/
  ];
  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.baseURL);
  }

  addAnnouncement(announcement: Announcement): void {
    if(announcement.id === "new")
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
  getAnnouncementById(id: string) : Announcement{
    const index = this.announcements.findIndex(a => a.id === id);
    if (index !== -1) {
      return this.announcements[index];
    }
    else{
      let newAnnouncement: Announcement = {
        title: '',
        message: '',
        author: '',
        categoryId: this.categories[0].id,
        imageUrl: '',
        id: this.announcements[this.announcements.length-1].id +1
      }
      this.announcements.push(newAnnouncement);
      return newAnnouncement
    }
  }
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


}
