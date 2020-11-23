import React, { useEffect, useState } from 'react';

import CardList from '../../Components/CardList/CardList.Component';
import SearchBox from '../../Components/SearchBox/SearchBox.Component';
import Scroll from '../../Components/Scroll/Scroll.Component';
import ErrorBoundary from 
    '../../Components/ErrorBoundary/ErrorBoundary.Component';

import { AppComponent, AppTitleComponent, NavigationComponent } 
    from './App.Styles';
import Theme from '../../Theme.Styles';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    // Calls Robots API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []) 

    const onSearchChange = event => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => (
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
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

export default App;