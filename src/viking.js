// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage
    }
}



// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage (damage) {
         this.health -= damage

         if (this.health > 0) {
             return `${this.name} has received ${damage} points of damage`
         } else {
             return `${this.name} has died in act of combat`
         }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength)
    }

    receiveDamage (damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
   }
}

// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(newViking) {
        this.vikingArmy.push(newViking)
    }

    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon)
    }

    vikingAttack() {
        let randViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length))

        let randSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length))

        this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength)

        if (this.saxonArmy[randSaxon].health <= 0) {
            this.saxonArmy.splice(randSaxon, 1)
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${this.vikingArmy[randViking].strength} of damage!`
        }

    }

    saxonAttack() {
        let randViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length))

        let randSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length))

        this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].strength)

        if (this.vikingArmy[randViking].health <= 0) {
            this.vikingArmy.splice(randViking, 1)
            return 'A Viking has fallen'
        } else {
            return `${this.vikingArmy[randViking].name} has received ${this.saxonArmy[randSaxon].strength} points of damage`
        }
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy == 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
}

let viking = new Viking ('Ragnar', 300, 30)
let Rambo = new Soldier (700, 50)
let saxon = new Saxon (200,20)
let newWar = new War()

newWar.addSaxon(saxon)
newWar.addViking(viking)

newWar.vikingAttack()


