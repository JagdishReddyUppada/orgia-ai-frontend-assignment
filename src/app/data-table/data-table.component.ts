import { Component, Input, OnInit } from '@angular/core';
import { FilteredData } from '../models/FilteredUser.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  
  @Input() usersData: FilteredData[] | undefined;
  displayedColumns: string[] = [
    'sno',
    'name',
    'username',
    'city',
    'pincode',
    'company-name',
  ];

  constructor() {}

  ngOnInit(): void {}
}
