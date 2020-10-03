import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = null;
  constructor() { 
    this.currentYear = new Date().getFullYear();
    this.currentYear = this.currentYear.year;
  }

  ngOnInit(): void {
  }

}
