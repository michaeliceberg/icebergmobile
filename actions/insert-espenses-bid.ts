import {cache} from 'react'

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { expensesBid } from '@/db/schema';
import db from '@/db/drizzle';

export const uploadExpensesBid = cache(async (betonToAddObject: typeof expensesBid.$inferSelect[]) => {
	
	await db.insert(expensesBid).values(betonToAddObject.map(el=>  ({
		    date: el.date,
		    betonAsphalt: el.betonAsphalt,
		    stamp: el.stamp,
		    massDone: el.massDone,
		    massTodo: el.massTodo,
		    details: el.details,
		    isModified: el.isModified,
		    contrag: el.contrag,
		    zavod: el.zavod,
		    zakaz: el.zakaz
		}))
	)


	revalidatePath('/')
	revalidatePath('/asphalt')
	revalidatePath('/beton')
	revalidatePath('/income')
	revalidatePath('/expenses')
	revalidatePath('/weights')
 
});