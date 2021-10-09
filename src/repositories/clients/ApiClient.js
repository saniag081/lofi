import axios from 'axios';

const EXTERNAL_API_BASE = 'https://public.opendatasoft.com/api/records/1.0';

const ApiClient = axios.create({
	baseURL: EXTERNAL_API_BASE,
});

export default ApiClient;