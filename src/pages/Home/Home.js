import React from 'react'
import { useSelector} from 'react-redux';


const Home = () => {
    const data= useSelector(state=>state.chars)
    console.log(data);
    return (
        <div>
            Home
        </div>
    )
}

export default Home
