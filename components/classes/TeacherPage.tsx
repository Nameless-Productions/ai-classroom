"use client";

import { createAssigment } from '@/lib/AI/createAssigment';
import React, { useState } from 'react'

export default function TeacherPage() {
  const [isAssigmentOpen, setIsAssigmentOpen] = useState(false)
  return (<>
    <button className='btn-normal' onClick={() => setIsAssigmentOpen(true)}>Create assigment</button>

    {isAssigmentOpen && <CreateAssigmentForm closeFunc={setIsAssigmentOpen} />}
  </>)
}

function CreateAssigmentForm({closeFunc}: {closeFunc: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [aiPrompt, setAiPrompt] = useState("");
  const [resText, setResText] = useState("");
  const [title, setTitle] = useState("")

  async function onAiSubmit() {
    if(aiPrompt == "") return setResText("Prompt is required");
    setResText("Loading, this might take a while")
    setAiPrompt("")
    const res = await createAssigment(aiPrompt);
    if(!res) return setResText("AI did not respond. Please try again");
    setResText(res);
  }

  return (<>
    <div className='fixed inset-0 z-50 flex items-center justify-center' onClick={() => closeFunc(false)}>
      <div className='p-5 border border-gray-600 rounded-xl bg-gray-800'>
        <input type="text" className='inp-normal mb-2 w-full' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className='inp-normal w-full' placeholder='Prompt to AI, be specific' value={aiPrompt} onChange={(e => setAiPrompt(e.target.value))} />
        <br />
        <button onClick={onAiSubmit} className='btn-normal mt-2 w-full'>Generate</button>

        <br />

        <div className='mt-2 whitespace-pre-wrap'>{resText}</div>
      </div>
    </div>
  </>)
}