import * as React from 'React';

export interface NavigationProps {
    navigationItems: NavigationItem[];
    selectedId: string;

    onSelectedChanged(selectedId: string);
}

export interface NavigationItem {
    name: string;
    id: string;
}

export interface NavigationItemProps {
    item: NavigationItem;
    isSelected: boolean;

    onClicked(id: string);
}

export class Navigation extends React.PureComponent<NavigationProps, never> {
    public render(): JSX.Element {
        return (
            <div style={{ display: 'flex' }}>
                {this.props.navigationItems && this.props.navigationItems.map((n, index) => (
                    <NavigationItemComponent
                        key={index}
                        item={n}
                        onClicked={this.props.onSelectedChanged}
                        isSelected={n.id === this.props.selectedId}
                    />
                ))}
            </div>
        );
    }
}

export class NavigationItemComponent extends React.PureComponent<NavigationItemProps, never> {
    private onClicked = () => {
        this.props.onClicked(this.props.item.id);
    }

    public render(): JSX.Element {
        let color = this.props.isSelected ? 'red' : 'black';

        return (
            <div onClick={this.onClicked} style={{ marginLeft: '5px', cursor: 'pointer', color }}>
                {this.props.item.name}
            </div>
        );
    }
}