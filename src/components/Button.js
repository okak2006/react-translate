import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
    //USING CONTEXT
    //set up context in component: contextType = ContextObject;
    //below equivalent to making Button.contextType=LanguageContext
    //once contextType is defined, you can access state by this.context
    //static contextType = LanguageContext;

    render() {
        //using context
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
           <button className="ui button primary">
               {/* Consumer is used when we want to access multiple context objects */}
               <LanguageContext.Consumer>
                   {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
               </LanguageContext.Consumer>
            </button>
        )
    }
}
