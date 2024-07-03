class Game {
    constructor(){
            this.map = document.querySelector('.map')
        addElement(element) {
            this.map.insertAdjacentHTML('beforeend', element)
            this.elements.push(element)

        }
    }
    run() {

        for(let el of this.elements){
            el.update()

        }



        requestAnimationFrame(this.run())
        }

    }
}