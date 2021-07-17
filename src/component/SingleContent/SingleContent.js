import { img_300 } from '../../Config/config'

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
    return (
        <div>
            <img src={`${img_300}/${poster}`} />
        </div>
    )
}

export default SingleContent
