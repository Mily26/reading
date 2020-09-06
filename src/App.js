import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import List from "./components/List";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { id: 0, rating: 4, title: "Juicio Final", image: "./john.jpg" },
        {
          id: 1,
          rating: 5,
          title: "Las aventuras de Sherlock Holmes",
          image: "./holmes.jpg",
        },
        {
          id: 2,
          rating: 6,
          title: "El mundo de sofía",
          image: "./mundosofia.png",
        },
        {
          id: 3,
          rating: 5,
          title: "Encuentros (El lado B del amor)",
          image: "./rolon.jpg",
        },
        { id: 4, rating: 4, title: "El Aleph", image: "./borges.jpg" },
      ],
      copyBooks: [],
    };
  }

  componentDidMount() {
    this.initBooks();
  }
  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books],
    }));
  };

  onAdd = (item) => {
    let temp = [...this.state.books];
    const id = temp[temp.length - 1].id + 1;
    item["id"] = id;
    temp.push(item);

    this.setState({ books: [...temp] });
    this.initBooks();
  };

  onSearch = (query) => {
    if (query === "") {
      this.initBooks();
    } else {
      const temp = [...this.state.books];
      let res = [];

      temp.forEach((item) => {
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });
      this.setState({ copyBooks: [...res] });
    }
  };
  onUpdateRating = (item) => {
    var temp = [...this.state.books];
    const index = temp.findIndex((x) => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({ books: [...temp] });
    this.initBooks();
  };

  onRemove = (id) => {
    var temp = [...this.state.books]
    const res = temp.filter(item => item.id !== id)

    this.setState({books: [...res]})
    this.initBooks()
  }

  render() {
    return (
      <div className="app">
        <Menu title="Reading" onadd={this.onAdd} onsearch={this.onSearch} />
        <List items={this.state.copyBooks} onUpdateRating={this.onUpdateRating} onRemove={this.onRemove} />
      </div>
    );
  }
}
export default App;
