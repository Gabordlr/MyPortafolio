import React from 'react';

const examples = {
  work: {
    color: 'border-purple-400',
    text: 'Work Experience',
    textColor: 'text-purple-400',
  },
  education: {
    color: 'border-purple-200',
    text: 'Academics',
    textColor: 'text-purple-200',
  },
  code: {
    color: 'border-purple-300',
    text: 'Coding',
    textColor: 'text-purple-300',
  },
  co_curricular: {
    color: 'border-purple-500',
    text: 'Co Curricular',
    textColor: 'text-purple-500',
  },
  project: {
    color: 'border-purple-600',
    text: 'Projects',
    textColor: 'text-purple-600',
  },
};

export default function Tag({ tag }) {
  if (examples[tag]) {
    return (
      <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 ${examples[tag].color} border ${examples[tag].textColor}`}>{examples[tag].text} </span>
    );
  } else {
    return (
      <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 border text-violet-300 border-violet-300`}>{tag}</span>
    );
  }
}