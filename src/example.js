// JS file zodat ik inline comments kan doen.
// Je kan example1 in je code krijgen door de volgende regel te gebruiken
// import { circleA } from './example'
// Of je kan natuurlijk copy pasten.

export const circleA = {
    "cid": 1,
    "name": "a",
    "owner": 0,

    "items": [
        {
            "ciid": 2, // Geen cid doordat dat impliciet is, dit is het
            "pos": (0, 0),
            "type": 0, // 0 = tekst, 1 = subcirkel
            "data": { "header": "Hallo wereld" },
            "children": [3]
        },
        {
            "ccid": 3,
            "pos": (30, 0),
            "type": 0,
            "data": { "header": 'Ook hallo' },
            "children": []
        },
        {
            "ccid": 4,
            "post": (40, 40),
            "type": 1,
            "data": { "cid": 2 } // De component vraagt vervolgens enkel de naam van de cirkel op.
        }
    ]
}

export const circleB = {
    "cid": 2,
    "name": "b",
    "owner": 0,

    "items": []
}
