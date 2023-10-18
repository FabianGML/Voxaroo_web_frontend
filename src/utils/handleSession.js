import axios from 'axios'
export default function handleSession (setResponse, setIsLoading, navigate, e, path) {
  e.preventDefault()
  console.log(e)
  // Recovering the user input data
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  setIsLoading(true)
  // Making the post request to the server
  axios.post(path, data)
    .then((response) => {
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('id', response.data.id)
      setIsLoading(false)
      navigate('/')
    })
    .catch((error) => {
      if (error.response) {
        setResponse(error.response.data)
        setIsLoading(false)
      }
    })
}
