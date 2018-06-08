import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent';
import GiphyViewer from './components/GiphyViewer';

import { getRandomGiphy } from './util/giphy.service';

export interface AppState {
    gifSource: string;
}

class Index extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            gifSource: ''
        };
    } 

    public componentDidMount() {
        this.searchGiphy('');
    }

    private searchGiphy = (query?: string) => {
        return getRandomGiphy(query).then(gifSource => {
            this.setState({ gifSource });
        });
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <GiphyViewer giphySource={this.state.gifSource} />
                <SearchComponent onSubmit={this.searchGiphy} />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
