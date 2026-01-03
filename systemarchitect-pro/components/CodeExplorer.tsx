
import React, { useState } from 'react';
import { StarterCodeFile } from '../types';

interface CodeExplorerProps {
  files: StarterCodeFile[];
  onRestart: () => void;
}

const CodeExplorer: React.FC<CodeExplorerProps> = ({ files, onRestart }) => {
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);

  const currentFile = files[selectedFileIdx];

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Generated Starter Code</h2>
          <p className="text-slate-500 text-sm">Modular, responsibility-focused architecture</p>
        </div>
        <button 
          onClick={onRestart}
          className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
        >
          Start New Design →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[500px]">
        {/* File Sidebar */}
        <div className="col-span-1 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
          <div className="p-3 bg-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            Project Workspace
          </div>
          <div className="divide-y divide-slate-200">
            {files.map((file, idx) => (
              <button
                key={file.path}
                onClick={() => setSelectedFileIdx(idx)}
                className={`w-full text-left p-4 transition text-sm ${selectedFileIdx === idx ? 'bg-white font-bold text-blue-600 shadow-sm border-r-4 border-blue-600' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {file.path}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className="col-span-1 lg:col-span-3 border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-inner">
          <div className="p-4 bg-slate-800 text-slate-400 text-xs flex justify-between items-center border-b border-slate-700">
            <span>{currentFile.path}</span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Responsibility</h4>
            <p className="text-sm text-slate-600 italic">"{currentFile.responsibility}"</p>
          </div>

          <div className="flex-1 bg-slate-900 p-6 overflow-auto font-mono text-sm leading-relaxed">
            <pre className="text-slate-300">
              <code>{currentFile.content}</code>
            </pre>
          </div>
          
          <div className="p-4 bg-slate-50 flex justify-end">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(currentFile.content);
                alert("Code copied to clipboard!");
              }}
              className="text-xs bg-white border border-slate-300 px-3 py-1.5 rounded-md text-slate-600 hover:bg-slate-100 transition shadow-sm flex items-center"
            >
              <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m-3 8h4m-2-2v4" />
              </svg>
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExplorer;
