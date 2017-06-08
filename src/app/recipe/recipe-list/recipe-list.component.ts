import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ca-recipes',
  template: `<h3>Recipes</h3>
  <div>{{subs | json}}</div>
  `
})
export class RecipeListComponent {
  public subs: Observable<string>;
  public data_recipes: any;
  
  constructor(private http: TransferHttp) {}
  
  ngOnInit() {
    this.subs = this.http.get('http://localhost/contenta/CONTENTACMS/web/api/recipes').map(data => {
      return data;
    });
  }
}