import { Link } from "react-router-dom";
import "./CardSpots.css";

function CardSpots({ texto, imagem, pagelink}) {
  const categorias = [
    {
      id: 1,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Ofertas",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 2,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_cervejas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "cervejas",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 3,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_gelo_e_agua_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Águas e Gelo",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 4,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Refrigerantes",
      pagelink: "https://www.ze.delivery/produtos/categoria/refriferantes",
    },
    {
      id: 5,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_chopp_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Chopp",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 6,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_churrasco_v2_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Churrasco",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 7,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_mercearia_v3.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Mercearia",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 8,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fdrinks-prontos.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Beats e Ice",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 9,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Vinhos",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 10,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_petiscos_v3_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Petiscos",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 11,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_destilados_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Destilados",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 12,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_bomboniere_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Bomboniere",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 13,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_conveniencia_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Conveniência",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
    {
      id: 14,
      imagem:
        "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_novidades_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75",
      texto: "Novidades",
      pagelink: "https://www.ze.delivery/produtos/categoria/ofertas",
    },
  ];

  return (
<div className='Grid-Category'>
    <div className="card-categorias">
      {categorias.map((categoria) => (
        //    A recomendação é colocar a chave na tag mais externa do componente que está sendo renderizado dentro do map.
        <div className="card-category" key={categoria.id}>
                  <Link to={categoria.pagelink}>
          <div className="card-categoria-img">
            {" "}
            <img className="imgcard" src={categoria.imagem} alt={categoria.texto} />{" "}
          </div>
          <div className="card-categoria-txt">
            {" "}
            <span>{categoria.texto} </span>
          </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default CardSpots;
