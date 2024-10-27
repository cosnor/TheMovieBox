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
let dataxqm1 = []
let datayqm1 = []
let dataxqm2 = []
let datayqm2 = []
let dataxqm3 = []
let datayqm3 = []
let dataxqm4 = []
let datayqm4 = []
let dataxqm5 = []
let datayqm5 = []
let dataxqm6 = []
let datayqm6 = []

let dataxac1 = []
let datayac1 = []
let dataxac2 = []
let datayac2 = []
let dataxac3 = []
let datayac3 = []
let dataxac4 = []
let datayac4 = []
let dataxac5 = []
let datayac5 = []
let dataxac6 = []
let datayac6 = []

let dataxth1 = []
let datayth1 = []
let dataxth2 = []
let datayth2 = []
let dataxth3 = []
let datayth3 = []
let dataxth4 = []
let datayth4 = []
let dataxth5 = []
let datayth5 = []
let dataxth6 = []
let datayth6 = []

let dataxra1 = []
let datayra1 = []
let dataxra2 = []
let datayra2 = []
let dataxra3 = []
let datayra3 = []
let dataxra4 = []
let datayra4 = []
let dataxra5 = []
let datayra5 = []
let dataxra6 = []
let datayra6 = []

let dataxot1 = []
let datayot1 = []
let dataxot2 = []
let datayot2 = []
let dataxot3 = []
let datayot3 = []
let dataxot4 = []
let datayot4 = []
let dataxot5 = []
let datayot5 = []
let dataxot6 = []
let datayot6 = []

// Filtros

const checkboxes = document.querySelectorAll('input[type=checkbox]');

// Divido las checkboxes en  grupos
// const checkboxes_divided = checkboxe
console.log(checkboxes_divided);

new Chart(qm1, {
    type: 'bar',
    data: {
    labels: dataxqm1,
    datasets: [{
        label: 'Nombre',
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

new Chart(qm2, {
    type: 'bar',
    data: {
    labels: dataxqm2,
    datasets: [{
        label: '# of Votes',
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

new Chart(qm3, {
    type: 'bar',
    data: {
    labels: dataxqm3,
    datasets: [{
        label: '# of Votes',
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

new Chart(qm4, {
    type: 'bar',
    data: {
    labels: dataxqm4,
    datasets: [{
        label: '# of Votes',
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

new Chart(qm5, {
    type: 'bar',
    data: {
    labels: dataxqm5,
    datasets: [{
        label: '# of Votes',
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

new Chart(qm6, {
    type: 'bar',
    data: {
    labels: dataxqm6,
    datasets: [{
        label: '# of Votes',
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

new Chart(ac1, {
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

new Chart(ac3, {
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

new Chart(th1, {
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

new Chart(th3, {
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

new Chart(th4, {
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

new Chart(th6, {
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

new Chart(ra1, {
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

new Chart(ra3, {
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

new Chart(ra5, {
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

new Chart(ra6, {
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

new Chart(ot1, {
    type: 'bar',
    data: {
    labels: dataxot1,
    datasets: [{
        label: '# of Votes',
        data: datayot1,
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

new Chart(ot2, {
    type: 'bar',
    data: {
    labels: dataxot2,
    datasets: [{
        label: '# of Votes',
        data: datayot2,
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

new Chart(ot3, {
    type: 'bar',
    data: {
    labels: dataxot3,
    datasets: [{
        label: '# of Votes',
        data: datayot3,
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

new Chart(ot4, {
    type: 'bar',
    data: {
    labels: dataxot4,
    datasets: [{
        label: '# of Votes',
        data: datayot4,
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

new Chart(ot5, {
    type: 'bar',
    data: {
    labels: dataxot5,
    datasets: [{
        label: '# of Votes',
        data: datayot5,
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


