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
  constructor(private httpClient: HttpClient) { }

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
    return this.httpClient.get<Announcement[]>(this.baseURL);
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement>  {
    return  this.httpClient.post<Announcement>(this.baseURL,announcement,this.httpOptions);
  }

  editAnnouncement(announcement: Announcement  ):Observable<Announcement>{
    return this.httpClient.put<Announcement>(this.baseURL+ '/' + announcement.id , announcement , this.httpOptions);
  }

  getCategories(): Category[]{
    return this.categories;
  }

  deleteAnnouncement(id :string ):Observable<Announcement> {
    return this.httpClient.delete<Announcement>(this.baseURL + '/' + id,this.httpOptions);
  }

  index:number;
  getAnnouncementById(id: string) : Observable<Announcement>{
    return this.httpClient.get<Announcement>(this.baseURL + '/' +id ,this.httpOptions);
  }
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


}
