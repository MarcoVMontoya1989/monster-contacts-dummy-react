import React from 'react';

import CardListComponent from "./components/card-list/cardList.component";
import SearchBoxComponent from "./components/search-box/searchBox.component";

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: '',
        };

        this.filterHandler = this.filterHandler.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            res.json().then(r => this.setState({monsters: r}));
        })
        .catch(e => {
            console.log(e);
        })
    }

    filterHandler = (searchValue) => {
        this.setState({searchField: searchValue.target.value})
    };

    render() {
        const {monsters, searchField} = this.state;
        const filter = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monster Contacts</h1>
                <SearchBoxComponent onChangeHandler={this.filterHandler}/>
                <CardListComponent monsters={filter}/>
            </div>
        );
    }
}

export default App;