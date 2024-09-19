import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { TemplateApi } from '../../core/constants/template_api';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  baseUrl = environment.BASE_URL;

  constructor(
    private http: HttpClient
  ) { }

  async getUserId() {
    let endpoint = this.baseUrl + TemplateApi.GET_USERID;
    const getUserId = await lastValueFrom(this.http.get<any>(endpoint));
    return getUserId;
  }
}
