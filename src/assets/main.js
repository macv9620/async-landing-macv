
let videosPlace = null || document.querySelector("#content");

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDVLWX3UZcwPeSjL9EPIuCw&part=snippet%2Cid&order=date&maxResults=10';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd872dd72eemsh317710e657d1acfp1b4149jsn0ca859c8b1e4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchAPI (urlAPI){
	const response = await fetch(urlAPI, options);
	const datos = await response.json();
	return datos;
};

async function videosToHTML(){

	try{
	
		const videos = await fetchAPI(API);
		const videosArrayHTML = videos.items.map((item)=>{
			return `<div class="group relative">
			<div
			  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
			  <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
			  <h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${item.snippet.title}
			  </h3>
			</div>
		  </div>`
		});

		const videosConcat = videosArrayHTML.slice(0,7).join("");

		videosPlace.innerHTML = videosConcat;

	} catch(error){
		console.log(error);
	}
};

videosToHTML();



