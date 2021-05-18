// Descrizione:
// Creare uno slider di immagini: potete usare le immagini che desiderate.
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
// Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente

const app = new Vue({
    el: "#app",

    data: {

        counter: 0,

        images: [
            "./assets/img/new-york-city-2.jpg",
            "./assets/img/miami.jpg",
            "./assets/img/los-angeles.jpg",
            "./assets/img/san francisco.jpg"
        ]
    },

    methods: {

        prev(){
            // console.log(this.counter);
            if(this.counter === 0) {
                return this.counter = this.images.length -1
            }
            return this.counter -= 1
        },

        next(){
            // console.log((this.counter));
            if(this.counter === this.images.length -1) {
                return this.counter = 0
            }
            return this.counter += 1
        },

        jumpToImage(index) {
            return this.counter = index;

        },

        isActive(index) {
            if(index == this.counter) {
                return "active"
            } 
        },

       
    },
})