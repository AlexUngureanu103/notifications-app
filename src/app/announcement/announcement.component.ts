import { Component, Input } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  @Input() announcement : Announcement;

  @Input()  author: string;

  constructor( private announcementService: AnnouncementService, private router: Router ){}


  edit(announcement: Announcement) {
    this.router.navigate(['/add', announcement.id]);
  }

  delete(announcement: Announcement) {
    this.announcementService.deleteAnnouncement(announcement.id).subscribe();
    window.location.reload();
  }
}
