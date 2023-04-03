import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { result } from 'lodash';
import { Subscription } from 'rxjs';
import { APIResponse, Book } from 'src/app/models';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public books: Array<Book> = [];
  
  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.httpService.getAllBooks().subscribe((response: any) => {
      this.books = response;
      console.log(response);
    });
  }
}
