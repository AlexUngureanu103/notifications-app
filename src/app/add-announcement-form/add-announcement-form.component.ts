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
  selectedCategoryId : string;
  categories : Category[];
  id: string;


  ngOnInit() {
    this.categories = this.announcementService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== "-1") {
      this.announcementService.getAnnouncementById(this.id).subscribe(data =>{
        this.title = data.title;
        this.author = data.author;
        this.imageUrl = data.imageUrl;
        this.selectedCategoryId = data.categoryId;
        this.textField = data.message;
      });
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    let announcement: Announcement = {
      title: this.title,
      message: this.textField,
      author: this.author,
      categoryId: this.selectedCategoryId,
      imageUrl: this.imageUrl,
      id: this.id
    }
    console.log(announcement.id);

    if(  this.id === "-1"){
      this.announcementService.addAnnouncement(announcement).subscribe();
    }
    else{
      this.announcementService.editAnnouncement(announcement).subscribe();
    }
  }
}
