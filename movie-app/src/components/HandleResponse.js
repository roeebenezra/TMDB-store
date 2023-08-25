
// This function is used to handle the response from the server

/**
 * Handle response from server
 * @param res - response from server
 * @returns {Promise<*>} - response data
 */
export const handleResponse = async (res) => {
    if (!res.ok) {
        if (res.status >= 400 && res.status < 500)
            throw new Error("Some error occurred");
        if (res.status >= 500 && res.status < 600)
            throw new Error("The server not response. Please try again later");
    }
    return await res.data;
}