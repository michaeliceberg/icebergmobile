'use server'

import {cache} from 'react'

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { expensesBid } from '@/db/schema';
import db from '@/db/drizzle';
import { redirect } from 'next/navigation';


type DetailsType =    {
    гранит5_20: number,
    цемент42: number,
    пц500: number,
    песок_бет: number,
    гравий5_20бет: number,
    галька: number,
    линамикс: number,
    вода: number,
    зола: number,
    stam: number,
    цемент42накши: number,
    c3: number,
    мурапор: number,
    basf: number,
    гранит0_20: number,
    мб10_50: number,
    пыль: number,
    нтф: number,
  }

export const updateRecipeInExpenses = cache(async (details: DetailsType, bid: string) => {


	await db.update(expensesBid).set({
				details: JSON.stringify(details),
			}).where (eq(expensesBid.zakaz, bid))



	revalidatePath('/')
	revalidatePath('/asphalt')
	revalidatePath('/beton')
	revalidatePath('/income')
	revalidatePath('/expenses')
	revalidatePath('/weights')
	redirect('/beton');
})

