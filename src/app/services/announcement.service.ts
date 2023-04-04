import { Injectable } from '@angular/core';
import { Announcement } from '../announcement/announcement';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  serviceCall() {
    console.log('service was called');
   }

  private announcements :Announcement[] = [
    {
      title: "title",
      message: "msg",
      author: "John",
      category:{
        id:2,
        name:"General"
      },
      id:"1",
      imageUrl: "https://imgur.com/gallery/Otx13mJ"
    },
    {
      id:"2",
      title: "ttttt",
      message: "ddddddd",
      author: "CCC",
      category:{
        id:3,
        name:"Laboratory"
      },
      imageUrl:"https://imgur.com/gallery/HdSCeXo"
    },
    {
      title: "t2",
      message: "m2",
      author: "a2",
      category:{
        id:1,
        name:"Course"
      },
      id:"3",
      imageUrl:"https://imgur.com/gallery/COPCSqZ"
    },
    {
      title: "t3",
      message: "m3",
      author: "a3",
      category:{
        id:1,
        name:"Course"
      },
      id:"4",
      imageUrl:"https://imgur.com/gallery/COPCSqZ"
    }
  ];

  private announcementsSubject = new BehaviorSubject<Announcement[]>([]);

  getAnnouncements():Observable<Announcement[]>{
    this.announcementsSubject.next(this.announcements);
    return this.announcementsSubject.asObservable();
  }
}
