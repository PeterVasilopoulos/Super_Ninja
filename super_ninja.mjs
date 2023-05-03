import Ninja from "../Ninja/ninja.mjs";

// Super Ninja Class
class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake()
        console.log("Something incredibly wise.")
    }
}

const sensei1 = new Sensei("Jerry")

sensei1.speakWisdom()