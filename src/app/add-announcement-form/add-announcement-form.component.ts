import { Component, EventEmitter, Output } from '@angular/core';
import { Announcement } from '../announcement/announcement';
import { Category } from '../announcement/category';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
  title:string =  '';
  author:string = '';
  imageUrl:string = '';
  message:string = '';
  selectedCategory:Category ;
  categories2:Category[]=[
    {
      id:1,
      name:"Course"
    },
    {
      id:2,
      name:"General"
    },
    {
      id:3,
      name:"Laboratory"
    },
  ];
  @Output() addAnnouncement  : EventEmitter<Announcement> = new EventEmitter();

  onSubmit(form){
    const announcement:Announcement = {
      title:this.title,
      author:this.author,
      message:this.message,
      imageUrl:this.imageUrl,
      category:this.categories2.find(c=>c.name === this.selectedCategory.name),
      id:Math.random().toString(36)
    }
    // Console.log(announcement);
    this.addAnnouncement.emit(announcement);
    form.resetForm();
  }

}
