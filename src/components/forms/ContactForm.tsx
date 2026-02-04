"use client";

import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const focusField = (fieldName: string) => {
    switch (fieldName) {
      case "name":
        nameRef.current?.focus();
        break;
      case "email":
        emailRef.current?.focus();
        break;
      case "subject":
        subjectRef.current?.focus();
        break;
      case "message":
        messageRef.current?.focus();
        break;
    }
  };

  const getFieldError = (fieldName: string): string | null => {
    switch (fieldName) {
      case "email":
        if (formData.email && !formData.email.includes("@")) {
          return "Please enter a valid email address";
        }
        return null;
      case "name":
        if (formData.name && formData.name.trim().length < 2) {
          return "Name must be at least 2 characters";
        }
        return null;
      case "message":
        if (formData.message && formData.message.trim().length < 10) {
          return "Message must be at least 10 characters";
        }
        return null;
      default:
        return null;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "obakengtsaagane@gmail.com",
          redirect: false,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <motion.div variants={itemVariants}>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors"
          >
            Name <span className="text-error">*</span>
          </label>
          <input
            ref={nameRef}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            placeholder="Your name"
            required
            disabled={isLoading}
            aria-label="Your name"
            aria-required="true"
            aria-invalid={getFieldError("name") ? "true" : "false"}
            className={`w-full px-4 py-3 rounded-lg bg-input border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background focus:shadow-lg hover:bg-background/50 hover:border-primary/40 cursor-text disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
              focusedField === "name" ? "border-primary" : "border-border"
            } ${getFieldError("name") ? "border-error" : ""}`}
          />
          {getFieldError("name") && focusedField === "name" && (
            <p className="text-error text-xs mt-1">{getFieldError("name")}</p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors"
          >
            Email <span className="text-error">*</span>
          </label>
          <input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            placeholder="your.email@example.com"
            required
            disabled={isLoading}
            aria-label="Your email address"
            aria-required="true"
            aria-invalid={getFieldError("email") ? "true" : "false"}
            className={`w-full px-4 py-3 rounded-lg bg-input border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background focus:shadow-lg hover:bg-background/50 hover:border-primary/40 cursor-text disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
              focusedField === "email" ? "border-primary" : "border-border"
            } ${getFieldError("email") ? "border-error" : ""}`}
          />
          {getFieldError("email") && focusedField === "email" && (
            <p className="text-error text-xs mt-1">{getFieldError("email")}</p>
          )}
        </motion.div>
      </div>

      {/* Subject Field */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors"
        >
          Subject <span className="text-error">*</span>
        </label>
        <input
          ref={subjectRef}
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => handleFocus("subject")}
          onBlur={handleBlur}
          placeholder="What's this about?"
          required
          disabled={isLoading}
          aria-label="Message subject"
          aria-required="true"
          className={`w-full px-4 py-3 rounded-lg bg-input border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background focus:shadow-lg hover:bg-background/50 hover:border-primary/40 cursor-text disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
            focusedField === "subject" ? "border-primary" : "border-border"
          }`}
        />
        {formData.subject && (
          <p className="text-xs text-muted-foreground mt-1">
            {formData.subject.length} character
            {formData.subject.length !== 1 ? "s" : ""}
          </p>
        )}
      </motion.div>

      {/* Message Field */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors"
        >
          Message <span className="text-error">*</span>
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus("message")}
          onBlur={handleBlur}
          placeholder="Your message here..."
          required
          disabled={isLoading}
          rows={6}
          aria-label="Your message"
          aria-required="true"
          aria-invalid={getFieldError("message") ? "true" : "false"}
          className={`w-full px-4 py-3 rounded-lg bg-input border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background focus:shadow-lg hover:bg-background/50 hover:border-primary/40 cursor-text disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 resize-none ${
            focusedField === "message" ? "border-primary" : "border-border"
          } ${getFieldError("message") ? "border-error" : ""}`}
        />
        {getFieldError("message") && focusedField === "message" && (
          <p className="text-error text-xs mt-1">{getFieldError("message")}</p>
        )}
        <p className="text-xs text-muted-foreground mt-1">
          {formData.message.length} character
          {formData.message.length !== 1 ? "s" : ""}
        </p>
      </motion.div>

      {/* Status Messages */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 bg-success/10 border border-success rounded-lg flex items-center gap-3"
        >
          <CheckCircle size={20} className="text-success shrink-0" />
          <p className="text-success font-medium">
            Message sent successfully! I'll get back to you soon.
          </p>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 bg-error/10 border border-error rounded-lg flex items-center gap-3"
        >
          <AlertCircle size={20} className="text-error shrink-0" />
          <p className="text-error font-medium">
            Something went wrong. Please try again.
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          size="lg"
          variant="primary"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-sm text-muted-foreground text-center"
      >
        I'll respond to your message within 48 hours.
      </motion.p>
    </motion.form>
  );
}
