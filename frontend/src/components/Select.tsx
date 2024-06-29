import React from "react";

interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ value, onChange, children }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select value={value} onChange={handleChange}>
            {children}
        </select>
    );
};