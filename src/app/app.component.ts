import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'calendar';
  selectedDate?: Date;


  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      
  }

  navigatePage(ev: any){
    this.router.navigate([`${ev.value}`])
  }
}
