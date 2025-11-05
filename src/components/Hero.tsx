import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	const words = ['Beautiful', 'Meaningful', 'Engaging', 'Stories'];

	useEffect(() => {
		if (!isInView) return;

		const interval = setInterval(() => {
			setCurrentWordIndex((prev) => (prev + 1) % words.length);
		}, 2000); // Change word every 2 seconds

		return () => clearInterval(interval);
	}, [isInView, words.length]);

	return (
		<section
			ref={ref}
			className='min-h-screen flex flex-col justify-center items-center pt-20 px-4 z-50 text-white'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.8 }}
				className='text-center max-w-4xl mx-auto'
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className='flex flex-col md:flex-row items-center justify-center gap-2 mb-8'
				>
					<motion.h1 className='text-5xl md:text-7xl font-bold'>We Create</motion.h1>

					<div className='relative ml-3 h-20 md:h-28 flex items-center justify-start min-w-[200px] md:min-w-[400px] overflow-hidden'>
						<AnimatePresence mode='wait'>
							<motion.h2
								key={words[currentWordIndex]}
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -50, opacity: 0 }}
								transition={{
									duration: 0.6,
									ease: [0.4, 0, 0.2, 1],
								}}
								className='text-5xl md:text-7xl font-bold absolute'
							>
								{words[currentWordIndex]}
							</motion.h2>
						</AnimatePresence>
					</div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className='text-lg md:text-xl text-zinc-50 mb-12 max-w-2xl mx-auto'
				>
					We believe in creating and developing world-class content that not only entertains but
					also offers an enriching experience to the audience.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className='flex justify-center items-center'
				>
					<motion.a
						href='#contact'
						className='bg-zinc-950 text-white px-8 py-4 rounded-lg font-semibold text-lg'
						whileHover={{ scale: 1.05, backgroundColor: '#333' }}
						whileTap={{ scale: 0.95 }}
					>
						Let's Talk
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
