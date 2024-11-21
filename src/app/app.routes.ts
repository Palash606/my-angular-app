import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CatFactPageComponent } from './pages/cat-fact-page/cat-fact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'user',
    component: UserPageComponent,
  },
  {
    path: 'todo',
    component: TodoPageComponent,
  },
  {
    path: 'posts',
    component: PostsPageComponent,
  },
  {
    path: 'cat-fact',
    component: CatFactPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
