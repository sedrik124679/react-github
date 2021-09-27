import React, {Fragment, useContext} from 'react';
import Search from "../components/search/Search";
import Card from "../components/cards/card";
import {GitHubContext} from "../context/github/GitHubContext";
import Loader from "../components/loader/loader";

const Home = () => {
    const {loading, users} = useContext(GitHubContext)

    return (
        <>
           <Search />
            <div className="row">
                {loading
                    ? <Loader />
                    : users.map((user) => {
                        return(
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Home;