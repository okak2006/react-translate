import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{
    state = {language: 'english'};

    onLanguageChange = language => {
        this.setState({language});
    }

    render(){
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                {/* wrap components that need access to state in contextObject.Provider. Anything nested inside can also access state now*/}
                {/* whatever that's passed into value gets used to update state */}
                {/* each time you create provider, it's standalone and only would render when value specified in value={} changes */}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;