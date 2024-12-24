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


// 21.12.2024 18:33:53

// Бетон	
// 20.12.2024 15:56:07	
// БСТ В20П4F100W2 на гравии С/Д	
// 10,00	
// СтройПартнер	
// Реализация товаров и услуг айс00015731 от 20.12.2024 15:56:06	
// а426ае750	
// 41		
// Заказ покупателя айс00004526	
// Заказ покупателя айс00004526 от 19.12.2024 16:56:15	
// м3	
// Щ



// export const coursesRelations = relations(courses, ({ many }) => ({
// 	userProgress: many(userProgress),
// 	units: many(units),
// }));





// export const userProgress = pgTable('user_progress', {
// 	userId: text('user_id').primaryKey(),
// 	userName: text('user_name').notNull().default('User'),
// 	userImageSrc: text('user_image_src').notNull().default('/mascot.svg'),
// 	activeCourseId: integer('active_course_id').references(() => courses.id, { onDelete: 'cascade' }),
// 	hearts: integer('hearts').notNull().default(500),
// 	points: integer('points').notNull().default(0),


// 	// courseProgress: json('course_progress').$type<SuperType>().notNull().default(
// 	courseProgress: json('course_progress').$type<SuperType>()
// 	.notNull().default
// 	(
// 		[{
// 			course: "book1",
// 			progress: 
// 				[{
// 					date: "date1",
// 					hw: [10, 0, 0],
// 					selfDoneRight: 0,
// 					selfDoneWrong: 0,
// 					dateReady: "",
// 					hearts: 0,
// 					pts: 0,
// 					gems: 0,
// 				},]
// 		},]
// 	)
// });



// export const userProgressRelations = relations(userProgress, ({ one }) => ({
// 	activeCourse: one(courses, {
// 		fields: [userProgress.activeCourseId],
// 		references: [courses.id],
// 	}),

	
// }));





// export const units = pgTable('units', {
// 	id: serial('id').primaryKey(),
// 	title: text('title').notNull(), // Unit 1
// 	description: text('description').notNull(), // Learn the basics
// 	imageSrc: text('image_src').notNull(),
// 	courseId: integer('course_id')
// 		.references(() => courses.id, { onDelete: 'cascade' })
// 		.notNull(),
// 	order: integer('order').notNull(),
// });

// export const unitsRelations = relations(units, ({ many, one }) => ({
// 	course: one(courses, {
// 		fields: [units.courseId],
// 		references: [courses.id],
// 	}),
// 	lessons: many(lessons),
// }));




// export const lessons = pgTable('lessons', {
// 	id: serial('id').primaryKey(),
// 	title: text('title').notNull(),
// 	unitId: integer('unit_id')
// 		.references(() => units.id, { onDelete: 'cascade' })
// 		.notNull(),
// 	order: integer('order').notNull(),
// });

// export const lessonsRelations = relations(lessons, ({ one, many }) => ({
// 	unit: one(units, {
// 		fields: [lessons.unitId],
// 		references: [units.id],
// 	}),
// 	challenges: many(challenges),
// }));




// export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"])





// export const challenges = pgTable('challenges', {
// 	id: serial('id').primaryKey(),
// 	// id: bigint('id').primaryKey(),
// 	lessonId: integer('lesson_id').references(()=>lessons.id, {onDelete: 'cascade'}).notNull(),
// 	type: challengesEnum('type').notNull(),
// 	question: text('question').notNull(),
// 	order: integer('order').notNull(),
// 	points: integer('points').notNull(),
// 	author: text('author').notNull(),
// });

// export const challengesRelations = relations(challenges, ({ one, many }) => ({
// 	lesson: one(lessons, {
// 		fields: [challenges.lessonId],
// 		references:[lessons.id],
// 	}),
// 	challengeOptions: many(challengeOptions),
// 	challengeProgress: many(challengeProgress),
// }));




// export const challengeOptions = pgTable('challenge_options', {
// 	id: serial('id').primaryKey(),
// 	challengeId: integer('challenge_id').references(()=>challenges.id, {onDelete: 'cascade'}).notNull(),	
// 	text: text('text').notNull(),
// 	correct: boolean('correct').notNull(),
// 	imageSrc: text('image_src'),
// 	audioSrc: text('audio_src'),
// });


// export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
	
// 	challenge: one(challenges, {
// 		fields: [challengeOptions.challengeId],
// 		references:[challenges.id],
// 	})
// }));





// export const challengeProgress = pgTable('challenge_progress', {
// 	id: serial('id').primaryKey(),
// 	userId: text('user_id').notNull(), // TODO: confirm this 
// 	challengeId: integer('challenge_id').references(()=>challenges.id, {onDelete: 'cascade'}).notNull(),	
// 	completed: boolean('completed').notNull().default(false),
// 	doneRight: boolean('done_right').notNull().default(false),
// 	dateDone: timestamp('date_done').notNull().defaultNow(),
// });


// export const challengeProgressRelations = relations(challengeProgress, ({ one }) => ({
	
// 	challenge: one(challenges, {
// 		fields: [challengeProgress.challengeId],
// 		references:[challenges.id],
// 	})
// }));






// export const userSubscription = pgTable("user_subscription", {
// 	id: serial('id').primaryKey(),
// 	userId: text('user_id').notNull().unique(),
// 	stripeCustomerId: text('stripe_customer_id').notNull().unique(),
// 	stripeSubscriptionId: text('stripe_subscription_id').notNull().unique(),
// 	stripePriceId: text('stripe_price_id').notNull(),
// 	stripeCurrentPeriodEnd: timestamp('stripe_current_period_end').notNull(),
// })