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
		}
) => {
	

	// console.log(detailsWork.carId,)

	await db.insert(works).values(
		{
			id: getRandomInt(10000, 9999999),
			carId: detailsWork.carId,
			imageUrl: detailsWork.imageUrl,
			odometerWas: detailsWork.odometerWas,
			workDone: detailsWork.workDone,
			dateDone: detailsWork.dateDone,
		})
	

		// revalidatePath('/')
		revalidatePath('/allwork')
		revalidatePath('/warehouse')
		redirect('/');
		// revalidatePath(`/car/${carId}`)
 
});