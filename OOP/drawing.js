
// window.onload = function() {
//     spawnSpirals(100)
    // drawSpiral("red", {x: 400, y: 300}, 3, 3, 10)
    // drawSpiral("blue", {x: 100, y: 200}, 3, 3, 30)
    // drawSpiral("green", {x: 600, y: 400}, 3, 3, 10)
    // drawSpiral("f0dbe0", {x: 600, y: 200}, 3, 3, 30)
// }

function spawnSpirals(nrOfSpirals) {

    let colors = ["red", "green", "blue", "purple", "cyan", "magneta"]
    for (let i = 0; i < nrOfSpirals; i ++) {
        let rp = {x: Math.floor(Math.random() * 800),
                  y: Math.floor(Math.random() * 600)}

            let ss = Math.floor(Math.random() * 12) + 3
            let gr = Math.floor(Math.random() * 17) + 3
            let nc = Math.floor(Math.random() * 45) + 5

            let rc = Math.floor(Math.random() * 5)
            let color = colors[rc]

            drawSpiral(color, rp, ss, gr, nc)
    }
}


function drawSpiral(color, initialPos, initialStepSize, growthRate, nrOfCycles) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")

    let currentPos = initialPos
    let step = initialStepSize
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(currentPos.x, currentPos.y)

    for (let i = 0; i < nrOfCycles; i ++) {
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y - step)
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x + step, currentPos.y)
        step += growthRate
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y + step)
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x - step, currentPos.y)
        step += growthRate
    }
    ctx.stroke()
}

function drawLineAndReturnPosition(ctx, x, y) {
    ctx.lineTo(x, y)
    return {
        x: x,
        y: y
    }
}

let c = document.getElementById("myCanvas")
let ctx = c.getContext("2d")

class BaseShape {
    
    constructor() {

    }

    setVelocity(velocity) {
        this.velocity = velocity
    }

    update() {
        if (this instanceof Rectangle) {
            if ((this.pos.x + this.width > c.width) || (this.pos.x < 0)) {
                this.velocity.x *= -1
            } else if ((this.pos.y + this.height > c.height) || (this.pos.y < 0)) {
                this.velocity.y *= -1
            }
            this.pos.x += this.velocity.x
            this.pos.y += this.velocity.y
        } else if (this instanceof Circle) {
            if ((this.circleCenter.x + this.radius > c.width) || (this.circleCenter.x < 0)) {
                this.velocity.x *= -1
            } else if ((this.circleCenter.y + this.radius > c.height) || (this.circleCenter.y < 0)) {
                this.velocity.y *= -1
            }
            this.circleCenter.x += this.velocity.x
            this.circleCenter.y += this.velocity.y
        } else if (this instanceof DoubleCircle) {
            this.circleOne.circleCenter.x += this.velocity.x
            this.circleOnecircleCenter.y += this.velocity.y

            this.circleTwo.circleCenter.x += this.velocity.x
            this.circleTwo.circleOnecircleCenter.y += this.velocity.y
        } else if (this instanceof Triangle) {
            this.points.a.x += this.velocity.x
            this.points.b.x += this.velocity.x
            this.points.c.x += this.velocity.x

            this.points.a.y += this.velocity.y
            this.points.b.y += this.velocity.y
            this.points.c.y += this.velocity.y
        }
    }
}

class DoubleCircle extends BaseShape {
    constructor(circleOne, circleTwo) {
        super()
        this.circleOne = circleOne
        this.circleTwo = circleTwo


       this.circleTwo.circleCenter.y = this.circleOne.circleCenter.y
       this.circleTwo.circleCenter.x = this.circleOne.circleCenter.x + this.circleOne.radius + this.circleTwo.radius
    }

    draw() {
        this.circleOne.draw()
        this.circleTwo.draw()
    }
} 

class Triangle extends BaseShape {
    constructor(points, color) {
        super()
        this.points = points
        this.color = color

        let rn = Math.floor(Math.random() * 2)
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    draw(){
        ctx.beginPath()
         this.fill ? ctx.fillStyle = this.color : ctx.strokeStyle = this.color

        ctx.moveTo(this.points.a.x, this.points.a.y)
        ctx.lineTo(this.points.b.x, this.points.b.y)
        ctx.lineTo(this.points.c.x, this.points.c.y)
        ctx.closePath()

        this.fill ? ctx.fill() : ctx.stroke()
    }
}

// new Triangle({a: {x: 10, y:20}, b: {x: 20, y: 40}, c: {x: 50, y: 60}})

class Rectangle extends BaseShape {
    constructor(width, height, pos, color) {
        super()
        this.width = width
        this.height = height
        this.pos = pos
        this.color = color

        let rn = Math.floor(Math.random() * 2)
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    draw() {
        ctx.beginPath()
        if (this.fill) { ctx.fillStyle = this.color
        } else { ctx.strokeStyle = this.color }
        ctx.rect(this.pos.x, this.pos.y, this.width, this.height)

        // ternary operator 
        this.fill ? ctx.fill() : ctx.stroke()
        
       
    }  
    
}

class Circle extends BaseShape {
    constructor(radius, color, circleCenter) {
        super()
        this.radius = radius
        this.color = color
        this.circleCenter = circleCenter

        let rn = Math.floor(Math.random() * 2)
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }
    draw() {
        ctx.beginPath()
        if (this.fill) { ctx.fillStyle = this.color
        } else { ctx.strokeStyle = this.color }
        ctx.arc(this.circleCenter.x, this.circleCenter.y, this.radius, 0, 2 * Math.PI, false)

        if (this.fill) {
            ctx.fill()
        } else {
            ctx.stroke()
        }
        ctx.stroke()
    }
}

let hex = "0123456789ABCDEF"
function generateRandomColor(){
    let randomColor = "#"
    for (let i = 0; i < 6; i++) {
        let ri = Math.floor(Math.random() * hex.length)
        randomColor += hex[ri]
    }
    return randomColor
}  

class Shapes {
    constructor(amount) {
        this.shapes = []
        for (let i = 0; i < amount; i++) {
            let randomRadius = Math.floor(Math.random() * 69) + 1
            let rc = generateRandomColor()
            let rv = {x: Math.floor(Math.random() * 10) + 1,
                    y: Math.floor(Math.random() * 10) + 1 }

            let pos = {
                x: Math.random() * c.width, 
                y: Math.random() * c.height
            }

            let rn = Math.floor(Math.random() * 3)
            let shape = null
            if (rn === 0) {
                shape = new Circle(randomRadius, rc, pos)
            }else if (rn === 1) {
                shape = new Rectangle(randomRadius, randomRadius, pos, rc)
            // } else if (rn === 2){
            //     shape = new DoubleCircle(new Circle(randomRadius, rc, pos), new Circle(randomRadius, rc, pos))
            } else {
                let allowedRegionCenter = {
                    x: Math.floor(Math.random() * c.width),
                    y: Math.floor(Math.random() * c.height)
                }
                let maxOffset = 100
                let minOffset = 25
                let rOffset = Math.floor(Math.random() * (maxOffset - minOffset)) + minOffset 

                let minX = allowedRegionCenter.x - rOffset
                let maxX = allowedRegionCenter.x + rOffset
                let minY = allowedRegionCenter.y - rOffset
                let maxY = allowedRegionCenter.y + rOffset
                let points = {
                    a: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY,
                    },
                    b: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY
                    },
                    c: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY
                    }
                }
                shape = new Triangle(points, rc)
            }
            shape.setVelocity(rv)
            this.shapes.push(shape)
        }
    }

    draw() {
        for (let shape of this.shapes) {
            shape.draw()
        }
    }

    update() {
        for (let shape of this.shapes) {
            shape.update()
        }
    }
}



let shapes = new Shapes(100)

function gameLoop() {
    ctx.clearRect(0, 0, c.width, c.height)
    shapes.update()
    shapes.draw()
}

const FPS = 30
setInterval(gameLoop, 1000 / 30)





