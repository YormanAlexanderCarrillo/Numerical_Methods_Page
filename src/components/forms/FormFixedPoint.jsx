import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Divider, Input, Button, useDisclosure} from '@nextui-org/react'
import ModalError from '../error/ModalError'
import axios from 'axios'

const FormFixedPoint = ({onResponse}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [formData, setFormData] = useState({
        'ecuacion': '',
        'valor_inicial': '',
        'porcentajeError': '',
        'iteraciones': ''
    })

    const handleChange = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const sendMethod = async (e) =>{
        e.preventDefault()
        try {
            const parsedFormData = {
                ...formData,
                valor_inicial: parseFloat(formData.valor_inicial),
                porcentajeError: parseFloat(formData.porcentajeError),
                iteraciones: parseInt(formData.iteraciones)
            }

            const response = await axios.post('http://192.168.1.49:5000/puntoFijo', parsedFormData )
            onResponse(response)
            // console.log(response.data)
            
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
                            <h2>DATOS PUNTO FIJO</h2>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <form action="/puntofijo" onSubmit={sendMethod}>
                                <div className="mb-4">
                                    <Input id="ecuation" name='ecuacion' type="text" label="Ecuación" value={formData.ecuacion} onChange={handleChange} variant="bordered" isRequired />
                                </div>
                                <div className="mb-4">
                                    <Input id="valueInitial" name='valor_inicial' type="number" label="Valor inicial" value={formData.valor_inicial} onChange={handleChange}   variant="bordered" isRequired />
                                </div>
                                <div className="mb-4">
                                    <Input id="percentError" name='porcentajeError' type="number" label="Porcentaje Error" value={formData.porcentajeError}  onChange={handleChange}  variant="bordered" isRequired />
                                </div>
                                <div className="mb-4">
                                    <Input id="iterations" name='iteraciones' type="number" label="Numero iteraciones" value={formData.iteraciones} onChange={handleChange}  variant="bordered" isRequired />
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

export default FormFixedPoint