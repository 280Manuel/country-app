import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCApitanPageComponent } from './pages/by-capitan-page/by-capitan-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
{
path:'by-capital',
component: ByCApitanPageComponent
},
{
path:'by-country',
component: ByCountryPageComponent
},
{
path:'by-region',
component: ByRegionPageComponent
},
{
path:'by/:id',
component: CountryPageComponent
},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule { }
