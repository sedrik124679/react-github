import React, {Fragment, useContext} from 'react';
import Search from "../components/search/Search";
import Card from "../components/cards/card";
import {GitHubContext} from "../context/github/GitHubContext";

const Home = () => {
    const {loading, users} = useContext(GitHubContext)

    return (
        <>
           <Search />
            <div className="row">
                {loading
                    ? <p className='text-center'>Loading...</p>
                    : users.map((user) => {
                        return(
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        )
                    })
                }
                {}
            </div>
        </>
    );
};

export default Home;