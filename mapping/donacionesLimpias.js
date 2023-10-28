import { cr } from "../services/index.js";

const donacionesLimpias = async(inicio, fin, offset, max, access_token, donaciones) => {
    try {
        const donacionesCR = await cr.donaciones.listaDonaciones(inicio, fin, max, offset, access_token);
        console.log(donacionesCR.totalRegistros);
        
        if (donacionesCR.donaciones.length === 0) {
            throw new Error("No hay donaciones");
        }
        
        const donacionesLimpias = donacionesCR.donaciones.filter(donacion => donacion?.colaborador?.nombre !== "Lxbfyeaa");

        console.log(donacionesLimpias.length);
        return donacionesLimpias;
    } catch (error) {
        throw new Error(error);
    }
}

export { donacionesLimpias };