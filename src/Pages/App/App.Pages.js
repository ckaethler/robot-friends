import React, { Component } from 'react';

import CardList from '../../Components/CardList/CardList.Component';
import SearchBox from '../../Components/SearchBox/SearchBox.Component';
import { Robots } from '../../Pages/App/Robots.Data';

import { AppComponent, AppTitleComponent, NavigationComponent } 
    from './App.Styles';
import Theme from '../../Theme.Styles';

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchfield: '',
            robots: Robots,
            filteredRobots: Robots,
        }
    }

    onSearchChange = event => {
        this.setState({ searchfield: event.target.value }) ;
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => (
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        ));

        return (
            <Theme>
                <AppComponent>
                    <NavigationComponent>
                        <AppTitleComponent>Robot Friends</AppTitleComponent>
                        <SearchBox searchChange={this.onSearchChange} />
                    </NavigationComponent>
                    <CardList robots={filteredRobots} />
                </AppComponent>
            </Theme>
        )
    }
}

export default App;