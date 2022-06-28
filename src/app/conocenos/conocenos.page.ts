import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.page.html',
  styleUrls: ['./conocenos.page.scss'],
})
export class ConocenosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  historiaUes=[
    {
      anno:"1980",
      lado:true,
      actividades:[
        {
          titulo:"Inicios",
          subtitulo:"Julio 18 de 1980",
          descripcion:"En San Luis Río Colorado, se crea el Patronato para el Fomento de la Educación Superior en San Luis Río Colorado, Sonora, A.C. para establecer una universidad y los sanliusinos pudieran estudiar en la localidad."
        },
        {
          titulo:"Apertura de Universidad de San Luis Río Colorado",
          subtitulo:"Octubre 20 de 1980",
          descripcion:"En Hermosillo, se estableció el convenio de apertura de la Universidad de San Luis Río Colorado, incorporándola a la Universidad de Sonora. <br>La Universidad inicia sus actividades con: 300 alumnos, 5 carreras y 24 profesores. <br>Ofrecía las carreras de: Contaduría Pública, Administración de Empresas, Ingeniería Civil, Ingeniería Industrial y Agronomía <br>Funcionó como tal, por seis semestres (3 años)."
        },
      ]
    },
    {
      anno:"1983",
      lado:false,
      actividades:[
        {
          titulo:"Se crea el CESUES",
          subtitulo:"Octubre 3 de 1983",
          descripcion:"Creación del Centro de Estudios Superiores del Estado de Sonora por la Ley número 28, publicada en el Boletín Oficial del Gobierno del Estado. <br> Inicia actividades la Unidad Académica de San Luis Río Colorado Ofrecía las carreras de: Contaduría Pública, Administración de Empresas, Administración de Empresas Turísticas, Agronomía en Sistemas de Irrigación y Agronomía en Zonas Áridas <br> Entran en liquidación las carreras de: Agronomía con especialidad en Fitotecnia, Ingeniería Civil e Ingeniería Industrial."
        }
      ]
    },
    {
      anno:"1984",
      lado:true,
      actividades:[
        {
          titulo:"Nuevas Escuelas Superiores",
          subtitulo:"1984",
          descripcion:"En Hermosillo, se establecen las Escuelas Superiores de Geociencias y Horticultura, ofreciendo la Ingeniería en Geociencias y Horticultura. <br> En Navojoa, se establece la Escuela Superior de Acuacultura, ofreciendo la Ingeniería en Acuacultura."
        }
      ]
    },
    {
      anno:"1985",
      lado:false,
      actividades:[
        {
          titulo:"Escuela Superior de Ecología",
          subtitulo:"1985",
          descripcion:"En Hermosillo, se establece la Escuela Superior de Ecología, iniciando la Licenciatura en Ecología."
        }
      ]
    },
    {
      anno:"1990",
      lado:true,
      actividades:[
        {
          titulo:"Se crea LAET",
          subtitulo:"1990",
          descripcion:"En Hermosillo, se crea la carrera de Licenciatura en Administración de Empresas Turísticas."
        }
      ]
    },
    {
      anno:"1992",
      lado:false,
      actividades:[
        {
          titulo:"Se crean Unidades Académicas",
          subtitulo:"1992",
          descripcion:"Se crean las Unidades Académicas de Hermosillo y Navojoa, desapareciendo las escuelas superiores."
        },
        {
          titulo:"Nuevas Carreras",
          subtitulo:"1992",
          descripcion:"En Hermosillo, se crea la Licenciatura en Comercio Internacional. <br> En San Luis Río Colorado, se crea la carrera de Ingeniería Industrial <br> En Navojoa, se crea la carrera de Sistemas Computacionales Administrativos."
        }
      ]
    },
    {
      anno:"1993",
      lado:true,
      actividades:[
        {
          titulo:"Inicia Carrera de SCA",
          subtitulo:"1993",
          descripcion:"En San Luis Río Colorado, inicia actividades la carrera de Sistemas Computacionales Administrativos."
        }
      ]
    },
    {
      anno:"1996",
      lado:false,
      actividades:[
        {
          titulo:"Se crea Carrera de IIE",
          subtitulo:"1996",
          descripcion:"En San Luis Río Colorado, se crea la carrera de Ingeniería Industrial en Electrónica."
        },
      ]
    },
    {
      anno:"1998",
      lado:true,
      actividades:[
        {
          titulo:"Nueva Unidad Académica Magdalena",
          subtitulo:"1998",
          descripcion:"En la ciudad de Magdalena, se crea la Unidad Académica Magdalena, ofreciendo las carreras de licenciatura en Comercio Internacional y Sistemas Computacionales Administrativos."
        }
      ]
    },
    {
      anno:"1999",
      lado:false,
      actividades:[
        {
          titulo:"Inicia programa de Maestría",
          subtitulo:"1999",
          descripcion:"En San Luis Río Colorado, se crea el programa de maestría en Administración."
        }
      ]
    },
    {
      anno:"2000",
      lado:true,
      actividades:[
        {
          titulo:"Se crea LCI",
          subtitulo:"2000",
          descripcion:"Se crea Licenciatura en Comercio Internacional en San Luis Río Colorado."
        }
      ]
    },
    {
      anno:"2001",
      lado:false,
      actividades:[
        {
          titulo:"Nueva Unidad Académica Benito Juárez",
          subtitulo:"2001",
          descripcion:"Creación de la Unidad Académica Benito Juárez, siendo ubicada en la población de Villa Juárez, Sonora, ofertando las carreras de Licenciado en Administración de Empresas y Licenciado en Sistemas Computacionales Administrativos."
        },
        {
          titulo:"Se crea LED",
          subtitulo:"2001",
          descripcion:"En Hermosillo, se crea la Licenciatura en Entrenamiento Deportivo."
        }
      ]
    },
    {
      anno:"2006",
      lado:true,
      actividades:[
        {
          titulo:"Inicia programa de TSU",
          subtitulo:"2006",
          descripcion:"En Benito Juárez, inicia actividades académicas el programa de Técnico Superior Universitario en Acuacultura."
        },
        {
          titulo:"Inicia CESUES en Nogales",
          subtitulo:"2006",
          descripcion:"En colaboración con la Universidad Tecnológica de Nogales y teniendo como sede sus instalaciones, inicia actividades la Licenciatura en Comercio Internacional."
        }
      ]
    },
    {
      anno:"2007",
      lado:false,
      actividades:[
        {
          titulo:"Nuevo Modelo Educativo ENFACE",
          subtitulo:"2007",
          descripcion:"Inicia operaciones el nuevo Modelo Educativo ENFACE (Enfocado en el Aprendizaje, las Competencias y el Estudiante)."
        },
        {
          titulo:"Ampliación de oferta educativa",
          subtitulo:"2007",
          descripcion:"En San Luis Río Colorado inicia: Licenciatura en Entrenamiento Deportivo, Maestría en Administración de la Calidad y Maestría en Administración de Negocios Internacionales. <br> En Hermosillo inicia: Licenciatura de Contaduría, Licenciatura en Nutrición Humana, Maestría en Administración de la Calidad y Maestría en Metodología del Entrenamiento Deportivo de Alto Rendimiento. <br> En Navojoa inicia: Licenciatura en Comercio Internacional. <br> En Magdalena inicia: Licenciatura en Administración de Empresas. <br> Formando parte del Corredor Académico con sede en el Instituto Tecnológico de Puerto Peñasco se creaMaestría en Administración de Empresas Turísticas."
        }
      ]
    },
    {
      anno:"2008",
      lado:true,
      actividades:[
        {
          titulo:"CESUES se descentraliza",
          subtitulo:"2008",
          descripcion:"Se aprueba la nueva Ley Orgánica (No. 165), publicada en el Boletín Oficial del Gobierno del Estado, el 3 de julio del 2008, definiéndose la institución como organismo descentralizado de la administración pública estatal, con personalidad jurídica y patrimonio propio. Con la nueva Ley Orgánica se incluye en la estructura general un Consejo Directivo como máximo órgano de gobierno con atribuciones de carácter resolutivo; integra la figura del Rector como autoridad en reemplazo del Director General, y logra desconcentrar las atribuciones antes concentradas en éste."
        },
        {
          titulo:"Nuevos programas educativos",
          subtitulo:"2008",
          descripcion:"En San Luis Río Colorado inicia: Licenciatura en Enseñanza del Inglés y Ingeniería Ambiental Industrial. <br> En Navojoa inician: Licenciatura en Nutrición Humana y Maestría en Ciencias con Especialidad en Tecnologías de Cultivos Acuícolas <br> En Magdalena inicia la Licenciatura en Enseñanza del Inglés. <br> En Benito Juárez inician: Licenciatura en Entrenamiento Deportivo y Licenciatura en Agronegocios. <br> En Nogales en colaboración con la Universidad Tecnológica de Nogales, inician: Maestría en Administración de la Calidad y Maestría en Administración de Negocios Internacionales. <br> En Puerto Peñasco en colaboración con el Instituto Tecnológico de Puerto Peñasco se crea la Maestría de Administración de la Calidad. <br> En Cajeme en colaboración con el Instituto Tecnológico Superior de Cajeme inician: Maestría de Administración de Negocios Internacionales y Maestría en Administración de Empresas Turísticas."
        }
      ]
    },
    {
      anno:"2009",
      lado:false,
      actividades:[
        {
          titulo:"Nuevos programas educativos",
          subtitulo:"2009",
          descripcion:"En Hermosillo se crean los programas educativos de Ingeniero Ambiental Industrial y la Licenciatura en Enseñanza del Inglés."
        },
        {
          titulo:"Se logra acreditación CACECA",
          subtitulo:"2009",
          descripcion:"Aprobación por el Consejo Directivo y validado por la Secretaría de la Contraloría General del Estado, el Reglamento Interior del Centro de Estudios Superiores del Estado de Sonora, publicado en el Boletín Oficial del Gobierno del Estado de Sonora, el 31 de agosto del 2009."
        },
        {
          titulo:"Matrícula ciclo 2009-2010",
          subtitulo:"2009",
          descripcion:"Un total de 6,403 alumnos estudiaban en las cinco unidades académicas, registrando un incremento del 15% en la matrícula de primer ingreso."
        }
      ]
    },
    {
      anno:"2012",
      lado:true,
      actividades:[
        {
          titulo:"Inicia la UES",
          subtitulo:"2012",
          descripcion:"El Centro de Estudios Superiores del Estado de Sonora CESUES, cambia su nombre a Universidad Estatal de Sonora UES, el 1 de septiembre de 2012."
        }
      ]
    },
    {
      anno:"2015",
      lado:false,
      actividades:[
        {
          titulo:"Matrícula ciclo 2015-2016",
          subtitulo:"2015",
          descripcion:"Un total de 7,995 alumnos estudiaban en la Universidad Estatal de Sonora."
        }
      ]
    },
    {
      anno:"2016",
      lado:true,
      actividades:[
        {
          titulo:"Política Educativa Institucional renovada",
          subtitulo:"2016",
          descripcion:"Con la renovación de las acciones y estrategias de la política educativa institucional, centrada en el estudiante, se lograron las condiciones necesarias para que la Universidad, fuera de interés para las comunidades en las que se cuenta con una Unidad Académica."
        },
        {
          titulo:"Matrícula ciclo 2016-2017",
          subtitulo:"2016",
          descripcion:"Un total de 4,399 fue la población escolar de nuevo ingreso, alcanzando una cifra histórica con un incremento del 48.2% en la población de nuevo ingreso. <br><br> Se logró la cifra de 11,090 estudiantes, distribuidos en las 5 Unidades Académicas y consiguiendo un crecimento del 38.6%."
        },
        {
          titulo:"Se logra certificación ISO 9001:2008",
          subtitulo:"2016",
          descripcion:"Se logró la certificación del Sistema de Gestión de Calidad bajo la norma internacional ISO 9001:2008, con la asesoría de la Casa Certificadora Global Group. Certificando a las cinco Unidades Académicas y a Rectoría."
        }
      ]
    },
    {
      anno:"2017",
      lado:false,
      actividades:[
        {
          titulo:"Optimización de los recursos",
          subtitulo:"2017",
          descripcion:"Del 2015 al 2017 el costo anual por alumno se redujo de $81 mil pesos a $40 mil pesos aproximadamente."
        },
        {
          titulo:"Se logra certificación ISO 9001:2015",
          subtitulo:"2017",
          descripcion:"Se logró la recertificación del Sistema de Gestión de la Calidad bajo la norma internacional ISO 9001:2015, en las cinco Unidades Académicas y Rectoría."
        },
        {
          titulo:"Orgullo Berrendos",
          subtitulo:"2017",
          descripcion:"En la Universiada Nacional 2017 realizada en la Universidad Autónoma de Nuevo León, se obtuvieron 16 medallas y el 7° lugar nacional, así como 2 medallas de oro en el mundial universitario de Taipéi."
        }
      ]
    },
    {
      anno:"2018",
      lado:true,
      actividades:[
        {
          titulo:"Haciendo historia",
          subtitulo:"2018",
          descripcion:"Con 14,055 estudiantes cuenta la UES para este ciclo escolar, la cifra más grande en la historia, un 75.7% más que en 2015. <br> La oferta educativa más completa de la historia con 27 programas educativos, 22 de nivel Licenciatura e Ingeniería, 2 de TSU y 3 de Maestría."
        }
      ]
    }
  ]

}
