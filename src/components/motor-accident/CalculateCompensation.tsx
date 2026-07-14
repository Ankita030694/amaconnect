import React from "react";

interface CalculateCompensationProps {
  id: string;
}

export default function CalculateCompensation({ id }: CalculateCompensationProps) {
  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Calculating Compensation for Victims
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            The Multiplier Method for Loss of Income
          </h3>
          <p className="mb-4">
            The calculation of compensation for loss of income in fatal accidents or cases of permanent disability is governed by a structured legal framework known as the Multiplier Method. Established and refined by the Supreme Court of India in landmark judgments such as Sarla Verma v. Delhi Transport Corporation and National Insurance Company v. Pranay Sethi, this method ensures uniformity and fairness in awards. The calculation begins with determining the actual monthly income of the deceased or injured victim, verified through tax filings or salary slips. To this base income, a specific percentage is added to account for future prospects, recognizing that a person's earnings would have grown over time.
          </p>
          <p className="mb-4">
            For individuals below forty years of age with a permanent job, fifty percent is added, while for ages forty to fifty, thirty percent is added, and for ages fifty to sixty, fifteen percent is added. From this gross annual income, a deduction is made for personal and living expenses that the deceased would have spent on themselves. If the deceased was unmarried, fifty percent is deducted; if married with two to three dependents, one-third is deducted; and if married with four to six dependents, one-fifth is deducted. The resulting net annual income represents the financial loss to the family. Finally, a multiplier is applied based on the age of the deceased at the time of the accident. The multiplier ranges from eighteen for victims aged fifteen to twenty-five, down to five for victims aged over sixty-five. The formula, Net Annual Income multiplied by the Multiplier, yields the structured loss of dependency award.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Determining Non-Pecuniary Damages for Pain
          </h3>
          <p className="mb-4">
            While pecuniary damages compensate for direct, calculable financial losses like medical bills and loss of income, non-pecuniary damages address the intangible, non-monetary losses suffered by accident victims and their families. These damages are designed to compensate for pain and suffering, loss of amenities of life, loss of expectation of life, and loss of consortium. Determining the monetary value of physical pain and emotional trauma is inherently subjective, but the Supreme Court has laid down standard guidelines to prevent arbitrary awards by tribunals. Under the conventional heads established in the Pranay Sethi judgment, the tribunal awards standardized sums for non-pecuniary losses in fatal cases.
          </p>
          <p className="mb-4">
            Specifically, fifteen thousand rupees is awarded for loss of estate, forty thousand rupees per dependent for loss of consortium, which includes spousal, parental, and filial consortium, and fifteen thousand rupees for funeral expenses. In cases of permanent disability, the calculation is more complex and depends on the severity of the injury and its impact on the victim's quality of life. The tribunal assesses the physical pain endured during hospitalization, the loss of the ability to enjoy hobbies, play sports, or lead a normal social life, and the mental agony of living with a disfigurement. For instance, a young victim who loses a limb may receive substantial compensation for loss of marriage prospects and loss of amenities, in addition to the calculated loss of future earnings. These awards serve to provide solace and financial comfort for the non-material damage inflicted by the accident.
          </p>
        </div>

        {/* Calculation Visual Block */}
        <div className="mt-8 bg-amber-50/40 border border-amber-100 rounded-3xl p-6 sm:p-8">
          <h4 className="text-lg font-bold text-[#2D2219] mb-4">
            Standard Compensation Formula
          </h4>
          <div className="bg-[#2D2219] text-white p-6 rounded-2xl font-mono text-xs sm:text-sm mb-6 leading-relaxed">
            Total Compensation = [ (Annual Income + Future Prospects) - Personal Deductions ] × Multiplier + Non-Pecuniary Damages
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h5 className="font-bold text-[#2D2219] text-sm mb-2">Future Prospects</h5>
              <ul className="text-xs text-gray-600 space-y-2">
                <li>• Under 40 years: Add 50 percent</li>
                <li>• 40 to 50 years: Add 30 percent</li>
                <li>• 50 to 60 years: Add 15 percent</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h5 className="font-bold text-[#2D2219] text-sm mb-2">Personal Deductions</h5>
              <ul className="text-xs text-gray-600 space-y-2">
                <li>• Single / Unmarried: Deduct 50 percent</li>
                <li>• 2 to 3 Dependents: Deduct 33.33 percent</li>
                <li>• 4 or more Dependents: Deduct 20 percent</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <h5 className="font-bold text-[#2D2219] text-sm mb-2">Standard Multipliers</h5>
              <ul className="text-xs text-gray-600 space-y-2">
                <li>• Age 15 to 25: Multiplier of 18</li>
                <li>• Age 26 to 30: Multiplier of 17</li>
                <li>• Age 51 to 55: Multiplier of 11</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
