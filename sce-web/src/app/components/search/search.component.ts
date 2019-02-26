import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list: any[];
  showedList: any[]=[];
  constructor(private dataService: DataService) {
    this.list = dataService.getCoursesList();
    this.showedList = this.list;
  }
  ngOnInit() {
  }
  searchCourses = (term: string) => {
    if (!term) {
      this.showedList = [];
    } else { 
      term=term.toLowerCase();
      this.showedList = [];
      this.list.forEach(  (item) => { 
        if (item.nombre.toLowerCase().includes(term)) {
          this.showedList.push(item);
        }
      });
    }

  }

}
