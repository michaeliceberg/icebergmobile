import {cache} from 'react'

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { expensesBid } from '@/db/schema';
import db from '@/db/drizzle';




export const updateExpensesBid = cache(async (betonToUpdateObject: typeof expensesBid.$inferSelect[]) => {

	// const newUploadObject = 
	// {
	// 	id: '123',
	// 	date: '123',
	// 	betonAsphalt: '123',
	// 	stamp: '123',
	// 	massDone: '123',
	// 	massTodo: '123',
	// 	details: '123',
	// 	isModified: '123',
	// 	contrag: '123',
	// 	zavod: '123',
	// 	zakaz: '123',
	// }



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


})