import * as services from "../services/index.js";

const facturasDonativo = async(jsons) => {
    try {
        return await jsons.map(async(json) => {
            const jsonFacturas = await services.facturacion.facturacion.facturar(json);

            return jsonFacturas;
        });
    } catch (error) {
        throw new Error(error);
    }
}

export { facturasDonativo };