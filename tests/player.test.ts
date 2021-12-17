import { Player } from '../src/player';

describe("Player class", function() {
    test("Name is set from constructor", function () {
        let bill: Player = new Player("Bill", 25);
        expect(bill.name).toBe("Bill"); //expected an updated name
    })
    test("Jersey is set from constructor", function () {
        let bill: Player = new Player("Bill", 25);
        expect(bill.jersey).toBe(25); //expected an updated jersey number
    })
    test("Get name returns a name", function () {
        let bill: Player = new Player("Bill", 25);
        expect(bill.getName()).toBe("Bill"); //expected an updated value
    })
});