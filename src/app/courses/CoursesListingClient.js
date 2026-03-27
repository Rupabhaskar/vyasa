// "use client";
// import PageLayout from "@/components/shared/PageLayout";
// import PageHeader from "@/components/shared/PageHeader";
// import Breadcrumbs from "@/components/shared/Breadcrumbs";
// import CTAForm from "@/components/shared/CTAForm";

// export default function CoursesListingClient({ courses }) {
//   const crumbs = [
//     { label: "Home", href: "/" },
//     { label: "Courses" },
//   ];

//   return (
//     <PageLayout>
//       <PageHeader
//         tag="Programs Offered"
//         title="Our Courses"
//         description="Structured designed programs — CA Foundation to CA Final, CMA Foundation to CMA and Online Classes."
//       />
//       <Breadcrumbs items={crumbs} />
//       <section className="mt-16 px-4 md:px-10">
  
//   {/* Heading */}
//   <h2 className="text-3xl md:text-4xl font-bold text-center underline mb-12">
//     CHARTERED ACCOUNTANCY
//   </h2>

//   {/* Top Info */}
//   <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
    
//     {/* Left */}
//     <div>
//       <h3 className="text-xl font-semibold">
//         CA Course Consisting of three stages
//       </h3>
//     </div>

//     {/* Center */}
//     <div className="text-gray-700 text-sm leading-6">
//       <p>
//         CA means Chartered Accountant. A CA is a professional responsible for
//         auditing, taxation, and financial management, ensuring compliance and
//         supporting business growth.
//       </p>
//     </div>

//     {/* Right */}
//     <div className="flex flex-col gap-4">
//       <button className="border p-3 rounded hover:bg-gray-100">
//         Foundation
//       </button>
//       <button className="border p-3 rounded hover:bg-gray-100">
//         Intermediate
//       </button>
//       <button className="border p-3 rounded hover:bg-gray-100">
//         Final
//       </button>
//     </div>
//   </div>

//   {/* Table */}
//   <div className="overflow-x-auto">
//     <h3 className="font-semibold mb-4 text-lg">Stages of CA:</h3>

//     <table className="w-full border text-sm">
//       <thead className="bg-green-900 text-white">
//         <tr>
//           <th className="p-3 border"></th>
//           <th className="p-3 border">CA FOUNDATION</th>
//           <th className="p-3 border">CA INTER</th>
//           <th className="p-3 border">CA FINAL</th>
//         </tr>
//       </thead>

//       <tbody>
//         <tr>
//           <td className="border p-2 font-medium">Eligibility</td>
//           <td className="border p-2">10+2 or equivalent</td>
//           <td className="border p-2">
//             CA Foundation / Graduate / CMA Inter / CS Executive
//           </td>
//           <td className="border p-2">CA Inter + ICITSS</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Tenure</td>
//           <td className="border p-2">8 months</td>
//           <td className="border p-2">9 months</td>
//           <td className="border p-2">1 year</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">No of Subjects</td>
//           <td className="border p-2">4</td>
//           <td className="border p-2">6</td>
//           <td className="border p-2">6</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Passing Criteria</td>
//           <td colSpan="3" className="border p-2">
//             Minimum 40% in each subject & 50% aggregate
//           </td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Exams</td>
//           <td className="border p-2">June & December</td>
//           <td className="border p-2">May & November</td>
//           <td className="border p-2">May & November</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Exam Pattern</td>
//           <td className="border p-2">
//             Paper 1 & 2 subjective, 3 & 4 objective
//           </td>
//           <td className="border p-2">30% MCQ + 70% descriptive</td>
//           <td className="border p-2">30% MCQ + 70% descriptive</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Negative Marking</td>
//           <td className="border p-2">0.25 for wrong answers</td>
//           <td className="border p-2">No</td>
//           <td className="border p-2">No</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Registration</td>
//           <td className="border p-2">Online</td>
//           <td className="border p-2">Online</td>
//           <td className="border p-2">Online</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Validity</td>
//           <td className="border p-2">4 years</td>
//           <td className="border p-2">5 years</td>
//           <td className="border p-2">10 years</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Revalidation</td>
//           <td className="border p-2">Not permitted</td>
//           <td className="border p-2">Allowed once (fee)</td>
//           <td className="border p-2">Allowed (fee)</td>
//         </tr>

//         <tr>
//           <td className="border p-2 font-medium">Subjects</td>

//           <td className="border p-2">
//             1. Accounting <br />
//             2. Business Laws <br />
//             3. Quantitative Aptitude <br />
//             4. Business Economics
//           </td>

//           <td className="border p-2">
//             <strong>Group I:</strong><br />
//             Advanced Accounting <br />
//             Corporate Laws <br />
//             Taxation <br /><br />

//             <strong>Group II:</strong><br />
//             Cost & Management Accounting <br />
//             Auditing & Ethics <br />
//             Financial Management
//           </td>

//           <td className="border p-2">
//             <strong>Group I:</strong><br />
//             Financial Reporting <br />
//             Advanced Financial Management <br />
//             Auditing <br /><br />

//             <strong>Group II:</strong><br />
//             Direct Tax <br />
//             Indirect Tax <br />
//             Integrated Case Study
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>

//   {/* Note */}
//   <p className="text-xs text-gray-500 mt-4">
//     *ICITSS: Integrated Course on Information Technology and Soft Skills
//   </p>
// </section>

//       <CTAForm
//         heading="Not Sure Which Course Is Right for You?"
//         subheading="Book a free counseling session and let our experts guide you to the best path."
//       />
//     </PageLayout>
//   );
// }


"use client";

import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";

export default function CoursesListingClient({ courses = [] }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Courses" },
  ];

  return (
    <PageLayout>
      <PageHeader
        tag="Programs Offered"
        title="Our Courses"
        description="Structurally designed programs — CA Foundation to CA Final, CMA Foundation to CMA and Online Classes."
      />

      <Breadcrumbs items={crumbs} />

      <section className="mt-16 px-4 md:px-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center underline mb-12">
          CHARTERED ACCOUNTANCY
        </h2>

        {/* Top Info */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold">
              CA Course Consisting of Three Stages
            </h3>
          </div>

          {/* Center */}
          <div className="text-gray-700 text-sm leading-6">
            <p>
              CA means Chartered Accountant. A CA is a professional responsible
              for auditing, taxation, and financial management, ensuring
              compliance and supporting business growth.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="border p-3 rounded hover:bg-gray-100"
            >
              Foundation
            </button>
            <button
              type="button"
              className="border p-3 rounded hover:bg-gray-100"
            >
              Intermediate
            </button>
            <button
              type="button"
              className="border p-3 rounded hover:bg-gray-100"
            >
              Final
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4 text-lg">Stages of CA:</h3>

          <table className="w-full border text-sm">
            <thead className="bg-green-900 text-white">
              <tr>
                <th className="p-3 border"></th>
                <th className="p-3 border">CA FOUNDATION</th>
                <th className="p-3 border">CA INTER</th>
                <th className="p-3 border">CA FINAL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2 font-medium">Eligibility</td>
                <td className="border p-2">10+2 or Intermediate or equivalent certificate</td>
                <td className="border p-2">
                CA Foundation or Graduate or PG or Qualified CMA inter or CS Executive
                </td>
                <td className="border p-2">CA Intermediate + Complete ICITSS</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Tenure</td>
                <td className="border p-2">8 months</td>
                <td className="border p-2">9 months</td>
                <td className="border p-2">1 year</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">No of Subjects</td>
                <td className="border p-2">4</td>
                <td className="border p-2">6</td>
                <td className="border p-2">6</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Passing Criteria</td>
                <td colSpan={3} className="border p-2">
                Get minimum 40% in every subject and 50% in aggregate of all papers
                </td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Exams</td>
                <td className="border p-2">June & December</td>
                <td className="border p-2">May & November</td>
                <td className="border p-2">May & November</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Exam Pattern</td>
                <td className="border p-2">
                Paper 1 &2 are subjective, Paper 3& 4 are objective
                </td>
                <td className="border p-2">
                30% case scenario/ case-study based MCQ’s and 70% descriptive questions in all papers
                </td>
                <td className="border p-2">
                30% case scenario/ case-study based MCQ’s and 70% descriptive questions in all papers
                </td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Negative Marking</td>
                <td className="border p-2">	0.25 marks for every wrong answer in objective type questions</td>
                <td className="border p-2">No negative marking in MCQ</td>
                <td className="border p-2">	No negative marking in MCQ</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Registration</td>
                <td className="border p-2">Online</td>
                <td className="border p-2">Online</td>
                <td className="border p-2">Online</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Validity</td>
                <td className="border p-2">4 years</td>
                <td className="border p-2">5 years</td>
                <td className="border p-2">10 years</td>
              </tr>
              
              <tr> 
              <td className="border p-2 font-medium">Validity of registration</td>
              <td className="border p-2">4 years from date of appearing first foundation exam	</td>
              <td className="border p-2"> 5 years from date of registration of CA Intermediate	</td>
              <td className="border p-2"> 10 years from date of registration of CA Intermediate</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Revalidation of registration</td>
                <td className="border p-2">Not permitted</td>
                <td className="border p-2">Permitted only once by paying required fee.</td>
                <td className="border p-2">Permitted by paying required Fee.</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">Subjects</td>

                <td className="border p-2">
                  1. Accounting <br /><br />
                  2. Business Laws <br /><br />
                  3. Quantitative Aptitude <br /><br />
                  4. Business Economics<br />
                </td>

                <td className="border p-2">
                  <strong>Group I:</strong>
                  <br />
                  <br /> 1. Advanced Accounting <br />
                  <br />2. Corporate Laws <br />
                  <br />3. Taxation <br />
                  <br />
                  <strong>Group II:</strong>
                  <br />
                  <br /> 1. Cost & Management Accounting <br />
                  <br /> 2. Auditing & Ethics <br />
                  <br /> 3. Financial Management
                </td>

                <td className="border p-2">
                  <strong>Group I:</strong>
                  <br />
                  <br />1. Financial Reporting <br />
                  <br />2. Advanced Financial Management <br />
                  <br />3.Auditing <br />
                  <br />
                  <strong>Group II:</strong>
                  <br />
                  <br />1. Direct Tax <br />
                  <br />2. Indirect Tax <br />
                  <br />3. Integrated Case Study
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-xs text-gray-500 mt-4">
          *ICITSS: Integrated Course on Information Technology and Soft Skills
        </p>
      </section>

      <CTAForm
        heading="Not Sure Which Course Is Right for You?"
        subheading="Book a free counseling session and let our experts guide you to the best path."
      />
    </PageLayout>
  );
}