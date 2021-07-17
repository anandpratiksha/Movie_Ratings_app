import { img_300, unavailable } from '../../Config/config';
import "./SingleContent.css"
import Badge from '@material-ui/core/Badge';

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
    return (
        <div className="media">
            <Badge badgeContent={vote_average}
                color={vote_average > 6 ? 'primary' : 'error'}
            />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle">{media_type === 'tv' ? "TV Series" : "Movies"}
                <span className="subTitle">{date}</span>
            </span>
        </div>
    )
}

export default SingleContent
