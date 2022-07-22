const database = {
  minerals: [
    {
      id: 1,
      name: "Newforcium",
    },
    {
      id: 2,
      name: "Projectium",
    },
    {
      id: 3,
      name: "Vibranium"
    },
  ],
  facilities: [
    {
      id: 1,
      name: "Ganamede",
    },
    {
      id: 2,
      name: "Io",
    },
    {
      id: 3,
      name: "Xer"
    },
  ],
  colonies: [
    {
      id: 1,
      name: "Mars",
    },
    {
      id: 2,
      name: "Jupiter",
    },
    {
      id: 3,
      name: "Venus",
    },
  ],
  transports : [
    {
        id: 1,
        name: "Alpha Starmeister B-10"
    },
    {
        id: 2,
        name: "Nova Winnebago 765-00"
    }
  ],
  transientState: {},
};

export const setTransport = (transportId) =>{
  database.transientState.selectedTransport = transportId;
  document.dispatchEvent(new CustomEvent("statechanged"));
}

//function setting state of colony
export const setColony = (colonyId) => {
  database.transientState.selectedColony = colonyId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setMineral = (mineralId) => {
  database.transientState.selectedMineral = mineralId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};

export const getTransports = () =>{
  return database.transports.map(transport=>({...transport}))
};

export const getMinerals = () => {
  return database.minerals.map((mineral)=> ({...mineral}))
};

export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }));
};

export const getTransports = () =>{
  return database.transports.map(transport=>({...transport}))
};




