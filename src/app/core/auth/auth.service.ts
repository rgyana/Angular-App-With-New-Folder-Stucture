import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthenticationApis } from '../constants/authentication-api';
import { lastValueFrom } from 'rxjs';
import { ProductCatalogApi } from '../constants/product-catalog-api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.BASE_URL;
  constructor(private httpClient: HttpClient) { }

  async signupHere(data: any) {
    let URL = this.BASE_URL + AuthenticationApis.SIGNUP_API;
    const signup = await lastValueFrom(this.httpClient.post(URL, data));
    return signup;
  }

  async loginHere(data: any) {
    let URL = this.BASE_URL + AuthenticationApis.LOGIN_API;
    const login = await lastValueFrom(this.httpClient.post(URL, data));
    return login;
  }

  async getAllProductByStore(storeId: any) {
    let url = this.BASE_URL + ProductCatalogApi.GET_PRODUCT_CATALOG_BY_STORE(storeId);
    const getAllProducts = await lastValueFrom(this.httpClient.get<any>(url));
    return getAllProducts;
  }
}
