// Gráfico de barras para Cantidades de Películas
const qm1 = document.getElementById('Q1');
const qm2 = document.getElementById('Q2');
const qm3 = document.getElementById('Q3');
const qm4 = document.getElementById('Q4');
const qm5 = document.getElementById('Q5');
const qm6 = document.getElementById('Q6');

// Gráfico de barras para Cantidades de Actores
const ac1 = document.getElementById('A1');
const ac2 = document.getElementById('A2');
const ac3 = document.getElementById('A3');
const ac4 = document.getElementById('A4');
const ac5 = document.getElementById('A5');
const ac6 = document.getElementById('A6');

// Gráfico de barras para Cantidades de Temas
const th1 = document.getElementById('T1');
const th2 = document.getElementById('T2');
const th3 = document.getElementById('T3');
const th4 = document.getElementById('T4');
const th5 = document.getElementById('T5');
const th6 = document.getElementById('T6');

// Gráfico de barras para Cantidades de Rating
const ra1 = document.getElementById('R1');
const ra2 = document.getElementById('R2');
const ra3 = document.getElementById('R3');
const ra4 = document.getElementById('R4');
const ra5 = document.getElementById('R5');
const ra6 = document.getElementById('R6');

// Gráfico de barras para Otras Gráficas
const ot1 = document.getElementById('O1');
const ot2 = document.getElementById('O2');
const ot3 = document.getElementById('O3');
const ot4 = document.getElementById('O4');
const ot5 = document.getElementById('O5');
const ot6 = document.getElementById('O6');

// Datos para las gráficas
let dataxqm1 = [] //productor
let datayqm1 = [] 
let dataxqm2 = [] //director
let datayqm2 = []
let dataxqm3 = [] //actor
let datayqm3 = []
let dataxqm4 = []//year
let datayqm4 = []
let dataxqm5 = []//genero
let datayqm5 = []
let dataxqm6 = []//idioma
let datayqm6 = []

let dataxac1 = [] //productor
let datayac1 = []
let dataxac2 = [] //director
let datayac2 = []
let dataxac3 = [] //peliculas
let datayac3 = []
let dataxac4 = [] //year
let datayac4 = []
let dataxac5 = [] //genero
let datayac5 = []
let dataxac6 = [] //idioma
let datayac6 = []

let dataxth1 = [] //generos
let datayth1 = []
let dataxth2 = [] //director
let datayth2 = []
let dataxth3 = [] //actor
let datayth3 = []
let dataxth4 = [] //año
let datayth4 = []
let dataxth5 = [] //idioma
let datayth5 = []
let dataxth6 = [] //tematica
let datayth6 = []

let dataxra1 = [] // productor
let datayra1 = []
let dataxra2 = [] // director
let datayra2 = []
let dataxra3 = [] // actor
let datayra3 = []
let dataxra4 = [] // temáticas
let datayra4 = []
let dataxra5 = [] // genero
let datayra5 = []
let dataxra6 = [] // años
let datayra6 = []

let dataxot1 = []  // países con mayor rating
let datayot1 = []  
let dataxot2 = [] // actores por país
let datayot2 = []
let dataxot3 = [] // películas por país
let datayot3 = []
let dataxot4 = [] // paises con más temas
let datayot4 = []
let dataxot5 = [] // idioma con más temas
let datayot5 = []
let dataxot6 = [] // TIERLIST rating por país
let datayot6 = []

// Instancias de las gráficas
let chartInstances = {
    q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", a1: "", a2: "", a3: "", a4: "", a5: "", a6: "", t1: "", t2: "", t3: "", t4: "", t5: "", t6: "", r1: "", r2: "", r3: "", r4: "", r5: "", r6: "", o1: "", o2: "", o3: "", o4: "", o5: "", o6: ""
};

// Diccionario, para saber qué filtro corresponde a qué gráfica
const filterToChart = {
    'q1' : qm3, 'q2' : qm2, 'q3' : qm1, 'q4' : qm4,'q5' : qm5, 'q6' : qm6, 'a1' : ac3,
    'a2' : ac2,
    'a3' : ac1,
    'a4' : ac4,
    'a5' : ac5,
    'a6' : ac6,
    't1' : th3,
    't2' : th2,
    't3' : th1,
    't4' : th4,
    't5' : th5,
    't6' : th6,
    'r1' : ra3,
    'r2' : ra2,
    'r3' : ra1,
    'r4' : ra4,
    'r5' : ra5,
    'r6' : ra6,
    'o1' : ot1,
    'o2' : ot2,
    'o3' : ot3,
    'o4' : ot4,
    'o5' : ot5,
    'o6' : ot6
};

// Diccionario, para saber qué clase corresponde a qué sufijo


const claseToSufixAsc = {

    'q1 asc' : 'actor/top10asc', 'q1 des' : 'actor/top10desc', 'q2 asc' : 'director/top10asc', 'q2 des' : 'director/top10desc', 'q3 asc' : 'productor/top10asc', 'q3 des' : 'productor/top10desc', 'q4 asc' : 'year/top10asc', 'q4 des' : 'year/top10desc', 'q5 asc' : 'genre/top10asc', 'q5 des' : 'genre/top10desc', 'q6 asc' : 'language/top10asc', 'q6 des' : 'language/top10desc',
    'a1 asc' : 'productor/cantActorsxproductor/top10asc', 'a1 des' : 'productor/cantActorsxproductor/top10desc', 'a2 asc' : 'director/cantActorsxDirector/top10asc', 'a2 des' : 'director/cantActorsxDirector/top10desc', 'a3 asc' : 'actor/cantActorsxMovies/top10asc', 'a3 des' : 'actor/cantActorsxMovies/top10desc', 'a4 asc' : 'year/cantActorsxYear/top10asc', 'a4 des' : 'year/cantActorsxYear/top10desc', 'a5 asc' : 'genre/cantActorsxGenre/top10asc', 'a5 des' : 'genre/cantActorsxGenre/top10desc', 'a6 asc' : 'language/cantActorsxLanguage/top10asc', 'a6 des' : 'language/cantActorsxLanguage/top10desc',
    'r3 asc' : 'actor/bestratingpromxactor/top10asc', 'r3 des' : 'actor/bestratingpromxactor/top10desc', 'r2 asc' : 'director/bestratingpromxDirector/top10asc', 'r2 des' : 'director/bestratingpromxDirector/top10desc', 'r1 asc' : 'genre/bestratingpromxGenre/top10asc', 'r1 des' : 'genre/bestratingpromxGenre/top10desc', 'r4 asc' : 'year/bestratingpromxYear/top10asc', 'r4 des' : 'year/bestratingpromxYear/top10desc', 'r5 asc' : 'language/bestratingpromxlanguage/top10asc', 'r5 des' : 'language/bestratingpromxlanguage/top10desc', 'r6 asc' : 'bestratingpromxTheme/top10asc', 'r6 des' : 'bestratingpromxTheme/top10desc',
    't3 asc' : 'actor/themesMoreRepxactor/top10asc', 't3 des' : 'actor/themesMoreRepxactor/top10desc', 't2 asc' : 'director/themesMoreRepxDirector/top10asc', 't2 des' : 'director/themesMoreRepxDirector/top10desc', 't1 asc' : 'productor/themesMoreRepxproductor/top10asc', 't1 des' : 'productor/themesMoreRepxproductor/top10desc', 't4 asc' : 'year/themesMoreRepxYear/top10asc', 't4 des' : 'year/themesMoreRepxYear/top10desc', 't5 asc' : 'genre/themesMoreRepxGenre/top10asc', 't5 des' : 'genre/themesMoreRepxGenre/top10desc', 't6 asc' : 'themeMoreRepet/top10asc', 't6 des' : 'themeMoreRepet/top10desc',
    'o5 asc' : 'language/themesMoreRepxLanguage/top10asc', 'o5 des' : 'language/themesMoreRepxLanguage/top10desc'
}

const checkboxes = document.querySelectorAll('input[type=checkbox]');
const url_countries = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';



checkboxes.forEach((checkbox) => {
    // Cuando hay un cambio en el checkbox
    checkbox.addEventListener('change', (e) => {
        // Obtiene el estado del checkbox (true o false)
        const checked = e.target.checked;
        const clase = e.target.className;

        if (checked) {            
            let chartId = clase.slice(0, 2);
            // Si la gráfica ya existe, la destruye
            console.log(chartId);
            if (chartInstances[chartId]) {
                chartInstances[chartId].destroy();
            }
            // Obtiene la variable para la URL
            variable = claseToSufixAsc[clase];
            
            let ruta = `http://localhost:8000/movies/${variable}`
            fetch(ruta) // Cambia la URL según tu configuración
            .then(response => response.json())
            .then(data => {
                // Asigna los datos a las listas
                let datax = [];
                let datay = [];
                switch (chartId) {
                    case 'q1':
                        datax = data.data.actors;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'q2':
                        datax = data.data.directors;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'q3':
                        datax = data.data.productors;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'q4':
                        datax = data.data.years;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'q5':
                        datax = data.data.genres;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'q6':
                        datax = data.data.languages;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'a1':
                        datax = data.data.productors;
                        datay = data.data.number_of_actors.map(Number);
                        break;
                    case 'a2':
                        datax = data.data.directors;
                        datay = data.data.number_of_actors.map(Number);
                        break;
                    case 'a3':
                        datax = data.data.actors;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'a4':
                        datax = data.data.years;
                        datay = data.data.number_of_actors.map(Number);
                        break;
                    case 'a5':
                        datax = data.data.genres;
                        datay = data.data.number_of_actors.map(Number);
                        break;
                    case 'a6':
                        datax = data.data.languages;
                        datay = data.data.number_of_actors.map(Number);
                        break;
                    case 'r1':
                        
                        datax = data.data.genres;
                        datay = data.data.rating_prom.map(Number);
                        break;
                    case 'r2':
                        datax = data.data.directors;
                        datay = data.data.rating_prom.map(Number);
                        break;
                    case 'r3':
                        datax = data.data.actors;
                        datay = data.data.rating.map(Number);
                        break;
                    case 'r4':
                        datax = data.data.years;
                        datay = data.data.rating_prom.map(Number);
                        break;
                    case 'r5': 
                        datax = data.data.languages;
                        datay = data.data.rating_prom.map(Number);
                        break;
                    case 'r6': 
                        datax = data.data.themes;
                        datay = data.data.avg_rating.map(Number);
                        break;
                    case 't1':
                        datax = data.data.productors;
                        datay = data.data.count_times.map(Number);
                        break;
                    case 't2':
                        datax = data.data.directors;
                        datay = data.data.count_times.map(Number);
                        break;
                    case 't3':
                        datax = data.data.actors;
                        datay = data.data.count_times.map(Number);
                        break;
                    case 't4':
                        datax = data.data.years;
                        datay = data.data.count_times.map(Number);
                        break;
                    case 't5':
                        datax = data.data.genres;
                        datay = data.data.count_times.map(Number);
                        break;
                    case 't6':
                        datax = data.data.themes;
                        datay = data.data.number_of_movies.map(Number);
                        break;
                    case 'o5':
                        datax = data.data.languages;
                        datay = data.data.count_times.map(Number);
                        break;
                }
                let chart = filterToChart[chartId];
                // Crea la gráfica después de llenar las listas
                let x = new Chart( chart, {
                    type: 'bar',
                    data: {
                        labels: datax,
                        datasets: [{
                            label: '#',
                            data: datay,
                            borderWidth: 1,
                            clip: 5
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                chartInstances[chartId] = x;
            
            })
            .catch(error => console.error('Error:', error));
        
        }
        
    });
});

fetch('http://localhost:8000/movies/productor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Asigna los datos a las listas
        dataxqm1 = data.data.productors;
        datayqm1 = data.data.number_of_movies.map(Number);;

        // Crea la gráfica después de llenar las listas
        const qm1c = new Chart(qm1, {
            type: 'bar',
            data: {
                labels: dataxqm1,
                datasets: [{
                    label: '#',
                    data: datayqm1,
                    borderWidth: 1,
                    clip: 5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.q3 = qm1c;
    })
    
    .catch(error => console.error('Error:', error));


fetch('http://localhost:8000/movies/director') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxqm2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayqm2 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const qm2c =new Chart(qm2, {
            type: 'bar',
            data: {
                labels: dataxqm2,
                datasets: [{
                    label: '#',
                    data: datayqm2,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.q2 = qm2c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {

        dataxqm3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayqm3 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON

        const qm3c =new Chart(qm3, {
            type: 'bar',
            data: {
            labels: dataxqm3,
            datasets: [{
                label: '#',
                data: datayqm3,
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });
        chartInstances.q1 = qm3c;
    })
    .catch(error => console.error('Error:', error));


fetch('http://localhost:8000/movies/year') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxqm4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayqm4 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const qm4c = new Chart(qm4, {
            type: 'bar',
            data: {
                labels: dataxqm4,
                datasets: [{
                    label: '#',
                    data: datayqm4,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.q4 = qm4c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxqm5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayqm5 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const qm5c = new Chart(qm5, {
            type: 'bar',
            data: {
                labels: dataxqm5,
                datasets: [{
                    label: '#',
                    data: datayqm5,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.q5 = qm5c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/language') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxqm6 = data.data.languages; // Cambia 'labels' según tu estructura JSON
        datayqm6 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const qm6c = new Chart(qm6, {
            type: 'bar',
            data: {
                labels: dataxqm6,
                datasets: [{
                    label: '#',
                    data: datayqm6,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.q6 = qm6c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/productor/cantActorsxproductor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac1 = data.data.productors; // Cambia 'labels' según tu estructura JSON
        datayac1 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ac3c = new Chart(ac3, {
            type: 'bar',
            data: {
                labels: dataxac1,
                datasets: [{
                    label: '#',
                    data: datayac1,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.a1 = ac3c;

    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/director/cantActorsxDirector') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayac2 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ac2c = new Chart(ac2, {
            type: 'bar',
            data: {
                labels: dataxac2,
                datasets: [{
                    label: '#',
                    data: datayac2,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.a2 = ac2c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor/cantActorxMovies') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayac3 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ac1c = new Chart(ac1, {
            type: 'bar',
            data: {
                labels: dataxac3,
                datasets: [{
                    label: '#',
                    data: datayac3,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.a3 = ac1c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/year/cantActorsxYear') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayac4 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ac4c = new Chart(ac4, {
            type: 'bar',
            data: {
                labels: dataxac4,
                datasets: [{
                    label: '#',
                    data: datayac4,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.a4 = ac4c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre/cantActorsxGenre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayac5 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ac5c = new Chart(ac5, {
            type: 'bar',
            data: {
                labels: dataxac5,
                datasets: [{
                    label: '#',
                    data: datayac5,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.a5 = ac5c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/language/cantActorsxLanguage') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac6 = data.data.languages; // Cambia 'labels' según tu estructura JSON
        datayac6 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ac6c = new Chart(ac6, {
            type: 'bar',
            data: {
                labels: dataxac6,
                datasets: [{
                    label: '#',
                    data: datayac6,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.a6 = ac6c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/productor/themesMoreRepxproductor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth1 = data.data.productors; // Cambia 'labels' según tu estructura JSON
        datayth1 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const th3x = new Chart(th3, {
            type: 'bar',
            data: {
                labels: dataxth1,
                datasets: [{
                    label: '#',
                    data: datayth1,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.t1 = th3x;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/director/themesMoreRepxDirector') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayth2 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const th2c = new Chart(th2, {
            type: 'bar',
            data: {
                labels: dataxth2,
                datasets: [{
                    label: '#',
                    data: datayth2,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.t2 = th2c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor/themesMoreRepxactor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayth3 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const th1c= new Chart(th1, {
            type: 'bar',
            data: {
                labels: dataxth3,
                datasets: [{
                    label: '#',
                    data: datayth3,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.t3 = th1c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/year/themesMoreRepxYear') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayth4 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const th6c = new Chart(th6, {
            type: 'bar',
            data: {
                labels: dataxth4,
                datasets: [{
                    label: '#',
                    data: datayth4,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.t6 = th6c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre/themesMoreRepxGenre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayth5 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const th5c = new Chart(th5, {
            type: 'bar',
            data: {
                labels: dataxth5,
                datasets: [{
                    label: '#',
                    data: datayth5,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.t5 = th5c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/themeMoreRepet') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth6 = data.data.themes; // Cambia 'labels' según tu estructura JSON
        datayth6 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const th4c = new Chart(th4, {
            type: 'bar',
            data: {
                labels: dataxth6,
                datasets: [{
                    label: '#',
                    data: datayth6,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.t4 = th4c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/bestratingpromxTheme') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada

        dataxra1 = data.data.themes; // Cambia 'labels' según tu estructura JSON
        datayra1 = data.data.avg_rating.map(Number); // Cambia 'votes' según tu estructura JSON

        
        // Crea la gráfica después de llenar las listas
        const ra6c = new Chart(ra6, {
            type: 'bar',
            data: {
                labels: dataxra1,
                datasets: [{
                    label: '#',
                    data: datayra1,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.r6 = ra6c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/director/bestratingpromxDirector') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayra2 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        
        // Crea la gráfica después de llenar las listas
        const ra2c = new Chart(ra2, {
            type: 'bar',
            data: {
                labels: dataxra2,
                datasets: [{
                    label: '#',
                    data: datayra2,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.r2 = ra2c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor/bestratingpromxactor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayra3 = data.data.rating.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ra1c= new Chart(ra1, {
            type: 'bar',
            data: {
                labels: dataxra3,
                datasets: [{
                    label: '#',
                    data: datayra3,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.r3 = ra1c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/year/bestratingpromxYear') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayra4 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ra4c = new Chart(ra4, {
            type: 'bar',
            data: {
                labels: dataxra4,
                datasets: [{
                    label: '#',
                    data: datayra4,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.r4 = ra4c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre/bestratingpromxGenre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayra5 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ra3c = new Chart(ra3, {
            type: 'bar',
            data: {
                labels: dataxra5,
                datasets: [{
                    label: '#',
                    data: datayra5,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.r1 = ra3c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/language/bestratingpromxlanguage') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra6 = data.data.languages; // Cambia 'labels' según tu estructura JSON
        datayra6 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ra5c = new Chart(ra5, {
            type: 'bar',
            data: {
                labels: dataxra6,
                datasets: [{
                    label: '#',
                    data: datayra6,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.r5 = ra5c;
    })
    .catch(error => console.error('Error:', error));

//Los primeros 4 son del country

//! Dentro de este fetch deben ir todos los que utilizan mapa

fetch(url_countries)
    .then(response => response.json())
    .then(datapoint => {
        // Convertir datos TopoJSON de ChartGeo a una lista de países
        const countries = ChartGeo.topojson.feature(datapoint, datapoint.objects.countries).features;
        
        // Extraer los nombres de los países
        const countryNames = countries.map(country => country.properties.name);

        // Definir una función para crear gráficos de barra
        const createBarChart = (elementId, labels, data, label) => {
            new Chart(elementId, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: data,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        };

        // Primer gráfico: número de películas por país
        fetch('http://localhost:8000/movies/country')
            .then(response => response.json())
            .then(data => {
                const dataxot1 = data.countries;
                const datayot1 = data.number_of_movies.map(Number);

                createBarChart(ot1, dataxot1, datayot1, 'Number of Movies');
            })
            .catch(error => console.error('Error en el primer fetch:', error));

        // Segundo gráfico: cantidad de actores por país
        fetch('http://localhost:8000/movies/country/cantActorsxCountry')
            .then(response => response.json())
            .then(data => {
                const dataxot2 = data.countries;
                const datayot2 = data.number_of_actors.map(Number);

                createBarChart(ot2, dataxot2, datayot2, 'Number of Actors');
            })
            .catch(error => console.error('Error en el segundo fetch:', error));

        // Tercer gráfico: temas más repetidos por país
        fetch('http://localhost:8000/movies/country/themesMoreRepxCountry')
            .then(response => response.json())
            .then(data => {
                const dataxot3 = data.countries;
                const datayot3 = data.count_times.map(Number);

                createBarChart(ot4, dataxot3, datayot3, 'Most Repeated Themes');
            })
            .catch(error => console.error('Error en el tercer fetch:', error));

        // Cuarto gráfico: promedio de calificaciones por país
        fetch('http://localhost:8000/movies/country/bestratingpromxCountry')
            .then(response => response.json())
            .then(data => {
                const dataxot4 = data.countries;
                const datayot4 = data.rating_prom.map(Number);

                createBarChart(ot3, dataxot4, datayot4, 'Average Rating');
            })
            .catch(error => console.error('Error en el cuarto fetch:', error));
    })
    .catch(error => console.error('Error en el fetch de países:', error));


fetch('http://localhost:8000/movies/language/themesMoreRepxLanguage') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth6 = data.data.languages; // Cambia 'labels' según tu estructura JSON
        datayth6 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        const ot5c = new Chart(ot5, {
            type: 'bar',
            data: {
                labels: dataxth6,
                datasets: [{
                    label: '#',
                    data: datayth6,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartInstances.o5 = ot5c;
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/moviesbyrating') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxot6 = data.data.ratings; // Cambia 'labels' según tu estructura JSON
        datayot6 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ot6, {
            type: 'bar',
            data: {
                labels: dataxot6,
                datasets: [{
                    label: '#',
                    data: datayot6,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error:', error));


