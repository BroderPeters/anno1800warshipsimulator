import { Battleship } from './battleship'

// function init<T>(ctor: new () => T, props: Partial<T>): T {
//     return Object.assign(new ctor(), props);
//   }

let gunBoat = {...Battleship, shipType: "Gunboat"}

document.body.textContent = gunBoat.shipType;