import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../mission.service';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | null = null;

  constructor(private missionService: MissionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.missionService.getMission(id).subscribe(mission => this.mission = mission);
  }

}
