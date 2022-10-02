import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit  {
  title = 'SAInfraPractical';


  ngOnInit(){
    
    $(document).ready(() => { 
        // Nav icon menu
      if($(".header-menu").length) {
        $(".menu-toggle").click(function () {
          $(".menu-toggle").toggleClass("active");
          $(".menuoverlay").toggleClass("active");
          $(".header-menu").toggleClass("active");
        });
        $(".menuoverlay, .header-menu").click(function () {
          $('.menu-toggle').removeClass("active");
          $(".menuoverlay").removeClass("active");
          $(".header-menu").removeClass("active");
        });
      }
     
           
      // // Counter
      // if($(".countnum").length) {
      //   $('.countnum').each(function (this:any) {
      //     $(this).data('start', parseInt($(this).text())).prop('Counter', 0).animate({
      //         Counter: $(this).text()
      //     }, {
      //         duration: 4000,
      //         easing: 'swing',
      //         step: function (now:any) {
      //             $(this).text($(this).data('start') - Math.ceil(now));
      //         }
      //     });
      //   });
      // }


      
    });
    
    
    AOS.init();

   }
   
}

