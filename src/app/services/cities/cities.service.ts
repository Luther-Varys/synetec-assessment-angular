import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) {}

    public getCities():Observable<ICity[]>{
        const obser = this._citiesEndpoint.getCitiesApi();
        return obser;
    }

    public getCity(cityId: number):Observable<ICity>{
        const obser = this._citiesEndpoint.getCityApi(cityId);
        return obser;
    }

    public deleteCity(cityId: number):Observable<any>{
        const obser = this._citiesEndpoint.deleteCityApi(cityId);
        return obser;
    }
}