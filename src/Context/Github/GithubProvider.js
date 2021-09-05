import React, { useReducer } from 'react';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import axios from 'axios';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING
} from '../../TYPES'

const GithubProvider = (props) => {

  const initialState =
  {
    isLoading: false,
    users: [],
    user: {}
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async text => {
    setIsloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`);
    //setUsers(res.data.items);
    dispatch({ type: SEARCH_USERS, payload: res.data.items })
  }

  const getUser = async (username) => {
    setIsloading();
    //?client_id=jukkanokelainen&client_secret=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`;//HUOM tässä bäck ticksit jotta toi username menee tuonne nätisti
    const res = await axios.get(
      `https://api.github.com/users/${username}`);
    //setUser(res.data);
    dispatch({ type: GET_USER, payload: res.data })
  }

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS })
  }

  //setloading
  const setIsloading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        isLoading: state.isLoading, //statet näin
        users: state.users,
        user: state.user,
        searchUsers,//arrow funktiot näin
        getUser,
        clearUsers
      }}>
      {props.children}
      {/* ylläoleva mahdollistaa pääsyn kaikkiin itemiin niille jotka App.cs:ssä on GithubProvider-tägien välissä */}
    </githubContext.Provider>
  )
}


export default GithubProvider
