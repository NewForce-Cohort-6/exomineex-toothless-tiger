import { getTransports, setTransport} from "./database.js"

const transports = getTransports()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "RockHopper") {
            setTransport(parseInt(event.target.value))
        }
    })

    export const Deliverys = () => {
        let  html = ""
        html += '<select id ="RockHopper">'
        html += '<option value="0">Select a Transport</option>'

        const arrayofTransports = transports.map( (transport) =>{
            return `<option value= "${transport.id}"> ${transport.name}</option>`
        })
        html += arrayofTransports.join("")
        html += "</select>"
        return html
    
    }
