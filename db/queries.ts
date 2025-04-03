import {cache} from 'react'
import db from './drizzle';
// import { expensesBid } from './schema';
// import { eq } from 'drizzle-orm';
// import { revalidatePath } from 'next/cache';


export const getIncOut = cache(async () => {
	const data = await db.query.incOut.findMany();

	return data;
});


export const getRecipe = cache(async () => {
	const data = await db.query.recipe.findMany();

	return data;
});

export const getExpensesBid = cache(async () => {
	const data = await db.query.expensesBid.findMany();

	return data;
});


export const getCars = cache(async () => {
	const data = await db.query.cars.findMany();

	return data;
});





// export const uploadExpensesBid = cache(async (betonToAddObject: typeof expensesBid.$inferSelect[]) => {
	
// 	await db.insert(expensesBid).values(betonToAddObject.map(el=>  ({
// 		    date: el.date,
// 		    betonAsphalt: el.betonAsphalt,
// 		    stamp: el.stamp,
// 		    massDone: el.massDone,
// 		    massTodo: el.massTodo,
// 		    details: el.details,
// 		    isModified: el.isModified,
// 		    contrag: el.contrag,
// 		    zavod: el.zavod,
// 		    zakaz: el.zakaz
// 		}))
// 	)


// 	revalidatePath('/')
// 	revalidatePath('/asphalt')
// 	revalidatePath('/beton')
// 	revalidatePath('/income')
// 	revalidatePath('/expenses')
// 	revalidatePath('/weights')
 
// });






// export const updateExpensesBid = cache(async (betonToUpdateObject: typeof expensesBid.$inferSelect[]) => {

// 	// const newUploadObject = 
// 	// {
// 	// 	id: '123',
// 	// 	date: '123',
// 	// 	betonAsphalt: '123',
// 	// 	stamp: '123',
// 	// 	massDone: '123',
// 	// 	massTodo: '123',
// 	// 	details: '123',
// 	// 	isModified: '123',
// 	// 	contrag: '123',
// 	// 	zavod: '123',
// 	// 	zakaz: '123',
// 	// }



// 	betonToUpdateObject.map(async el => (
// 		await db.update(expensesBid).set({
// 			massDone: el.massDone,
// 		}).where (eq(expensesBid.zakaz, el.zakaz))
// 	)) 

// 	revalidatePath('/')
// 	revalidatePath('/asphalt')
// 	revalidatePath('/beton')
// 	revalidatePath('/income')
// 	revalidatePath('/expenses')
// 	revalidatePath('/weights')


// })



// type DetailsType =    {
//     гранит5_20: number,
//     цемент42: number,
//     пц500: number,
//     песок_бет: number,
//     гравий5_20бет: number,
//     галька: number,
//     линамикс: number,
//     вода: number,
//     зола: number,
//     stam: number,
//     цемент42накши: number,
//     c3: number,
//     мурапор: number,
//     basf: number,
//     гранит0_20: number,
//     мб10_50: number,
//     пыль: number,
//     нтф: number,
//   }

// export const updateRecipeInExpenses = cache(async (details: DetailsType, bid: string) => {

// 	// const newUploadObject = 
// 	// {
// 	// 	id: '123',
// 	// 	date: '123',
// 	// 	betonAsphalt: '123',
// 	// 	stamp: '123',
// 	// 	massDone: '123',
// 	// 	massTodo: '123',
// 	// 	details: '123',
// 	// 	isModified: '123',
// 	// 	contrag: '123',
// 	// 	zavod: '123',
// 	// 	zakaz: '123',
// 	// }

// 	await db.update(expensesBid).set({
// 				details: JSON.stringify(details),
// 			}).where (eq(expensesBid.zakaz, bid))



// 	revalidatePath('/')
// 	revalidatePath('/asphalt')
// 	revalidatePath('/beton')
// 	revalidatePath('/income')
// 	revalidatePath('/expenses')
// 	revalidatePath('/weights')

// })











// await db.update(userProgress).set({
// 	points: 
// 		isDoneChallenge ? currentUserProgress.points :
// 		doneRight ? currentUserProgress.points + challengePts : currentUserProgress.points,
// 	courseProgress: oldCourseProgress

// 	}).where(eq(userProgress.userId, userId))