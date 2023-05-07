import React, {useEffect} from 'react';
import {useTypedDispatch} from "../Hook/useTypedDispatch";
import {useTypedSelector} from "../Hook/useTypedSelector";

const Movies = () => {
    const {movies, page, loading, error} = useTypedSelector(s => s.movie)
    const {fetchingMovies, changeCurrentPage} = useTypedDispatch()
    const pages = [1,2,3,4,5,6,7,8,9,10]
    

    useEffect(() => {
        fetchingMovies(page)
    }, [page])


    if (loading){
        return <h3>loading...</h3>
    }
    if (error){
        return <p>{error}</p>
    }

    return (
        <div className="container ">
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    movies.map(el => (
                        <div style={{margin: '20px'}}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                        </div>
                    ))
                }
            </div>

            <div style={{padding: "20px 0"}}>
                {
                    pages.map(el => (
                        <button
                            onClick={() => changeCurrentPage(el)}
                            key={el}
                            style={{margin: "0 10px"}}></button>
                    ))
                }
            </div>

        </div>
    );
};

export default Movies;