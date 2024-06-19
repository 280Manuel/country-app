import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activatedRout: ActivatedRoute,
    private countryService: CountriesService,
   ){

  }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(({id}) => {

      this.countryService.searchCountryByAlphaCode(id)
      .subscribe (country =>{
        console.log({country})
      })

    })
  }
}
