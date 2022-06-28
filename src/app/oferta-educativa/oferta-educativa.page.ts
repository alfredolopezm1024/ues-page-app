import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oferta-educativa',
  templateUrl: './oferta-educativa.page.html',
  styleUrls: ['./oferta-educativa.page.scss'],
})
export class OfertaEducativaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }



  goTo(page){
    this.router.navigate([`/oferta-educativa/${page}`])
  }

}
