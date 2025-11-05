import { motion, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

const data: TimelineEntry[] = [
	{
		title: 'Films & Music Videos & Documentaries',
		content: (
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/02/short-films@3x-1024x576.jpg'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/12/Saarch.png'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/01/Music-video-1.jpg'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/12/Effipac1-1-1024x576.png'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2023/08/Screenshot-2023-08-23-at-5.24.59-PM-1024x438.png'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/02/post-wedding@3x-1024x576.jpg'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-23-at-5.20.57-PM.jpeg'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/12/Effipac1-1-1024x576.png'
						alt='startup template'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
				</div>
			</div>
		),
	},
	{
		title: 'Advertisements',
		content: (
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src='https://gridpictures.com/wp-content/uploads/2023/08/Screenshot-2023-08-23-174509.png'
						alt='advertisement'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2023/08/Screenshot-2023-08-23-174606.png'
						alt='advertisement'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/02/Screenshot-22-1024x576.png'
						alt='advertisement'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
				</div>
			</div>
		),
	},
	{
		title: 'Digital Marketing / Corporate Solutions',
		content: (
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src='https://gridpictures.com/wp-content/uploads/2023/08/Screenshot-2023-08-23-173711.png'
						alt='digital marketing'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-08-23-173823-qbc2i1v9bg357zt41o5sm0xoer0lhry34d6izzt3km.png'
						alt='digital marketing'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-08-23-173959-qbc2kgces7diw4bi0pjgzf43276d5xhe49775g8vo6.png'
						alt='digital marketing'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-08-23-174104-qbc2mhntla5w1pd04l8ddwm1e94zubkgec32l1866u.png'
						alt='digital marketing'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2023/08/Screenshot-2023-08-23-174223.png'
						alt='digital marketing'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-08-23-174256-qbc2pc48a8257786ibipfora59405bv74f6zw709cm.png'
						alt='digital marketing'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
				</div>
			</div>
		),
	},
	{
		title: 'Studio Xchange',
		content: (
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-23-at-5.31.48-PM-qbc2v6o2t42dfuqccuj4y7mj7ka81j32ldbre6c2mu.jpeg'
						alt='studio xchange'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
				</div>
			</div>
		),
	},
	{
		title: 'Political (Analysts)',
		content: (
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-23-at-5.45.41-PM-1-qbc30xgkknxge2dytbx26rfxwbyz2xw0psukz1tgly.jpeg'
						alt='political analyst'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-23-at-5.45.41-PM-qbc2zt1iese4iu0odcg3pjn4cri6vyfk88spc5he1i.jpeg'
						alt='political analyst'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/ddhgh-qbc33ke9qxjeyok2eyydolhhw8z1odcwquqmfzwp5i.jpeg'
						alt='political analyst'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
				</div>
			</div>
		),
	},
	{
		title: 'Events',
		content: (
			<div>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/02/post-wedding@3x-1024x576.jpg'
						alt='event'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-08-23-at-4.54.32-PM-qbc0xae4lmds3q9di4uv1clkz2smnslmnewxofyzbq.png'
						alt='event'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
					<img
						src='https://gridpictures.com/wp-content/uploads/2022/02/Screenshot-30-1024x576.png'
						alt='event'
						width={500}
						height={500}
						className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
					/>
				</div>
			</div>
		),
	},
];

export const Timeline = () => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className='w-full bg-white dark:bg-neutral-950 font-sans md:px-10' ref={containerRef}>
			<div className='max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10'>
				<h2 className='text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl'>
					Fields of Expertise
				</h2>
				<p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-3xl'>
					Through GRID Pictures we have sought to elevate standards of direction and story
					telling/content creation in the form of Films, Music Videos, Corporate Films,
					Advertisements.
				</p>
			</div>

			<div ref={ref} className='relative max-w-7xl mx-auto pb-20'>
				{data.map((item, index) => (
					<div key={index} className='flex justify-start pt-10 md:pt-40 md:gap-10'>
						<div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
							<div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
								<div className='h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2' />
							</div>
							<h3 className='hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 '>
								{item.title}
							</h3>
						</div>

						<div className='relative pl-20 pr-4 md:pl-4 w-full'>
							<h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500'>
								{item.title}
							</h3>
							{item.content}{' '}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + 'px',
					}}
					className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full'
					/>
				</div>
			</div>
		</div>
	);
};
