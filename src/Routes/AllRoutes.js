import {Route,Routes} from 'react-router-dom';
import { MovieDetail,MovieList,PageNotFound,Search } from "../Pages";


export const AllRoutes = () => {
  return (
      <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="movie/detail/:id" element={<MovieDetail/>}/>
            <Route path="movie/popular" element={<MovieList/>}/>
            <Route path="movie/upcoming" element={<MovieList/>}/>
            <Route path="movie/toprated" element={<MovieList/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
