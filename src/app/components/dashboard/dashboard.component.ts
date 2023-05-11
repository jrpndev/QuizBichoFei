import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  update = false;
  create = false;
  del = false;
  search = false;
  
  constructor(private router: Router) {

  }
  menuHandle(res: string) {

    this.create = false;
    this.update = false;
    this.del = false;
    this.search = false;

    if (res === 'create') {
        this.create = true ; this.update = false; this.del = false; this.search = false;
    } else if (res === 'update') {
      this.create = false ; this.update = true; this.del = false; this.search = false;
    } else if (res === 'del') {
      this.create = false ; this.update = false; this.del = true; this.search = false;
    } else if (res === 'search') {
      this.create = false ; this.update = false; this.del = false; this.search = true;
    }
}

}
