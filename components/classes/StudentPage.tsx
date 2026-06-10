"use client";

import { redirect } from 'next/navigation'
import React from 'react'

export default function StudentPage({classId, assigments}: {classId: number, assigments: {
    classId: number;
    name: string;
    id: number;
    content: string;
    hasQuiz: boolean;
    hasFlashcards: boolean;
}[]}) {
  return (<>
    <p className='font-bold'>Assigments:</p>
    <br />
    {assigments.map((a) => (
        <button className='btn-normal w-full mt-2 md-2' key={a.id} onClick={() => redirect(`/classes/${classId}/${a.id}`)}>{a.name}</button>
    ))}
  </>)
}
