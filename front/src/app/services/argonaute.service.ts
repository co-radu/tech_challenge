import { Injectable } from '@angular/core';
import { Argonaute } from '../class/argonaute';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ArgonauteService {
  
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }
  
  getArgonautes(): Observable<Argonaute[]> {
    return this.http.get<Argonaute[]>(this.apiUrl);
  }
  
  createArgonaute(newArgonaute: Argonaute): Observable<Argonaute> {
    return this.http.post<Argonaute>(this.apiUrl, newArgonaute);
  }
  
}