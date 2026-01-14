import { FC, ChangeEvent } from "react";
import { ContactFormData } from "@/app/_lib/contact";

interface FormInputProps {
    name: keyof ContactFormData;
    label: string;
    type: "text" | "email" | "tel" | "textarea";
    placeholder: string;
    required: boolean;
    rows?: number;
    value: string;
    error?: string;
    disabled: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const INPUT_BASE_CLASSES = [
    "w-full px-4 py-3 rounded-lg transition-colors",
    "border border-gray-200",
    "focus:outline-none focus:border-[#124090]",
    "disabled:bg-gray-100 disabled:cursor-not-allowed",
].join(" ");

const INPUT_ERROR_CLASSES = "border-red-400";

const FormInput: FC<FormInputProps> = ({
    name,
    label,
    type,
    placeholder,
    required,
    rows,
    value,
    error,
    disabled,
    onChange,
}) => {
    const inputClasses = `${INPUT_BASE_CLASSES} ${error ? INPUT_ERROR_CLASSES : ""}`;

    const commonProps = {
        id: name,
        name,
        placeholder,
        required,
        disabled,
        value,
        onChange,
        "aria-invalid": error ? true : false,
        "aria-describedby": error ? `${name}-error` : undefined,
    };

    return (
        <div>
            <label htmlFor={name} className="block text-sm text-gray-600 mb-2">
                {label}
                {required && <span className="text-red-500 mr-1">*</span>}
            </label>

            {type === "textarea" ? (
                <textarea
                    {...commonProps}
                    rows={rows || 4}
                    className={`${inputClasses} resize-none`}
                />
            ) : (
                <input
                    {...commonProps}
                    type={type}
                    autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : name === 'fullName' ? 'name' : undefined}
                    className={inputClasses}
                />
            )}

            {error && (
                <p id={`${name}-error`} className="text-red-500 text-xs mt-1" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormInput;
