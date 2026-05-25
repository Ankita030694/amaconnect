import mongoose, { Schema } from "mongoose";

// -------------------------------------------------------------
// 1. Q&A MODULE (EMBEDDED READ-ONLY FEED - NO UPVOTES / NO COMMENTS)
// -------------------------------------------------------------
const AnswerSchema = new Schema({
  verifiedBy: { type: String, required: true },
  logo: { type: String, default: "/logo_qa.png" },
  rating: { type: Number, default: 4.5 },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  author: { type: String, required: true },
  avatar: { type: String, default: "/man.png" },
  tags: [{ type: String }],
  answers: [AnswerSchema],
  createdAt: { type: Date, default: Date.now }
});

// -------------------------------------------------------------
// 2. LAWYER GUEST STORIES (ADMIN CURATED)
// -------------------------------------------------------------
const StorySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  designation: { type: String, required: true }, // e.g. "Delhi High Court Lawyer"
  court: { type: String, required: true },
  tags: [{ type: String }],
  content: { type: String, required: true }, // Rich text / Markdown
  featuredImageId: { type: Schema.Types.ObjectId, required: true }, // Refers to fs.files (GridFS)
  createdAt: { type: Date, default: Date.now }
});

// -------------------------------------------------------------
// 3. CLIENT SUCCESS STORIES (AUTO-PUBLISHED)
// -------------------------------------------------------------
const SuccessStorySchema = new Schema({
  clientName: { type: String, required: true },
  clientProfession: { type: String, default: "Client" },
  issueDescription: { type: String, required: true },
  status: { type: String, enum: ["APPROVED", "PENDING"], default: "APPROVED" }, // Auto-publish by default
  createdAt: { type: Date, default: Date.now }
});

// -------------------------------------------------------------
// 4. DRAFTS TRANSACTION & GATEKEEPING
// -------------------------------------------------------------
const DraftSchema = new Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  gridFsFileId: { type: Schema.Types.ObjectId, required: true }, // Refers to PDF binary in GridFS
  downloads: { type: Number, default: 0 }
});

const TransactionSchema = new Schema({
  leadName: { type: String, required: true },
  leadEmail: { type: String, required: true },
  leadPhone: { type: String, required: true },
  draftId: { type: Schema.Types.ObjectId, ref: "Draft", required: true },
  amount: { type: Number, default: 499.00 },
  status: { type: String, enum: ["PENDING", "SUCCESS", "FAILED"], default: "PENDING" },
  payuTxnId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const Question = mongoose.models.Question || mongoose.model("Question", QuestionSchema);
export const Story = mongoose.models.Story || mongoose.model("Story", StorySchema);
export const SuccessStory = mongoose.models.SuccessStory || mongoose.model("SuccessStory", SuccessStorySchema);
export const Draft = mongoose.models.Draft || mongoose.model("Draft", DraftSchema);
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);

// -------------------------------------------------------------
// 5. CONTACT FORM ENTRIES
// -------------------------------------------------------------
const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  reason: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: "contact" });

export const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// -------------------------------------------------------------
// 5.5 DRAFT PAYMENT & LEADS SCHEMA
// -------------------------------------------------------------
const DraftPaymentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  message: { type: String, required: true },
  draftTitle: { type: String, required: true },
  draftFileName: { type: String, required: true },
  draftFilePath: { type: String, required: true },
  paymentStatus: { type: String, enum: ["pending", "success", "failed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
}, { collection: "draft_payments" });

export const DraftPayment = mongoose.models.DraftPayment || mongoose.model("DraftPayment", DraftPaymentSchema);


// -------------------------------------------------------------
// 6. LAWYER INTERVIEWS (ADMIN PANELS & SHOWCASES)
// -------------------------------------------------------------
const FAQSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const ReviewSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 5 },
  review: { type: String, required: true }
});

const LawyerInterviewSchema = new Schema({
  title: { type: String, required: true },
  lawyer: { type: String, required: true },
  image: { type: String, required: true },
  specialization: { type: String, required: true },
  date: { type: String, required: true },
  duration: { type: String, required: true },
  bgColor: { type: String, default: "bg-[#FFB5A7]/30" },
  description: { type: String, default: "" },
  videoUrl: { type: String, default: "" },
  slug: { type: String, required: true },
  metaTitle: { type: String, default: "" },
  metaDescription: { type: String, default: "" },
  faqs: [FAQSchema],
  reviews: [ReviewSchema],
  created: { type: Number, default: Date.now },
  author: { type: String, default: "Anuj Anand Malik" }
}, { collection: "lawyer_interviews" });

export const LawyerInterview = mongoose.models.LawyerInterview || mongoose.model("LawyerInterview", LawyerInterviewSchema);

// -------------------------------------------------------------
// 7. PUBLIC IMAGE STORAGE (Atlas Binary blobs)
// -------------------------------------------------------------
const ImageFileSchema = new Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: Buffer, required: true },
  created: { type: Date, default: Date.now }
}, { collection: "image_files" });

export const ImageFile = mongoose.models.ImageFile || mongoose.model("ImageFile", ImageFileSchema);

// -------------------------------------------------------------
// 8. BLOGS (ADMIN CURATED & SSR INTEGRATED)
// -------------------------------------------------------------
const BlogFAQSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const BlogReviewSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 5 },
  review: { type: String, required: true }
});

const BlogSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  date: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true },
  author: { type: String, default: "Anuj Anand Malik" },
  metaTitle: { type: String, default: "" },
  metaDescription: { type: String, default: "" },
  faqs: [BlogFAQSchema],
  reviews: [BlogReviewSchema],
  created: { type: Number, default: Date.now }
}, { collection: "blogs" });

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);


