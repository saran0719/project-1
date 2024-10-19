// Initial ball objects
const ball1 = { element: document.getElementById('ball1'), dx: 2, dy: 2 };
const ball2 = { element: document.getElementById('ball2'), dx: 3, dy: 3 };
const ball3 = { element: document.getElementById('ball3'), dx: 4, dy: 4 };

function moveTo(ball, x, y) {
    ball.element.style.left = x + 'px';
    ball.element.style.top = y + 'px';
}

function changeDirectionIfNecessary(ball, x, y) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (x <= 0 || x >= screenWidth - 50) {
        ball.dx *= -1;
    }
    if (y <= 0 || y >= screenHeight - 50) {
        ball.dy *= -1;
    }
}

function update(ball, x, y) {
    moveTo(ball, x, y);
    changeDirectionIfNecessary(ball, x, y);

    x += ball.dx;
    y += ball.dy;

    setTimeout(function() {
        update(ball, x, y);
    }, 16);
}

// Start moving the balls
update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
//   genNew.addEventListener("click", setBg);
  setBg();