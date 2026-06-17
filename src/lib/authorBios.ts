export interface AuthorBio {
  name: string;
  description: string;
  image: string;
  linkedInUrl: string;
}

export const authorBios: Record<string, AuthorBio> = {
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    image: "/anujbhiya.png",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  },
  "Shrey Arora": {
    name: "Shrey Arora",
    description: "Legal professional specializing in corporate law and regulatory compliance. Brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law.",
    image: "/shreychad.svg",
    linkedInUrl: "https://www.linkedin.com/in/shrey-arora-b0487b67/"
  },
  "Adv. Ashish Bhay": {
    name: "Adv. Ashish Bhay",
    description: "Advocate Ashish Bhay is a distinguished labor law practitioner, employment mediator, and veteran service rights expert. With over a decade of dedication at the Bar, he has represented hundreds of clients in employee wage settlements, industrial relationship negotiations, and high-stakes service tribunals.",
    image: "/ashishbhay.png",
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  },
  "Lavanya Dhawan": {
    name: "Lavanya Dhawan",
    description: "Advocate specializing in direct mediation, arbitration, and civil representation. Registered with the Supreme Court bar.",
    image: "", // Triggers generic blank user silhouette fallback
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  },
  "Hemant Soin": {
    name: "Hemant Soin",
    description: "Seasoned advocate with over 15 years of experience specializing in criminal law, financial institution disputes, and arbitration-related matters. Associated with AMA Legal Solutions, he focuses on safeguarding client rights against coercive recovery tactics.",
    image: "",
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  },
  "Himashik Kapoor": {
    name: "Himashik Kapoor",
    description: "Distinguished legal expert specializing in dispute resolution and loan settlement advisory. He emphasizes strategic, ethical, and result-oriented legal solutions that prioritize amicable resolution over litigation.",
    image: "",
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  },
  "Himanshu Mishra": {
    name: "Himanshu Mishra",
    description: "First-generation advocate specializing in intellectual property rights, trademarks, copyrights, and commercial litigation. He represents clients before the High Courts and specialized tribunals.",
    image: "",
    linkedInUrl: "https://www.linkedin.com/in/himanshu-mishra-ipr?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  "Priyanka Ananth": {
    name: "Priyanka Ananth",
    description: "First-generation corporate lawyer and strategic advisor with over 8 years of experience in corporate law, labour & employment law, and data protection. She has advised clients across multiple international jurisdictions including Singapore, USA, and Dubai.",
    image: "",
    linkedInUrl: "https://www.linkedin.com/in/priyanka-ananth?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  "Shivika Mehra": {
    name: "Shivika Mehra",
    description: "Advocate-on-Record at the Supreme Court of India and founder of Mehra Legal Associates. She has extensive experience in environmental law, service disputes, criminal matters, and complex constitutional questions.",
    image: "",
    linkedInUrl: "https://www.linkedin.com/in/shivika-mehra-20aaa8221?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  }
};
