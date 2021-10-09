import ApiRepository from "./ApiRepository";

const repository = {
	api: ApiRepository
};

export default {
	get: (name) => repository[name]
};