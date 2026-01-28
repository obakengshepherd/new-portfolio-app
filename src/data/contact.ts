export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  cvUrl: string;
  web3formsKey: string;
}

export const contactInfo: ContactInfo = {
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  availability: "Open to opportunities and collaborations",
  cvUrl: "/cv.pdf",
  web3formsKey: "your-web3forms-key-here",
};
