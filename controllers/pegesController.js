import { Viaje } from "../models/Viajes.js";
import { Testimonial } from "../models/Testimonials.js";

const pageHome = async(req, res) => {

  const promiseDB = [];
  promiseDB.push(await Viaje.findAll({limit:3}));
  promiseDB.push(await Testimonial.findAll({limit:3}));

  try {
    const resultPromiseDB = await Promise.all( promiseDB);
    res.render("home", {
      page: "Inicio",
      clase:'home',
      travels: resultPromiseDB[0],
      testimoniales: resultPromiseDB[1]

    });
  } catch (error) {
    console.log(error)
  }
  
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
