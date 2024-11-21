import { Component } from '@angular/core';
import { CatFactComponent } from '../../components/cat-fact/cat-fact.component';

@Component({
  selector: 'app-cat-fact-page',
  imports: [CatFactComponent],
  templateUrl: './cat-fact-page.component.html',
  styleUrl: './cat-fact-page.component.css'
})
export class CatFactPageComponent {

}
