const facturasDonativo = async(facturas, donaciones) => {
    try {
        const facturaDonativo = facturas.map(factura => {
            const donacion = donaciones.find(donacion => donacion.referencia === factura[1].trim());
            console.log(donacion);

            if(!donacion) 
                return null;
            else
                return {
                    descripcion: donacion.causa?.nombre,
                    importe: donacion.monto,
                    usoCFDI: factura[4].trim().split(" ")[0],
                    nombre: `${donacion.colaborador?.nombre} ${donacion.colaborador?.primerApellido} ${donacion.colaborador?.nombresegundoApellido}`,
                    rfc: factura[2].trim(),
                    domicilioFiscalReceptor: factura[5].trim(),
                    regimenFiscalReceptor: factura[3].trim().split(" ")[0],
                    email: donacion.colaborador?.email,
                }
        });
        
        return facturaDonativo;
    } catch (error) {
        throw new Error(error);
    }
}

export { facturasDonativo };