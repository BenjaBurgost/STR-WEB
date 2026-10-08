const telefono = "5493416640303";
const mensaje = "Hola, quiero consultar por el servicio técnico de una máquina de café.";

export const site = {
    nombre: "Soluciones Técnicas Rosario",
    sigla: "S.T.R",
    rubro: "Servicio técnico de máquinas de café espresso y molinos",

    contacto: {
        telefonoVisible: "341 664-0303",
        telefonoLink: `tel:+${telefono}`,
        whatsappLink: `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        direccion: "Saavedra 1969, Rosario",
        horario: "Lunes a viernes de 8:00 a 16:00 hs",
        zona: "Retiro e instalación en Rosario y alrededores",
    },

    destacados: [
        { valor: "+20 años", texto: "en el mercado" },
        { valor: "+6800", texto: "trabajos realizados con éxito" },
        { valor: "90 días", texto: "de garantía por trabajo realizado" },
        { valor: "Taller propio", texto: "en Rosario" },
    ],

    servicios: [
        { titulo: "Retiro", texto: "Pasamos a buscar la máquina por tu local o empresa, en Rosario y alrededores." },
        { titulo: "Reparación", texto: "Diagnóstico y reparación de máquinas de espresso y molinos en nuestro taller propio." },
        { titulo: "Instalación", texto: "Te la entregamos instalada, probada y lista para usar." },
    ],

    clientes: {
        empresas: ["La Virginia", "Cabrales"],
        textoEmpresas: "Empresas y comercios: trabajamos con lista de precios personalizada.",
        textoParticulares: "Particulares: presupuesto sin cargo.",
    },

    marcas: ["Criollo", "Mónaco", "La Cimbali", "Rilo", "Italcrem", "Crem", "Lainex", "Gaggia"],

    proceso: [
        { titulo: "Nos contactás", texto: "Contanos qué máquina tenés y qué le pasa." },
        { titulo: "Retiramos la máquina", texto: "Coordinamos día y horario y la pasamos a buscar." },
        { titulo: "La reparamos", texto: "Diagnóstico y reparación en nuestro taller." },
        { titulo: "La instalamos", texto: "Te la devolvemos instalada y funcionando." },
    ],

    faq: [
        { pregunta: "¿Los trabajos tienen garantía?", respuesta: "Sí, damos 90 días de garantía por los trabajos realizados." },
        { pregunta: "¿El presupuesto tiene costo?", respuesta: "Para particulares el presupuesto es sin cargo. Para empresas trabajamos con una lista de precios personalizada." },
        { pregunta: "¿Qué máquinas reparan?", respuesta: "Máquinas de espresso de bar y molinos de café, de marcas como Criollo, Mónaco, La Cimbali, Rilo, Italcrem, Crem, Lainex y Gaggia, entre muchas otras." },
        { pregunta: "¿Retiran la máquina a domicilio?", respuesta: "Sí, hacemos retiro e instalación en Rosario y alrededores." },
    ],
};