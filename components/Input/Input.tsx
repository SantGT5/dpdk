import { InputType } from './type';

export default function Input({
    className,
    required,
    onChange,
    name,
    label,
    placeholder,
    labelClassName,
}: InputType) {
    const labelHandler = () => {
        if (!label) return <></>;

        return (
            <label className={labelClassName} htmlFor={name}>
                {label}
            </label>
        );
    };

    return (
        <div>
            {labelHandler()}
            <input
                className={className}
                required={required}
                onChange={onChange}
                id={name}
                name={name}
                placeholder={placeholder}
                type="text"
            />
        </div>
    );
}
