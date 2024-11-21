import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CatFactService } from '../../service/cat-fact.service';

@Component({
  selector: 'app-cat-fact',
  imports: [],
  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.css',
})
export class CatFactComponent implements OnInit, OnDestroy {
  catFact: any = {};
  errorMsg: string | undefined;

  constructor(private catFactService: CatFactService) {}

  ngOnInit(): void {
    this.fetchNewFact();
  }
  fetchNewFact() {
    this.catFactService.getCatFact().subscribe({
      next: (data) => {
        this.catFact = data;
        console.log(data);
      },
      error: (err) => {
        this.errorMsg = err.message;
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {}
}
