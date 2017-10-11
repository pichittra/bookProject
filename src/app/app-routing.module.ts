import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './components/front/front.component';
import { CategoryComponent } from './components/category/category.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';

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
        path: 'bookshelf/:categoryId',
        component: BookShelfComponent
    },
    {
        path: 'detail/:bookId',
        component: BookDetailComponent
    },
    {
        path: 'updatebook',
        component: UpdateBookComponent
    },
    {
        path: 'docs',
        component: PdfViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }