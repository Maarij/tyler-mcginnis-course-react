import React from 'react'
import PropTypes from 'prop-types'

function LangauagesNav({selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        // JSX uses className because class is a reserved word in JS
        <ul className='flex-center'>
            {languages.map((language) => (
                <li key={language}>
                    <button
                        className='btn-clear nav-link'
                        style={language === selected ? {color: 'rgb(187,46,31)'} : null}
                        onClick = {() => onUpdateLanguage(language)}>
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LangauagesNav.propTypes = {
    selected: PropTypes.string.isRequired
    ,onUpdateLanguage: PropTypes.func.isRequired
}


export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }

    render() {
        const { selectedLanguage } = this.state

        return (
            <React.Fragment>
                <LangauagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        )
    }
}

