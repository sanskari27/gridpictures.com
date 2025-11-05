import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StreamingPlatforms = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const images = [
		'https://gridpictures.com/wp-content/uploads/2022/04/1-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/2-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/3-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/4-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/5.1-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/6-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/7-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/8-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/9-300x169.jpg',
		'https://gridpictures.com/wp-content/uploads/2022/04/10-300x169.jpg',
	];

	// Duplicate images for seamless loop
	const duplicatedImages = [...images, ...images];

	return (
		<section ref={ref} className='py-20 px-4 bg-zinc-950 overflow-hidden text-white'>
			<div className='container mx-auto max-w-6xl text-center mb-12'>
				<motion.h4
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-black uppercase text-zinc-50 text-center'
				>
					Our Stories now streaming on
				</motion.h4>
			</div>

			<div className='relative w-full overflow-hidden flex justify-center'>
				<div className='relative w-full max-w-[80%] overflow-hidden'>
					{/* Left blur gradient */}
					<div
						className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none'
						style={{ backdropFilter: 'blur(4px)' }}
					/>

					{/* Right blur gradient */}
					<div
						className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none'
						style={{ backdropFilter: 'blur(4px)' }}
					/>

					<motion.div
						className='flex gap-8'
						animate={{
							x: [0, -(images.length * (228 + 32))],
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 20,
								ease: 'linear',
							},
						}}
						style={{
							width: 'max-content',
						}}
					>
						{duplicatedImages.map((image, index) => (
							<motion.div
								key={`${image}-${index}`}
								className='flex-shrink-0 w-[228px] h-[169px]'
								whileHover={{ scale: 1.05 }}
							>
								<img
									src={image}
									alt={`Streaming platform ${index + 1}`}
									className='w-full h-full object-cover rounded-lg mix-blend-normal'
									loading='lazy'
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default StreamingPlatforms;
