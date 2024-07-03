class Player {
    constructor(size, x,y) {
        this.x = x
        this.y = y
        this.size = 50
        this.keyboard = { left: false, right: false, up: false, down: false}
        this.Element = this.createElement()
        this.initEvents()
    
    }
    creatElement()
        const player - document.createElement('div')
        player.classList.add('player')
        return player
    update() {}
        this.move()
        this.collisionWall()
        this.draw()
        

    move() {}
    collisionWall() {}

    draw() {
        this.Element.style.left = `${this.x}px`
        this.Element.style.top = `${this.y}px`
    }
    initEvents() {
        document.body.addEventListener('keydown' , (event) =>{
            console.log(event.key)
        })
    }