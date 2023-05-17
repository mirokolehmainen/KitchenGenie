//const data = null
//const xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

//xhr.addEventListener('readystatechange', function () {
	//if (this.readyState === this.DONE) {
		//console.log(this.responseText);
	//}
//});

//xhr.open('GET', 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup');
//xhr.setRequestHeader('X-RapidAPI-Key', 'ee7c66f098mshbd8eaed40bba8a9p13f031jsn3282375f39df');
//xhr.setRequestHeader('X-RapidAPI-Host', 'recipe-by-api-ninjas.p.rapidapi.com');

//xhr.send(data);

//export default data;




export enum SearchType {
	all = '',
	includeIngredients = 'includeIngredients',
	excludeCuisine = 'excludeCuisine'
}

export interface DetailsResult {


    cuisine: string;
    excludeCuisine: string;
    diet: string;
    intolerances: string;
    equipment: string;
    includeIngredients: string;
    type: string;
    instructionsRequired: 'true',
    fillIngredients: 'false',
    maxReadyTime: number;
   
}

export const useApi = () => {
	let url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup';
	let apiKey = 'ee7c66f098mshbd8eaed40bba8a9p13f031jsn3282375f39df';

	const searchData = async (cuisine: string, type: SearchType): Promise<any> => {
		const result = await fetch(`${url}?s=${encodeURI(cuisine)}&type=${type}&apikey=${apiKey}`);

		return result.json();
	};

	const getDetails = async (id: string): Promise<DetailsResult> => {
		const result = await fetch(`${url}?i=${id}&plot=full&apikey=${apiKey}`);
		return result.json();
	};

	return {
		searchData,
		getDetails
	};
};

export default useApi;