import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-tattoo-home',
  templateUrl: './tattoo-home.component.html',
  styleUrls: ['./tattoo-home.component.css']
})
export class TattooHomeComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 900,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }
}
