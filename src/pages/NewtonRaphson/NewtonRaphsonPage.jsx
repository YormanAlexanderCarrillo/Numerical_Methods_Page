import React, { useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import FormNewtonRaphson from '../../components/forms/FormNewtonRaphson'
import TableResults from '../../components/tables/TableResults'

const NewtonRaphsonPage = () => {

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
                    Método Newton Raphson
                </h2>
            </div>

            <div className='flex flex-col sm:flex-row '>

                <div className="w-full sm:w-1/2">
                    <FormNewtonRaphson onResponse={handleResponse}></FormNewtonRaphson>
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

export default NewtonRaphsonPage