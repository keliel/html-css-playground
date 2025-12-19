import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HtmlTopicComponent } from './pages/html-topic/html-topic.component';
import { CssTopicComponent } from './pages/css-topic/css-topic.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html-topic', component: HtmlTopicComponent },
  { path: 'css-topic', component: CssTopicComponent }
];
