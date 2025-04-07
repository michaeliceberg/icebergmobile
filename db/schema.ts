import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';



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

	stampBase: text('stamp_base').notNull(),
	stampSuffix: text('stamp_suffix').notNull(),

	details: text('details').notNull(),
	// isModified: text('is_modified').notNull(),
	// stampModified: text('stamp_modified').notNull(),
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



export const cars = pgTable('cars', {
	id: serial('id').primaryKey(),
	carNum: text('car_num').notNull(),
	type: text('type').notNull(),
	odometer: text('odometer').notNull().default('0'),
	driver: text('driver'),
	TOprev: text('to_prev').notNull().default('0'),
	TOnext: text('to_next').notNull().default('0'),
});


export const carsRelations = relations(cars, ({ many, one }) => ({
	works: many(works),
}));


export const works = pgTable('works', {
	id: serial('id').primaryKey(),
	dateDone: timestamp('date_done').notNull().defaultNow(),
	workDone:  text('work_done').notNull(),
	odometerWas: text('odometer_was').default('0'),
	nextTO: text('next_to').notNull().default('0'),
	imageUrl: text('image_url'),
	isTO: text('is_to').notNull().default('0'),
	carId: integer('car_id')
		.references(() => cars.id, { onDelete: 'cascade' })
		.notNull(),
});


export const worksRelations = relations(works, ({ one }) => ({
	unit: one(cars, {
		fields: [works.carId],
		references: [cars.id],
	}),
}));