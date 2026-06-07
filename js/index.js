const container = document.getElementById('harry__grid')

fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    data.forEach(character => {

        const createCharacter = document.createElement('li')
        createCharacter.classList.add("harry__grid__card")
        if (character.house == 'Gryffindor') {
            createCharacter.classList.add('gryffindor')
        } else if (character.house == 'Hufflepuff') {
            createCharacter.classList.add('hufflepuff')
        } else if (character.house == 'Ravenclaw') {
            createCharacter.classList.add('ravenclaw')
        } else {
            createCharacter.classList.add('slytherin')
        }
        createCharacter.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <span class="house-overlay"></span>
            <div class="harry__grid-info">
                <h3>${character.name}</h3>
                <span>${2026 - character.yearOfBirth}</span>
            </div>
        `
        container.appendChild(createCharacter)
    });
})
.catch(error => console.error(error))