import React, { Fragment, useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Repos from "../repos/Repos";
import {getUser , getUserRepos }from "../../data/api"
const User = () => {
    const { id } = useParams();
    const history = useHistory();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const userData = await getUser(id);
                setUser(userData);
                const userRepos = await getUserRepos(id);
                setRepos(userRepos);
            } catch (error) {
                console.error("Error:",error);
            }
        };
        fetchData();
    },[id])
    const {
        name,
        avatar_url,
        location,
        bio,
        company,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;
    console.log(history);
    return (
        <Fragment>
            <button onClick={() => history.goBack()}>Back to Search</button>
            Hireable: {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        alt={name}
                        className="round-img"
                        style={{ width: "150px" }}
                    />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio:</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a
                        href={html_url}
                        className="btn btn-dark my-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Show Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong>
                                    {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong>
                                    {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong>
                                    <a href={blog} target="_blank" rel="noopener noreferrer">
                                        {blog}
                                    </a>
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Repository: {public_repos}</div>
                <div className="badge badge-dark">Gist: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default User;