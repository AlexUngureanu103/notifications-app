import { Component } from '@angular/core';
import { Announcement } from './announcement/announcement';
import { Category} from './announcement/categoty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';
  author = 'auth';
  announcements :Announcement[] = [
    {
      title: "title",
      message: "msg",
      author: "John",
      category:{
        id:1,
        name:"Smith"
      }
    },
    {
      title: "ttttt",
      message: "ddddddd",
      author: "CCC",
      category:{
        id:11,
        name:"BAB"
      }
    }
    selectedCategory:Category;
  ];
  message ="msg";
}
