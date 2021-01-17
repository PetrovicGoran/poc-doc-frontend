import { Component, OnInit } from '@angular/core';
import { Therapy } from '../../models/therapy';
import { Diagnosis } from '../../models/diagnosis';
import { TherapyService } from '../../services/therapy.service';


@Component({
  selector: 'app-therapy-list',
  templateUrl: './therapy-list.component.html',
  styleUrls: ['./therapy-list.component.css']
})
export class TherapyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
