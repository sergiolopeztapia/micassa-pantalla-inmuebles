import PropertyCard from "../PropertyCard";

function Page4() {
  return (
    <PropertyCard
      location="LA LÍNEA"
      propertyType="Local Comercial"
      operation="VENTA"
      subtitle="Local comercial en avenida principal."
      mainImage="https://fotos15.apinmo.com/4254/22861797/3-1.jpg"
      sideImages={[
        "https://fotos15.apinmo.com/4254/22861797/3-2.jpg",
        "https://fotos15.apinmo.com/4254/22861797/3-3.jpg",
      ]}
      description="Local comercial diáfano situado en una de las avenidas con más
              tránsito de La Línea de la Concepción. Ideal para negocio de
              cara al público, cuenta con amplio escaparate, baño adaptado y
              un pequeño almacén en la parte trasera. Instalación eléctrica y
              de climatización ya preparadas."
      reference="MC01622"
      price="185.000 €"
      beds={0}
      baths={1}
      size={95}
      garages={0}
      qrSeed={99}
    />
  );
}

export default Page4;
