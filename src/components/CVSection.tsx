interface CVSectionProps {}

export const CVSection = ({}: CVSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-foreground">CV Valentina Díaz</h1>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Columna 1 */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                1985 Tucumán, Argentina - Ciudad de México, México
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-foreground">Formación</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>- Maestría en Artes Visuales (Universidad Nacional Autónoma de México, México, 2023)</li>
                <li>- Licenciatura en Artes Plásticas (Universidad Nacional de Tucumán, Argentina, 2011)</li>
                <li>- Posgrado en Diseño de Indumentaria (Universidad Nacional de Tucumán, Argentina, 2014)</li>
                <li>- Programa Educativo SOMA (SOMA Mexico, Ciudad de México, México, 2017)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-foreground">Becas y Premios</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>- Beca Nacional para Estudios de Posgrado (CONACYT, México 2022-2023)</li>
                <li>- Beca de Movilidad para Estancia de Investigación (UNAM, México 2023)</li>
                <li>- Patrocinio de Publicación (Fundación Jumex Arte Contemporáneo, México 2020)</li>
                <li>- Beca Roberts Escuela Flora (Flora ars+natura, Colombia 2019)</li>
                <li>- Beca de Formación (Fondo Nacional de las Artes, Argentina 2019)</li>
                <li>- Beca Programa Educativo SOMA (SOMA Mexico, México, México 2016-2017)</li>
                <li>- Beca de Creación (Fondo Nacional de las Artes, Argentina 2017)</li>
                <li>- Premio de Movilidad (Fundación Prince Claus, Países Bajos 2017)</li>
                <li>- Proyecto seleccionado para Domicilio Conocido (Centro Cultural Tlatelolco, México 2016)</li>
                <li>- Beca de Viaje (Colección Oxenford, Argentina 2015)</li>
                <li>- Beca de Producción y Seguimiento de Obra coordinada por Verónica Gómez, Eduardo Basualdo, Andrés Labaké y Eduardo Stupía (Fondo Nacional de las Artes, Argentina 2014)</li>
                <li>- Beca de Producción y Seguimiento de Obra coordinada por Rafael Cippolini (Fondo Nacional de las Artes, Argentina 2013)</li>
                <li>- Beca para Proyectos Colectivos (Fondo Nacional de las Artes, Argentina 2013)</li>
                <li>- Beca de Producción y Seguimiento de Obra coordinada por Roberto Echen (Fondo Nacional de las Artes, Argentina 2012)</li>
              </ul>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-4 text-foreground">Residencias</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>- Materia Gris (La Paz, Bolivia, 2023)</li>
                <li>- Pivô Pesquisa (São Paulo, Brasil, 2022)</li>
                <li>- Flora ars+natura (Bogotá, Colombia, 2019)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-foreground">Publicaciones</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>- La trayectoria intermedial del gesto (Ciudad de México, México, Silvestre, 2024).</li>
                <li>- La habitación de la lengua o la lengua de la habitación (Ciudad de México, México, Silvestre, 2021). Proyecto en colaboración con Iván Martínez.</li>
                <li>- Cuerpo hablante (CDMX, México, ESPAC, 2023). Participación en el libro colectivo editado por nohacernada.org</li>
                <li>- Trazar las disidencias (CDMX, México, 2022) Participación en el libro colectivo compilado por Yolanda Benalba y Fernanda Ramos Mena.</li>
                <li>- Mundos Mutuos (Bogotá, Colombia, Cajón de Sastre, 2020). Participación en el libro colectivo editado por Cristina Consuegra y Carlos Alfonso.</li>
                <li>- El movimiento no está en la pantalla (CDMX, México, Fundación Alumnos 47, 2018). Participación en el libro colectivo editado por SOMA.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
