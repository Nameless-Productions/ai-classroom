import { getDefaultModel } from '@/lib/AI/getDefaultModel'
import { getModels } from '@/lib/AI/getModels'
import React from 'react'
import ModelSelect from './ModelSelect'

export default async function AIsettingsPage() {
    const models = await getModels()
    const defaultModel = await getDefaultModel()
  return (<>
    <p className='font-bold'>Select default model: </p>
    <ModelSelect models={models} defaultModel={defaultModel}/>
  </>)
}
