import React , {useState} from 'react'
import NavBar from '../../components/navBar/NavBar'
import FormFixedPoint from '../../components/forms/FormFixedPoint'
import TableResults from '../../components/tables/TableResults'


const FixedPointPage = () => {

  const [response, setResponse] = useState(null)
  //console.log(response)

  const handleResponse = (responseData) => {
    setResponse(responseData);
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className='flex items-center justify-center'>
        <h2 className='text-base sm:text-2xl md:text-3xl lg:text-3xl font-serif text-center'>
          Método Punto Fijo
        </h2>
      </div>

      <div className='flex flex-col sm:flex-row '>

        <div className="w-full sm:w-1/2">
          <FormFixedPoint onResponse={handleResponse}></FormFixedPoint>
        </div>

        <div className="w-full sm:w-1/2">
          {response && response.status === 200 && (
          <TableResults response={response.data}></TableResults>
          )}
        </div>

      </div>
    </div>
  )
}

export default FixedPointPage