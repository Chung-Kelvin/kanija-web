import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private endpoint = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }

  createCategory(payload: any): Observable<any> {
    return this.http.post<any>(this.endpoint, payload);
  }
}
