import React from 'react';

interface IProps {
    to: string;
    children: any;
    className?: string;
}

export class HashLink extends React.Component<IProps> {
    public target: HTMLDivElement | null = null;

    public onClick(e: MouseEvent) {
        e.preventDefault();
        const { target } = this;
        if (target !== null) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    public componentDidMount() {
        const { to } = this.props;
        this.target = document.getElementById(to) as HTMLDivElement;
    }

    public render() {
        const { to, children, className } = this.props;
        return (
            <a className={className} href={`#${to}`} onClick={this.onClick.bind(this)}>
                {children}
            </a>
        );
    }
}
