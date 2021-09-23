import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import Cards from "../../components/Cards";
import Loading from "../../components/Loading"

import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const items= useSelector((state) => state.characters.items);
  const isLoading= useSelector((state) => state.characters.status);
  const error= useSelector((state) => state.characters.error);
  const page= useSelector((state) => state.characters.newpage);
  const nextpage= useSelector((state) => state.characters.nextpage);
  // console.log('error', error);
  // console.log('items', items);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoading==='idle'){
      dispatch(fetchCharacters());

    }
  }, [dispatch,isLoading]);

if (isLoading==="loading") {
    return <Loading />;
  }
  if (error) {
    return   <Alert  variant='primary'>
    There is a network error
  </Alert>;
  }

  return (
    <Container fluid>
      <h1 >
  <span>Breaking Bad</span> Characters
</h1>

      <Row>
        {items?.map((item, index) => (
 

          <Col key={index}>
             <Link to={`/char/${item?.char_id}`}>
             {/* <Link to="/detail/`$(item.char_id)`"> */}
             
            <Cards chars={item} />
            </Link>
          </Col>
        ))}
      </Row>
      {isLoading==='loading' && <Loading /> }
    {nextpage && isLoading!=='loading' &&
        (<Button size="lg" className="m-5"  onClick={()=>dispatch(fetchCharacters(page))}>Load More</Button>)
}
{!nextpage && !isLoading &&
(<Alert  variant='primary'>
There is no characters to shown
</Alert>)}
    </Container>
  );
};

export default Home;
