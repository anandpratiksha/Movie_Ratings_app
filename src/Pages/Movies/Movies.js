const Movies = () => {

    const fetchMovies = () => {
        const { data } = await axios.get("");
    }

    return (
        <div>
            <span className="pageTitle">Movies</span>

        </div>
    )
}

export default Movies
