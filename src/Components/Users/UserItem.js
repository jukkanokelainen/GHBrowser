import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = props => {
    const { avatar_url, login } = props.data;
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt=''
                className='round-img' style={{ width: "70px" }}
            />
            <h3>{login}</h3>
            <Link to={'/User/' + login} className='btn btn-sm btn-dark'>Link</Link>
        </div>
    )
}

UserItem.propTypes = {
    data: PropTypes.object.isRequired
};


export default UserItem
