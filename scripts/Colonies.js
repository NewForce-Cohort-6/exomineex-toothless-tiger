import { getColonies, setColony,  } from "./database.js";
//store function as variable
const colonies = getColonies()


//Change event listener
document.addEventListener("change",
(event) => {
    if (event.target.name === "colony"){
        setColony(parseInt(event.target.value))
    }
})
//function for drop down of  colonies
export const civilizations = () => {
    let html = ""

    html += '<select id="colony">'
    html += '<option value="0">Select a Colony</option>'

    const arrayOfColonies = colonies.map((colony) => {
            return `<option value="${colony.id}">${colony.name}</option>`
        }
    )

    html += arrayOfColonies.join("")
    html += "</select>"
    return html
}

//example from carsRus 
/*
export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologyPackage.map( (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
*/