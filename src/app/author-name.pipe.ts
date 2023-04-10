import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from './announcement';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {

  transform(announcement: Announcement): string {
    return `By Author ${announcement.author}`;
  }

}
