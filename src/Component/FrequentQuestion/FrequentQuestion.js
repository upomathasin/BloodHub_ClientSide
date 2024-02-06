import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function FrequentQuestion() {
  AOS.init({ duration: 4000 });
  return (
    <div className="min-h-screen bg-base-200 py-12 w-full " data-aos="fade-in">
      {" "}
      <div className=" flex flex-col justify-center items-center text-center ">
        {" "}
        <h1 className=" text-5xl text-slate-700 mb-8  ">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl  mb-12 text-slate-600">
          Get quick answers to common questions regarding frequency of donation,
          travel restrictions, recent medical procedures, and other inquiries
          frequently asked by potential blood donors.
        </p>
      </div>
      <div className=" w-full h-full flex  justify-center items-center p-12 ">
        <div className="flex-1">
          <img
            className="rounded-lg shadow-2xl"
            src="https://zq04yxwd3kp9n66tnv.blob.core.windows.net/storage-wordpress-web-production/sites/16/2023/06/whole-blood-donation-resource-card-sized.jpg"
          />
        </div>
        <div className="flex-1 join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Who can donate blood?
            </div>
            <div className="collapse-content">
              <p>
                Most healthy individuals aged 17 to 65, weighing at least 110
                pounds, and not having certain medical conditions can donate
                blood.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How often can I donate blood?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Whole blood donors can typically donate every 8 weeks, while
                those donating specific blood components like platelets may have
                more frequent donation opportunities.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Is it safe to donate blood?
            </div>
            <div className="collapse-content">
              <p>
                Yes, donating blood is generally safe. Stringent screening
                procedures and sterile equipment are used to ensure donor and
                recipient safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
