import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  baseURL: string = "https://localhost:7038/Announcement"
  serviceCall() {
    console.log("Service was called");
   }
  constructor(private httpClient: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseURL);
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement>  {
    return  this.httpClient.post<Announcement>(this.baseURL,announcement,this.httpOptions);
  }

  editAnnouncement(announcement: Announcement): Observable<Announcement>{
    return this.httpClient.put<Announcement>(this.baseURL+ '/' + announcement.id , announcement , this.httpOptions);
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
