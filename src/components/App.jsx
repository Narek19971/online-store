import React from "react";
//import "./App.css";
import axios from "axios";
import MenuComponent from "./Menu.jsx";
import CardComponent from "./BooksCard.jsx";
import Filter from '../containers/Filter';
import { Card, Container } from "semantic-ui-react";

class App extends React.Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }
  render() {
    const { books } = this.props;
    const { setFilter } = this.props;
    return (
      <Container>
        <MenuComponent />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!books
            ? "Загрузка..."
            : books.map((book, i) => <CardComponent key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
