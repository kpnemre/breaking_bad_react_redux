import React from 'react'
import { Link } from 'react-router-dom';

const QuotesCard = ({item}) => {
    return (
        <div style={{ margin:15}}>
             <Link to={`/quotedetail/${item?.quote_id}`} style={{color:'black'}}>
            <strong>{item.quote_id}  </strong><q>{item.quote}</q><strong>{item.author}</strong>
            </Link>
        </div>
    )
}

export default QuotesCard;
