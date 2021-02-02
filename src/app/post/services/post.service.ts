import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url)
  }

  getSinglePost(id): Observable<Post>{
    return this.httpClient.get<Post>(`${this.url}${id}`)
  }

}
