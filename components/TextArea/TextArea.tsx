import { TextAreaType } from './type';

export default function TextArea({
    label,
    name,
    labelClassName,
    placeholder,
    className,
    required,
    onChange,
    cols,
    rows,
}: TextAreaType) {
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
            <textarea
                placeholder={placeholder}
                className={className}
                name={name}
                id={name}
                onChange={onChange}
                cols={cols}
                rows={rows}
                required={required}
            />
        </div>
    );
}
