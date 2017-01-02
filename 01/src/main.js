const canvas = document.getElementById('scene');
const context = canvas.getContext('2d');

var locations = []
var frame = 0;

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const drawScene = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var index = 0; index < locations.length; ++index) {
        const l = locations[index];

        const x = (l.x + frame) % (canvas.width + 400) - 200;
        const y = l.y + 100 / l.size * Math.sin(l.offset + frame / 10);

        if (x == l.magic1) {
            l.sinkFrames = Math.round(Math.random() * l.size);
        }

        if (l.sinkFrames > 0) {
            l.y += 1;
            l.sinkFrames -= 1;
        }

        if (x == l.magic2) {
            l.raiseFrames = Math.round(Math.random() * l.size);
        }

        if (l.raiseFrames > 0) {
            l.y -= 1;
            l.raiseFrames -= 1;
        }

        drawHexScene(context, x, y, l.size, l.opacity);
    }
    frame++;
}

const drawHexScene = (context, x, y, size, opacity) => {

    context.lineWidth = 1;
    context.strokeStyle = 'rgba(0,0,0,0.4)';
    context.fillStyle = 'rgba(0,0,255,' + opacity + ')';

    context.beginPath();

    // top
    context.moveTo(x - size, y - size);
    context.lineTo(x + size, y - size);

    // left
    context.moveTo(x - size, y - size);
    context.lineTo(x - size * 2, y);
    context.lineTo(x - size, y + size/3);

    // bottom
    context.moveTo(x - size, y + size/3);
    context.lineTo(x + size, y + size/3);

    // right
    context.moveTo(x + size, y - size);
    context.lineTo(x + size * 2, y);
    context.lineTo(x + size, y + size/3);
    context.stroke();
    context.fill();

    // middle
    context.beginPath();
    context.moveTo(x - size * 2, y);
    context.lineTo(x + size * 2, y);
    context.stroke();
}

const start = () => {

    resizeCanvas();

    for (var i = 0; i < 60; i++) {
        locations.push({
            x: Math.floor(Math.random() * (window.innerWidth + 400)) - 200,
            y: Math.floor(Math.random() * window.innerHeight),
            size: Math.floor(Math.random() * 100),
            offset: Math.floor(Math.random() * 100),
            magic1: Math.floor(Math.random() * window.innerWidth),
            magic2: Math.floor(Math.random() * window.innerWidth),
            sinkFrames: 0,
            raiseFrames: 0,
            opacity: Math.random() * 0.5
        });
    }

    draw();
}

const draw = () => {
    setTimeout(draw, 40);
    requestAnimationFrame(() => drawScene());
}

window.addEventListener('resize', resizeCanvas, false);

// HACK: Need to find a better 'onload' event where window size is defined.
setTimeout(function(){
    start();
}, 100);
