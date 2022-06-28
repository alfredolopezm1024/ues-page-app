import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta-educativa',
  templateUrl: './oferta-educativa.page.html',
  styleUrls: ['./oferta-educativa.page.scss'],
})
export class OfertaEducativaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carreras=[
    {
      titulo:"Ambiental",
      descripcion:"Proponer y evaluar alternativas de solución a problemas de contaminación tanto ambiental como laboral relacionados a la industria y los servicios, ya sea como líder de proyectos o integrándose a equipos de trabajo con enfoques multidisciplinarios.",
      imagen:"../../assets/ues-oferta-academica/Ing-Ambiental.jpg"
    },
    {
      titulo:"Biomédico",
      descripcion:"Presentar iniciativa para emprender, planear, organizar y dirigir así como generar su centro de investigación o su propia empresa de desarrollos tecnológicos.",
      imagen:"../../assets/ues-oferta-academica/Ing-Biomedica.jpg"
    },
    {
      titulo:"Biotecnología Acuática",
      descripcion:"Innovar tecnologías de producción sustentables que incluya la aplicación de la biotecnología para optimizar el cultivo de especies acuáticas, para prevenir enfermedades y mejorar la nutrición de los organismos.",
      imagen:"../../assets/ues-oferta-academica/Ing-Biotecnologia-Small.jpg"
    },
    {
      titulo:"Geociencias",
      descripcion:"Determinar los parámetros de procesamiento de minerales, realizando pruebas a nivel laboratorio, utilizando los fundamentos metalúrgicos como apoyo en la toma de decisiones para su aplicación a nivel industrial.",
      imagen:"../../assets/ues-oferta-academica/Ing-Geociencias.jpg"
    },
    {
      titulo:"Horticultura",
      descripcion:"Desarrollar proyectos de agronegocios para proporcionar valor agregado a los productos hortícolas, basados en los requerimientos de los mercados nacionales e internacionales, los cuales sean financiables y factibles de formar cadenas alimenticias.",
      imagen:"../../assets/ues-oferta-academica/Ing-Horticultura.jpg"
    },
    {
      titulo:"Industrial en Manufactura",
      descripcion:"Diseñar, implementar y mejorar sistemas de producción, integrando personas, materiales, equipos y energía en empresas manufactureras o de servicios; optimizando procesos y sistemas de manufactura para crear ventajas competitivas.",
      imagen:"../../assets/ues-oferta-academica/Ing-Manufactura.jpg"
    },
    {
      titulo:"Mecatrónica",
      descripcion:"Identificar, analizar y seleccionar las metodologías apropiadas para el diseño de sistemas mecatrónicos factibles en plantas industriales. Desarrollar sistemas inteligentes para la operación de componentes, herramientas y máquinas automáticas.",
      imagen:"../../assets/ues-oferta-academica/Ing-Mecatronica.jpg"
    },
    {
      titulo:"Software",
      descripcion:"Proponer y aplicar soluciones e innovaciones tecnológicas con la finalidad de automatizar los procesos, atendiendo los principios de la organización y gestión efectiva de la información en los departamentos que así lo requieran.",
      imagen:"../../assets/ues-oferta-academica/Ing-Software-Small.jpg"
    },
    {
      titulo:"Tecnología de Alimentos",
      descripcion:"Diseñar productos y procesos alimentarios que busquen satisfacer las necesidades de los mercados actuales cumpliendo con la normatividad establecida, el desarrollo sustentable y considerando el entorno económico y social del país.",
      imagen:"../../assets/ues-oferta-academica/Ing-Tecnologia-Alimentos.jpg"
    },
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

  mostrar(){

  }

}
