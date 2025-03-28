import { Button } from '@/components/ui/button'
import Link from '@/node_modules/next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'

type Props = {
	title: string
	dateUpd: string
	timeUpd: string
}

export const HeaderWTU = ({ 
	title,
	dateUpd,
	timeUpd,
}: Props) => {
	return (
		<div className='sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50'>
			<Link href='/'>
				<Button variant='ghost' size='sm'>
					<ArrowLeft className='h-5 w-5 stroke-2 text-neutral-400' />
				</Button>
			</Link>
			<h1 className='font-bold text-lg'>{title}</h1>
			
			<div>

					<p className='text-sm'>
						{dateUpd}
					</p>
						
				<div className='flex content-end p-2 text-white bg-green-500 rounded-xl gap-2'>
					<div>
						<RefreshCw className='h-4 w-4 text-white animate-spin'/>
					</div>

					<p className='text-sm'>
						{timeUpd}
					</p>
				</div>
			</div>

		</div>
	)
}
