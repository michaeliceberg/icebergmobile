import { cn } from '@/lib/utils'
import Link from '@/node_modules/next/link'
// import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
// import { Loader } from 'lucide-react'
import Image from 'next/image'
import { SidebarItem } from './sidebar-item'
// import { SidebarItem } from './sidebar-item'

type Props = {
	className?: string
}

export const Sidebar = ({ className }: Props) => {
	return (
		<div className={cn('flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col', className)}>
			<Link href='/income'>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					<Image src='/iceberg_logo19.svg' height={40} width={40} alt='Iceberg' />
					<h1 className='text-2xl font-extrabold text-blue-400 tracking-wide'>Айсберг</h1>
				</div>
			</Link>
			<div className='flex flex-col gap-y-2 flex-1'>
				
			<SidebarItem label='Приход' href='/income' iconSrc='/ice_income_icon.svg' />

			<SidebarItem label='Весы' href='/weights' iconSrc='/ice_weights_icon.svg' />

			<SidebarItem label='Бетон' href='/beton' iconSrc='/ice_concretecar_icon.svg' />

			<SidebarItem label='Рецепты Бет' href='/beton-recipe' iconSrc='/ice_beton_recipe_icon.svg' />

			<SidebarItem label='Асфальт' href='/asphalt' iconSrc='/ice_asphalt_icon.svg' />

			<SidebarItem label='Расход' href='/expenses' iconSrc='/ice_outcome_icon.svg' />

			<SidebarItem label='Автопарк' href='/cars' iconSrc='/ice_garage_icon.svg' />
			</div>
			<div className='p-4'>
				
			</div>
		</div>
	)
}
