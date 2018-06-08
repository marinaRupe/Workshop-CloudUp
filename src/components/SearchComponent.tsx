import * as React from 'react';

interface ISearchComponentProps {
    onSubmit(query: string): Promise<void>;
}

interface ISearchComponentState {
    query: string;
}

export default class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentState> {
    public state: ISearchComponentState = {
        query: ''
    };

    private handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
            .then(_ => this.setState({ query: '' }));
    }

    private handleInput = (e: any) => this.setState({ query: e.target.value });

    public render() {
        return <div>
            <form onSubmit={this.handleSubmit} >
                <input value={this.state.query} onChange={this.handleInput} />
                <input type="submit" value="Search" />
            </form>
        </div>;
    }
}