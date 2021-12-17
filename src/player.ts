export class Player {
    name: string;
    jersey: number;
    yearsInLeage: number = 0;  // default string value
    constructor(xname: string, jersey: number){
        this.name = xname;
        this.jersey = jersey
    }

    //getter
    getName(): string {
        return this.name;
    }

    getJersey(): number {
        
        return this.jersey;
    }

    getYearsInLeage(): number {
        return this.yearsInLeage;
    }
    //setter
    setJersey(newJerseyNumber: number): void {
        this.jersey = newJerseyNumber;
    }

    //other methods
    playerAnniversary(): void {
       this.yearsInLeage++
    }
}

let alex: Player = new Player ("Alex", 23);
console.log(alex.getName());
console.log(alex.name);
alex.setJersey(14); 
console.log(alex.jersey); // changed from 23 to 14 now
console.log("Years in league: " + alex.getYearsInLeage());
alex.playerAnniversary()
console.log("Years in league: " + alex.getYearsInLeage());

// console.log(alex.name + " is jersey number: " + alex.jersey);