
import React, { useState } from 'react';
import { UserInputs, Lifespan } from '../types';

interface InputFormProps {
  onSubmit: (data: UserInputs) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInputs>({
    goal: '',
    users: '',
    constraints: '',
    nonGoals: '',
    lifespan: 'stable'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Product Goal</label>
          <textarea
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="What is the core problem you are solving?"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Target Users</label>
          <input
            required
            type="text"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Who are the primary users?"
            value={formData.users}
            onChange={(e) => setFormData({ ...formData, users: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Expected Lifespan</label>
          <select
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            value={formData.lifespan}
            onChange={(e) => setFormData({ ...formData, lifespan: e.target.value as Lifespan })}
          >
            <option value="prototype">Prototype (Fast validation)</option>
            <option value="stable">Stable (Production-ready)</option>
            <option value="long-term">Long-term (Scalable enterprise)</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Constraints (Budget, Scale, Performance)</label>
          <textarea
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="List any technical or business limitations"
            value={formData.constraints}
            onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Non-Goals</label>
          <textarea
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={2}
            placeholder="What is explicitly OUT of scope?"
            value={formData.nonGoals}
            onChange={(e) => setFormData({ ...formData, nonGoals: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition active:scale-95 flex items-center"
        >
          Initialize System Design
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default InputForm;
