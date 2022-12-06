import React from 'react';
import './Header.css';
import Title from './Title/Title';
import DateObject from 'react-date-object';
import Date from './Date/Date';

export default function Header() {
    return (
        <div className='header'>
            <Title />
            <Date />
        </div>
    );
} 