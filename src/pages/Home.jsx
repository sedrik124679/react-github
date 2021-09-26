import React, {Fragment} from 'react';
import Search from "../components/search/Search";
import Card from "../components/cards/card";

const Home = () => {
    const cards = new Array(15).fill('').map((_, i) => i)
    console.log(cards)

    return (
        <>
           <Search />
            <div className="row">
                {cards.map((card) => {
                    return(
                        <div className="col-sm-4 mb-4" key={card}>
                            <Card />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Home;