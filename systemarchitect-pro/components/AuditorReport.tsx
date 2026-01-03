
import React from 'react';
import { AuditReport, AuditIssue } from '../types';

interface AuditorReportProps {
  report: AuditReport;
  onApprove: () => void;
  onBack: () => void;
}

const AuditorReport: React.FC<AuditorReportProps> = ({ report, onApprove, onBack }) => {
  const getSeverityStyles = (severity: string) => {
    switch(severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-bold text-red-900">Auditor's Critical Review</h2>
        </div>
        <p className="text-red-800 opacity-90">
          The following potential risks and complexities were identified based on your constraints and the proposed design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {report.issues.map((issue, idx) => (
          <div key={idx} className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm flex items-start">
            <div className={`mt-1 mr-4 px-2 py-1 rounded text-[10px] font-bold uppercase border ${getSeverityStyles(issue.severity)}`}>
              {issue.severity}
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="text-xs font-bold text-slate-500 uppercase mr-2">{issue.type}</span>
              </div>
              <p className="text-slate-800 font-medium mb-3">{issue.description}</p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Recommendation:</p>
                <p className="text-sm text-slate-700">{issue.suggestion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-900 text-white p-8 rounded-2xl">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.894.447l3.5 7A1 1 0 0114.8 10H5.2a1 1 0 01-.894-1.506l3.5-7a1 1 0 01.894-.447zM6 18a2 2 0 002 2h4a2 2 0 002-2v-1H6v1z" clipRule="evenodd" />
          </svg>
          Final Simplification Strategy
        </h3>
        <p className="text-blue-100 text-sm leading-relaxed whitespace-pre-wrap">{report.overallSimplification}</p>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button 
          onClick={onBack}
          className="text-slate-600 hover:text-slate-800 font-semibold px-4 py-2"
        >
          ← Adjust Design
        </button>
        <button 
          onClick={onApprove}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg flex items-center transition active:scale-95"
        >
          Approve & Generate Code
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuditorReport;
