import {getFacilities, getTransports , getMinerals , getColonies} from "./database.js"

const fac = getFacilities() 
const transport = getTransports()
const min = getMinerals()
const colo = getColonies()

const buildString = (purchased) => {
    const foundFac = fac.find((facility) => {
        return facility.id === purchased.facilitiesId
    }
    )
    const foundTransport = transport.find((ride) => {
        return ride.id === purchased.transportId
    }
    )
    const foundEntree = ent.find((entree) => {
        return entree.id === order.entreesId
    }
    
    )




}