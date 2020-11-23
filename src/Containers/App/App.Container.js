import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CardList from '../../Components/CardList/CardList.Component';
import SearchBox from '../../Components/SearchBox/SearchBox.Component';
import Scroll from '../../Components/Scroll/Scroll.Component';
import ErrorBoundary from 
    '../../Components/ErrorBoundary/ErrorBoundary.Component';
import { setSearchField } from '../../Redux/Actions.Redux';

import { AppComponent, AppTitleComponent, NavigationComponent } 
    from './App.Styles';
import Theme from '../../Theme.Styles';

const mapStateToProps = state => ({
    searchField: state.searchField,
})

const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
})

const App = ({ searchField, onSearchChange }) => {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []) 

    const filteredRobots = robots.filter(robot => (
        robot.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    if (robots.length === 0) return <h1>Loading...</h1>

    return (
        <Theme>
            <AppComponent>
                <NavigationComponent>
                    <AppTitleComponent>Robot Friends</AppTitleComponent>
                    <SearchBox searchChange={onSearchChange} />
                </NavigationComponent>

                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </AppComponent>
        </Theme>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);