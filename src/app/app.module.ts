import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', loadChildren : () => import('./user/user.module')
          .then(m => m.UserModule)
      },
      {
        path: '', loadChildren: () => import('./post/post.module')
          .then(m => m.PostModule)
      },
      {
        path: '', loadChildren: () => import('./comments/comments.module')
          .then(m => m.CommentsModule)
      } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
