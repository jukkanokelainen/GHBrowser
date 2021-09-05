import React, { Fragment, useEffect } from 'react'
import Spinner from '../Layout/Spinner';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import githubContext from '../../Context/Github/githubContext.js';

const User = (props) => {
    
    const GithubContext = useContext(githubContext);

    useEffect(() => {
        GithubContext.getUser(props.match.params.login)
        // eslint-disable-next-line 
        }, []);

    const {user, isLoading} = GithubContext;
    const {
        login,
        name,
        avatar_url,
        bio,
        blog,
        html_url,
        followers,
        following,
        public_repos,
        hireable,
        public_gists,
        location
        } = user;

    if (isLoading) {return (<Spinner />);}
    else {
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">
                    Back To Search
                </Link>
                Hireable: {' '}
                {hireable ? (
                <i className= 'fas fa-check text-success' /> )
                : (
                <i className= 'fas fa-times-circle text-danger' />  )}
                <div className= 'card grid-2'>
                    <div className= 'all-center'>
                        <h3>{name}</h3>
                        <img src={avatar_url} alt=''
                        className='round-img' style={{width:"170px"}}
                        />
                        <a href={html_url} className='btn btn-sm btn-dark'>Link</a>
                    </div>
                    <div>
                        {bio && 
                        <Fragment>
                            <h3>Bio:</h3>
                            <p>{bio}</p>
                        </Fragment>
                        }
                        <p><strong>Username: {' '}</strong>{login}</p>
                        <p><strong>Website: {' '}</strong>{blog}</p>
                        <p><strong>Location: {' '}</strong>{location}</p>
                    </div>
                </div>
                <div className="card ">
                    <div className="badge badge-success">Followers: {followers}</div>
                    <div className="badge badge-light">Following: {following}</div>
                    <div className="badge badge-dark">Public repos: {public_repos}</div>
                    <div className="badge badge-danger">Private Gists: {public_gists}</div>
                </div>
            </Fragment>
        );
    }
}

export default User

