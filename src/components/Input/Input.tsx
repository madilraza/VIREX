import React from 'react'

interface InputProps {
    label: string;
    initValue: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, initValue, placeholder }) => {
    const [value, setValue] = React.useState(initValue);
    const handleChange = (evt: any) => {
        setValue(evt.target.value);
    }

    return <div className="component-input">
        <div className="component-input__label text-light text-sm">{label}</div>
        <input className="component-input__input" value={value} placeholder={placeholder} onChange={handleChange} />
    </div>
}

export default Input;