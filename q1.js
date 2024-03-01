/*  Class - Movie

The class Movie is stated below.
An instance of class Movie represents a film.
This class has the following three properties:

- title, which is a String representing the title of the movie
- studio, which is a String representing the studio that made the movie
- rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


 */

//----------------------------------------------------------------------------------------------------------//

// Represents a movie with title, studio, and rating.
class Movie {
    /**
     * Initializes a Movie object.
     * @param {string} title - The title of the movie.
     * @param {string} studio - The studio that made the movie.
     * @param {string} rating - The rating of the movie. Defaults to "PG".
     */
    constructor(title, studio, rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    /**
     * Returns a new array containing only movies with a rating of "PG".
     * @param {Array<Movie>} movies - An array of Movie objects.
     * @returns {Array<Movie>} - A new array containing only PG-rated movies.
     */
    getPG(movies) {
        let pgMovies = [];
        for (let movie of movies) {
            if (movie.rating === "PG") {
                pgMovies.push(movie);
            }
        }
        return pgMovies;
    }
}

// Create an instance of Movie
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale.title); // Output: Casino Royale
console.log(casinoRoyale.studio); // Output: Eon Productions
console.log(casinoRoyale.rating); // Output: PG-13
//---------------------------------------------------------------------------------------//


//output
/* 
Casino Royale
Eon Productions
PG-13
 */