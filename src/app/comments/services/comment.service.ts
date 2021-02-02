import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments/'

  constructor(
    private httpClient: HttpClient
  ) { }

    getAllComments():Observable<Comment[]>{
      return this.httpClient.get<Comment[]>(this.url);
    }

    getSingleComment(id):Observable<Comment>{
      return this.httpClient.get<Comment>(`${this.url}${id}`)
    }

}
