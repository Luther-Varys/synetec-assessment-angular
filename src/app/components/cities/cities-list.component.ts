import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";
import { Observable } from "rxjs";
import { BaseService } from "../../services/base.service";
import { CitiesEndpoint } from "../../services/cities/cities-endpoint.service";
import { concat } from "rxjs/observable/concat";
import { flatMap } from "rxjs/operators";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css'],
})

export class CitiesListComponent implements OnInit{

    cities: ICity[] = [];
    constructor(private _citiesService: CitiesService) {}

    ngOnInit(): void {
        const obser:Observable<ICity[]> = this._citiesService.getCities();
        obser.subscribe(
            (vm: ICity[])=>{
                // this.cities = vm;
                if(vm === null){
                    this.cities = [];
                }
                else{
                    this.cities = vm;
                    console.log("zr: city: getCities", vm[0]);
                }
                
                },
            (error:any)=>{
                console.log("ZR erros getCities:", error);
            },
            ()=>{
                console.log("ZR oservable completed. getCities");
            }
        );
    }


    //events
    onBtnClickDelete(cityId:number){
        console.log("zr: onBtnClickDelete number", cityId);
        this._citiesService.deleteCity(cityId)
        .pipe(
            flatMap((resp: any) => this._citiesService.getCities()),            
        )
        .subscribe(
            (vm: ICity[])=>{
                if(vm === null){
                    this.cities = [];
                }
                else{
                    this.cities = vm;
                    console.log("zr: city: getCities", vm);
                }
            },
            (error:any)=>{
            },
            ()=>{
                console.log("ZR oservable completed. getCities");
            }
        );
    }
    
}