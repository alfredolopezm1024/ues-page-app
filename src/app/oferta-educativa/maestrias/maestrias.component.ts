import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maestrias',
  templateUrl: './maestrias.component.html',
  styleUrls: ['./maestrias.component.scss'],
})
export class MaestriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  carreras=[
    {
      titulo:"Administración de la Calidad",
      descripcion:"Formar profesionales de la más alta competencia, con un sólido conocimiento disciplinario y práctico de la administración, así como con una visión empresarial estratégica y moderna.",
      imagen:"../../assets/ues-oferta-academica/Mtria-Calidad-Small.jpg"
    },
    {
      titulo:"Ciencias Ambientales",
      descripcion:"Formar profesionales de alto nivel capaces de generar y aplicar conocimientos con enfoque ético y con compromiso social, para la solución de problemas en materia de medio ambiente y sustentabilidad con un alto sentido de responsabilidad",
      imagen:"../../assets/ues-oferta-academica/109_1_856MCA 365x240px2.jpg"
    },
    {
      titulo:"Cultura Física en Ambientes Interculturales",
      descripcion:"Contribuir a la atención de las principales problemáticas de las comunidades rurales e indígenas del noroeste de México en el ámbito de la actividad física y el deporte",
      imagen:"../../assets/ues-oferta-academica/108_1_328MCFD 365x240px.jpg"
    },
    {
      titulo:"Sistemas de Producción Biosustentables",
      descripcion:"Promover el desarrollo sustentable en las empresas a través de la vinculación y formación de estudiantes de posgrado que participen en la generación y aplicación del conocimiento relacionado con las mejoras en los procesos de producción.",
      imagen:"../../assets/ues-oferta-academica/Mtria-Biosustentable-Small.jpg"
    }
    

  ]
}
