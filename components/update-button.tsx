'use client'

// import { updateExpensesBid } from '@/actions/update-expenses-bid'
import { Button } from './ui/button'
import { expensesBid } from '@/db/schema'
import { updateExpensesBid } from '@/actions/update-expenses-bid'
import { uploadExpensesBid } from '@/actions/insert-espenses-bid'
// import { revalidatePath } from 'next/cache'
import { cache } from 'react'
// import { revalidatePath } from 'next/cache'



// updateExpensesBid = cache(async (betonToUpdateObject: typeof expensesBid.$inferSelect[])

type Props = {
    betonToUpdateObject: typeof expensesBid.$inferSelect[],
    betonToAddObject: typeof expensesBid.$inferSelect[],
}


export const UpdateButton =  ( {
    betonToUpdateObject,
    betonToAddObject,
}: Props ) => {


// export const UpdateButton =  () => {

    const handleClick = cache(async () => {
        updateExpensesBid(betonToUpdateObject)
        uploadExpensesBid(betonToAddObject)

    })
 
    

    

  return (
    <div>
        <Button onClick={handleClick}>
            +
        </Button>
    </div>
  )
}
