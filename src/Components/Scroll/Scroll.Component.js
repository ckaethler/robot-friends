import React from 'react';

// const styles = {};

const Scroll = (props) => (
    <div style={
        {
            overflow: 'scroll', 
            border: '5px solid black', 
            height: '65vh'
        }}>
        {props.children}
    </div>
);

export default Scroll;