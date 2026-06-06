"use client"

import React from 'react'

export default function ModelSelect({models, defaultModel}: {models: string[], defaultModel: string}) {
  return (<>
    <select className='inp-normal mt-3' defaultValue={defaultModel}>
        {models.map((m) => (
            <option value={m} key={m}>{m}</option>
        ))}
    </select>
  </>)
}
