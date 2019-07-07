import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        console.log(this.props.location.pathname)
        return <div className="block w-full bg-black text-white p-4">
            <span className='pointer'> Navbar </span>
        </div>
    }
}

export default withRouter(Navbar);