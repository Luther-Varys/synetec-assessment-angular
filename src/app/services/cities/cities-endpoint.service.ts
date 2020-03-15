import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }
    
    public getCitiesApi():Observable<ICity[]>{
        const apiUrlPath = this.getBaseUrl()+'api/cities';

        const obser = this._httpClient.get(apiUrlPath, {
            headers: this.getRequestHeaders().headers,
            params: {
            },
            }).map((response: ICity[]) => response);;
            
        return obser;
    }

    public getCityApi(cityId: number):Observable<ICity>{
        const apiUrlPath = this.getBaseUrl()+`api/cities/${cityId}`;

        const obser = this._httpClient.get(apiUrlPath, {
            headers: this.getRequestHeaders().headers,
            params: {
            },
            }).map((response: ICity) => response);;
            
        return obser;
    }

    public deleteCityApi(cityId: number):Observable<ICity>{
        const apiUrlPath = this.getBaseUrl()+`api/cities/delete-city/${cityId}`;

        const obser = this._httpClient.delete(apiUrlPath, {
            headers: this.deleteRequestHeaders().headers,
            params: {
            },
            }).map((response: ICity) => response);;
            
        return obser;
    }

}