'use server'

import {cache} from 'react'

// import { revalidatePath } from 'next/cache';
// import { expensesBid } from '@/db/schema';
import db from '@/db/drizzle';
import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

export const revalidateMe = cache(async () => {
	
	

	revalidatePath('/')
	revalidatePath('/asphalt')
	revalidatePath('/beton')
	revalidatePath('/income')
	revalidatePath('/expenses')
	revalidatePath('/weights')
	revalidatePath('/cars')
	// redirect('/beton');
 
});