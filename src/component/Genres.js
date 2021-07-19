import { useEffect } from "react";
import axios from 'axios'

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=78a839500ec15706362a7cc86bff30d3&language=en-US`)
        setGenres(data.genres);
    };

    console.log(genres);

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
    }, [])

    return (
        <div>
            Genres
        </div>
    )
}

export default Genres
