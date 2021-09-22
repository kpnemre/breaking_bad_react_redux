import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import Cards from "../../components/Cards";
import { Alert, Button, Col, Container, Row, Spinner, PageHeader } from "react-bootstrap";

const Home = () => {
  const items= useSelector((state) => state.characters.items);
  const isLoading= useSelector((state) => state.characters.isLoading);
  const error= useSelector((state) => state.characters.error);
  const page= useSelector((state) => state.characters.newpage);
  const nextpage= useSelector((state) => state.characters.nextpage);

  // console.log('error', error);
  console.log('items', items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

if (isLoading) {
    return <Spinner className="justify-content-md-center" animation="border" variant="primary" />;
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
            <Cards chars={item} />
          </Col>
        ))}
      </Row>
      {isLoading && <Spinner className="justify-content-md-center" animation="border" variant="primary" /> }
    {nextpage && !isLoading &&
        (<Button size="lg" className="m-5"  onClick={()=>dispatch(fetchCharacters(page))}>Load More</Button>)
}
    </Container>
  );
};

export default Home;
