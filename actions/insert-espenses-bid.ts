'use server'

import {cache} from 'react'

// import { revalidatePath } from 'next/cache';
import { expensesBid } from '@/db/schema';
import db from '@/db/drizzle';
import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

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


	console.log('uploaded expenses bid')

	revalidatePath('/')
	revalidatePath('/asphalt')
	revalidatePath('/beton')
	revalidatePath('/income')
	revalidatePath('/expenses')
	revalidatePath('/weights')
	// redirect('/beton');
 
});