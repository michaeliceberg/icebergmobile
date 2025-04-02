'use client'

import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { expensesBid } from '@/db/schema'
import { updateExpensesBid } from '@/actions/update-expenses-bid'
import { uploadExpensesBid } from '@/actions/insert-espenses-bid'



// updateExpensesBid = cache(async (betonToUpdateObject: typeof expensesBid.$inferSelect[])

type Props = {
    betonToUpdateObject: typeof expensesBid.$inferSelect[],
    betonToAddObject: typeof expensesBid.$inferSelect[],
}


export const UpdateButton =  ( {
    betonToUpdateObject,
    betonToAddObject,
}: Props ) => {


    // if (betonToUpdateObject.length > 0) {
    //     await updateExpensesBid(betonToUpdateObject)
    // }

    // if (betonToAddObject.length > 0) {
    //     await uploadExpensesBid(betonToAddObject)
    // }
    useEffect(()=>{

        if (betonToUpdateObject.length > 0) {
            updateExpensesBid(betonToUpdateObject)


        }

        if (betonToAddObject.length > 0) {
            uploadExpensesBid(betonToAddObject)

        }
        
    }, [])

    
    
    

  return (
    <div>
        <Button>
            +
        </Button>
    </div>
  )
}
