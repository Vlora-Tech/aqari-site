// Contact Form Types

export interface ContactFormData {
    fullName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface ContactFormField {
    name: keyof ContactFormData;
    label: string;
    type: "text" | "email" | "tel" | "textarea";
    placeholder: string;
    required: boolean;
    rows?: number;
}
