import PropertyCard from "../PropertyCard";

function Page2() {
  return (
    <PropertyCard
      location="ALGECIRAS"
      propertyType="Chalet"
      operation="VENTA"
      subtitle="Espectacular chalet con piscina."
      mainImage="https://fotos15.apinmo.com/4254/28460938/29-1.jpg"
      sideImages={[
        "https://fotos15.apinmo.com/4254/28460938/29-2.jpg",
        "https://fotos15.apinmo.com/4254/28460938/29-3.jpg",
      ]}
      description="Chalet independiente en una de las zonas más tranquilas de
              Algeciras, con amplio jardín y piscina privada. Cuenta con un
              salón-comedor muy luminoso, cocina totalmente equipada y una
              terraza cubierta ideal para el verano. La parcela dispone de
              plaza de garaje para dos vehículos y trastero. Zona muy bien
              comunicada, cerca de colegios y centros comerciales."
      reference="MC02034"
      price="410.000 €"
      beds={4}
      baths={3}
      size={210}
      garages={2}
      qrSeed={17}
    />
  );
}

export default Page2;
