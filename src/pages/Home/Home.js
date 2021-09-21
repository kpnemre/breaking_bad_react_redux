import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import Cards from "../../components/Cards";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

const Home = () => {
  const items= useSelector((state) => state.characters.items);
  const isLoading= useSelector((state) => state.characters.isLoading);
  // const error= useSelector((state) => state.characters.error);
  // console.log('error', error);
  console.log('items', items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner className="justify-content-md-center" animation="border" variant="primary" />;
  }
  // if (error) {
  //   return   <Alert  variant='primary'>
  //   There is a network error
  // </Alert>;
  // }
  return (
    <Container fluid>
      <Row>
        {items?.map((item) => (
          <Col>
            <Cards chars={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
