import * as React from 'react';


export default class Header extends React.Component<{}, {}> {
    public render() {
        return <div>
            <button>SEARCH</button>
            <button>FAVORITES</button>
        </div>
    }
}