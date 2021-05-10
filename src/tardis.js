
import React from 'react'

    

class Tardis extends React.Component {
    constructor(props) {
        super(props);
        this.tardis = {
            name: 'Time and Relative Dimension in Space',
            caps: false,
        };
    }



    render() {
        return (
            <div id="container">
                <h1>{this.tardis.name}</h1>
            </div>
        )
    }    
}


export default Tardis
