import { Routes } from '@angular/router';
import { Book } from './pages/book/book';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: Book },
];
