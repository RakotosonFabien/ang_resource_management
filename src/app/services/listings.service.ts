import { Injectable } from '@angular/core';
import { Listing } from '../type';
import { fakeListings } from '../fake_data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http:HttpClient 
  ) { }

  getListings():Observable<Listing[]>{
    return this.http.get<Listing[]>('http://localhost:8080/api/tests');
  }

  getOneListing(id:string):Observable<Listing>{
    return this.http.get<Listing>('http://localhost:8080/api/tests/'+id);
  }

  modifyListing(listing:Listing){
    return this.http.put<Listing>('http://localhost:8080/api/tests/'+listing.id, listing);
  }

  createListing(listing:Listing){
    return this.http.post<Listing>('http://localhost:8080/api/tests', listing);
  }
  
  deleteListing(id:string){
    return this.http.delete('http://localhost:8080/api/tests/'+id);
  }
}
