import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'offer',
    'reservation',
    'recieved',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    offer: Math.round(Math.random() * 100).toString(),
    reservation: Math.round(Math.random() * 100).toString(),
    recieved: Math.round(Math.random() * 100).toString(),
  };
}

export interface UserData {
  id: string;
  name: string;
  offer: string;
  reservation: string;
  recieved: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  '123',
  '456',
  '3455',
  '5677',
  '45',
  '345',
  '5677',
  '34556',
];
const NAMES: string[] = [
  'Bilal',
  'Zain',
  'Ali',
  'Umer',
  'Usama',
  'Assad',
  'Abdur Rehman',
  'Fahad',
  'Sajjad',
  'Hanan',
  'Saad',
  'Usman',
];
