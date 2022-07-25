import { getFacilities, setFacility } from "./database.js";

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
    }
}
)

export const fact = () => {
    let html = ``
    html += '<select id ="facility">'
    html += `<option value ="0">Select a facility</option>`

    const arrayOfOptions = facilities.map( (facility) => {
        return `<option value="${facility.id}">${facility.name}</option>`
    }
)


    html += arrayOfOptions.join("")
    html += "</select>"
    return html
    
}