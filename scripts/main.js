
// Variables Tutorial
const next_arrow = document.querySelector('.next-arrow');
const body = document.querySelector('body');
const tutorial = document.querySelector('.tutorial');
const data_interface = document.querySelector('.data-interface');
const quantity_movies_bttn = document.querySelector('.quantityMovies .show-more');

// Gráficas 1
const quantity_movies_nodule1 = document.querySelector('.quantityMovies .nodule1');
const quantity_movies_nodule2 = document.querySelector('.quantityMovies .nodule2');
const quantity_movies_nodule3 = document.querySelector('.quantityMovies .nodule3');
const quantity_movies_nodule4 = document.querySelector('.quantityMovies .nodule4');
const quantity_movies_nodule5 = document.querySelector('.quantityMovies .nodule5');
const quantity_movies_nodule6 = document.querySelector('.quantityMovies .nodule6');
const quantity_movies_nodules = [quantity_movies_nodule1, quantity_movies_nodule2, quantity_movies_nodule3, quantity_movies_nodule4, quantity_movies_nodule5, quantity_movies_nodule6];
const quantity_movies_nodules_content = document.querySelectorAll('.quantityMovies .nodule-content');
// Flechas Data Interface
const arrow_left = document.querySelector('.left-arrow');
const arrow_right = document.querySelector('.right-arrow');

//Chart-Content Variables
const nodule_chart = document.querySelector('.nodules-charts');
const chart_content = document.querySelectorAll('.chart-section');

// Variables Data Interface
let quantity_movies = false;
let count = 1;

// Botones de Ver Más Quantities
const show_more = document.querySelectorAll('.quantityMovies .ver-mas');

// Diccionario Estados
// Restar 1 al contador
const animation_states = {
    "nodule1": {
        "right": {"add": ["pos54","pos41","pos12", "pos23", "pos36"], "remove": [["pos45"], ["pos14", "pos54"], ["pos21", "pos41", "pos1"], ["pos32", "pos12" ], ["pos63", "pos23"]]},
        "left": {"add": ["pos45","pos14","pos21", "pos32", "pos63"], "remove": [["pos54", "pos14"], ["pos41", "pos21", "pos1"], ["pos12", "pos32"], ["pos23", "pos63"], ["pos36"]]}
    },
    "nodule2": {
        "right": {"add": ["pos41", "pos12", "pos23", "pos36", ""] , "remove": [["pos14"], ["pos21", "pos41"], ["pos32", "pos12", "pos2"], ["pos63", "pos23"], [""]] },
        "left": {"add": ["pos14", "pos21", "pos32", "pos63", ""], "remove": [["pos41", "pos21"], ["pos12", "pos32", "pos2"], ["pos23", "pos63"], ["pos36"], [""]]}
    },
    "nodule3": {
        "right": {"add": ["pos12", "pos23", "pos36", "", ""], "remove": [["pos21"], ["pos32", "pos12"], ["pos63", "pos23", "pos3"], [""], [""]]},
        "left": {"add": ["pos21", "pos32", "pos63", "", ""], "remove": [["pos12", "pos32"], ["pos23", "pos63", "pos3"], ["pos36"], [""], [""]]}
    },
    "nodule4": {
        "right": {"add": ["pos65", "pos54", "pos41", "pos12", "pos23"], "remove": [["pos56"], ["pos45", "pos65"], ["pos14", "pos54", "pos4"], ["pos21", "pos41"], ["pos32", "pos12"]]},
        "left": {"add": ["pos56", "pos45", "pos14", "pos21", "pos32"], "remove": [["pos65", "pos45"], ["pos54", "pos14", "pos4"], ["pos41", "pos21"], ["pos12", "pos32"], ["pos23"]]}
    },
    "nodule5": {
        "right": {"add": ["", "pos65", "pos54", "pos41", "pos12"], "remove": [[""], ["pos56"], ["pos45", "pos65", "pos5"], ["pos14", "pos54"], ["pos21", "pos41"]]},
        "left": {"add": ["", "pos56", "pos45", "pos14", "pos21"], "remove": [[""], ["pos65", "pos45", "pos5"], ["pos54", "pos14"], ["pos41", "pos21"], ["pos12"]]}
    },
    "nodule6": {
        "right": {"add": ["", "", "pos65", "pos54", "pos41"], "remove": [[""], [""], ["pos56", "pos6"], ["pos45", "pos65"], ["pos14", "pos54"]]},
        "left": {"add": ["", "", "pos56", "pos45", "pos14"], "remove": [[""], [""], ["pos65", "pos45"], ["pos54", "pos14"], ["pos41"]]}
    }
};

// Pasar a la siguiente sección, quitar tutorial y mostrar data interface
next_arrow.addEventListener('click', function() {
    body.style.backgroundColor = "#260242";
    tutorial.classList.add("slide-out");
    setTimeout(function() {
        tutorial.style.display = "none";
        data_interface.style.display = "flex";
    }, 3000);

});

// Activar botón de cantidad de películas
quantity_movies_bttn.addEventListener('click', function() {
    quantity_movies = true;
    quantity_movies_bttn.classList.add("fade");
    setTimeout(function() {
        quantity_movies_nodule1.classList.add("pos1");
        quantity_movies_nodule2.classList.add("pos2");
        quantity_movies_nodule3.classList.add("pos3");
        quantity_movies_nodule4.classList.add("pos4");
        quantity_movies_nodule5.classList.add("pos5");
        quantity_movies_nodule6.classList.add("pos6");
        setTimeout(function() {
            arrow_left.classList.remove("hidden");
            arrow_right.classList.remove("hidden");
            quantity_movies_nodules_content[0].classList.remove("hidden");
            
        }, 1500);
    }, 1000);
});

//Trigger de botones de ver más
show_more.forEach(show_more => {    
    show_more.addEventListener('click', function() {
        // Reconocer el nódulo
        nodule_chart.classList.remove("hidden");
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41") || quantity_movies_nodules[i].classList.contains("pos1") ) {
                chart_content[i].classList.remove("hidden");
                console.log(i);
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                    console.log("hidden");
                }
            }
        }
    });
});

// Trigger de flechas de Data Interface

arrow_right.addEventListener('click', function() {
    
    count++;
    if (quantity_movies) {
        let addstate1 = animation_states["nodule1"]["right"]["add"][count]
        let removestate1 = animation_states["nodule1"]["right"]["remove"][count]
        let addstate2 = animation_states["nodule2"]["right"]["add"][count]
        let removestate2 = animation_states["nodule2"]["right"]["remove"][count]
        let addstate3 = animation_states["nodule3"]["right"]["add"][count]
        let removestate3 = animation_states["nodule3"]["right"]["remove"][count]
        let addstate4 = animation_states["nodule4"]["right"]["add"][count]
        let removestate4 = animation_states["nodule4"]["right"]["remove"][count]
        let addstate5 = animation_states["nodule5"]["right"]["add"][count]
        let removestate5 = animation_states["nodule5"]["right"]["remove"][count]
        let addstate6 = animation_states["nodule6"]["right"]["add"][count]
        let removestate6 = animation_states["nodule6"]["right"]["remove"][count]

        
        
        

        if (count == 4) {
            arrow_right.classList.add("fade");
        } 

        if (count > -1) {
            arrow_left.classList.remove("fade");
        }
        
        if (count < 5) {
            if (addstate1 != "") {
                quantity_movies_nodule1.classList.add(addstate1);
            }
            removestate1.forEach(removestate1 => {
                if (removestate1 != "") {
                    quantity_movies_nodule1.classList.remove(removestate1);
                }
            });
            if (addstate2 != "") {
                quantity_movies_nodule2.classList.add(addstate2);
            }
            removestate2.forEach(removestate2 => {
                if (removestate2 != "") {
                    quantity_movies_nodule2.classList.remove(removestate2);
                }
            });
            if (addstate3 != "") {
                quantity_movies_nodule3.classList.add(addstate3);
            }
            removestate3.forEach(removestate3 => {
                if (removestate3 != "") {
                    quantity_movies_nodule3.classList.remove(removestate3);
                }
            });
            if (addstate4 != "") {
                quantity_movies_nodule4.classList.add(addstate4);
            }
            removestate4.forEach(removestate4 => {
                if (removestate4 != "") {
                    quantity_movies_nodule4.classList.remove(removestate4);
                }
            });
            if (addstate5 != "") {
                quantity_movies_nodule5.classList.add(addstate5);
            }
            removestate5.forEach(removestate5 => {
                if (removestate5 != "") {
                    quantity_movies_nodule5.classList.remove(removestate5);
                }
            });
            if (addstate6 != "") {
                quantity_movies_nodule6.classList.add(addstate6);
            }
            removestate6.forEach(removestate6 => {
                if (removestate6 != "") {
                    quantity_movies_nodule6.classList.remove(removestate6);
                }
            });
        }
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41")) {
                quantity_movies_nodules_content[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                    quantity_movies_nodules_content[i].classList.add("hidden");
                }
            }
        }
        
    }
});

arrow_left.addEventListener('click', function() {
    if (quantity_movies) {
        let addstate1 = animation_states["nodule1"]["left"]["add"][count]
        let removestate1 = animation_states["nodule1"]["left"]["remove"][count]
        let addstate2 = animation_states["nodule2"]["left"]["add"][count]
        let removestate2 = animation_states["nodule2"]["left"]["remove"][count]
        let addstate3 = animation_states["nodule3"]["left"]["add"][count]
        let removestate3 = animation_states["nodule3"]["left"]["remove"][count]
        let addstate4 = animation_states["nodule4"]["left"]["add"][count]
        let removestate4 = animation_states["nodule4"]["left"]["remove"][count]
        let addstate5 = animation_states["nodule5"]["left"]["add"][count]
        let removestate5 = animation_states["nodule5"]["left"]["remove"][count]
        let addstate6 = animation_states["nodule6"]["left"]["add"][count]
        let removestate6 = animation_states["nodule6"]["left"]["remove"][count]
        if (count == 0) {
            arrow_left.classList.add("fade");
        } 
        if (count < 5) {
            arrow_right.classList.remove("fade");
        }
        
        if (count > -1) {
            if (addstate1 != "") {
                quantity_movies_nodule1.classList.add(addstate1);
            }
            removestate1.forEach(removestate1 => {
                if (removestate1 != "") {
                    quantity_movies_nodule1.classList.remove(removestate1);
                }
            });
            if (addstate2 != "") {
                quantity_movies_nodule2.classList.add(addstate2);
            }
            removestate2.forEach(removestate2 => {
                if (removestate2 != "") {
                    quantity_movies_nodule2.classList.remove(removestate2);
                }
            });
            if (addstate3 != "") {
                quantity_movies_nodule3.classList.add(addstate3);
            }
            removestate3.forEach(removestate3 => {
                if (removestate3 != "") {
                    quantity_movies_nodule3.classList.remove(removestate3);
                }
            });
            if (addstate4 != "") {
                quantity_movies_nodule4.classList.add(addstate4);
            }
            removestate4.forEach(removestate4 => {
                if (removestate4 != "") {
                    quantity_movies_nodule4.classList.remove(removestate4);
                }
            });
            if (addstate5 != "") {
                quantity_movies_nodule5.classList.add(addstate5);
            }
            removestate5.forEach(removestate5 => {
                if (removestate5 != "") {
                    quantity_movies_nodule5.classList.remove(removestate5);
                }
            });
            if (addstate6 != "") {
                quantity_movies_nodule6.classList.add(addstate6);
            }
            removestate6.forEach(removestate6 => {
                if (removestate6 != "") {
                    quantity_movies_nodule6.classList.remove(removestate6);
                }
            });
        }
        count--;
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41")) {
                quantity_movies_nodules_content[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                    quantity_movies_nodules_content[i].classList.add("hidden");
                }
            }
        }
        
    }
});
