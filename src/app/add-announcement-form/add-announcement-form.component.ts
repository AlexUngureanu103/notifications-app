import { Component } from '@angular/core';
import { Category } from '../category';
import { NgForm } from '@angular/forms';
import { Announcement } from '../announcement';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {

  constructor(private announcementService: AnnouncementService, private route: ActivatedRoute,) { }
  

  title : string;
  author : string;
  imageUrl : string;
  textField : string;
  selectedCategory : Category;
  categories : Category[];
  id: number;
  

  ngOnInit() {
    this.categories = this.announcementService.getCategories();
    const id = this.route.snapshot.paramMap.get('id');
    let parsedId: number = parseInt(id);
    if (parsedId === -1) {
      this.id = -1;
    }
    else{
      const announcement = this.announcementService.getAnnouncementById(parsedId);
      this.title = announcement.title;
      this.author = announcement.author;
      this.imageUrl = announcement.imageUrl;
      this.selectedCategory = announcement.category;
      this.textField = announcement.message;
      this.id = parseInt(id);
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    let announcement: Announcement = {
      title: this.title,
      message: this.textField,
      author: this.author,
      category: this.selectedCategory,
      imageUrl: this.imageUrl,
      id: this.id
    }
    this.announcementService.addAnnouncement(announcement);
  }
}
