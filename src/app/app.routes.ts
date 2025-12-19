import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { HtmlTopic } from './pages/html-topic/html-topic';
import { CssTopic } from './pages/css-topic/css-topic';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'html-topic', component: HtmlTopic },
  { path: 'css-topic', component: CssTopic }
];
