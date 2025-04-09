import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/manage/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,HomeComponent,CategoriesComponent,CategoryFormComponent,HeaderComponent,FooterComponent,HomeComponent,AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medApp';
}
