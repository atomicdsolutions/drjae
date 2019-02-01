import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { PubComponent } from './pages/pub/pub.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'pub', component: PubComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: SignupComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
