class movie {
    imageMinSize = 300;
    imageMaxSize = 500;
    constructor(title, description, genre, ageRestriction, image) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.ageRestriction = ageRestriction;
        this.image = image;
    }

    min_size() {
        return this.imageMinSize;
    }

    max_size() {
        return this.imageMaxSize;
    }
};

class movieCollection {

    constructor() {
        this.collection = [];
    }

    add(title, description, genre, ageRestriction, image) {
        let m = new movie(title, description, genre, ageRestriction, image);
        this.collection.push(m);
        return m;
    }

    number() {
        return this.collection.length;
    }

    movie(value) {
        return this.collection[value];
    }

    collection() {
        return this.collection;
    }
}

const carouselBox = document.getElementById("box_images");
const carouselButton = document.querySelectorAll(".carousel-button");
const carouselContainer = document.querySelector(".box-carousel");
var carousel = new movieCollection();
var imageIndex = 0;
var imageTrasnlateX = 0;

carousel.add("Alice in wonderland", "asd", "Fantasy", 10, "./assets/images/alice_in_wonderland500x500.jpg");
carousel.add("A quiet place", "asd", "Terror", 16, "./assets/images/a_quiet_place500x500.jpg");
carousel.add("The nun", "asd", "Terror", 18, "./assets/images/the_nun500x500.jpg");
carousel.add("Django", "asd", "Terror", 16, "./assets/images/django500x500.jpg");
carousel.add("Fast and Furiuos", "asd", "Action", 10, "./assets/images/fast_and_furiuos500x500.jpg");
carousel.add("The Conjuring", "asd", "Terror", 18, "./assets/images/the_conjuring500x500.jpg");
carousel.add("World War Z", "asd", "Terror", 16, "./assets/images/world_war_z500x500.jpg");
carousel.add("The Lord of Ring: Fellowship of the ring", "asd", "Fantasy", 12, "./assets/images/the-lord-of-the-rings-fellowship-of-the-ring-500x500.jpg");
carousel.add("The Irishman", "asd", "Terror", 18, "./assets/images/the-irishman500x500.jpg");
carousel.add("Blade Runner", "asd", "Terror", 14, "./assets/images/blade_runner500x500.jpg");
var load = 0;
var imgWidth = 0;

if (load == 0){
carousel.collection.forEach(item => {
    carouselBox.innerHTML += "<img class='carousel-images' src=" + item.image + ">";
});
load=1;
}
const imageSelector = document.querySelectorAll(".carousel-images");

carouselContainer.addEventListener("mousemove", event => {
    carouselButton.forEach(btn => {
        btn.style.opacity = "70%";
    });
});

carouselContainer.addEventListener("mouseleave", event => {
    carouselButton.forEach(btn => {
        btn.style.opacity = "0%";
    });
});


carouselButton.forEach(button => {
    button.addEventListener("click", (event) => {
        if (event.target.id === "next") {
            if (imageIndex < carousel.number() - 5) {
                imageIndex++;
                imageTrasnlateX -= imgWidth;
            }
        } else {
            if (imageIndex != 0) {
                imageIndex--;
                imageTrasnlateX += imgWidth;
            }
        }
        imageSelector.forEach(imageItem => {
            imageItem.style.transform = `translateX(${imageTrasnlateX}px)`;
        });
    });
});


imageSelector.forEach(img=>{
    imgWidth = img.clientWidth;
});

alert(imgWidth);