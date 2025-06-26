import React, { useState } from "react";
import Hard from "./Hard";
import Soft from "./soft";

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sect2">
      <h1
        id="Experience"
        className="text-cyan-400 text-center pt-20 text-5xl font-bold"
      >
        Expérience
      </h1>

      <div className="flex justify-center pt-8 z-10">
        <div className="w-[95%] md:w-3/5">
          {/* Tabs */}
          <div className="border-b border-gray-600 mb-6 flex justify-center space-x-10">
            <button
              onClick={() => handleChange("1")}
              className={`pb-2 text-lg font-semibold ${
                value === "1"
                  ? "border-b-4 border-cyan-400 text-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
              }`}
              aria-selected={value === "1"}
              role="tab"
              id="tab-hard"
              aria-controls="tabpanel-hard"
            >
              Hard Skills
            </button>
            <button
              onClick={() => handleChange("2")}
              className={`pb-2 text-lg font-semibold ${
                value === "2"
                  ? "border-b-4 border-cyan-400 text-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
              }`}
              aria-selected={value === "2"}
              role="tab"
              id="tab-soft"
              aria-controls="tabpanel-soft"
            >
              Soft Skills
            </button>
          </div>

          {/* Panels */}
          <div
            role="tabpanel"
            id="tabpanel-hard"
            aria-labelledby="tab-hard"
            hidden={value !== "1"}
          >
            <Hard />
          </div>
          <div
            role="tabpanel"
            id="tabpanel-soft"
            aria-labelledby="tab-soft"
            hidden={value !== "2"}
          >
            <Soft />
          </div>
        </div>
      </div>
    </div>
  );
}
