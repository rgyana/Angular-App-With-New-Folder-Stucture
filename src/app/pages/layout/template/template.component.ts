import { Component, ViewChild } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  userId!: string;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.layoutService.getUserId().then((response) => {
      this.userId = response.id;
      sessionStorage.setItem('userId', this.userId);
    })
  }
}
