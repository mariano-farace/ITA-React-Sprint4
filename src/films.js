// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.

const moviesAverage = (array) => {
  const totalScore = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue.score,
    0
  );

  // const notNullable = array.filter(
  //   (obj) => !Object.values(parseInt(obj.score)).includes(null)
  // );

  avgScore = totalScore / array.length;
  return avgScore;
};

function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  return moviesAverage(moviesFromDirector);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const toBeSorted = [...array];
  const sorted = toBeSorted.sort((a, b) => (a.title > b.title ? 1 : -1));

  const onlyTitles = sorted.map((movie) => movie.title);
  const firstTwentyValues = onlyTitles.slice(0, 20);
  return firstTwentyValues;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sorted = [...array];

  sorted.sort((a, b) => {
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1;
    } else {
      return a.year < b.year ? -1 : 1;
    }
  });

  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByCategory = array.filter(
    (movie) => movie.genre.includes(genre) && movie.score > 0
  );

  const avg = moviesAverage(moviesByCategory);

  return avg;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map((movie) => {
    const myArray = movie.duration.split(' ');
    const durationInMinutes =
      (parseInt(myArray[0]) * 60 || 0) + (parseInt(myArray[1]) || 0);

    const movieWithDurationInMinutes = {
      ...movie,
      duration: durationInMinutes
    };

    return movieWithDurationInMinutes;
  });
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesByYear = movies.filter((movie) => movie.year === year);

  const bestFilm = moviesByYear.reduce((prev, current) => {
    return prev.score > current.score ? prev : current;
  });

  return [bestFilm];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
