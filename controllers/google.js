import { response, request } from "express";

import * as mapping from "../mapping/index.js";
import * as services from "../services/index.js";
import * as functions from "../functions/index.js";
import * as generators from "../generators/index.js";

const obtenerdonacion = async (req = request, resp = response) => {
  try {
    console.log("1");
    const login = await services.cr.login.login("FAYALA", "FA2020");
    console.log("2");

    const fechaInicio = "2023-10-27";
    const fechaFin = "2023-10-27";
    const max = 150000;
    const offset = 0;

    console.log("3");
    const donaciones = await mapping.donacionesLimpias.donacionesLimpias(fechaInicio, fechaFin, offset, max, login.access_token, []);
    console.log("4");
    
    console.log("5");
    const facturas = await services.google.forms();
    console.log("6");
    facturas.shift();

    console.log("7");
    const facturasDonativo = await mapping.facturasDonativo.facturasDonativo(facturas, donaciones);
    console.log("8");

    console.log("9");
    const facturasJSON = await functions.facturaObjs.facturaObjs(facturasDonativo);
    console.log("10");

    console.log("11");
    const facturasFacturadas = await generators.facturar.facturasDonativo(facturasJSON);
    console.log("12");

    console.log("13");
    const contentFacturasFacturadas = await Promise.all(facturasFacturadas);
    console.log("14");

    return resp.status(200).json(contentFacturasFacturadas);
  } catch (error) {
    console.error(error);

    return resp.status(406).json({ msg: error.message });
  }
};

export { obtenerdonacion };