import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenciaturas',
  templateUrl: './licenciaturas.component.html',
  styleUrls: ['./licenciaturas.component.scss'],
})
export class LicenciaturasComponent implements OnInit {
  
  carreras=[
    {
      titulo:"Administración de Empresas",
      descripcion:"Administrar, innovar y gestionar recursos materiales y humanos para su óptima utilización dentro de las empresas públicas y privadas, en el contexto nacional e internacional.",
      imagen:"../../assets/ues-oferta-academica/Lic-Administracion-Empresas.jpg"
    },
    {
      titulo:"Administración de Empresas (modalidad Virtual)",
      descripcion:"Administrar, innovar y gestionar recursos materiales y humanos para su óptima utilización dentro de las empresas públicas y privadas, en el contexto nacional e internacional.",
      imagen:"../../assets/ues-oferta-academica/LAE_virtual_small.jpg"
    },
    {
      titulo:"Administración de Empresas Turísticas",
      descripcion:"Impulsar el desarrollo sustentable a través de proyectos y programas ecoturísticos en áreas naturales protegidas, para la preservación y conservación de la biodiversidad aplicando las normas oficiales.",
      imagen:"../../assets/ues-oferta-academica/Lic-Administracion-Empresas-Turisticas.jpg"
    },
    {
      titulo:"Agronegocios",
      descripcion:"Promocionar y aperturar dentro del marco legal conducente, los proyectos de inversión, generando los valores agregados de los bienes y servicios a ofertar, de acuerdo a las tendencias de mercado e innovaciones tecnológicas previamente prospectadas.",
      imagen:"../../assets/ues-oferta-academica/Lic-Agronegocios-Small.jpg"
    },
    {
      titulo:"Comercio Internacional",
      descripcion:"Diseñar planes de logística para optimizar recursos considerando los requerimientos del cliente, sistemas de calidad, disminución de costos, INCOTERMS y contratos internacionales a nivel nacional e internacional.",
      imagen:"../../assets/ues-oferta-academica/Lic-Comercio-Internacional.jpg"
    }
    

  ]
  constructor() { }

  ngOnInit() {}

}
