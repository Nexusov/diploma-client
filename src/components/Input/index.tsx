import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

export interface InputProps extends HTMLInputProps {
    /** Стили для поля ввода */
    className?: string;
    /** Значение поля ввода */
    value?: string | number;
    /** Заголовок */
    label?: string;
    /** Ф-ия обработчик изменения значения поля ввода */
    onChange?: (value: string) => void;
    /** Флаг -только чтение */
    readonly?: boolean;
    /** Флаг - ошибка */
    isError?: boolean;
    /** Стили для заголовка */
    classNameLabel?: string;
}

type HandleType = React.ChangeEvent<HTMLInputElement>;

export const Input = ({ type, placeholder, value, onChange, className, ...rest }: InputProps) => {
    const handleChange = (e: HandleType) => {
        onChange?.(e.target.value);
    };

    const inputClassName = [styles.input, className].filter(Boolean).join(' ');

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={inputClassName}
            {...rest}
        />
    );
};
