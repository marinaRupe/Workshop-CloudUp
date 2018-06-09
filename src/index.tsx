import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent';
import GiphyViewer from './components/GiphyViewer';
import { Navigation, NavigationItem } from './components/Navigation';
import { History, HistoryItem } from './components/History';

import { getRandomGiphy } from './util/giphy.service';

export interface AppState {
    gifSource: string;
    selectedNavigationItem: string;
    historyItems: HistoryItem[];
}

class Index extends React.Component<{}, AppState> {
    private navigationItems = [
        {
            name: 'Search',
            id: 'search'
        },
        {
            name: 'History',
            id: 'history'
        }
        
    ]

    constructor(props: {}) {
        super(props);
        this.state = {
            gifSource: '',
            selectedNavigationItem: 'search',
            historyItems: [],
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

    private onNavigationItemSelected = (selectedId: string) => {
        this.setState({ selectedNavigationItem: selectedId });
    }

    private onSave = () => {
        const historyItem: HistoryItem = {
            url: this.state.gifSource
        };

        const historyItems = [...this.state.historyItems, historyItem];
        this.setState({
            historyItems
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
                <Navigation
                    navigationItems={this.navigationItems}
                    selectedId={this.state.selectedNavigationItem}
                    onSelectedChanged={this.onNavigationItemSelected}
                />

                {this.state.selectedNavigationItem === 'search' &&
                    <>
                        <SearchComponent onSubmit={this.searchGiphy} />
                        <GiphyViewer
                            giphySource={this.state.gifSource}
                            onSave={this.onSave}
                        />
                    </>
                }

                {this.state.selectedNavigationItem === 'history' &&
                    <History
                        historyItems={this.state.historyItems}
                    />
                }
                
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
