let favoriteColor = document.querySelector(`#color`)
let favoritePlace = document.querySelector(`#place`)
let favoriteRitual = document.querySelector(`#ritual`)




function favColor(event) {
    event.preventDefault();

    alert(`My favorite color is light blue!`)
}

function favPlace(event) {
    event.preventDefault();

    alert(`My favorite place is the woods!`)
}

function favRitual(event) {
    event.preventDefault();

    alert(`My favorite ritual is hammocking in the woods!`)
}

favoriteColor.addEventListener(`click`, favColor)
favoritePlace.addEventListener(`click`, favPlace)
favoriteRitual.addEventListener(`click`, favRitual)
