import { Route, Routes } from 'react-router-dom';
import './App.css';
import { chunkArray, sumNestedArray } from './utils/dataUtils';
import { MoviesPage, Header, Homepage, MovieDetails } from './components';

function App() {

  const testingArray = [[1,2,3,4,5, 1,100, 100], [4, 3, 2], 1, 'test', [123, 122, 121, 1, 'Hasan'], 'Misija'];
  const sumOfArray = sumNestedArray(testingArray);
  const chunkedArray = chunkArray(testingArray, 3);
  
  console.log(sumOfArray);
  console.log(chunkedArray);
  return (
    <>
      <Header />
      <div className="p-8">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path={'/movies'} element={<MoviesPage />} />
          <Route path={'/movies/:id'} element={<MovieDetails/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
