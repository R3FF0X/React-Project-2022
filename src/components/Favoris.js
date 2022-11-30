import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const Favoris = () => {
    const store = useSelector(state =>  state.pokelove)
    useEffect(()=>{
        {console.log(store)}
    }, [store])

    var count = 1;
    return (
            <div className="favoris">

                {store &&
                    store.map(t=>(
                        <p style={{color: 'white'}}> - {t.payload}</p>


                    ))
                }
            </div>
    );
};

export default Favoris;