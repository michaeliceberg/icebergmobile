'use client'

import { revalidateMe } from '@/actions/revalidate-me'
import { Button } from '@/components/ui/button'
// import Link from '@/node_modules/next/link'
import { RefreshCw } from 'lucide-react'
import { useTransition } from 'react'

type Props = {
	title: string
	// dateUpd: string
	// timeUpd: string
}

export const HeaderWGarageU = ({ 
	title,
	// dateUpd,
	// timeUpd,
}: Props) => {

	// console.log(dateUpd)

	const [pending, startTransition] = useTransition()


	const handleClick = () => {

		startTransition(()=>{
			revalidateMe()
		})
	}

	return (
		<div className='p-2 sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50'>
			
			{/* <Link href='/'>
				<Button variant='ghost' size='sm'>
					<ArrowLeft className='h-5 w-5 stroke-2 text-neutral-400' />
				</Button>
			</Link> */}

			<h1 className='font-bold text-lg'>{title}</h1>
			
			<div>
				

					{/* <p className='text-sm'>
						{dateUpd}
					</p> */}
						
				{pending &&
						<div className='flex content-end p-2 text-white bg-green-500 rounded-xl gap-2'>
							



							<p className=' pl-1 pr-1 font-bold '>

								
								
								<RefreshCw className='h-4 w-4 text-white animate-spin'/> 
								
								

							</p>

						</div>
				}


			</div>

				<Button 
					disabled={pending}
					variant='super' 
					onClick={handleClick}>
					обновить одометры
				</Button>

		</div>
	)
}
