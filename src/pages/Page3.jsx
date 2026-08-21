import PropertyCard from "../PropertyCard";

function Page3() {
  return (
    <PropertyCard
      location="SAN ROQUE"
      propertyType="Piso"
      operation="ALQUILER"
      subtitle="Piso reformado en el centro."
      mainImage="https://fotos15.apinmo.com/4254/26455703/2-1.jpg"
      sideImages={[
        "https://fotos15.apinmo.com/4254/26455703/2-2.jpg",
        "https://fotos15.apinmo.com/4254/26455703/2-3.jpg",
      ]}
      description="Piso completamente reformado a estrenar en pleno centro de San
              Roque, listo para entrar a vivir. Distribuido en salón
              independiente, cocina abierta equipada con electrodomésticos
              nuevos y dos dormitorios exteriores muy luminosos. Edificio con
              ascensor y a pocos minutos andando de todos los servicios."
      reference="MC01905"
      price="650 €/mes"
      beds={2}
      baths={1}
      size={68}
      garages={0}
      qrSeed={7}
    />
  );
}

export default Page3;
