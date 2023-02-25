import React from 'react';

function RadioButton({ id, name, value, isChecked, onChange, children }) {
    return (
        <label htmlFor={id}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
            />
            {children}
        </label>
    );
}

export default React.memo(RadioButton);
