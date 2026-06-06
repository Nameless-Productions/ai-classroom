import { getModels } from '@/lib/AI/getModels'
import React from 'react'

export default async function AIsettingsPage() {
    const models = await getModels()
  return (<>
    <p className='font-bold'>Select default model: </p>
    <select className='inp-normal mt-3'>
        {models.map((m) => (
            <option value={m} key={m}>{m}</option>
        ))}
    </select>
  </>)
}
