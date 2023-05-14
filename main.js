
// POLIMORFISMO: LLAMAR DISTINTAS COSAS QUE SE COMPORTAN DE LA MISMA FORMA
class Robot {
    constructor(arma) {
        this.arma = arma
    }
    atacar() {
        this.arma.disparar()
    }
}

class Arma {
    disparar() { }
}

class Lanzallamas extends Arma {
    constructor() {
        super()
    }
    disparar() {
        console.log("Fuego")
    }
}

class Pistola extends Arma {
    constructor() {
        super()
    }
    disparar() {
        console.log("Bala")
    }
}

let crearLanzallamas = new Lanzallamas()
let crearPistola = new Pistola()

let robotLanzallamas = new Robot(crearLanzallamas)
let robotPistola = new Robot(crearPistola)

// robot1.atacar()
// robot2.atacar()

// robot2.arma = lanzallamas
// robot2.atacar()


class Comandante {
    constructor(robots) {
        this.robots = robots
    }
    atacar() {
        this.robots.forEach(robot => {
            robot.atacar()
        });
    }
}


// let robots = [robot1, robot2, new Robot(new Pistola())]
// let comandante1 = new Comandante(robots)
// comandante1.atacar()

class RamboRobot {
    constructor(ataques) {
        this.ataques = ataques
    }
    atacar() {
        this.ataques.forEach(ataque => {
            ataque.disparar()
        });
    }
}

let ramboAtaques = [crearLanzallamas, crearPistola]

let rambo = new RamboRobot(ramboAtaques)
// rambo.atacar()

let robotsDelComandanteLeo = [new RamboRobot(ramboAtaques), robotPistola, robotLanzallamas]

let comandanteLeo = new Comandante(robotsDelComandanteLeo)

comandanteLeo.atacar()