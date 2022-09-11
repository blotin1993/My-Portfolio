const TECHNOLOGIES = {
	GOLANG: 'golang',
	NODE: 'node.js',
	PYTHON: 'python',
	NEST: 'nest.js',
	REACT: 'reactjs',
	GRAPHQL: 'graphql',
	TYPESCRIPT: 'typescript'
}
const workingExperienceItems = [
	{
		id: 1,
		company_name: 'Xoor',
		company_website: 'https://xoor.io/es/',
		position: 'Full-stack Developer',
		start_date: new Date(2021, 12),
		end_date: null,
		description: 'Currently working as a full-stack developer',
		technologies: [TECHNOLOGIES.NODE, TECHNOLOGIES.REACT, TECHNOLOGIES.GRAPHQL, TECHNOLOGIES.TYPESCRIPT]
	},
	{
		id: 2,
		company_name: 'SimTLix (now Intive)',
		company_website: 'https://simtlix.com/',
		position: 'Back-end Developer',
		start_date: new Date(2021, 8),
		end_date:new Date(2021, 12),
		description: 'Worked as a back-end developer',
		technologies: [TECHNOLOGIES.NODE,TECHNOLOGIES.NEST]
	},
	{
		id: 3,
		company_name: 'Avalith',
		company_website: 'https://www.avalith.net/',
		position: 'Back-end Developer',
		start_date: new Date(2020, 12),
		end_date: new Date(2021, 8),
		description: 'Worked as a back-end developer',
		technologies: [TECHNOLOGIES.GOLANG,TECHNOLOGIES.NODE,TECHNOLOGIES.PYTHON]
	}
]

export {
    workingExperienceItems
}