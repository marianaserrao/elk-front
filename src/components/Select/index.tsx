import React, { useCallback, SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    setFunction(opt: string | number| React.SetStateAction<string> | React.SetStateAction<number> ): void;
    labelText?: string;
}

const Select: React.FC<InputProps> = ({ setFunction, labelText=false, children, ...rest }) => {
    const handleChangeText = useCallback((event: any) => {
        setFunction(event.target.value);
    }, [setFunction]);

    return (
        <Container>
            {
                labelText && <label>{labelText}</label>
            }
            <select
                {...rest}
                onChange={handleChangeText}
            >
                {children}
            </select>
        </Container>
    )
}

export default Select;