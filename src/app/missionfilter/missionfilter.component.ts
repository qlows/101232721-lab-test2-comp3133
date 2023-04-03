import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string>();
  selectedYear: string = '';

  constructor() { }

  ngOnInit(): void { }

  onYearChange(): void {
    this.yearSelected.emit(this.selectedYear);
  }
}
