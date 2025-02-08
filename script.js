function showYesMessage() {
    document.getElementById('yes-message').style.display = 'block';
    document.getElementById('no-message').style.display = 'none';
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (randomX === buttonRect.left && randomY === buttonRect.top);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

document.getElementById('heart').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the heart button
    document.body.classList.add('open');
    document.getElementById('message').style.display = 'block';
    document.getElementById('valentine-image').style.display = 'block';
});

document.addEventListener('mousemove', function(e) {
    const heartTrail = document.createElement('div');
    heartTrail.className = 'heart-trail';
    heartTrail.style.left = `${e.pageX}px`;
    heartTrail.style.top = `${e.pageY}px`;
    document.body.appendChild(heartTrail);

    setTimeout(() => {
        heartTrail.style.opacity = '0';
        setTimeout(() => {
            heartTrail.remove();
        }, 1000);
    }, 100);
});