import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalogo-landing',
  templateUrl: './catalogo-landing.component.html',
  styleUrls: ['./catalogo-landing.component.css']
})
export class CatalogoLandingComponent implements OnInit {

  currentIndex=0;
  images = [
    { src: 'assets/images/catalogo-landing/libros/filosofia.png', alt: 'Imagen 1', caption: 'Filosofia felina' },
    { src: 'assets/images/catalogo-landing/libros/quinto.png', alt: 'Imagen 2', caption: 'El quinto infierno' },
    { src: 'assets/images/catalogo-landing/libros/tres meses.png', alt: 'Imagen 3', caption: 'Tres meses' },
    { src: 'assets/images/catalogo-landing/libros/coraline.png', alt: 'Imagen 2', caption: 'Coraline' },
    { src: 'assets/images/catalogo-landing/libros/tres meses.png', alt: 'Imagen 3', caption: 'Título de la Imagen 3' },
    
  ];


  displayedImages = [
    { src: 'assets/images/catalogo-landing/libros/quinto.png', alt: 'Imagen 2', caption: 'El quinto' },
    { src: 'assets/images/catalogo-landing/libros/tres meses.png', alt: 'Imagen 3', caption: 'meses' },
    { src: 'assets/images/catalogo-landing/libros/coraline.png', alt: 'Imagen 2', caption: 'Coraline' },
    { src: 'assets/images/catalogo-landing/libros/tres meses.png', alt: 'Imagen 3', caption: 'Título de la Imagen 3' },
    
  ];


  constructor() {
    this.showImages(0, 5); // Mostrar las primeras 5 imágenes al cargar
  }

  showImages(startIndex: number, count: number) {
    this.displayedImages = this.images.slice(startIndex, startIndex + count);
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showImages(this.currentIndex, 5);
    }
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.showImages(this.currentIndex, 5);
    } else {
      // Si llega al final, volver al inicio del carrusel
      this.currentIndex = 0;
      this.showImages(0, 5);
    }
  }

  ngOnInit(): void {
  }

}
