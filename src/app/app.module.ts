import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from "./service/post.service";

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list-component/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { PostFormComponent } from './post-form/post-form.component';
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";


const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'newsPost', component: PostFormComponent },
  { path : '', component: PostListComponent  },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    FourOhFourComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
