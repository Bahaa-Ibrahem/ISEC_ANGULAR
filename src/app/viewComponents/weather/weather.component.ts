import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servises/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  invalidLogin: Boolean;  
  data;
  constructor(private service: DataService) { }

  ngOnInit() {
  }

getWeather(name) {
  this.service.getweather(name).subscribe(res => {
    name = '';
    if(res)this.data = res[0];
    else console.log('the city not exist');
  })
}

}
