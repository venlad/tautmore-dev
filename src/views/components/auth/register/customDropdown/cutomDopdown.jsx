import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import {
    func, string, array,
} from 'prop-types';
// Value is for controlling th selected value from outside of the component
// OnChange will fire the event whenever ayn other list item is selected.
const Dropdown = ({
    options, prompt, value, onChange, id, label, selectedFlag,
}) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');

    const close = (e) => {
        setOpen(e && e.target === ref.current);
    };

    useEffect(() => {
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    const getClassNames = (selectedObj) => `option ${value === selectedObj ? 'selected' : null}`;

    function filter(GivenArray) {
        return GivenArray.filter((option) => option[label].toLowerCase()
            .indexOf(query.toLowerCase()) > -1);
    }

    function displayValue() {
        if (query.length > 0) return query;
        if (value) return value[label];
        return '';
    }

    // For controlling the if the dropdown is open or not.

    return (
        <div className="dropdown">

            <div className="control" onClick={() => setOpen((prev) => !prev)}>
                {/* To control and open the dropdown */}
                <div className="selected-value">
                    {/* {value ? value[label] : prompt} */}
                    <div className="country-flag-and-selected-value">
                        {selectedFlag && <img className="country-flag" src={selectedFlag} alt="flag" />}
                        <input
                            type="text"
                            ref={ref}
                            placeholder={value ? value[label] : prompt}
                            value={displayValue()}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                onChange(null);
                            }}
                            onClick={() => setOpen((prev) => !prev)}
                        />
                    </div>
                </div>
                <div className={`arrow  ${open ? 'open' : null}`} />

            </div>
            <div className={`options  ${open ? 'open' : null}`}>
                {
                    filter(options).map((option) => (
                        <div
                            onClick={() => {
                                setQuery('');
                                onChange(option);
                                setOpen(false);
                            }}
                            key={option[id]}
                            className={`option ${value === option ? 'selected' : null}`}
                        >
                            <img className="country-flag" src={option.flag} alt="flag" />
                            {option[label]}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    options: array.isRequired,
    prompt: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    id: string.isRequired,
    label: string.isRequired,
    selectedFlag: string.isRequired,
};

export default Dropdown;
