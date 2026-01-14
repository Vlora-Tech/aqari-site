// Contact Form Validation

import { ContactFormData, ContactFormErrors } from "./types";

// Validation Rules
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{10,15}$/;

export const isValidEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    return PHONE_REGEX.test(cleanPhone);
};

// Sanitize input - remove dangerous characters
export const sanitizeInput = (input: string): string => {
    return input
        .trim()
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .slice(0, 1000); // Limit length
};

// Validate entire form
export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
    const errors: ContactFormErrors = {};

    // Full Name
    if (!data.fullName.trim()) {
        errors.fullName = "الاسم مطلوب";
    } else if (data.fullName.trim().length < 2) {
        errors.fullName = "الاسم قصير جداً";
    }

    // Phone
    if (!data.phone.trim()) {
        errors.phone = "رقم الجوال مطلوب";
    } else if (!isValidPhone(data.phone)) {
        errors.phone = "رقم جوال غير صحيح (10-15 رقم)";
    }

    // Email
    if (!data.email.trim()) {
        errors.email = "البريد الإلكتروني مطلوب";
    } else if (!isValidEmail(data.email)) {
        errors.email = "بريد إلكتروني غير صحيح";
    }

    // Subject
    if (!data.subject.trim()) {
        errors.subject = "عنوان الرسالة مطلوب";
    }

    // Message
    if (!data.message.trim()) {
        errors.message = "الرسالة مطلوبة";
    } else if (data.message.trim().length < 10) {
        errors.message = "الرسالة قصيرة جداً (10 أحرف على الأقل)";
    }

    return errors;
};

// Check if form has errors
export const hasErrors = (errors: ContactFormErrors): boolean => {
    return Object.keys(errors).length > 0;
};
