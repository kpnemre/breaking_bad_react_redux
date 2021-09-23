import {useParams, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './QutoDetail.css';
import { quotesSelector } from '../../redux/quotesSlice';


const QutoDetail = () => {
    let { quote_id } = useParams();
    // const state = useSelector((state)=>state.quotes.items.filter(item=>item.quote_id===quote_id))
    const state = useSelector(quotesSelector)
// console.log("object",state);
    const quote= state?.filter((item)=>item?.quote_id===Number(quote_id))
    // console.log("object2",quote[0]);

if(!quote[0]){
    console.log("www:",quote);
return <Redirect to="/quotes" />
}
    return (
        <div className="main text">
            {/* <pre>{JSON.stringify(quote, null,2)}</pre> */}
            <h1>Quotte: </h1><q><i>{quote[0]?.quote}</i></q>
            <h3>Quotte Number: {quote[0]?.quote_id}</h3>

            <br />  <br />
            <h3>Author:</h3><strong> {quote[0]?.author}</strong>
          

            
        </div>
    )
}

export default QutoDetail
