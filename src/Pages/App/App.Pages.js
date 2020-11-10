import React, { Component } from 'react';

import CardList from '../../Components/CardList/CardList.Component';
import SearchBox from '../../Components/SearchBox/SearchBox.Component';
import { Robots } from '../../Pages/App/Robots.Data';

import { AppComponent, AppTitleComponent } from './App.Styles';
import Theme from '../../Theme.Styles';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: Robots,
            searchfield: '',
        }
    }

    render() {
        const { robots } = this.state;
        return (
            <Theme>
                <AppComponent>
                    <AppTitleComponent>Robot Friends</AppTitleComponent>
                    <SearchBox />
                    <CardList robots={robots} />
                </AppComponent>
            </Theme>
        )
    }
}

export default App;