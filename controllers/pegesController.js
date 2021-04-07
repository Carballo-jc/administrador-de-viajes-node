import { Viaje } from "../models/Viajes.js";
import { Testimonial } from "../models/Testimonials.js";

const pageHome = (req, res) => {
  res.render("home", {
    page: "Inicio",
    clase:'home'
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
const pageTestimonials = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimonials", {
      page: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);;
  }
};

//view details
const detailTravel = async(req,res) =>{
const {slug} = req.params;

try {
  const travel = await Viaje.findOne({where :{slug}})
  res.render('detail',{
    page:'Informacion del Viaje',
    travel
  })
} catch (error) {
  
}
}

export { pageHome, pageAbout, pageTravels, pageTestimonials,detailTravel };
