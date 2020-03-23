import React from 'react';

import ToolWidget from './ToolWidget';

export default class Tools extends React.Component {
    state = {
        tools: []

    };

    componentDidMount () {
        const url = 'http://localhost:3000/tools'
        
        fetch(url,{headers: {
            'Access-Control-Allow-Credentials': 'true'
        }}).then( (results) => {
            return results.json();
        }).then((tools) => {
            if (tools.length > 0){
                this.setState(() => ({tools}));
                // console.log(this.state.tools);
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    render() {
        return(
            <div>
                <h1> Browse Available Tools!</h1>
                {
                    this.state.tools.map((tool, index) => (
                        <ToolWidget
                            key={tool.name}
                            count={index+1}
                            toolName={tool.name}
                            toolDescription={tool.description}
                            available={tool.available}
                            _id={tool._id}
                        />
                        
                    ))
                }
            </div>);
    
    }

}


