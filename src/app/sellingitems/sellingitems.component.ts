import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface User {
  name: string;
}
export interface Prices {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sellingitems',
  templateUrl: './sellingitems.component.html',
  styleUrls: ['./sellingitems.component.scss'],
})
export class SellingitemsComponent implements OnInit {
  price: Prices[] = [
    {value: 'lth-0', viewValue: 'Low to High'},
    {value: 'htl-1', viewValue: 'High to Low'},
  ];
  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Dress' }, { name: 'Tops' }, { name: 'Jumpsuit' }];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
