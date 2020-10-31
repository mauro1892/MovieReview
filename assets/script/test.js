var navGallery = document.getElementById("gallery");

class actor {
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}


class movie {
    constructor(title, description, genre, ageRestriction, mainActors){
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.ageRestriction = ageRestriction;
        this.mainActors = mainActors;
    }
    /*
    get title(){
        return this._title;
    }
    set title(value){
        if ((typeof value) === "string"){
            this._title = value;
        } else {
            this._title = "";
        }
    }

    get description(){
        return this._description;
    }
    set description(value){
        if ((typeof value) === "string"){
            this._description = value;
        } else {
            this._description = "";
        }
    }

    get genre(){
        return this._genre;
    }
    set genre(value){
        if ((typeof value) === "string"){
            this._genre = value;
        } else {
            this._genre = "";
        }
    }


    get ageRestriction(){
        return this._ageRestriction;
    }
    set ageRestriction(value){
        if ((typeof value) === "number"){
            this._ageRestriction = value;
        } else {
            this._ageRestriction = 0;
        }
    }

    get mainActors(){
        return this._mainActors;
    }
    set mainActors(value){
        if ((typeof value) === "string"){
            this._mainActors = value;
        } else {
            this._mainActors = "";
        }
    }*/
};

class movieCollection{
    
    constructor(){
        this.collection = [];
    }

    add(title, description, genre, ageRestriction, mainActors){
        let m = new movie(title, description, genre, ageRestriction, mainActors);
        this.collection.push(m);
        return m;
    }

    number(){
        return this.collection.length;
    }

    movie(value){
        return this.collection[value];
    }
}

var gallery = new movieCollection();

gallery.add("Alice in wonderland", "loremimpus", "Fantasy", 5, "ElPepe");
gallery.add("Lo and Behold", "loremimpus", "Fantasy", 15, "ElPepe");
gallery.add("The Lord of the Rings: The Fellowship of the Ring", "loremimpus", "Fantasy", 16, "ElPepe");
gallery.add("Alice in wonderland", "loremimpus", "Fantasy", 5, "ElPepe");
gallery.add("Alice in wonderland", "loremimpus", "Fantasy", 5, "ElPepe");
gallery.add("Alice in wonderland", "loremimpus", "Fantasy", 5, "ElPepe");
gallery.add("The Matrix", "loremimpus", "Action", 5, "ElPepe");
gallery.add("The Matrix Revolutions", "loremimpus", "Action", 5, "ElPepe");
gallery.add("The Matrix Reloaded", "loremimpus", "Action", 5, "ElPepe");
gallery.add("Fast and Furious", "loremimpus", "Action", 5, "ElPepe");


for(i=0; i < gallery.number(); i++){
    navGallery.innerHTML += "<a>" + gallery.movie(i).title + "</a>";
}
