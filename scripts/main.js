
// Variables Tutorial
const next_arrow = document.querySelector('.next-arrow');
const body = document.querySelector('body');
const tutorial = document.querySelector('.tutorial');
const data_interface = document.querySelector('.data-interface');
const quantity_movies_bttn = document.querySelector('.quantityMovies .show-more');

// Nódulos
const quantity_movies_nodule1 = document.querySelector('.quantityMovies .nodule1');
const quantity_movies_nodule2 = document.querySelector('.quantityMovies .nodule2');
const quantity_movies_nodule3 = document.querySelector('.quantityMovies .nodule3');
const quantity_movies_nodule4 = document.querySelector('.quantityMovies .nodule4');
const quantity_movies_nodule5 = document.querySelector('.quantityMovies .nodule5');
const quantity_movies_nodule6 = document.querySelector('.quantityMovies .nodule6');
const quantity_movies_nodules = [quantity_movies_nodule1, quantity_movies_nodule2, quantity_movies_nodule3, quantity_movies_nodule4, quantity_movies_nodule5, quantity_movies_nodule6];
const quantity_movies_nodules_content = document.querySelectorAll('.QuantityofMovies.nodule-content');
const quantity_movies_nodules_content2 = document.querySelectorAll('.QuantityofActors.nodule-content');
const quantity_movies_nodules_content3 = document.querySelectorAll('.QuantityofRating.nodule-content');
const quantity_movies_nodules_content4 = document.querySelectorAll('.QuantityofThemes.nodule-content');
const quantity_movies_nodules_content5 = document.querySelectorAll('.QuantityofOthers.nodule-content');




// Flechas Data Interface
const arrow_left = document.querySelector('.left-arrow');
const arrow_right = document.querySelector('.right-arrow');

//Chart-Content Variables
const nodule_chart = document.querySelector('.nodules-charts .QuantityofMovies');
const chart_content = document.querySelectorAll('.QuantityofMovies .chart-section');
const nodule_chart2 = document.querySelector('.nodules-charts .QuantityofActors');
const chart_content2 = document.querySelectorAll('.QuantityofActors .chart-section');
const nodule_chart3 = document.querySelector('.nodules-charts .QuantityofRating');
const chart_content3 = document.querySelectorAll('.QuantityofRating .chart-section');
const nodule_chart4 = document.querySelector('.nodules-charts .QuantityofThemes ');
const chart_content4 = document.querySelectorAll('.QuantityofThemes .chart-section');
const nodule_chart5 = document.querySelector('.nodules-charts .QuantityofOthers');
const chart_content5 = document.querySelectorAll('.QuantityofOthers .chart-section');



// Variables Data Interface
let quantity_movies = false;
let count = 1;
let state = 0;

// Botones de Ver Más Quantities
const show_more = document.querySelectorAll('.QuantityofMovies .ver-mas');
const show_more2 = document.querySelectorAll('.QuantityofActors .ver-mas');
const show_more3 = document.querySelectorAll('.QuantityofRating .ver-mas');
const show_more4 = document.querySelectorAll('.QuantityofThemes .ver-mas');
const show_more5 = document.querySelectorAll('.QuantityofOthers .ver-mas');


// Botones de Ver Menos
const show_less = document.querySelectorAll('.QuantityofMovies .go-back');
const show_less2 = document.querySelectorAll('.QuantityofActors .go-back');
const show_less3 = document.querySelectorAll('.QuantityofRating .go-back');
const show_less4 = document.querySelectorAll('.QuantityofThemes .go-back');
const show_less5 = document.querySelectorAll('.QuantityofOthers .go-back');

// Flecha volver al tutorial
const arrow_tutorial = document.querySelector('.controls i');

// Flecha cerrar animación
const close_animation = document.querySelector('.goto_node');
const close_animation_arrow = document.querySelector('.goto_node i');

// Nodos
const node1 = document.querySelector('.quantityMovies');

// Botones Selecciones 
const node1selection = document.getElementById('node1Selection');
const node2selection = document.getElementById('node2Selection');
const node3selection = document.getElementById('node3Selection');
const node4selection = document.getElementById('node4Selection');
const node5selection = document.getElementById('node5Selection');

const nodeSelections = [node1selection, node2selection, node3selection, node4selection, node5selection];
// Pantallas Nodos 
const node1screen = document.querySelectorAll('.QuantityofMovies');
const node2screen = document.querySelectorAll('.QuantityofActors');
const node3screen = document.querySelectorAll('.QuantityofRating');
const node4screen = document.querySelectorAll('.QuantityofThemes');
const node5screen = document.querySelectorAll('.QuantityofOthers');

const screens = [node1screen, node2screen, node3screen, node4screen, node5screen];
// footer 
const footer = document.querySelector('footer');
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

// Funciones

// Función para activar/desactivar flechas/íconos
const deactivate_arrow = (arrow) => {
    arrow.classList.add("fade");
};

const activate_arrow = (arrow) => {
    arrow.classList.remove("fade");
}

// Pasar a la siguiente sección, quitar tutorial y mostrar data interface
next_arrow.addEventListener('click', function() {
    tutorial.classList.add("slide-out");
    setTimeout(function() {
        tutorial.style.display = "none";
        data_interface.style.display = "flex";
        if (footer.classList.contains("fade")) {
            footer.classList.remove("fade");
        }
        footer.style.display = "flex";
        if (arrow_tutorial.classList.contains("fade")) {
            arrow_tutorial.classList.remove("fade");
        }
    }, 3000);

});

// Trigger de botones de selección de nodos
node1selection.addEventListener('click', function() {
    state = 0;
    screens.forEach(screen => {
        screen.forEach(s => {   
            if (s.classList.contains("hidden") == false) {
                s.classList.add("hidden");
            } 

        } );

    });
    screens[0].forEach(screen => {
        if (screen.classList.contains("hidden") && screen.classList.contains("nodule-content") == false) {
            screen.classList.remove("hidden");
        }
    } );
    nodeSelections.forEach(nodeSelection => {
        if (nodeSelection.classList.contains("selected")) {
            nodeSelection.classList.remove("selected");
        }
    });
    if (nodeSelections[0].classList.contains("selected") == false) {
        nodeSelections[0].classList.add("selected");
    }

});

node2selection.addEventListener('click', function() {
    state = 1;
    screens.forEach(screen => {
        screen.forEach(s => {   
            if (s.classList.contains("hidden") == false) {
                s.classList.add("hidden");
            } 

        } );

    });
    screens[1].forEach(screen => {
        if (screen.classList.contains("hidden") && screen.classList.contains("nodule-content") == false) {
            screen.classList.remove("hidden");
        }
    } );
    nodeSelections.forEach(nodeSelection => {
        if (nodeSelection.classList.contains("selected")) {
            nodeSelection.classList.remove("selected");
        }
    });
    if (nodeSelections[1].classList.contains("selected") == false) {
        nodeSelections[1].classList.add("selected");
    }
}
);

node3selection.addEventListener('click', function() {
    state = 2;
    screens.forEach(screen => {
        screen.forEach(s => {   
            if (s.classList.contains("hidden") == false) {
                s.classList.add("hidden");
            } 

        } );

    });
    screens[2].forEach(screen => {
        if (screen.classList.contains("hidden") && screen.classList.contains("nodule-content") == false) {
            screen.classList.remove("hidden");
        }
    } );
    nodeSelections.forEach(nodeSelection => {
        if (nodeSelection.classList.contains("selected")) {
            nodeSelection.classList.remove("selected");
        }
    });
    if (nodeSelections[2].classList.contains("selected") == false) {
        nodeSelections[2].classList.add("selected");
    }
}
);

node4selection.addEventListener('click', function() {
    state = 3;
    screens.forEach(screen => {
        screen.forEach(s => {   
            if (s.classList.contains("hidden") == false) {
                s.classList.add("hidden");
            } 

        } );

    });
    screens[3].forEach(screen => {
        if (screen.classList.contains("hidden") && screen.classList.contains("nodule-content") == false) {
            screen.classList.remove("hidden");
        }
    } );
    nodeSelections.forEach(nodeSelection => {
        if (nodeSelection.classList.contains("selected")) {
            nodeSelection.classList.remove("selected");
        }
    });
    if (nodeSelections[3].classList.contains("selected") == false) {
        nodeSelections[3].classList.add("selected");
    }
}
);

node5selection.addEventListener('click', function() {
    state = 4;
    screens.forEach(screen => {
        screen.forEach(s => {   
            if (s.classList.contains("hidden") == false) {
                s.classList.add("hidden");
            } 

        } );

    });
    screens[4].forEach(screen => {
        if (screen.classList.contains("hidden") && screen.classList.contains("nodule-content") == false) {
            screen.classList.remove("hidden");
        }
    } );
    nodeSelections.forEach(nodeSelection => {
        if (nodeSelection.classList.contains("selected")) {
            nodeSelection.classList.remove("selected");
        }
    });
    if (nodeSelections[4].classList.contains("selected") == false) {
        nodeSelections[4].classList.add("selected");
    }
}
);


// Activar botón de cantidad de películas
quantity_movies_bttn.addEventListener('click', function() {

    count = 1;
    quantity_movies = true;
    quantity_movies_bttn.classList.add("fade");
    deactivate_arrow(arrow_tutorial);
    deactivate_arrow(footer);
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
            screens[state][2].classList.remove("hidden");
            close_animation.classList.remove("hidden");
            if (close_animation.classList.contains("hidden") || close_animation_arrow.classList.contains("fade")) {
                activate_arrow(close_animation_arrow);
                close_animation.classList.remove("hidden");
            }
            if (arrow_left.classList.contains("fade")) {
                activate_arrow(arrow_left);
            }
            if (arrow_right.classList.contains("fade")) {
                activate_arrow(arrow_right);
            }
        
            if (arrow_tutorial.classList.contains("fade")) {
                arrow_tutorial.classList.remove("fade");
            }
            // Cambio la información de las gráficas
            

        }, 1500);
    }, 1000);
});

//Trigger de botones de ver más
show_more.forEach(show_more => {    
    show_more.addEventListener('click', function() {
        // Reconocer el nódulo
        nodule_chart.classList.remove("hidden");
        if (nodule_chart2.classList.contains("hidden") == false) {
            nodule_chart2.classList.add("hidden");
        }
        if (nodule_chart3.classList.contains("hidden") == false) {
            nodule_chart3.classList.add("hidden");
        }
        if (nodule_chart4.classList.contains("hidden") == false) {
            nodule_chart4.classList.add("hidden");
        }
        if (nodule_chart5.classList.contains("hidden") == false) {
            nodule_chart5.classList.add("hidden");
        }
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41") || quantity_movies_nodules[i].classList.contains("pos1") ) {
                chart_content[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                }
            }
        }
    });
});

show_more2.forEach(show_more => {    
    show_more.addEventListener('click', function() {
        // Reconocer el nódulo
        nodule_chart2.classList.remove("hidden");
        if (nodule_chart.classList.contains("hidden") == false) {
            nodule_chart.classList.add("hidden");
        }
        if (nodule_chart3.classList.contains("hidden") == false) {
            nodule_chart3.classList.add("hidden");
        }
        if (nodule_chart4.classList.contains("hidden") == false) {
            nodule_chart4.classList.add("hidden");
        }
        if (nodule_chart5.classList.contains("hidden") == false) {
            nodule_chart5.classList.add("hidden");
        }
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41") || quantity_movies_nodules[i].classList.contains("pos1") ) {
                chart_content2[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                }
            }
        }
    });
});

show_more3.forEach(show_more => {    
    show_more.addEventListener('click', function() {
        // Reconocer el nódulo
        nodule_chart3.classList.remove("hidden");
        if (nodule_chart.classList.contains("hidden") == false) {
            nodule_chart.classList.add("hidden");
        }
        if (nodule_chart2.classList.contains("hidden") == false) {
            nodule_chart2.classList.add("hidden");
        }
        if (nodule_chart4.classList.contains("hidden") == false) {
            nodule_chart4.classList.add("hidden");
        }
        if (nodule_chart5.classList.contains("hidden") == false) {
            nodule_chart5.classList.add("hidden");
        }
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41") || quantity_movies_nodules[i].classList.contains("pos1") ) {
                chart_content3[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                }
            }
        }
    });
});

show_more4.forEach(show_more => {    
    show_more.addEventListener('click', function() {
        // Reconocer el nódulo
        nodule_chart4.classList.remove("hidden");
        if (nodule_chart.classList.contains("hidden") == false) {
            nodule_chart.classList.add("hidden");
        }
        if (nodule_chart2.classList.contains("hidden") == false) {
            nodule_chart2.classList.add("hidden");
        }
        if (nodule_chart3.classList.contains("hidden") == false) {
            nodule_chart3.classList.add("hidden");
        }
        if (nodule_chart5.classList.contains("hidden") == false) {
            nodule_chart5.classList.add("hidden");
        }
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41") || quantity_movies_nodules[i].classList.contains("pos1") ) {
                chart_content4[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                }
            }
        }
    });
});

show_more5.forEach(show_more => {    
    show_more.addEventListener('click', function() {
        // Reconocer el nódulo
        nodule_chart5.classList.remove("hidden");
        if (nodule_chart.classList.contains("hidden") == false) {
            nodule_chart.classList.add("hidden");
        }
        if (nodule_chart2.classList.contains("hidden") == false) {
            nodule_chart2.classList.add("hidden");
        }
        if (nodule_chart3.classList.contains("hidden") == false) {
            nodule_chart3.classList.add("hidden");
        }
        if (nodule_chart4.classList.contains("hidden") == false) {
            nodule_chart4.classList.add("hidden");
        }
        for (let i = 0; i < quantity_movies_nodules_content.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41") || quantity_movies_nodules[i].classList.contains("pos1") ) {
                chart_content5[i].classList.remove("hidden");
            } else {
                if (quantity_movies_nodules_content[i].classList.contains("hidden") == false) {
                }
            }
        }
    });
});

// Triggers zona de gráficas (ocultar)}

show_less.forEach(show_less => {    
    show_less.addEventListener('click', function() {
        // Reconocer el nódulo
        for (let i = 0; i < chart_content.length; i++) {
            if (chart_content[i].classList.contains("hidden") == false) {
                chart_content[i].classList.add("slideDown");
                setTimeout(function() {
                    chart_content[i].classList.add("hidden");
                    chart_content[i].classList.remove("slideDown");
                }, 900);
        }
    }
    });
});

show_less2.forEach(show_less2 => {    
    show_less2.addEventListener('click', function() {
        // Reconocer el nódulo
        for (let i = 0; i < chart_content2.length; i++) {
            if (chart_content2[i].classList.contains("hidden") == false) {
                chart_content2[i].classList.add("slideDown");
                setTimeout(function() {
                    chart_content2[i].classList.add("hidden");
                    chart_content2[i].classList.remove("slideDown");
                }, 900);
        }
    }
    });
});

show_less3.forEach(show_less3 => {
    show_less3.addEventListener('click', function() {
        // Reconocer el nódulo
        for (let i = 0; i < chart_content3.length; i++) {
            if (chart_content3[i].classList.contains("hidden") == false) {
                chart_content3[i].classList.add("slideDown");
                setTimeout(function() {
                    chart_content3[i].classList.add("hidden");
                    chart_content3[i].classList.remove("slideDown");
                }, 900);
        }
    }
    }

    );
});

show_less4.forEach(show_less4 => {
    show_less4.addEventListener('click', function() {
        // Reconocer el nódulo
        for (let i = 0; i < chart_content4.length; i++) {
            if (chart_content4[i].classList.contains("hidden") == false) {
                chart_content4[i].classList.add("slideDown");
                setTimeout(function() {
                    chart_content4[i].classList.add("hidden");
                    chart_content4[i].classList.remove("slideDown");
                }, 900);
        }
    }
    }
    );
});

show_less5.forEach(show_less5 => {
    show_less5.addEventListener('click', function() {
        // Reconocer el nódulo
        for (let i = 0; i < chart_content5.length; i++) {
            if (chart_content5[i].classList.contains("hidden") == false) {
                chart_content5[i].classList.add("slideDown");
                setTimeout(function() {
                    chart_content5[i].classList.add("hidden");
                    chart_content5[i].classList.remove("slideDown");
                }, 900);
        }
    }
    }
    );
});

// Trigger de flecha de cerrar animación

close_animation_arrow.addEventListener('click', function() {
    
    deactivate_arrow(close_animation_arrow);
    deactivate_arrow(arrow_left);
    deactivate_arrow(arrow_right);
    deactivate_arrow(footer);
    // Desvanecer nódulos
    deactivate_arrow(node1);
    setTimeout(function() {
        switch (state) {
            case 0:
                quantity_movies_nodules_content.forEach(quantity_movies_nodules_content => {
                    quantity_movies_nodules_content.classList.add("hidden");
                });
                break;
            case 1:
                quantity_movies_nodules_content2.forEach(quantity_movies_nodules_content2 => {
                    quantity_movies_nodules_content2.classList.add("hidden");
                });
                break;
            case 2:
                quantity_movies_nodules_content3.forEach(quantity_movies_nodules_content3 => {
                    quantity_movies_nodules_content3.classList.add("hidden");
                });
                break;
            case 3:
                quantity_movies_nodules_content4.forEach(quantity_movies_nodules_content4 => {
                    quantity_movies_nodules_content4.classList.add("hidden");
                });
                break;
            case 4:
                quantity_movies_nodules_content5.forEach(quantity_movies_nodules_content5 => {
                    quantity_movies_nodules_content5.classList.add("hidden");
                });
                break;
        }
        
        // Activar botón de cantidad de películas
        quantity_movies_bttn.classList.remove("fade");
        // Poner todos los nodulos en la posición inicial
        quantity_movies_nodules.forEach(quantity_movies_nodules => {
            quantity_movies_nodules.classList.remove("pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos12", "pos14", "pos21", "pos23", "pos32", "pos36", "pos41", "pos45", "pos54", "pos56", "pos63", "pos65");
        });
        activate_arrow(node1);
        activate_arrow(footer)
    }, 1000);


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
        for (let i = 0; i < quantity_movies_nodules.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41")) {
                
                screens[state][i+2].classList.remove("hidden");
                
            } else {
                if (screens[state][i+2].classList.contains("hidden") == false) {
                    screens[state][i+2].classList.add("hidden");                }
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
        for (let i = 0; i < quantity_movies_nodules.length; i++) {
            if (quantity_movies_nodules[i].classList.contains("pos21") || quantity_movies_nodules[i].classList.contains("pos41")) {
                    screens[state][i+2].classList.remove("hidden");
            } else {
                if (screens[state][i+2].classList.contains("hidden") == false) {
                    screens[state][i+2].classList.add("hidden");
                }
            }
        }
        
    }
});


arrow_tutorial.addEventListener('click', function() {
    data_interface.style.display = "none";
    tutorial.classList.remove("slide-out");
    tutorial.classList.add("slide");
    tutorial.style.display = "block";
    deactivate_arrow(footer);
    deactivate_arrow(arrow_tutorial);
    setTimeout(function() {
        
    }, 900);
    
    
});

