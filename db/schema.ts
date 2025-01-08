import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';



//  export interface progressType {
// 	[index_progress: number]:
// 			{
// 				date: string,
// 				hw: number[],
// 				selfDoneRight: number,
// 				selfDoneWrong: number,
// 				dateReady: string,
// 				hearts: number,
// 				pts: number,
// 				gems: number,
// 			}	
//   }[]

//  export interface SuperType  {
// 	[index_super: number]:
// 		{
// 			course: string;
// 			progress: progressType;
// 		}
//   }[]


 


export const incOut = pgTable('incOut', {
	id: serial('id').primaryKey(),
	date: text('date').notNull(),
	type: text('type').notNull(),
	material: text('material').notNull(),
	mass: text('mass').notNull(),
	contrag: text('contrag').notNull(),
	realizacia: text('realizacia').notNull(),
	numCar: text('numCar').notNull(),
	zakaz: text('zakaz').notNull(),
	zavod: text('zavod').notNull(),
});


export const recipe = pgTable('recipe', {
	id: serial('id').primaryKey(),
	date: timestamp('date').notNull().defaultNow(),
	stamp: text('stamp').notNull(),
	details: text('details').notNull(),
	isModified: text('is_modified').notNull(),
	stampModified: text('stamp_modified').notNull(),
	betonAsphalt: text('beton_asphalt').notNull(),
	zavod: text('zavod').notNull(),
});


export const expensesBid = pgTable('expenses_bid', {
	id: serial('id').primaryKey(),
	date: text('date').notNull(),
	betonAsphalt: text('beton_asphalt').notNull(),
	stamp: text('stamp').notNull(),
	massDone: text('mass_done').notNull(),
	massTodo: text('mass_todo').notNull(),
	details: text('details').notNull(),
	isModified: text('is_modified').notNull(),
	contrag: text('contrag').notNull(),
	zavod: text('zavod').notNull(),
	zakaz: text('zakaz').notNull(),

});