import React from "react";

export default function Soft() {
  return (
    <div className="flex justify-center flex-wrap gap-12 p-6">
      <fieldset className="m-3">
        <div className="space-y-3">
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Communication</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Autonomie</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Flexibilité</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Respect</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Organisé</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="m-3">
        <div className="space-y-3">
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Collaboration</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Formation</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Adaptabilité</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Ecoute</span>
          </label>
          <label className="flex items-center space-x-3 text-cyan-400">
            <input type="checkbox" checked readOnly className="w-5 h-5" />
            <span>Persévérant</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
}
