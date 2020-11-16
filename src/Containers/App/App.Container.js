import React, { Component } from 'react';

import CardList from '../../Components/CardList/CardList.Component';
import SearchBox from '../../Components/SearchBox/SearchBox.Component';
import Scroll from '../../Components/Scroll/Scroll.Component';

import { AppComponent, AppTitleComponent, NavigationComponent } 
    from './App.Styles';
import Theme from '../../Theme.Styles';

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchfield: '',
            robots: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = event => {
        this.setState({ searchfield: event.target.value }) ;
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        ));

        if (robots.length === 0) return <h1>Loading...</h1>

        return (
            <Theme>
                <AppComponent>
                    <NavigationComponent>
                        <AppTitleComponent>Robot Friends</AppTitleComponent>
                        <SearchBox searchChange={this.onSearchChange} />
                    </NavigationComponent>

                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </AppComponent>
            </Theme>
        )
    }
}

export default App;