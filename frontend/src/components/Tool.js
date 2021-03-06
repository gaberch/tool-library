import React from 'react';
import { Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom';


export default class Tool extends React.Component {
    state = {
        name: '',
        description : '',
        available: undefined
    };

    canCheckOut = async () => {
        const url = 'http://localhost:3000/tools'
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);
        let count = 0
        for (let i = 0; i < results.length; i++) {
            if (!results[i].available){
                count++;
            }
        }
        return count <= 2;
    }

    handleCheckinCheckout = async () => {
        
        const checkOut = await this.canCheckOut();

        if (checkOut || !this.state.available){
            // console.log('can check out')
            const data = { available: !this.state.available }
            const url = 'http://localhost:3000/tools/' + this.props.match.params.id
            fetch(url,{
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json()
            }).then((result) => {
                return this.setState(() => ({
                    available: result.available
                }));
            }).catch((error) => {
                console.log(error);
            });
        } else {
            alert('Max number of tools have been checked out. Limit is 3.')
        }

        


        
    };

    componentDidMount() {
        const url = 'http://localhost:3000/tools/' + this.props.match.params.id
        // console.log(url);
        fetch(url).then((result) => {
            return result.json()
        }).then((tool) => {
            // console.log(tool)
            this.setState(() => ({
                name: tool.name,
                description: tool.description,
                available: tool.available
            }))
        }).catch((error) => {
            return console.log(error)
        });
    }


    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Description: {this.state.description}</p>
                <p>Availability: {this.state.available? "Available": "Checked Out"}</p>
                <button onClick={this.handleCheckinCheckout}>{this.state.available? "Check Out": "Check In"}</button>
            </div>
        );
    }


}

// const Tool = (props) => {
//     console.log(props);
//     return (
//         <div>
//             My Tool has id: {props.match.params.id}
//         </div>
//     );
// }

// export default Tool;