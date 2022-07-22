import { getMinerals, setMineral } from "./database.js"

const minerals = getMinerals()

document.addEventListener("change", (event) => {
    if (event.target.name === "mineral") {
        setMineral(parseInt(event.target.value))
    }
})

export const Minerals = () => {
    let html = ""
    html += `<select id ="mineral">`
    html += `<option value="0">Select a Mineral</option>`

    const listItems = minerals.map(mineral => {
        return `<option value="${mineral.id}"
        > ${mineral.name}
        </option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}