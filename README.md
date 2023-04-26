# Misija FrontEnd Challenge

### How to run the project

    - npm install.
    - npm run dev.

### My thought process

    - I chose to make the project in react, with TailWindCss for styling.
    - axios for fetching data from api.

## First Task:

# location:

    in the `utils/dataUtils.ts` file.

# name: `sumNestedArray`

# Explantion:

    The function uses recursion to handle inner arrays that may contain other arrays. It checks if an element is an array using Array.isArray, and if it is, it calls itself with that element as the argument. If the element is a number, it adds it to the sum variable. The final result is returned at the end.

## Second Task:

# location:

    in the `utils/dataUtils.ts` file.

# name: `chunkArray`

# Explantion:

    This function first checks if the arr parameter is empty or if the size parameter is not a positive integer. If either of these conditions is true, it returns an empty array Otherwise, it creates a new result array and uses a for loop to iterate over the arr parameter in increments of size. In each iteration, it uses the slice() method to extract subarray of length size from the arr parameter and pushes it to the result array. The final result array is returned at the end.

## Third Task:

# location:

    Movies page that you can go to from the Header.

# components:

1. `MySelect` a Select component made with react-select libray. Two mySelect components in the MoviesPage:
   1. `genre`: list items based on the selected option. `Adventure` is selected by default.
   2. `sort by`: sort items based on the selected option. `title` is selected by default. (other options are not implemented).
2. `MoviesList` a component that maps through the `moviesFromGenre` array that is passed from `MoviesPage`, based on the `genre selected` from the Genre options in the select component, and the `movieFromGenre` array is sorted based on the `sortKey`.
3. `Movie` A single movieFromGenre item from the `moviesFromGenre` array, that is passed from the `MoviesList` component, which has a function, that is called when the `View Details` button is clicked, which sets the variable `selectedMovie` to the imdb_id, using the passed `onSelectedMovie` function from the MoviesPage,
4. `MovieDetails` which is rendered upon clicking on the `View Details` button on each movie card, when `View Details` button is clicked, The imdb_id is passed to the component and using that id, we fetch the movie from the api.

## API

1. `fetchClient` file in the utils folder, exports a client object with the functions GET | POST | PUT | DELETE however only GET method was used in the App.
2. The `api` folder has two files:
   1. Genres for fetching genre related data.
   2. Movies for fetching movie related data.

### Things I would do better if I had more time

1. Better desin, styling and structure of the app.
2. Finish everything that is mentioned in the third task.
3. Rafactor some areas, where there is some repeating code, for efficiency.
4. Reorganize `MoviesPage`, move some functions to a different file for better readability.
5. Write tests.
