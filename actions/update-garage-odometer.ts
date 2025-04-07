'use server'

import {cache} from 'react'

import { eq } from 'drizzle-orm';
// import { revalidatePath } from 'next/cache';
import { cars, expensesBid } from '@/db/schema';
import db from '@/db/drizzle';
// import { redirect } from 'next/navigation';

import { SQL, inArray, sql } from 'drizzle-orm';


interface googleCarsObjectProp  {
		id: number;
		carNum: string;
		driver: string;
		odometer: string;
	}


export const updateGarageOdometer = cache(async (
	googleCarsObject: googleCarsObjectProp[]) => {


	// betonToUpdateObject.map(async el => (
	// 	await db.update(expensesBid).set({
	// 		massDone: el.massDone,
	// 	}).where (eq(expensesBid.zakaz, el.zakaz))

	
	// )) 




	const sqlChunks: SQL[] = [];
	const ids: number[] = [];

	sqlChunks.push(sql`(case`);

		for (const input of googleCarsObject) {
			sqlChunks.push(sql`when ${cars.id} = ${input.id} then ${input.odometer}`);
			ids.push(input.id);
		}
		sqlChunks.push(sql`end)`);

	const finalSql: SQL = sql.join(sqlChunks, sql.raw(' '));

	await db.update(cars).set({ odometer: finalSql }).where(inArray(cars.id, ids));





	console.log('updated Garage odometer from Google')





})