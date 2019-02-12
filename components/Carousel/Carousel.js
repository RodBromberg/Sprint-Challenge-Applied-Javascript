class Carousel {
    constructor(element) {
        this.element = element;
        this.left_Button = element.querySelector('.left-button');
        this.right_Button = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img');
        this.left_Button.addEventListener('click', () => {
            this.rightImage();
        });
        this.right_Button.addEventListener('click', () => {
            this.leftImage();
        });
        this.newImages = Array.from(this.images)
        this.counter = 0;
        this.image = element.querySelectorAll('img')[this.counter];
        this.image.style.display = 'inline-block';
    }

    leftImage() {
        if (this.counter > 0) {
            this.counter--;
            this.images.forEach(image => {
                image.style.display = "none";
            });
            this.images[this.counter].style.display = "inline-block";
        }
    }

    // leftImage() {
    //     this.counter > 0 ?
    //         (this.counter--,
    //             this.images.forEach(image => image.style.display = 'none'),
    //             this.images[this.counter].style.display = 'inline-block') : this.rightImage();

    // }



    // rightClick() {
    //     this.counter++
    //         if (this.counter === 4) {
    //             this.counter = 0
    //         }
    //     this.images.forEach(image => image.style.display = 'none')
    // }

    rightImage() {
        if (this.counter < this.newImages.length - 1) {
            this.counter++;
            this.images.forEach(image => {
                image.style.display = "none";
            });
            this.images[this.counter].style.display = "inline-block";
        }
    }

}
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

const carousel = document.querySelectorAll(".carousel");
console.log(carousel);
carousel.forEach(element => new Carousel(element));
// const newCarousel = new Carousel(carousel)
// setInterval(newCarousel.rightClick.bind(newCarousel), 5000)