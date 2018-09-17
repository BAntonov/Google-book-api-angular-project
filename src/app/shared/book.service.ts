import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: Http) { }

  //Ajax
  public getBooksList(searchIndex: string) {

    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + searchIndex)
      .map((res: Response) => res.json())
      
  }

}
