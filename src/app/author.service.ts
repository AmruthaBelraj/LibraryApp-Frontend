import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item= {
    authorName :'',
    bookName :'',
    bookGenre :'',
    imageUrl :''
  }
  constructor(private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/"+id);  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(item:any)
  {
    return this.http.post("http://localhost:3000/insert/author",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/author/"+id)

  }
  updateAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update/author",author)
    .subscribe(data =>{console.log(data)})
  }
}
