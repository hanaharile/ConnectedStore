import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService {
  url = '/crud_user';
}



// import{Injectable} from '@angular/core';
// // import{HttpClient} from '@angular/common/http';
// // import{Observable} from 'rxjs/Observable';
// //
// // import{API_URLS} from '../config/api.url.config';
// // import { CrudService } from '../shared/crud.service';
// // import{User} from '../shared/user.model';
//
// import { CrudService } from '../../../shared/crud.service';
// @Injectable()
// export class UserService extends CrudService{
//
// constructor(private http:HttpClient){
//
// }
// getAll():Observable<any>{
//   //create an observable
//     return this.http.get(API_URLS.USER_CRUD_URL);
// }
// add(user):Observable<any>{
//   //create an observable
//     return this.http.post(API_URLS.USER_CRUD_URL,user);
// }
//
// update(user):Observable<any>{
//   //create an observable
//     return this.http.put(API_URLS.USER_CRUD_URL,user);
// }
// delete(id):Observable<any>{
//   //create an observable
//     return this.http.delete(API_URLS.USER_CRUD_URL + `/${id}`);
// }
//
// }
