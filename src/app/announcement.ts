import { Category } from "./category";

export interface Announcement {
    title: string;
    message: string;
    author: string;
    categoryId:string;
    imageUrl : string;
    id : number;
}
