// https://www.superheroapi.com/api.php/111305325071114/id

const SUPERHERO_TOKEN = '111305325071114'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHero = document.getElementById('newHero');
const heroImageDiv = document.getElementById('heroImage')
const search = document.getElementById('search')
const searchInput = document.getElementById('searchInput')

const getSearchSuperHero = (name) => {

    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]

            const name = `<h2>${json.results[0].name}</h2>`
            const stats = getStatsHTML(hero);
            heroImageDiv.innerHTML = `${name}<img src="${hero.image.url}" height=200 width=200/>${stats}`
            console.log(json)
        })

}
const getRandomSuperHero = (id, name) => {

    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            const name = `<h2>${json.name}</h2>`
            const stats = getStatsHTML(json);
            // const intelligence = `<p>Intelligence: ${json.powerstats.intelligence}</p>`
            // const strengths = `<p>Strengths: ${json.powerstats.strength}</p>`
            heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=200 width=200/>${stats}`
            console.log(json)
        })

}


const getStatsHTML = (character) => {

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })
    return stats.join('')
}

const randomHero = () => {
    numberOfHeros = 731
    return Math.floor(Math.random() * numberOfHeros) + 1
}

newHero.onclick = () => {
    getRandomSuperHero(randomHero())
}

search.onclick = () => getSearchSuperHero(searchInput.value)

//const img = "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10476.jpg"
