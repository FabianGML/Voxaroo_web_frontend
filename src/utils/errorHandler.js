export function errorHandler (error, setResponse, setIsLoading) {
  if (error.response) {
    // If there is a server response, handle the error normally
    setResponse(error.response.data)
    if (setIsLoading) setIsLoading(false)
  } else if (error.request) {
    // If the request was made but no response was received from the server
    setResponse({ error: 'Lo sentimos. El servicio no está disponible. 😿' })
    if (setIsLoading) setIsLoading(false)
  } else {
    // If there was another error in the request
    if (setIsLoading) setIsLoading(false)
  }
}
