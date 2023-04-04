import { Component } from '@angular/core';
import { Announcement } from '../announcement/announcement';
import { Category } from '../announcement/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'notifications-app';
  author = 'auth';
  announcements :Announcement[] = [
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
  selectedCategory :Category;
  filteredAnnouncements =[];

  onCategorySelected(category:Category){
    this.selectedCategory = category;
    this.filterAnnouncements();
  }
  filterAnnouncements(){
    if(this.selectedCategory  === null){
      this.filteredAnnouncements = this.announcements;
      return;
    }
    this.filteredAnnouncements = this.announcements.filter(announcement => {
      return announcement.category.name === this.selectedCategory.name;
    })
  }
  message ="msg";
}
