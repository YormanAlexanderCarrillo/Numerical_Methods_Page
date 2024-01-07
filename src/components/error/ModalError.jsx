import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const ModalError = ({ isOpen, onOpen, onClose }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpen}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Mensaje Error</ModalHeader>
                        <ModalBody>
                            <p>
                                Ocurrio un error en el procesamiento del metodo verifique los valores de cada uno de los campos.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cerrar
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalError