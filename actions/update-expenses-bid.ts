'use server'

import {cache} from 'react'

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { expensesBid } from '@/db/schema';
import db from '@/db/drizzle';
import { redirect } from 'next/navigation';




export const updateExpensesBid = cache(async (betonToUpdateObject: typeof expensesBid.$inferSelect[]) => {


	betonToUpdateObject.map(async el => (
		await db.update(expensesBid).set({
			massDone: el.massDone,
		}).where (eq(expensesBid.zakaz, el.zakaz))

	
	)) 

	revalidatePath('/')
	revalidatePath('/asphalt')
	revalidatePath('/beton')
	revalidatePath('/income')
	revalidatePath('/expenses')
	revalidatePath('/weights')
	redirect('/beton');

})