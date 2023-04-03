import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission: Mission | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
