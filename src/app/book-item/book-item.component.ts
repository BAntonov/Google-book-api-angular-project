import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  AuthorName: any;
  @Input() bookTitle: string;
  @Input() publishDate: string;
  @Input() author: string;
  @Input() id: string;
  @Input() imgLink: string;
  
  updatedBookTitle: string;
  updatedPublishDate: string;
  updatedAuthor: string;

  @Input() books: Array<any>;

  showModalCreateNewBook:boolean;
  showModalEditForm: boolean;
  showModalDelete: boolean;
  showModalAuthorErr: boolean;
  showModalTitleErr: boolean;
  showModalDateEmptyErr: boolean;
  showModalDateNotValidErr:boolean;


  constructor(private bookService: BookService) {

  }

  ngOnInit() { 
     console.log(this.author);
  }

  saveBtn() {
    this.showModalEditForm = false;

    if (this.updatedBookTitle != "") {
      this.bookTitle = this.updatedBookTitle;
    }
    else {
      this.showModalTitleErr = true;
      this.showModalEditForm = true;
    }

    if (this.updatedPublishDate != "") {
      this.publishDate = this.updatedPublishDate;
    }
    else {
      this.publishDate = "Unknown";
      this.showModalDateEmptyErr = true;
    }

    if (this.updatedAuthor != "") {
      this.author = this.updatedAuthor;
    }
    else {
      this.showModalAuthorErr = true;
      this.showModalEditForm = true;
    }



    


  }

  deleteBtn() {
    var bookToDelete = this.books.find(book => book.id === this.id);
    var index = this.books.indexOf(bookToDelete);
    this.books.splice(index, 1);

  }

  showEditDialog() {


    this.updatedAuthor = this.author;
    this.updatedBookTitle = this.bookTitle;
    this.updatedPublishDate = this.publishDate;

    this.showModalEditForm = true;
  }


}
