import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './components/front/front.component';
import { CategoryComponent } from './components/category/category.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
    {
        path: '',
        component: FrontComponent
    },
    {
        path: 'category/:categoryId',
        component: CategoryComponent
    },
    {
        path: 'detail',
        component: BookDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }