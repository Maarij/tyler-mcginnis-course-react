import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./components/Nav";

// Component composed of:
// State
// Lifecycle
// UI

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light'
            ,toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        }
    }

    render() {
        // JSX will get converted by Babel to JS to return React.createElement(...)
        return (
            <ThemeProvider value = {this.state}>
                <div className={this.state.theme}>
                    <div className='container'>
                        <Nav/>
                        <Popular />
                        {/*<Battle />*/}
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

ReactDOM.render(
    <App />, // React Element,
    document.getElementById('app') // Where to render the element to
);