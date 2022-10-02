import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  maxValue1 = 18;
  maxValue2 = 1000;
  maxValue3 = 205;
  timerSubscription1: Subscription;
  timerSubscription2: Subscription;
  timerSubscription3: Subscription;

  constructor() {
    this.timerSubscription1 = interval(200).pipe(map(() => this.increment1())).subscribe();
    this.timerSubscription2 = interval(200).pipe(map(() => this.increment2())).subscribe();
    this.timerSubscription3 = interval(200).pipe(map(() => this.increment3())).subscribe();
  }

  increment1() {
    this.counter1++;
    if (this.counter1 >= this.maxValue1) {
      this.timerSubscription1.unsubscribe();
    }
  }

  increment2() {
    this.counter2++;
    if (this.counter2 >= this.maxValue2) {
      this.timerSubscription2.unsubscribe();
    }
  }

  increment3() {
    this.counter3++;
    if (this.counter3 >= this.maxValue3) {
      this.timerSubscription3.unsubscribe();
    }
  }

  ngOnInit(): void {
    
  }

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    //animateOut: 'fadeOut',
    items: 1,
    autoplayTimeout: 4000,
    smartSpeed: 1200,
    dots: true,
    nav: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]  
  }
  slides = [
    {id: '1', img: "assets/images/highways-expressway.jpg", title:"32000", titlesub:"kms", shorttext:"Highways & Expressway are being supervised and built in order to boost the country's economic development", figimage:"assets/images/experienced-expert-in-construction.jpg", figimagecap:"Experienced & Expert in Construction."},
    {id: '2', img: "assets/images/highways-expressway.jpg", title:"32000", titlesub:"kms", shorttext:"Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry.", figimage:"assets/images/experienced-expert-in-construction.jpg", figimagecap:"Experienced & Expert in Construction."},
  ];


  /* Map Data Slider */
  mapOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    //animateOut: 'fadeOut',
    items: 3,
    autoplayTimeout: 2000,
    smartSpeed: 1200,
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    } 
  }
  mapSlides = [
    {id: '1', mapyear:"2003", shorttext: "Proprietary Firm in the name of \“Infrastructure Engineers and Consultants\" "},
    {id: '2', mapyear:"", shorttext: "First IE Project – Mumbai Pune Expressway of old NH-4"},
    {id: '3', mapyear:"", shorttext: "First DPR of Darbhanga – Jhanjharpur in Bihar"},
    {id: '4', mapyear:"2007", shorttext: "1st Supervision of Short Term & Routine Maintenance of Trichy- Vellore in the state of Tamilnadu"},
    {id: '5', mapyear:"2008", shorttext: "Building AIIMS, Apex Health Care  Institute Patna"},
    {id: '6', mapyear:"2014", shorttext: "1st Authority’s Engineer for Supervision of 2-laning with paved shoulders of Sitarganj – Bareilly section of NH-74 ( New NH-30) from Km. 254+820 to Km. 329+280 in the State of UP & Uttarakhand"}
  ];

  /* Project Slider */
  projectOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    //animateOut: 'fadeOut',
    items: 1,
    autoplayTimeout: 4000,
    smartSpeed: 1200,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    
  }
  projectSlides = [
    {id: '1', title:"To achieve disruptive results", shorttext:"The national and state highways, as well as urban and rural roads, make up India's overall road network of 6.4 million kilometres. National highways make up 2% of the overall road network yet transport 40% of all traffic.", linkname:"Explore Casestudy", linkurl:"#", figimage: "assets/images/highway-projects.jpg",  figimagecap:"assets/images/hignway-name.png", figcapname:"Highways"},
    {id: '2', title:"To achieve disruptive results", shorttext:"The national and state highways, as well as urban and rural roads, make up India's overall road network of 6.4 million kilometres. National highways make up 2% of the overall road network yet transport 40% of all traffic.", linkname:"Explore Casestudy", linkurl:"#", figimage: "assets/images/highway-projects.jpg",  figimagecap:"assets/images/hignway-name.png", figcapname:"Highways"}
  ];

}
