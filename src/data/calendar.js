
export default [
  {
    title: 'viernes 24/4',
    startsAgenda: new Date(Date.UTC(2020,3,24,12,0,0)),
    endsAgenda: new Date(Date.UTC(2020,3,25,1,0,0)),
    agenda: [
      {
        starts: new Date(Date.UTC(2020,3,24,12,0,0)),
        ends: new Date(Date.UTC(2020,3,24,12,15,0)),
        type: 'Bienvenida',
        videoId: null,
        icons: [],
        schedule: []
      },
      {
        starts: new Date(Date.UTC(2020,3,24,12,15,0)),
        ends: new Date(Date.UTC(2020,3,24,13,0,0)),
        type: 'Conferencia Keynote',
        videoId: 'g4D5FPxWqwc',
        icons: [],
        hashtags:[
          '#ciudadescomunes'
        ],
        schedule: [
          {
            title: 'Conferencia inaugural Saskia Sassen',
            with:[
              {
                name: 'Saskia Sassen',
                type: 'Conferencista',
                "picture": "saskiasassen.jpg",
                org: null,
                instagram: null,
                twitter: 'SaskiaSassen',
                facebook: null,
                mod: false 
              },
              {
                name: 'Rosario Fassina',
                type: 'Moderadora',
                "picture": "rosariofassina.jpg",
                org: 'Ciudades Comunes',
                instagram: 'rofassina',
                twitter: 'rosario_f',
                facebook: null,
                mod: true 
              }
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,13,0,0)),
        ends: new Date(Date.UTC(2020,3,24,14,0,0)),
        videoId: 'ykmf7Lz0Kzc',
        type: 'Conferencia Keynote',
        icons: ['d'],
        hashtags:[
          '#desarrolloregenerativo'
        ],
        schedule: [
          {
            title: 'Adaptación profunda: cómo construir la narrativa de regeneración',
            with:[
              {
                name: 'Flavia Broffoni',
                type: 'Conferencista',
                "picture": "flaviabroffoni.jpg",
                org: 'Activista',
                instagram: 'flaviabroffoni',
                twitter: 'FlaBroffoni',
                facebook: null,
                mod: false 
              },
              {
                name: 'Melina Scioli',
                type: 'Moderadora',
                "picture": "melinascioli.jpg",
                org: 'Artículo 41',
                instagram: 'meliscioli',
                twitter: 'melinda_sc',
                facebook: null,
                mod: true 
              }
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,14,0,0)),
        ends: new Date(Date.UTC(2020,3,24,15,0,0)),
        videoId: '5PneU9ILvrY',
        type: 'Panel',
        icons: ['l'],
        hashtags:[
          '#laboratorioscivicos'
        ],
        schedule: [
          {
            title: 'Experimentar en tiempos de Coronavirus',
            with:[
              {
                name: 'Lorena Ruiz',
                type: 'Panelista',
               "picture": "lorenaruiz.jpg",
                org: 'Investigadora',
                instagram: null,
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Christian Parra',
                type: 'Panelista',
                "picture": "christianparra.jpg",
                org: 'PNUD Paraguay',
                instagram: 'cdparra',
                twitter: 'cdparra',
                facebook: 'cristhian.parra',
                mod: false 
              },
              {
                name: 'Javier Arteaga',
                type: 'Panelista',
                "picture": "javierarteaga.jpg",
                org: 'Feeling',
                instagram: 'bienpensado',
                twitter: 'bienpensado',
                facebook: 'larevolucioncreativa',
                mod: false 
              },
              {
                name: 'Mariana Salgado',
                type: 'Moderadora',
                "picture": "marianasalgado.jpg",
                org: 'Diseño y Diáspara',
                instagram: 'mariansalgado',
                twitter: 'Salgado',
                facebook: 'mariana.salgado',
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,15,0,0)),
        ends: new Date(Date.UTC(2020,3,24,16,0,0)),
        type: 'Charlas Relámpagos',
        videoId: 'rDo4HLtxJys',
        icons: ['g','p','l','c'],
        hashtags:[
          '#gobiernoabierto',
          '#posdomesticidades',
          '#laboratorioscívicos'
        ],
        schedule: [
          {
            title: 'Charlas relámpago',
            with: [
              {
                name: 'Sol González Sañudo',
                type: 'Expositora Charla Relámpago',
                "picture": "solgonzalezsanudo.jpg",
                org: 'Sumando',
                instagram: 'sumando_arg',
                twitter: 'Sumando_arg',
                facebook: 'Sumando_arg',
                mod: false 
              },
              {
                name: 'Luciano Intile',
                type: 'Expositor Charla Relámpago',
                "picture": "lucianointile.jpg",
                org: 'iR arquitectura',
                instagram: 'ir.arquitectura',
                twitter: 'IRarquitectura',
                facebook: 'IRarquitectura',
                mod: false 
              },
              {
                name: 'Alexander Correa',
                type: 'Expositor Charla Relámpago',
                "picture": "alexandercorrea.jpg",
                org: 'Platohedro',
                instagram: 'platohedro',
                twitter: 'platohedro',
                facebook: 'platohedro',
                mod: false 
              },
              {
                name: 'Paola Pollmeier',
                type: 'Expositora Charla Relámpago',
                "picture": "paolapollmeier.jpg",
                org: 'Sumando',
                instagram: 'platossinfronteras',
                twitter: 'paolapollmeier',
                facebook: 'PlatosSinFronteras.Colombia',
                mod: false 
              },
              {
                name: 'Luciana Renner',
                type: 'Expositora Charla Relámpago',
                "picture": "lucianarenner.jpg",
                org: 'Sumando',
                instagram: 'placemakingmx',
                twitter: null,
                facebook: null,
                mod: false 
              },
            ]
          }
        ],
        // schedule: [
        //   {
        //     title: 'Sumando',
        //     with:[
        //       {
        //         name: 'Sol González Sañudo',
        //         type: 'Expositora Charla Relámpago',
        //         "picture": "solgonzalezsanudo.jpg",
        //         org: 'Sumando',
        //         instagram: 'sumando_arg',
        //         twitter: 'Sumando_arg',
        //         facebook: 'Sumando_arg',
        //         mod: false 
        //       },
        //     ],
        //     hashtags:[
        //       '#gobiernoabierto'
        //     ],
        //   },
        //   {
        //     title: 'Microcomunidades',
        //     with:[
        //       {
        //         name: 'Luciano Intile',
        //         type: 'Expositor Charla Relámpago',
        //         "picture": "lucianointile.jpg",
        //         org: 'iR arquitectura',
        //         instagram: 'ir.arquitectura',
        //         twitter: 'IRarquitectura',
        //         facebook: 'IRarquitectura',
        //         mod: false 
        //       },
        //     ],
        //     hashtags:[
        //       '#posdomesticidades'
        //     ],
        //   },
        //   {
        //     title: 'Platohedro',
        //     with:[
        //       {
        //         name: 'Alexander Correa',
        //         type: 'Expositor Charla Relámpago',
        //         "picture": "alexandercorrea.jpg",
        //         org: 'Platohedro',
        //         instagram: 'platohedro',
        //         twitter: 'platohedro',
        //         facebook: 'platohedro',
        //         mod: false 
        //       },
        //     ],
        //     hashtags:[
        //       '#laboratorioscívicos'
        //     ],
        //   },
        //   {
        //     title: 'Platos sin Fronteras',
        //     with:[
        //       {
        //         name: 'Paola Pollmeier',
        //         type: 'Expositora Charla Relámpago',
        //         "picture": "paolapollmeier.jpg",
        //         org: 'Sumando',
        //         instagram: 'platossinfronteras',
        //         twitter: 'paolapollmeier',
        //         facebook: 'PlatosSinFronteras.Colombia',
        //         mod: false 
        //       },
        //     ],
        //     hashtags:[
        //       '#laboratorioscívicos'
        //     ],
        //   },
        //   {
        //     title: 'Fundación Placemaking México',
        //     with:[
        //       {
        //         name: 'Luciana Renner',
        //         type: 'Expositora Charla Relámpago',
        //         "picture": "lucianarenner.jpg",
        //         org: 'Sumando',
        //         instagram: 'placemakingmx',
        //         twitter: null,
        //         facebook: null,
        //         mod: false 
        //       },
        //     ],
        //     hashtags:[
        //       '#gobiernoabierto'
        //     ],
        //   },
        // ],
        moderators:[
          {
            name: 'Juan López Aranguren',
            type: 'Moderador',
            org: 'Basurama',
            instagram: 'tutuytu',
            twitter: 'tutuytu',
            facebook: null,
            mod: true 
          },
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,16,0,0)),
        ends: new Date(Date.UTC(2020,3,24,17,0,0)),
        videoId: 'tRYkotUH7T8',
        type: 'Panel',
        icons: ['p'],
        hashtags:[
          '#postdomesticidades'
        ],
        schedule: [
          {
            title: 'Desafíos urbano-habitacionales frente a la fragilidad',
            with:[
              {
                name: 'Ana Falú',
                type: 'Panelista',
                "picture": "anafalu.jpg",
                org: 'CISCSA / UNC / RED MUJER Y HABITAT -HIC',
                instagram: 'ana.falu',
                twitter: null,
                facebook: 'ana.falu',
                mod: false 
              },
              {
                name: 'Javier Fernández Castro',
                type: 'Panelista',
                "picture": "javierfernandezcastro.jpg",
                org: 'Secretario Nacional de Hábitat / IEH FADU-UBA',
                instagram: 'javierfernandezcastro7',
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Zaida Muxí',
                type: 'Panelista',
                "picture": "zaidamuxi.jpg",
                org: 'ETSAB-UPC',
                instagram: 'zaidamux',
                twitter: 'zaidamuxim',
                facebook: 'zaida.muxi',
                mod: false 
              },
              {
                name: 'Víctor Franco López',
                type: 'Moderador',
                "picture": "victorfranco.jpg",
                org: 'Colectiva Habitaria',
                instagram: 'victorfrancolopez',
                twitter: '_victor_franco',
                facebook: 'victor.francolopez.90',
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,17,0,0)),
        ends: new Date(Date.UTC(2020,3,24,18,0,0)),
        videoId: 'Cot0_cSI440',
        type: 'Conferencia Keynote',
        icons: ['c'],
        hashtags:[
          '#ciudadinclusiva'
        ],
        schedule: [
          {
            title: 'Urbanismo Feminista: repensar espacios desde la diversidad de necesidades',
            with:[
              {
                name: 'Adriana Ciocoletto',
                type: 'Conferencista',
                "picture": "adrianaciocoletto.jpg",
                org: 'Col·lectiu Punt 6',
                instagram: 'collectiupunt6',
                twitter: 'CollectiuPunt6',
                facebook: 'CollectiuPunt6',
                mod: false 
              },
              {
                name: 'Cecilia Ciancio',
                type: 'Moderadora',
               "picture": "ceciliacianco.jpg",
                org: 'Urbanismo Vivo',
                instagram: 'ceciciancio',
                twitter: 'ceci_ciancio',
                facebook: null,
                mod: true 
              },
              {
                name: 'Carolina Huffmann',
                type: 'Moderadora',
                "picture": "carolinahuffman.jpg",
                org: 'Urbanismo Vivo',
                instagram: 'carohuffmann',
                twitter: 'CaroHuffmann',
                facebook: null,
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,18,0,0)),
        ends: new Date(Date.UTC(2020,3,24,19,30,0)),
        videoId: 'iTNiccZiF4E',
        type: 'Taller',
        icons: ['p'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Exploraciones para escenarios posdomésticos',
            with:[
              {
                name: 'Víctor Franco López',
                type: 'Tallerista',
                org: 'Colectiva Habitaria',
                instagram: 'colectiva_habitaria',
                twitter: 'c_habitaria',
                facebook: 'colectiva.habitaria',
                mod: false 
              },
              {
                name: 'Natalia Kahanoff',
                type: 'Tallerista',
                org: 'Colectiva Habitaria',
                instagram: 'colectiva_habitaria',
                twitter: 'c_habitaria',
                facebook: 'colectiva.habitaria',
                mod: false 
              },
              {
                name: 'Martín Pego',
                type: 'Tallerista',
                org: 'Colectiva Habitaria',
                instagram: 'colectiva_habitaria',
                twitter: 'c_habitaria',
                facebook: 'colectiva.habitaria',
                mod: false 
              },
              {
                name: 'Luciana Pellegrino',
                type: 'Tallerista',
                org: 'Colectiva Habitaria',
                instagram: 'colectiva_habitaria',
                twitter: 'c_habitaria',
                facebook: 'colectiva.habitaria',
                mod: false 
              },
            ],
             hashtags:[
             '#postdomesticidades',
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,18,0,0)),
        ends: new Date(Date.UTC(2020,3,24,19,30,0)),
        type: 'Taller',
        videoId: 'mPBF_IgT5Fs',
        icons: ['d'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'El lugar como sistema vivo',
            with:[
              {
                name: 'Rodrigo Castro Volpe',
                type: 'Tallerista',
                org: 'Articulo 41',
                instagram: null,
                twitter: 'RodrigoCVolpe',
                facebook: null,
                mod: false 
              },
              {
                name: 'Melina Scioli',
                type: 'Tallerista',
                org: 'Articulo 41',
                instagram: 'meliscioli',
                twitter: 'melinda_sc',
                facebook: null,
                mod: false 
              },
            ],
            hashtags:[
              '#desarrolloregenerativo'
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,19,30,0)),
        ends: new Date(Date.UTC(2020,3,24,21,0,0)),
        type: 'Taller',
        videoId: 'OKp6x7_2w8k',
        icons: ['g'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Herramientas digitales para gobierno abierto',
            with:[
              {
                name: 'Florencia Caffarone',
                type: 'Tallerista',
                org: 'Democracia en Red',
                instagram: 'democraciaenred',
                twitter: 'fundacionDER',
                facebook: 'democraciaenred',
                mod: false 
              },
              {
                name: 'Don Powa',
                type: 'Tallerista',
                org: null,
                instagram: null,
                twitter: 'fundacionDER',
                facebook: 'democraciaenred',
                mod: false 
              },
            ],
            hashtags:[
              '#gobiernoabierto'
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,19,30,0)),
        ends: new Date(Date.UTC(2020,3,24,21,0,0)),
        type: 'Taller',
        videoId: 'AFOM45jVt0o',
        icons: ['g'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Fairbnb.coop: Cómo activar la economía circular en tiempos de corona virus',
            with:[
              {
                name: 'Domenico Di Siena',
                type: 'Tallerista',
                org: 'Fairbnb.coop',
                instagram: 'fairbnb.coop',
                twitter: 'Fairbnb_coop',
                facebook: 'Fairbnbcoop',
                mod: false 
              },
              {
                name: 'Jonathan Reyes',
                type: 'Tallerista',
                org: 'Fairbnb.coop',
                instagram: 'fairbnb.coop',
                twitter: 'Fairbnb_coop',
                facebook: 'Fairbnbcoop',
                mod: false 
              },
            ],
            hashtags:[
              '#fairbnbcoop'
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,21,0,0)),
        ends: new Date(Date.UTC(2020,3,24,22,0,0)),
        videoId: 'IYUCuQq9NK0',
        type: 'Panel',
        icons: ['h'],
        hashtags:[
          '#habitatyjusticiasocial',
        ],
        schedule: [
          {
            title: 'COVID 19 y barrios populares: desafíos de las medidas sanitarias en contextos de vulnerabilidad urbana',
            with:[
              {
                name: 'Eduardo Resse',
                type: 'Panelista',
                "picture": "eduardoreese.jpg",
                org: 'CELS',
                instagram: null,
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Martin Motta',
                type: 'Panelista',
                "picture": "martinmotta.jpg",
                org: 'IVC',
                instagram: null,
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Paola Siclari',
                type: 'Panelista',
                "picture": "paolasiclari.jpg",
                org: null,
                instagram: null,
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Rosario Fassina',
                "picture": "rosariofassina.jpg",
                type: 'Moderadora',
                org: 'Ciudades Comunes',
                instagram: 'rofassina',
                twitter: 'rosario_f',
                facebook: null,
                mod: true 
              },
              
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,22,0,0)),
        ends: new Date(Date.UTC(2020,3,24,23,0,0)),
        videoId: 'jMs-S-MCdyg',
        type: 'Conferencia Keynote',
        icons: ['g'],
        hashtags:[
          '#gobiernoabierto',
        ],
        schedule: [
          {
            title: 'El impacto de la crisis actual en las decisiones de las ciudades',
            with:[
              {
                name: 'Maria Buhigas',
                type: 'Conferencista',
                "picture": "mariabuhigas.jpg",
                org: 'Regidora del Ayuntamiento de Barcelona',
                instagram: null,
                twitter: 'mariabuhigas',
                facebook: null,
                mod: false 
              },
              {
                name: 'Agustin Frizzera',
                type: 'Moderador',
                "picture": "agustinfrizzera.jpg",
                org: '',
                instagram: 'agustinfrizzera',
                twitter: 'agustinfrizzera',
                facebook: null,
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,24,23,0,0)),
        ends: new Date(Date.UTC(2020,3,25,0,0,0)),
        videoId: null,
        type: 'Espacio Común',
        icons: [],
        hashtags:[
          '#ciudadescomunes'
        ],
        schedule: []
      },
    ]
  },
  {
    title: 'sábado 25/4',
    starts: new Date(Date.UTC(2020,3,25,12,0,0)),
    agenda: [
      {
        starts: new Date(Date.UTC(2020,3,25,12,0,0)),
        ends: new Date(Date.UTC(2020,3,25,12,15,0)),
        videoId: null,
        type: 'Bienvenida',
        icons: [],
        schedule: []
      },
      {
        starts: new Date(Date.UTC(2020,3,25,12,15,0)),
        ends: new Date(Date.UTC(2020,3,25,14,0,0)),
        videoId: 'AZ_Abd7wvgU',
        type: 'Panel',
        icons: [],
        hashtags:[
          '#ciudadescomunes'
        ],
        schedule: [
          {
            title: 'COVID19 y el vínculo con lo publico: tensiones y oportunidades',
            with: [
              {
                name: 'Clara Muzzio',
                type: 'Panelista',
                "picture": "claramuzzio.jpg",
                org: 'Ministra de Espacio Público e Higiene Urbana- GCBA',
                instagram: 'clara.muzzio',
                twitter: 'claramuzzio',
                facebook: null,
                mod: false 
              },
              {
                name: 'Marcela Mondino',
                type: 'Panelista',
                "picture": "marcelamondino.jpg",
                org: 'Responsable América Latina Programa Ciudades Sustentables, Fundación Avina',
                instagram: 'fundacionavina',
                twitter: 'fundacionAVINA',
                facebook: null,
                mod: false 
              },
              {
                name: 'Tamara Egger',
                type: 'Panelista',
                "picture": "tamaraegger.jpg",
                org: 'BID Cities Lab',
                instagram: 'bid_ciudades',
                twitter: 'BID_Ciudades',
                facebook: null,
                mod: false 
              },
              {
                name: 'José Chong',
                type: 'Panelista',
                "picture": "josechong.jpg",
                org: 'ONUHabitat',
                instagram: 'onuhabitatlc',
                twitter: 'onuhabitat',
                facebook: null,
                mod: false 
              },
              {
                name: 'Agustin Frizzera',
                type: 'Moderador',
                "picture": "agustinfrizzera.jpg",
                org: 'Ciudades Comunes',
                instagram: 'agustinfrizzera',
                twitter: 'agustinfrizzera',
                facebook: null,
                mod: true
              },
              
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,14,0,0)),
        ends: new Date(Date.UTC(2020,3,25,15,0,0)),
        videoId: 'PZMg8idwvGw',
        type: 'Conferencia Keynote',
        icons: [],
        hashtags:[
          '#ciudadescomunes'
        ],
        schedule: [
          {
            title: 'Conferencia inaugural Guillermo Peñalosa',
            with: [
              {
                name: 'Guillermo Peñalosa',
                type: 'Conferencista',
                "picture": "guillermopenalosa.jpg",
                org: '8 80 cities',
                instagram: 'penalosagmo',
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Domenico Di Siena',
                type: 'Moderador',
                "picture": "domenicodisiena.jpg",
                org: '',
                instagram: 'urbanohumano',
                twitter: 'urbanohumano',
                facebook: null,
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,15,0,0)),
        ends: new Date(Date.UTC(2020,3,25,16,0,0)),
        videoId: '6zYyc691K-M',
        type: 'Conferencia Keynote',
        icons: ['p'],
        hashtags:[
          '#posdomesticidades'
        ],
        schedule: [
          {
            title: 'Coreografias domésticas',
            with: [
              {
                name: 'Uriel Fogué Herreros',
                type: 'Conferencista',
                "picture": "urielfogue.jpg",
                org: 'elii [oficina de arquitectura] / GCFP (Gabinete de Crisis de Ficciones Políticas)',
                instagram: 'elii_architecture',
                twitter: 'elii_info',
                facebook: 'eliiarchitectureoffice',
                mod: false 
              },
              {
                name: 'Víctor Franco López',
                type: 'Moderador',
               "picture": "victorfranco.jpg",
                org: 'Colectiva Habitaria',
                instagram: 'victorfrancolopez',
                twitter: '_victor_franco',
                facebook: 'victor.francolopez.90',
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,16,0,0)),
        ends: new Date(Date.UTC(2020,3,25,17,0,0)),
        videoId: 'm5l0745q--k',
        type: 'Conferencia Keynote',
        icons: ['l'],
        hashtags:[
          '#laboratorioscívicos'
        ],
        schedule: [
          {
            title: 'Experimentar para la implementación de políticas públicas',
            with: [
              {
                name: 'Ernesto L. Figueroa',
                type: 'Conferencista',
                "picture": "ernestolfigueroa.jpg",
                org: 'NQN-Lab',
                instagram: 'ernestol.figueroa',
                twitter: 'negrofigueroa13',
                facebook: 'ErnestoLFigueroa13',
                mod: false 
              },
              {
                name: 'Domenico Di Siena',
                "picture": "domenicodisiena.jpg",
                type: 'Moderador',
                org: 'CivicWise',
                instagram: 'urbanohumano',
                twitter: 'urbanohumano',
                facebook: 'DiSienaDomenico',
                mod: true 
              },
              
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,17,0,0)),
        ends: new Date(Date.UTC(2020,3,25,18,0,0)),
        videoId: 'sscgncL3074',
        type: 'Panel',
        icons: ['d'],
        hashtags:[
          '#desarrolloregenerativo'
        ],
        schedule: [
          {
            title: 'Relaciones entre la crisis sanitaria y la crisis climática y ecológica',
            with: [
              {
                name: 'Eduard Muller',
                type: 'Panelista',
               "picture": "eduardmuller.jpg",
                org: 'Rector de la Universidad para la Cooperación Internacional',
                instagram: 'EduardMuller',
                twitter: 'EduardMullerC',
                facebook: null,
                mod: false 
              },
              {
                name: 'Christopher Anderson',
                type: 'Panelista',
                "picture": "christopheranderson.jpg",
                org: 'IPBES',
                instagram: 'dr.c.b.anderson',
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Antonella Risso',
                type: 'Panelista',
                org: 'Salud sin daño',
                instagram: null,
                twitter: null,
                facebook: null,
                mod: false 
              },
              {
                name: 'Marina Aizen',
                "picture": "marinaaizen.jpg",
                type: 'Moderadora',
                org: 'Periodistas por el Planeta',
                instagram: 'marinaaizen1',
                twitter: 'marinaaizen',
                facebook: 'pxpLAC',
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,18,0,0)),
        ends: new Date(Date.UTC(2020,3,25,19,30,0)),
        videoId: '_MhdE4L39f4',
        type: 'Panel',
        icons: ['h'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Resignificar los espacios de encuentro',
            with: [
              {
                name: 'Mariana Alegre',
                type: 'Panelista',
                "picture": "marianaalegreescorza.jpg",
                org: 'Ocupa tu Calle',
                instagram: 'maralegre',
                twitter: 'maralegre',
                facebook: 'marianaalegre',
                mod: false 
              },
              {
                name: 'Antonella Milano',
                type: 'Panelista',
                "picture": "antonellamilano.jpg",
                org: 'Ecosistema Urbano',
                instagram: 'ecosistemaurbano',
                twitter: 'ecosistema',
                facebook: 'ecosistemaurbano',
                mod: false 
              },
              {
                name: 'Gustavo Dieguez',
                type: 'Panelista',
                "picture": "gustavodieguez.jpg",
                org: 'A77',
                instagram: 'crisanaz',
                twitter: 'crisanaz',
                facebook: 'gustavo.dieguez.9',
                mod: false 
              },
              {
                name: 'Alejandro Echeverri',
                type: 'Panelista',
                "picture": "alejandroecheverri.jpg",
                org: 'Urbam',
                instagram: null,
                twitter: 'cachoecheverri',
                facebook: null,
                mod: false 
              },
              {
                name: 'María Tomé',
                type: 'Moderadora',
               "picture": "mariatome.jpg",
                org: 'Oficina de Innovación Cívica',
                instagram: '_mariatome',
                twitter: '_MariaTome',
                facebook: null,
                mod: true 
              },
              {
                name: 'Analía Hanono',
                type: 'Moderadora',
                "picture": "analiahanono.jpg",
                org: 'Urbanismo Vivo',
                instagram: 'analiahanono',
                twitter: null,
                facebook: null,
                mod: true 
              },
            ],
            hashtags:[
              '#ciudadinclusiva',
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,18,0,0)),
        ends: new Date(Date.UTC(2020,3,25,19,30,0)),
        videoId: 'EvLAi8h2wpI',
        type: 'Taller',
        icons: ['c'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Empoderamiento comunitario como herramienta para el cambio en barrios populares',
            with: [
              {
                  name: 'Sofia Veliz',
                  type: 'Tallerista',
                  org: 'ACIJ',
                  instagram: 'acij.arg',
                  twitter: 'ACIJargentina',
                  facebook: 'ACIJ.ORG',
                  mod: false 
                },
                {
                  name: 'Felipe Mesel',
                  type: 'Tallerista',
                  org: 'ACIJ',
                  instagram: 'acij.arg',
                  twitter: 'ACIJargentina',
                  facebook: 'ACIJ.ORG',
                  mod: false 
                },
                {
                  name: 'Laura Lacayo',
                  type: 'Tallerista',
                  org: 'ACIJ',
                  instagram: 'acij.arg',
                  twitter: 'ACIJargentina',
                  facebook: 'ACIJ.ORG',
                  mod: false 
                },
            ],
            hashtags:[
              '#habitatyjusticiasocial',
            ],
          },
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,18,0,0)),
        ends: new Date(Date.UTC(2020,3,25,19,30,0)),
        videoId: 'ecvkLoTWMF0',
        type: 'Taller',
        icons: ['h','c'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Red(d)Red(s)',
            with: [
              {
                name: 'Beto Infante',
                type: 'Tallerista',
                org: 'Tejeredes',
                instagram: 'tejeredes',
                twitter: 'tejeRedes',
                facebook: null,
                mod: false 
              },
              {
                name: 'Guillermo Bernal',
                type: 'Tallerista',
                org: 'Placemaking X',
                instagram: 'placemakingx',
                twitter: 'PlacemakingX',
                facebook: null,
                mod: false 
              },
              {
                name: 'Cecilia Ciancio',
                type: 'Tallerista',
                org: 'Urbanismo Vivo',
                instagram: 'urbanismo_vivo',
                twitter: 'UrbanismoVivo',
                facebook: 'urbanismovivo.buenosaires',
                mod: false 
              },
            ],
            hashtags:[
              '#placemakinglat'
            ],
          },
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,19,30,0)),
        ends: new Date(Date.UTC(2020,3,25,21,0,0)),
        videoId: 'lq6VMWvIyfU',
        type: 'Taller',
        icons: ['l'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'CO.VIDA: Metodologías Digitales para la Cocreación de nuestra vida social urbana',
            with: [
              {
                name: 'Domenico Di Siena',
                type: 'Tallerista',
                org: 'CivicWise',
                instagram: 'urbanohumano',
                twitter: 'urbanohumano',
                facebook: 'DiSienaDomenico',
                mod: false 
              },
              {
                name: 'Carolina Carrasco',
                type: 'Tallerista',
                org: 'Espacio Lúdico ',
                instagram: 'espacioludico',
                twitter: 'espacioludico',
                facebook: 'ongespacioludico',
                mod: false 
              },
              {
                name: 'Jose Miguel Lopez',
                type: 'Tallerista',
                org: 'Espacio Lúdico ',
                instagram: 'espacioludico',
                twitter: 'espacioludico',
                facebook: 'ongespacioludico',
                mod: false 
              },
            ],
            hashtags:[
              '#laboratorioscívicos'
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,19,30,0)),
        ends: new Date(Date.UTC(2020,3,25,21,0,0)),
        videoId: 'FcNCuYrKaOg',
        type: 'Taller',
        icons: ['c'],
        hashtags:['#ciudadescomunes'],
        schedule: [
          {
            title: 'Rebeldía Urbana',
            with: [
              {
                name: 'Analía Hanono',
                type: 'Tallerista',
                org: 'Urbanismo Vivo',
                instagram: 'urbanismo_vivo',
                twitter: 'UrbanismoVivo',
                facebook: 'urbanismovivo.buenosaires',
                mod: false 
              },
              {
                name: 'Matías Lastra',
                type: 'Tallerista',
                org: 'Urbanismo Vivo',
                instagram: 'urbanismo_vivo',
                twitter: 'UrbanismoVivo',
                facebook: 'urbanismovivo.buenosaires',
                mod: false 
              },
              {
                name: 'Leonardo Brawl Márquez',
                type: 'Tallerista',
                org: 'Translab.urb',
                instagram: 'translab.urb',
                twitter: 'TransLabUrb',
                facebook: 'TransLAB.URB',
                mod: false 
              },
              {
                name: 'Fausto Bugatti ',
                type: 'Tallerista',
                org: 'Translab.urb',
                instagram: 'translab.urb',
                twitter: 'TransLabUrb',
                facebook: 'TransLAB.URB',
                mod: false 
              },
              {
                name: 'Mario Galvão Prati',
                type: 'Tallerista',
                org: 'Translab.urb',
                instagram: 'translab.urb',
                twitter: 'TransLabUrb',
                facebook: 'TransLAB.URB',
                mod: false 
              },
            ],
            hashtags:[
              '#ciudadinclusiva'
            ],
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,21,0,0)),
        ends: new Date(Date.UTC(2020,3,25,22,0,0)),
        videoId: '5beGeuQElZw',
        type: 'Panel',
        icons: ['g'],
        hashtags:[
          '#gobiernoabierto'
        ],
        schedule: [
          {
            title: '¿Cambia la forma de gobernar?',
            with: [
              {
                name: 'Fabio Quetglas',
                type: 'Panelista',
               "picture": "fabioquetglas.jpg",
                org: 'Diputado Nacional Argentino',
                instagram: 'fabioquetglas',
                twitter: 'fabiojquetglas',
                facebook: 'DiputadoFabioQuetglas',
                mod: false 
              },
              {
                name: 'Donka Atanassova',
                type: 'Panelista',
                "picture": "donkaatanassova.jpg",
                org: 'Alcaldía de Bogotá',
                instagram: 'donka_at',
                twitter: 'DonkaAt',
                facebook: 'DonkaAtanassova',
                mod: false 
              },
              {
                name: 'Lucía Abelenda',
                type: 'Panelista',
                "picture": "luciaabelenda.jpg",
                org: 'AVINA',
                instagram: 'comluac',
                twitter: 'comluac',
                facebook: null,
                mod: false 
              },
              {
                name: 'Agustin Frizzera',
                type: 'Panelista',
               "picture": "agustinfrizzera.jpg",
                org: 'Democracia en Red',
                instagram: 'agustinfrizzera',
                twitter: 'agustinfrizzera',
                facebook: 'agustin.frizzera',
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,22,0,0)),
        ends: new Date(Date.UTC(2020,3,25,23,0,0)),
        videoId: 'NVqIxroiA7w',
        type: 'Conferencia Keynote',
        icons: ['h'],
        hashtags:[
          '#habitatyjusticiasocial'
        ],
        schedule: [
          {
            title: 'Azotes globales, crisis, miedos y ciudad',
            with: [
              {
                name: 'Margarita Gutman',
                type: 'Conferencista',
                "picture": "margaritagutman.jpg",
                org: '',
                instagram: null,
                twitter: null,
                facebook: 'margarita.gutman.5',
                mod: false 
              },
              {
                name: 'Pablo Vitale',
                type: 'Moderador',
                "picture": "pablovitale.jpg",
                org: 'ACIJ',
                instagram: null,
                twitter: 'pablovitale_',
                facebook: null,
                mod: true 
              },
            ]
          }
        ]
      },
      {
        starts: new Date(Date.UTC(2020,3,25,23,0,0)),
        ends: new Date(Date.UTC(2020,3,26,0,0,0)),
        videoId: null,
        type: 'Espacio común',
        icons: [],
        hashtags:[
          '#ciudadescomunes'
        ],
        schedule: []
      },
      {
        starts: new Date(Date.UTC(2020,3,26,0,0,0)),
        ends: new Date(Date.UTC(2020,3,26,1,0,0)),
        videoId: null,
        type: 'Dentrofuera',
        icons: [],
        hashtags:[
          '#dentrofuera'
        ],
        schedule: [
          {
            title: '',
            with:[
                {
                  name: '<i>Activaciones Urbanas</i><br><i class="fas fa-arrow-right"></i>&nbsp;<a href="https://ciudadescomunes.org/dentrofuera" target="_blank">¡Hacé clic y sumate!</a><br><a href="https://instagram.com/ciudades.comunes"><i class="fab fa-instagram"></i>&nbsp;¡Seguinos en instagram!</a>',
                  type: '',
                  org: '',
                  instagram: null,
                  twitter: null,
                  facebook: null,
                  mod: false 
                },
            ]
          }
        ]
      },
    ]
  }
]