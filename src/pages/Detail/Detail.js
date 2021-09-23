import axios from 'axios';
import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import Loading from '../../components/Loading';
import "./Detail.css"


const Detail = () => {

    let { char_id } = useParams();
    const [chardata, setChardata] = useState([]);
    const [isloading, setIsloading] = useState(true);


    useEffect(() => {
   axios(`${process.env.REACT_APP_API_URL}/characters/${char_id}`)
   .then(res=>res.data) 
   .then((data)=>setChardata(data[0]))
   .finally(setIsloading(false))
    }, [char_id])

    return (

        <div >
            <h1>{chardata?.name}{char_id}</h1>
    
            {isloading? (<Loading />):(
              
<div className="img-div">
<img className="img" src={chardata?.img} alt="resim"/>

            {/* <p>{JSON.stringify(chardata)}</p> */}
</div>


         )}
            
        
       
           
        </div>
    )
}

export default Detail
