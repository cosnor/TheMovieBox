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
let dataxac3 = [] //actor
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
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: ""
};

// Diccionario, para saber qué filtro corresponde a qué gráfica
const filterToChart = {
    'q1' : qm3, 'q2' : qm2, 'q3' : qm1, 'q4' : qm4,'q5' : qm5, 'q6' : qm6, 'a1' : ac1,
    'a2' : ac2,
    'a3' : ac3,
    'a4' : ac4,
    'a5' : ac5,
    'a6' : ac6,
    't1' : th1,
    't2' : th2,
    't3' : th3,
    't4' : th4,
    't5' : th5,
    't6' : th6,
    'r1' : ra1,
    'r2' : ra2,
    'r3' : ra3,
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
            if (chartInstances[chartId]) {

                chartInstances[chartId].destroy();
            }
            // Obtiene la variable para la URL
            console.log(clase);
            variable = claseToSufixAsc[clase];
            
            let ruta = `http://localhost:8000/movies/${variable}`
            console.log(ruta);
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
                }
                let chart = filterToChart[chartId];
                // Crea la gráfica después de llenar las listas
                let x = new Chart( chart, {
                    type: 'bar',
                    data: {
                        labels: datax,
                        datasets: [{
                            label: '# of Movies',
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
                    label: '# of Movies',
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
                    label: '# of Movies',
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
                label: '# of Movies',
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
                    label: '# of Movies',
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
                    label: '# of Movies',
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
                    label: '# of Movies',
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
        new Chart(ac3, {
            type: 'bar',
            data: {
                labels: dataxac1,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/director/cantActorsxDirector') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayac2 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ac2, {
            type: 'bar',
            data: {
                labels: dataxac2,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor/cantActorxMovies') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayac3 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ac1, {
            type: 'bar',
            data: {
                labels: dataxac3,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/year/cantActorsxYear') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayac4 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ac4, {
            type: 'bar',
            data: {
                labels: dataxac4,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre/cantActorsxGenre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayac5 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ac5, {
            type: 'bar',
            data: {
                labels: dataxac5,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/language/cantActorsxLanguage') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxac6 = data.data.languages; // Cambia 'labels' según tu estructura JSON
        datayac6 = data.data.number_of_actors.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ac6, {
            type: 'bar',
            data: {
                labels: dataxac6,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/productor/themesMoreRepxproductor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth1 = data.data.productors; // Cambia 'labels' según tu estructura JSON
        datayth1 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(th3, {
            type: 'bar',
            data: {
                labels: dataxth1,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/director/themesMoreRepxDirector') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayth2 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(th2, {
            type: 'bar',
            data: {
                labels: dataxth2,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor/themesMoreRepxactor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayth3 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(th1, {
            type: 'bar',
            data: {
                labels: dataxth3,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/year/themesMoreRepxYear') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayth4 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(th6, {
            type: 'bar',
            data: {
                labels: dataxth4,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre/themesMoreRepxGenre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayth5 = data.data.count_times.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(th5, {
            type: 'bar',
            data: {
                labels: dataxth5,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/themeMoreRepet') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxth6 = data.data.themes; // Cambia 'labels' según tu estructura JSON
        datayth6 = data.data.number_of_movies.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(th4, {
            type: 'bar',
            data: {
                labels: dataxth6,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/bestratingpromxTheme') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada

        dataxra1 = data.data.themes; // Cambia 'labels' según tu estructura JSON
        datayra1 = data.data.avg_rating.map(Number); // Cambia 'votes' según tu estructura JSON

        
        // Crea la gráfica después de llenar las listas
        new Chart(ra6, {
            type: 'bar',
            data: {
                labels: dataxra1,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/director/bestratingpromxDirector') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra2 = data.data.directors; // Cambia 'labels' según tu estructura JSON
        datayra2 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        
        // Crea la gráfica después de llenar las listas
        new Chart(ra2, {
            type: 'bar',
            data: {
                labels: dataxra2,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/actor/bestratingpromxactor') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra3 = data.data.actors; // Cambia 'labels' según tu estructura JSON
        datayra3 = data.data.rating.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ra1, {
            type: 'bar',
            data: {
                labels: dataxra3,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/year/bestratingpromxYear') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra4 = data.data.years; // Cambia 'labels' según tu estructura JSON
        datayra4 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ra4, {
            type: 'bar',
            data: {
                labels: dataxra4,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/genre/bestratingpromxGenre') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra5 = data.data.genres; // Cambia 'labels' según tu estructura JSON
        datayra5 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ra3, {
            type: 'bar',
            data: {
                labels: dataxra5,
                datasets: [{
                    label: '# of Votes',
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
    })
    .catch(error => console.error('Error:', error));

fetch('http://localhost:8000/movies/language/bestratingpromxlanguage') // Cambia la URL según tu configuración
    .then(response => response.json())
    .then(data => {
        // Supongamos que 'data' tiene la estructura adecuada
        dataxra6 = data.data.languages; // Cambia 'labels' según tu estructura JSON
        datayra6 = data.data.rating_prom.map(Number); // Cambia 'votes' según tu estructura JSON
        // Crea la gráfica después de llenar las listas
        new Chart(ra5, {
            type: 'bar',
            data: {
                labels: dataxra6,
                datasets: [{
                    label: '# of Votes',
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
        new Chart(ot5, {
            type: 'bar',
            data: {
                labels: dataxth6,
                datasets: [{
                    label: '# of Votes',
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
                    label: '# of Votes',
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


