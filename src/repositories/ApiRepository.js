import ApiClient from "./clients/ApiClient";

const ApiRepository = {
	get(data) {
		return ApiClient.get('/search/?dataset=cities-and-towns-of-the-united-states&q=&rows=50&facet=feature&facet=feature2&facet=county&facet=state', data);
	}
}

export default ApiRepository;