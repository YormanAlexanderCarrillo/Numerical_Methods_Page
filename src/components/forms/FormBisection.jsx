import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Divider, Input, Button, useDisclosure} from '@nextui-org/react'
import ModalError from '../error/ModalError'
import axios from 'axios'

const FormBisection = ({ onResponse }) => {


    const { isOpen, onOpen, onClose } = useDisclosure();

    const [formData, setFormData] = useState(
        {
            'Ecuacion': '',
            'Xi': '',
            'Xu': '',
            'Iteraciones': '',
            'PorcentajeError': ''
        }
    )

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const sendMethod = async (e) => {
        e.preventDefault()
        try {
            const parsedFormData = {
                ...formData,
                Xi: parseFloat(formData.Xi),
                Xu: parseFloat(formData.Xu),
                Iteraciones: parseInt(formData.Iteraciones),
                PorcentajeError: parseInt(formData.PorcentajeError)
            }

            const response = await axios.post('http://192.168.1.49:5000/biseccion', parsedFormData)
            onResponse(response)
            console.log(response.data)
            // alert (response.data)

        } catch (error) {
            console.log(error)
            onOpen()
        }
    }

    return (
        <div>
            <ModalError isOpen={isOpen} onOpen={onOpen} onClose={onClose}></ModalError>
            <div className="">
                <div className="w-full px-2 pt-16 pl-10 pr-10">
                    <Card>
                        <CardHeader className="justify-center text-center">
                            <h2>DATOS BISECCIÓN</h2>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <form action="/puntofijo" onSubmit={sendMethod}>
                                <div className="mb-4">
                                    <Input id="ecuation" name='Ecuacion' type="text" label="Ecuación" value={formData.Ecuacion} onChange={handleChange} variant="bordered" isRequired />
                                </div>
                                <div className="mb-4 flex flex-col sm:flex-row">
                                    <div className='w-full pr-8'>
                                        <Input id="valueInitial" name='Xi' type="number" label="Xi" value={formData.Xi} onChange={handleChange} variant="bordered" isRequired />
                                    </div>
                                    <div className='w-full'>
                                        <Input id="valueInitial" name='Xu' type="number" label="Xu" value={formData.Xu} onChange={handleChange} variant="bordered" isRequired />
                                    </div>

                                </div>
                                <div className="mb-4">
                                    <Input id="percentError" name='PorcentajeError' type="number" label="Porcentaje Error" value={formData.PorcentajeError} onChange={handleChange} variant="bordered" isRequired />
                                </div>
                                <div className="mb-4">
                                    <Input id="iterations" name='Iteraciones' type="number" label="Numero iteraciones" value={formData.Iteraciones} onChange={handleChange} variant="bordered" isRequired />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Button color="success" variant="shadow" type="submit" size="md">
                                        Resolver
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                        <Divider />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FormBisection