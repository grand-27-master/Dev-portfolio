'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Fingers Tap',
		description: 'A real-time multi-finger tap detection system',
		image: '/laptop.jpg',
		link:"http://github.com/grand-27-master/Fingers-Tap"
	},
	{
		id: 2,
		title: 'interviewGPT',
		description: 'An AI-powered interview preparation tool that helps users practice coding interviews with real-time feedback',
		image: '/laptop.jpg',
		link:"https://github.com/grand-27-master/InterviewGPT"
	},
	{
		id: 3,
		title: 'Healthcare API',
		description: 'A RESTful API for healthcare applications which was a part of a company assignment',
		image: '/laptop.jpg',
		link:"https://github.com/grand-27-master/Healthcare-API"
	},
	{
		id: 4,
		title: 'Paddle Pong',
		description: 'A fun and interactive paddle pong game which was a part of a company assignment',
		image: '/laptop.jpg',
		link:"https://github.com/grand-27-master/Paddle-Pong"
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Products
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex gap-4">
								{project.link && (
									<Link href={project.link} target='_blank' className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										Learn More
									</Link>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
