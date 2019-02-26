import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
 list:any[];
  constructor(private dataService: DataService) { 
    this.list= dataService.getStudentList();
  }

  ngOnInit() {
  }


}
