"use client";

import { FC, FormEvent, useState, ChangeEvent } from "react";
import { GRADIENTS } from "@/app/_lib/config/constants";
import {
    ContactFormData,
    ContactFormErrors,
    FormStatus,
    ContactFormField,
    validateContactForm,
    hasErrors,
    submitContactForm,
} from "@/app/_lib/contact";
import FormInput from "./FormInput";

// Form Fields Configuration
const FORM_FIELDS: ContactFormField[] = [
    { name: "fullName", label: "الاسم بالكامل", type: "text", placeholder: "اسمك بالكامل", required: true },
    { name: "phone", label: "رقم الجوال", type: "tel", placeholder: "05555555555", required: true },
    { name: "email", label: "البريد الإلكتروني", type: "email", placeholder: "mail@website.com", required: true },
    { name: "subject", label: "عنوان الرسالة", type: "text", placeholder: "عنوان الرسالة", required: true },
    { name: "message", label: "الرسالة", type: "textarea", placeholder: "اكتب رسالتك هنا...", required: true, rows: 4 },
];

const INITIAL_FORM_DATA: ContactFormData = {
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
};

// Status Message Component
const StatusMessage: FC<{ status: FormStatus }> = ({ status }) => {
    if (status === "success") {
        return (
            <div
                className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center"
                role="alert"
            >
                ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً
            </div>
        );
    }

    if (status === "error") {
        return (
            <div
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center"
                role="alert"
            >
                حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى
            </div>
        );
    }

    return null;
};

// Main Form Component
const ContactForm: FC = () => {
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [status, setStatus] = useState<FormStatus>("idle");

    const isLoading = status === "loading";

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear field error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof ContactFormData];
                return newErrors;
            });
        }

        // Clear status message when user edits form
        if (status === "error" || status === "success") {
            setStatus("idle");
        }
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form
        const validationErrors = validateContactForm(formData);

        if (hasErrors(validationErrors)) {
            setErrors(validationErrors);
            return;
        }

        // Submit form
        setStatus("loading");
        setErrors({});

        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus("success");
            setFormData(INITIAL_FORM_DATA);

            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <StatusMessage status={status} />

                {FORM_FIELDS.map((field) => (
                    <FormInput
                        key={field.name}
                        {...field}
                        value={formData[field.name]}
                        error={errors[field.name]}
                        disabled={isLoading}
                        onChange={handleChange}
                    />
                ))}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white py-3 rounded-lg font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: GRADIENTS.primary }}
                >
                    {isLoading ? "جاري الإرسال..." : "إرسال"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
