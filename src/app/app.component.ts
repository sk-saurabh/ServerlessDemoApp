import { Component, OnInit } from '@angular/core';
import { API } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  moviesList = [];

  ngOnInit(){

    API.get('ServerlessDemoAppApi','/movies',{}).then(response =>{
      this.moviesList= response;
    }).catch(err =>{
      console.log(`error occurred in fetching data: ${err}`)
    });
  }
}
