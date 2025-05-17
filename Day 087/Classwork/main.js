function showImage(animal) {
    const img = document.getElementById('animalImage');
    if (animal === 'cat') {
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg';
    } else if (animal === 'dog') {
        img.src = 'https://placedog.net/200/200';
    }
    img.style.display = 'block';
}
