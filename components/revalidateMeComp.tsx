import { revalidateMe } from '@/actions/revalidate-me'
import React from 'react'

export const RevalidateMeComp = () => {
  
    revalidateMe()
  
  return (
    <div>revalidateMeComp</div>
  )
}
