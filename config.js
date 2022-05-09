// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Dipshit',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: "It's morning!",
	greetingAfternoon: "It's Afternoon,",
	greetingEvening: "It's Evening,",
	greetingNight: 'Go, Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'c53e45a4412b6cab251c6148c6270e59', // Write here your API Key
	weatherIcons: 'dark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '22.2309',
	defaultLongitude: '84.8679',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'gitlab',
			link: 'https://www.reddit.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Anime list',
			icon: 'list',
			link: 'https://myanimelist.net/',
		},
		{
			id: '4',
			name: 'AniMixPlay',
			icon: 'play',
			link: 'https://animixplay.to/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'gitlab',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Lofi',
					link: 'https://music.youtube.com/playlist?list=PLwVMh0hzndikylOFku71VGueNajNGFyzX',
				},
				{
					name: 'Supermix',
					link: 'https://music.youtube.com/playlist?list=RDTMAK5uy_kset8DisdE7LSD4TNjEVvrKRTmG7a56sY',
				},
				{
					name: 'khai dreams',
					link: 'https://music.youtube.com/channel/UCCVheYK8wdECfkjWWmfQErA',
				},
				{
					name: 'Liked',
					link: 'https://music.youtube.com/playlist?list=LM',
				},
			],
		},
		{
			icon: 'box',
			id: '2',
			links: [
				{
					name: 'Megascans',
					link: 'https://quixel.com/megascans/home/',
				},
				{
					name: 'Poly Haven',
					link: 'https://polyhaven.com/',
				},
				{
					name: 'ambientCG',
					link: 'https://ambientcg.com/',
				},
				{
					name: 'Art Station',
					link: 'https://www.artstation.com/?sort_by=community',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
