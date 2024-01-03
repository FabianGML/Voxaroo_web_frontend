import axios from 'axios'
/**
 * Function to handle the session login and signup requests to the server
 * it also sets the response state wheter the request was successful or not
 * @param {function} setResponse - Function to set the response state
 * @param {function} setIsLoading - Function to set the isLoading state
 * @param {function} navigate - Function to navigate to another route
 * @param {object} e - The event object
 * @param {string} path - The path to make the request
 * @returns {void}
 */
export default function handleSession (setResponse, setIsLoading, navigate, e, path) {
  e.preventDefault()
  // Recovering the user input data
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  setIsLoading(true)
  // Making the post request to the server
  axios.post(path, data)
    .then((response) => {
      window.localStorage.setItem('id', response.data.id)
      window.localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      navigate('/')
    })
    .catch((error) => {
      if (error.response) {
        // If there is a server response, handle the error normally
        setResponse(error.response.data)
        setIsLoading(false)
      } else if (error.request) {
        // If the request was made but no response was received from the server
        setResponse({ error: 'Lo sentimos. El servicio no está disponible. 😿' })
        setIsLoading(false)
      } else {
        // If there was another error in the request
        console.log('Error de solicitud:', error.message)
        setIsLoading(false)
      }
    })
}
