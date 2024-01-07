import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const TableResults = ({response}) => {
    return (
        <div>
            <div className="min-h-screen flex items-start justify-center">
                <div className="w-full pt-16 pl-10 pr-10">
                    <Table  aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>RAIZ</TableColumn>
                            <TableColumn>ITERACIONES</TableColumn>
                            <TableColumn>PORCENTAJE ERROR</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow >
                                <TableCell>{response.raiz}</TableCell>
                                <TableCell>{response.iteraciones}</TableCell>
                                <TableCell>{response.porcentaje_error}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default TableResults