import axios from 'axios'
import { useEffect, useState } from 'react';
import Genres from '../../component/Genres';
import CustomPagination from '../../component/Pagination/CustomPagination';
import SingleContent from '../../component/SingleContent/SingleContent';
import useGenres from '../../hooks/useGenre';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres)

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`);
        setContent(data.results);
        setNumOfPages(data.total_pages)
    };

    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL])
    return (
        <div>
            <span className="pageTitle">TV Series</span>
            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => (
                        <SingleContent key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type='tv'
                            vote_average={c.vote_average}

                        />
                    ))
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Series
