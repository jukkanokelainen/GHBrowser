import React, {useState} from 'react';
import {useContext} from 'react';
import githubContext from '../../Context/Github/githubContext.js';

 const Search = (props) => {
    const [text, setText] = useState('');
    const GithubContext = useContext(githubContext);

    const onTextChange= (e) => { 
        setText(e.target.value);
    }

    const onSubmit= (e) => {
        e.preventDefault();
        if (text.length === 0)
        {
            props.setAlert('Please write someting', 'light');
        }
        else {
            GithubContext.searchUsers(text);
            setText('');
        }
    }
    return (
        <div className="card">
            <form onSubmit= {onSubmit}>
                <input type='text'
                value= {text}
                onChange={onTextChange}
                placeholder='Search users...'
                />
                <input type='submit' value='Search'
                className='btn btn-block btn-primary'
                />
            </form>
            <button className='btn btn-block btn-light' 
            onClick={GithubContext.clearUsers} 
            >Clear</button>
        </div>
    );
}
// Search.defaultProps = {
//     text: ''
// };
// Search.propTypes = {
//     text: PropTypes.string.isRequired,
// };
export default Search
