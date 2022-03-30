import React from 'react';


export default class Navigation extends React.Component {

    render() {
        return (
            <nav id="mai-nav" className="fixedNav">
                <ul className="nav">
                    <li>agrestudio</li>
                    <li>portfolio</li>
                    <li>photography</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        );
    }
}