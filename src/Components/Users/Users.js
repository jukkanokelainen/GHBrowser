import UserItem from './UserItem.js';
import Spinner from '../Layout/Spinner';
import {useContext} from 'react';
import githubContext from '../../Context/Github/githubContext.js';

const Users = () => {
    const GithubContext = useContext(githubContext);
    const {users, isLoading}=GithubContext;

    const userItems = users.map((item) =>
    <div key={item.id}><UserItem 
        data={item}
    /></div>
    );

    if (isLoading) {
        return (<Spinner />);
    }
    else {
        return (
            <div className='grid-3'>
                {userItems}
            </div>
        );
            }
}

// Users.propTypes = {
//     users: PropTypes.array.isRequired
// };

export default Users
