import { useEffect} from "react";
import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import QuotesCard from "../../components/QuotesCard";
import { errorSelector, fetchQuotes, quotesSelector, statusSelector } from "../../redux/quotesSlice";
import './Quotes.css'

const Quotes = () => {
  // const [quotes, setQuotes] = useState(null)
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  console.log("emreeeeee:", data);

  const dispatch = useDispatch();

  useEffect(() => {
    if(status==='idle'){
    dispatch(fetchQuotes());}
  }, [dispatch, status]);

  if (error) {
    return   <Alert  variant='primary'>
    There is a network error
  </Alert>;
  }
  return (
    <div>
        <h1>Quotes</h1>
        {status==='loading' && <Loading/>}
        {status==='succeeded'&& 
        data.map((item,index)=>(
            <QuotesCard key={index} item={item}/>

  )) }
    </div>
  );
};

export default Quotes;
