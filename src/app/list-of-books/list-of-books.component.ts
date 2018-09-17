import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';


@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css']
})
export class ListOfBooksComponent implements OnInit {
  searchInput: string;

  bookTitle="";
  publishDate="";
  author="";
  
  books: any;

  showModalBookCreated: boolean;
  showModalCreateNewBook:boolean;
  showModalTitleErr:boolean;
  showModalDateEmptyErr:boolean;
  showModalAuthorErr:boolean;

  allchecked:boolean;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.searchBooks();
  }

  //search button
  public searchBooks() {

    this.bookService.getBooksList(this.searchInput)
      .subscribe(data => {

        this.books = data.items;

      });
  }

  //generate Book ID
  public generateId () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };


  public addBtn(){
    let book = Object();
    let volumeInfo = new Object();
    book.volumeInfo = volumeInfo;

    this.allchecked = false;
    
    //title validation
    if (this.bookTitle != "") {
      book.volumeInfo.title = this.bookTitle;
      this.allchecked = true;      
    }
    else{
      this.showModalTitleErr = true;
      this.allchecked = false;
    }
    //author validation
    if (this.author != "") {
        
      book.volumeInfo.authors = this.author;
    }
    else{
      this.showModalAuthorErr = true;
    }
    //date validation
    if (this.publishDate != "") {
      
      book.volumeInfo.publishedDate = this.publishDate;
    }
    else {
      this.showModalDateEmptyErr = true;
    }

    book.id = this.generateId();

    if (this.allchecked) {
      
      this.author = this.bookTitle = this.publishDate = '';
  
      this.books.push(book);

      this.showModalCreateNewBook = false;
      this.showModalBookCreated = true;

    }
    
  }


}
