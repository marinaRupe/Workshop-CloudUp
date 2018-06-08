import * as React from 'react';

export interface IGiphyViewerProps {
    giphySource: string;
}

export default class GiphyViewer extends React.Component<IGiphyViewerProps, {}> {
    public render() {
        return <div>
            <img src={this.props.giphySource} />
        </div>;
    }
}