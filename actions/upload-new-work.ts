'use server'

import db from "@/db/drizzle";
import { works } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cache } from "react";



function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }



  export const uploadNewWork = cache(async (
	detailsWork: 
		{      
			id: number,
			carId: number,
			imageUrl: string,
			odometerWas: string,
			workDone: string,
			dateDone: Date
			nextTO: string,
		}
) => {
	

	// console.log(detailsWork.carId,)

	await db.insert(works).values(
		{
			id: getRandomInt(10000, 9999999),
			dateDone: detailsWork.dateDone,
			workDone: detailsWork.workDone,
			odometerWas: detailsWork.odometerWas,
			imageUrl: detailsWork.imageUrl,
			carId: detailsWork.carId,
			nextTO: detailsWork.nextTO,
		})
	

		// revalidatePath('/')
		// revalidatePath('/allwork')
		// revalidatePath('/warehouse')
		revalidatePath('/cars')
		redirect('/cars');
		// revalidatePath(`/car/${carId}`)
 
});