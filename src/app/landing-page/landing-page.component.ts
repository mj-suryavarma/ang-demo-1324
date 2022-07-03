import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
   hotels = [
    {
      name : "taj hotel",
      location : 'mumbai',
      year : '1923',
      availableRooms : '14',
      description : 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'

    },
    {
      name : "saravana",
      location : 'chennai',
      year : '1993',
      availableRooms : '4',
      description : 'Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a..'
    },{
      name : "new madurai hotel",
      location : 'madurai',
      year : '2001',
      availableRooms : '26',
      description : 'Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a..'
    },{
      name : "welcome india",
      location : 'delhi',
      year : '1999',
      availableRooms : '10',

      description : 'Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.'
    },{
      name : "Everest Hotel",
      location : 'theni',
      year : '2000',
      availableRooms : '17',

      description : 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
   ];

   share() {
    window.alert("now you can share with your friends")
   }

   Booknow() {
    window.alert("hoooray! now booked the hotel....")
   }

  ngOnInit(): void {
  }

}
