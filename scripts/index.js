// Animated gradient background
// Colors for gradient

let colors = [
    [239, 89, 82], 
    [196, 53, 74],
    [38, 22, 66],
    [71, 41, 122]
];

let step = 0;
let colorIndices = [0, 1, 2, 3];
let gradientSpeed = 0.002;

function updateGradient() {
    if (typeof $ === 'undefined') return;

    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];


    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";


    // Implementing the gradient in the background
    $('body').css({
        background: "linear-gradient(to bottom left	, " + color1 + " 00%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        // Pick new target color indices
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}

setInterval(updateGradient, 10);


document.addEventListener('DOMContentLoaded', function() {
    // Defining constants
    const initial_btn = document.querySelector('.animated-btn'); 
    const body = document.querySelector('body');

    // Adding event listener to the button
    initial_btn.addEventListener('click', function() {
        // Triggers the animation
        initial_btn.classList.add('initial-transition');
        // Changes the background color for a smooth transition
        setTimeout(function() {
            body.backgroundColor = 'white';
            window.location.href = 'main.html';
        }, 1000);
    });

});