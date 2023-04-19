import React from 'react';
import './Table.css';
// import { Header, Row } from './Table';

export default function Table({ header, rows }: { header: JSX.Element, rows: JSX.Element[] }) {
    return (
        <div>
            <div>{header}</div>
            <div>{rows}</div>
        </div>
    );
}

const Header = ({ columns }: { columns: string[] }) => {
    return (
        <thead>
        <tr>
            {columns.map((column: string) => (
                <th>{column}</th>
            ))}
        </tr>
        </thead>
    );
};

const Row = ({ row }: { row: string[] }): JSX.Element => {
    return (
        <tr>
            {row.map((cell: string) => (
                <td>{cell}</td>
            ))}
        </tr>
    );
};

export { Header, Row };
