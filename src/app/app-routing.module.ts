import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"employeeLogin", component:EmployeeLoginComponent},
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "career", component: CareerComponent},
  { path: "blog", component: BlogComponent},
  { path: "news", component: NewsComponent},
  { path: "contact", component: ContactComponent},
  //{path:"", component:DashboardComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
