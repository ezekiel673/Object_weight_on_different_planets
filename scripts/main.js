const planetData = {
    mercury: { gravity: 3.7, img: './images/mercury.png' },
    venus: { gravity: 8.87, img: './images/venus.png' },
    earth: { gravity: 9.81, img: './images/earth.png' },
    mars: { gravity: 3.71, img: './images/mars.png' },
    jupiter: { gravity: 24.79, img: './images/jupiter.png' },
    saturn: { gravity: 10.44, img: './images/saturn.png' },
    uranus: { gravity: 8.69, img: './images/uranus.png' },
    neptune: { gravity: 11.15, img: './images/neptune.png' }
};

document.getElementById('calculate').addEventListener('click', function() {
    const mass = document.getElementById('mass').value;
    const planet = document.getElementById('planet').value;
    const result = document.getElementById('result');

    if (mass === "") {
        result.innerHTML = "Mass is required";
        result.style.display ="flex"
        result.style.width = "70%"
        document.getElementById('planet-img').style.display = 'none';
        return;
    }

    if (!planetData[planet]) { // Check if the selected planet is in planetData
        result.innerHTML = `You have not chosen a valid planet yet`;
        result.style.display ="flex"
        document.getElementById('planet-img').style.display = 'none';
        return;
    }

    // If both fields are valid
    const weight = mass * planetData[planet].gravity;
    const planetImg = planetData[planet].img;

    result.style.display = 'flex';
    result.innerHTML = `The weight of the object on ${planet.charAt(0).toUpperCase() + planet.slice(1)} is <span id="weight">${weight.toFixed(2)} N</span>.`;
    document.getElementById('planet-img').src = planetImg;
});

document.getElementById('planet').addEventListener('change', function() {
    const planet = document.getElementById('planet').value;
    if (planet && planetData[planet]) {
        document.getElementById('planet-img').src = planetData[planet].img;
        document.getElementById('planet-img').style.display = 'flex';

    } else {
        document.getElementById('planet-img').src = '';
        document.getElementById('planet-img').alt = '';
    }
});
