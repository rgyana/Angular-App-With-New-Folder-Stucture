import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userId = sessionStorage.getItem('userId');

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }
}
