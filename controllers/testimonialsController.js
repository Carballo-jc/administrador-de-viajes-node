import { Testimonial } from "../models/Testimonials.js";

const saveTestimonials = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const mesagess = [];
  if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
    mesagess.push({ mensaje: "todos los campos son requeridos" });
  }
  if (mesagess.length > 0) {
    const testimoniales = await Testimonial.findAll();
    res.render("testimonials", {
      page: "Testimoniales",
      mesagess,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { saveTestimonials };
