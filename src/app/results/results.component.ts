import { Component, OnInit } from '@angular/core';
import {CityService} from '../city.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  cities = [];
  filteredCities = [];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCities().subscribe( data =>  this.cities = [].slice.call(data));
  }

  onKey(element) { // with type info
    const currentInput = element.value;
    // grab user input from the element that is passed into our variable
    const regExpression = new RegExp(currentInput, 'gi');
    // create new regexpression using the user input as the basis of the pattern, with 'gi' passed as the flags to ignore case sensitivity
    const matchedCities = this.cities.filter( place => place.city.match(regExpression) || place.state.match(regExpression));
    // use our regExp to filter our raw data based on our regex (user input) match
    this.filteredCities = matchedCities;
    // assign our member variable 'filtiredCities' to the results of our filter method
  }

}
