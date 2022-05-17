interface Ship {
    shipType: string;
    cargoSlots: number;
    itemSockets: number;
    hitpoints: number;
    // speed: number[];
}

export class Battleship implements Ship {
    shipType: string;
    cargoSlots: number;
    itemSockets: number;
    hitpoints: number;
    damagePerShot: number;
    attackCooldown: number;
    damagePerSecond: number;
    // attackRange: number;
}