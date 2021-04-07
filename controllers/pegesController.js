import { Viaje } from "../models/Viajes.js";

const pageHome = (req, res) => {
  res.render("home", {
    page: "Inicio",
  });
};
const pageAbout = (req, res) => {
  res.render("about", {
    page: "Nosotros",
  });
};

const pageTravels = async (req, res) => {
  const travels = await Viaje.findAll();
  res.render("travels", {
    page: "Proximos Viajes",
    travels,
  });
};
const pageTestimonials = (req, res) => {
  res.render("testimonials", {
    page: "Testimoniales",
  });
};

export { pageHome, pageAbout, pageTravels, pageTestimonials };
