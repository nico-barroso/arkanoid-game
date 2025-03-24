// Obtener el contexto del canvas y definir su tamaño
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 448;
canvas.height = 400;

// Crear los objetos del juego (pelota, pala y ladrillos)
const ball = new Ball(canvas, ctx);
const paddle = new Paddle(canvas, ctx);
const bricks = new Bricks(canvas, ctx);

// Variables para las teclas
let rightPressed = false; //Presionar la flecha derecha 
let leftPressed = false; // Presionar la flecha izquierda 


// Inicializar los eventos de las teclas (keydown y keyup)
function initEvents() {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
}

// Función para manejar el evento de cuando se presiona una tecla
function keyDownHandler(event){
    if (event.key === 'ArrowRight'){
        rightPressed = true; // Asignar true cuando la tecla de la flecha derecha se presiona
    }
    
    if (event.key === 'ArrowLeft'){
        leftPressed = true; // Asignar true cuando la tecla de la flecha izquierda se presiona
    }
}

// Función para manejar el evento de cuando se suelta una tecla
function keyUpHandler(event){
    if (event.key === 'ArrowRight'){
        rightPressed = false;  // Asignar false cuando la tecla de la flecha derecha se suelta
    }
    
    if (event.key === 'ArrowLeft'){
        leftPressed = false; // Asignar false cuando la tecla de la flecha izquierda se suelta
    }
}

// Función para limpiar el canvas antes de redibujar
function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Función principal del ciclo de animación del juego
function draw() {
    cleanCanvas(); // Limpiar el canvas

    ball.draw(); // Dibujar la pelota
    ball.move(paddle, bricks); // Mover la pelota y detectar colisiones

    paddle.draw(); // Dibujar la pala
    paddle.move(rightPressed, leftPressed); // Mover la pala según las teclas presionadas

    bricks.draw(); // Dibujar los ladrillos

    window.requestAnimationFrame(draw); // Siguiente frame para crear la animación
}


    initEvents(); // Iniciar los eventos de teclado
    draw(); // Iniciar el juego
