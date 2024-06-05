import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import 'react-multi-carousel/lib/styles.css';

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};

const center = {
  lat: 0,
  lng: 0
};

export const Skills = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCGiwoGflfpoqO6omrL-gRjHT0TWgPMqAE'
  });

  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error("Error obteniendo la ubicación", error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      } else {
        console.error("La geolocalización no es soportada por este navegador.");
      }
    };

    updateLocation();

    const locationInterval = setInterval(updateLocation, 10000); // Actualiza la ubicación cada 10 segundos

    return () => clearInterval(locationInterval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  if (loadError) return <div>Error cargando el mapa</div>;
  if (!isLoaded) return <div>Cargando el mapa...</div>;

  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-us-bx wow zoomIn">
              <h2>Sobre Nosotros</h2>
              <p>
                AgroClima es una plataforma innovadora que ofrece soluciones inteligentes para el sector agrícola.<br />
                Con herramientas intuitivas y accesibles, AgroClima ayuda a los agricultores de todos los tamaños a optimizar sus cultivos, gestionar de manera efectiva los recursos naturales y enfrentar los desafíos climáticos con confianza. Nuestra plataforma está diseñada para brindar apoyo y conocimiento en todas las etapas del ciclo agrícola, desde la planificación hasta la cosecha, permitiendo a los agricultores tomar decisiones informadas y cultivar con éxito.
              </p>
              <header>
              </header>
              <div className="map-container">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={15}
                  center={location.lat && location.lng ? location : center}
                  options={options}
                >
                  {location.lat && location.lng && (
                    <Marker position={{ lat: location.lat, lng: location.lng }} />
                  )}
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
  
};
