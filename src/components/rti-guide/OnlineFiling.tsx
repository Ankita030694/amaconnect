import React from "react";

export default function OnlineFiling({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Step-by-Step Online Filing Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The digital evolution of governance has made filing information requests extremely accessible. The central and state online portals allow users to submit queries, upload documents, and complete payments securely from any location.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Registering on the Official RTI Online Portal
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The government of India has simplified the process of requesting records by launching a centralized internet portal that allows users to submit queries electronically. To begin, you must visit the official RTI Online portal, which serves as a unified gateway for filing requests with central government ministries and departments. While the portal allows users to submit applications as guests, creating a permanent user account is highly recommended if you plan to file multiple requests or track historical submissions. The registration process requires you to click on the sign up button and fill in a registration form with your basic details, including a unique username, a secure password, your full name, physical address, and contact information. Providing a valid email address and an active mobile number is particularly important, as the system will send verification codes and real-time status updates to these contacts. After completing the form and entering the verification captcha, you will receive an activation link in your registered email inbox. Clicking this link activates your account, allowing you to log in and access your personal dashboard. This dashboard is a valuable tool that keeps a comprehensive record of all your submitted applications, pending requests, first appeals, fee payments, and official replies. By registering, you also gain the ability to save draft applications, which allows you to review and refine your drafts before final submission.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Paying the Application Fee and Submitting
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once logged into your dashboard, the actual filing process begins by clicking on the submit request option, which displays a comprehensive set of guidelines that you must read and accept. After agreeing to the terms, you are presented with a detailed application form where you must select the appropriate ministry, department, or public authority from a dropdown menu. You will then fill in your personal details and type your queries in the text box provided, which has a character limit of three thousand characters. If your query is long or requires supporting documents, you can upload a single PDF file as an attachment. The next crucial step is paying the prescribed application fee, which is currently set at ten rupees for central government departments. The portal integrates a secure payment gateway offering multiple options, including internet banking, credit cards, debit cards, and unified payments interface payments. It is important to note that citizens who belong to the below poverty line category are exempt from paying this fee, provided they upload a copy of their official BPL card as proof. After the payment is successfully processed, the system generates a unique registration number for your application. This registration number is sent to your email and mobile number immediately and serves as the reference for all future communications. The portal then routes the application to the designated public information officer of the target department, and you can monitor the processing stages in real time through your dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
