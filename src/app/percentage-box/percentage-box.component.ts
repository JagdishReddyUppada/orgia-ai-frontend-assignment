import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-percentage-box',
  templateUrl: './percentage-box.component.html',
  styleUrls: ['./percentage-box.component.scss'],
})
export class PercentageBoxComponent implements OnInit {

  @Input()
  usersCount!: User[];

  constructor() {}

  ngOnInit(): void {}
}
