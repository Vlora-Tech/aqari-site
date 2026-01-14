// Contact API Service

import { ContactFormData } from "./types";
import { sanitizeInput } from "./validation";

interface ApiResponse {
    success: boolean;
    message?: string;
}

// Sanitize all form data before sending
const sanitizeFormData = (data: ContactFormData): ContactFormData => ({
    fullName: sanitizeInput(data.fullName),
    phone: sanitizeInput(data.phone),
    email: sanitizeInput(data.email),
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message),
});

// Submit contact form to API
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
    const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

    if (!apiUrl) {
        console.error("Contact API URL not configured");
        return { success: false, message: "خطأ في الإعدادات" };
    }

    const sanitizedData = sanitizeFormData(data);

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sanitizedData),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("API Error:", errorData);
            return { success: false, message: "فشل في إرسال الرسالة" };
        }

        return { success: true, message: "تم إرسال رسالتك بنجاح" };
    } catch (error) {
        console.error("Network Error:", error);
        return { success: false, message: "خطأ في الاتصال، حاول مرة أخرى" };
    }
};
