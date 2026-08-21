import PropertyCard from "../PropertyCard";

function Page1() {
  return (
    <PropertyCard
      location="LOS BARRIOS"
      propertyType="Apartamento"
      operation="VENTA"
      subtitle="Acogedor apartamento."
      mainImage="https://fotos15.apinmo.com/4254/28772293/16-1.jpg"
      sideImages={[
        "https://fotos15.apinmo.com/4254/28772293/16-2.jpg",
        "https://fotos15.apinmo.com/4254/28772293/16-3.jpg",
      ]}
      description="Apartamento con encanto situado en primera planta, ideal para
              quienes buscan comodidad, funcionalidad y una excelente ubicación.
              La vivienda ofrece una distribución muy práctica, comenzando por
              un luminoso y acogedor salón, perfecto para disfrutar de momentos
              en familia o con amigos. La cocina, totalmente equipada, está
              lista para su uso diario, combinando funcionalidad y"
      reference="MC01748"
      price="89.800 €"
      beds={2}
      baths={1}
      size={49}
      garages={0}
      qrSeed={42}
    />
  );
}

export default Page1;
