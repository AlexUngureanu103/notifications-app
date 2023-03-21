import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from './announcement/announcement';

@Pipe({
  name: 'byAuthor'
})
export class ByAuthorPipe implements PipeTransform {

  transform(announcement:Announcement): string {
    return "By Author ${announcement.author}";
  }

}
