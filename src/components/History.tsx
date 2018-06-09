import * as React from 'React';

export interface HistoryProps {
    historyItems: HistoryItem[];
}

export interface HistoryItem {
    url: string;
    input?: string;
}

export class History extends React.PureComponent<HistoryProps, never>{
    public render(): JSX.Element {
        return (
            <>
                {this.props.historyItems && this.props.historyItems.map((h, index) => (
                    <div key={index}>
                        <img src={h.url} />
                    </div>
                ))}
            </>
        );
    }
}