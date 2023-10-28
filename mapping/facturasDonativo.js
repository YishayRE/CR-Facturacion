const facturasDonativo = async(facturas, donaciones) => {
    try {
        const facturaDonativo = facturas.map(factura => {
            const donacion = donaciones.find(donacion => donacion.referencia === factura[1].trim());

            if(!donacion) 
                return null;
            else
                return {
                    descripcion: donacion.causa?.nombre,
                    importe: donacion.monto,
                    usoCFDI: factura[4].trim().split(" ")[0],
                    nombre: `${donacion.colaborador?.nombre.toUpperCase()} ${donacion.colaborador?.primerApellido.toUpperCase()} ${donacion.colaborador?.segundoApellido.toUpperCase()}`,
                    rfc: factura[2].trim(),
                    domicilioFiscalReceptor: factura[5].trim(),
                    regimenFiscalReceptor: factura[3].trim().split(" ")[0],
                    email: donacion.colaborador?.email,
                }
            
            /*
            nombre: "MIGUEL YISHAY RODRIGUEZ ENRIQUEZ",
            regimenFiscalReceptor: "605",
            email: "yishel.miguel@gmail.com"
            */
        });
        
        return facturaDonativo.filter(factura => factura !== null);
    } catch (error) {
        throw new Error(error);
    }
}

export { facturasDonativo };