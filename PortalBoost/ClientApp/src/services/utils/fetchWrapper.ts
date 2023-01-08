const apiRequest = async <T>(url: string, reqOptions: RequestInit): Promise<T> => {
	const response = await fetch(url, reqOptions)
	if (!response.ok) throw new Error(`\nHTTP status: ${response.status}. Message: ${response.statusText} `)
	const data = await response.json();
	return data;
	//	return response.ok ? data : Promise.reject(data)
}

const get = async <T>(url: string) => {
	const reqOptions = { method: 'GET' }
	return await apiRequest<T>(url, reqOptions)
}

/**
 * Uses two generic types. T for the body and Y for the return type of the promise.
 * @param {string} url URL for the fetch-request.
 * @param {Y} body The body passed along to the fetch request. 
 */
const post = async <T, Y>(url: string, body: T): Promise<Y> => {

	const reqOptions = {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return await apiRequest<Y>(url, reqOptions)
}

/**
 * Uses two generic types. T for the body and Y for the return type of the promise.
 * @param {string} url URL for the fetch-request.
 * @param {Y} body The body passed along to the fetch request. 
 */
const put = async <T, Y>(url: string, body: T) => {
	const reqOptions = {
		method: 'PUT',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return await apiRequest<Y>(url, reqOptions)
}

const deleteRequest = async (url: string) => {
	const reqOptions = {
		method: 'DELETE'
	}
	return await apiRequest(url, reqOptions)
}

export {
	get,
	post,
	put,
	deleteRequest
}