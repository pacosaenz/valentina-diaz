interface CVSectionProps {}

export const CVSection = ({}: CVSectionProps) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-light mb-12">
          <span className="text-highlight">CV Valentina Díaz</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Columna 1 */}
          <div className="space-y-8">
            <div>
              <p className="text-lg mb-8">
                <span className="text-highlight text-muted-foreground">
                  1985 Tucumán, Argentina - Ciudad de México, México
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4">
                <span className="text-highlight">Formación</span>
              </h2>
              <ul className="space-y-3">
                <li><span className="text-highlight text-muted-foreground">- Maestría en Artes Visuales (Universidad Nacional Autónoma de México, México, 2023)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Licenciatura en Artes Plásticas (Universidad Nacional de Tucumán, Argentina, 2011)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Posgrado en Diseño de Indumentaria (Universidad Nacional de Tucumán, Argentina, 2014)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Programa Educativo SOMA (SOMA Mexico, Ciudad de México, México, 2017)</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4">
                <span className="text-highlight">Becas y Premios</span>
              </h2>
              <ul className="space-y-3">
                <li><span className="text-highlight text-muted-foreground">- Beca Nacional para Estudios de Posgrado (CONACYT, México 2022-2023)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Movilidad para Estancia de Investigación (UNAM, México 2023)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Patrocinio de Publicación (Fundación Jumex Arte Contemporáneo, México 2020)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca Roberts Escuela Flora (Flora ars+natura, Colombia 2019)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Formación (Fondo Nacional de las Artes, Argentina 2019)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca Programa Educativo SOMA (SOMA Mexico, México, México 2016-2017)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Creación (Fondo Nacional de las Artes, Argentina 2017)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Premio de Movilidad (Fundación Prince Claus, Países Bajos 2017)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Proyecto seleccionado para Domicilio Conocido (Centro Cultural Tlatelolco, México 2016)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Viaje (Colección Oxenford, Argentina 2015)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Producción y Seguimiento de Obra coordinada por Verónica Gómez, Eduardo Basualdo, Andrés Labaké y Eduardo Stupía (Fondo Nacional de las Artes, Argentina 2014)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Producción y Seguimiento de Obra coordinada por Rafael Cippolini (Fondo Nacional de las Artes, Argentina 2013)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca para Proyectos Colectivos (Fondo Nacional de las Artes, Argentina 2013)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Beca de Producción y Seguimiento de Obra coordinada por Roberto Echen (Fondo Nacional de las Artes, Argentina 2012)</span></li>
              </ul>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-4">
                <span className="text-highlight">Residencias</span>
              </h2>
              <ul className="space-y-3">
                <li><span className="text-highlight text-muted-foreground">- Materia Gris (La Paz, Bolivia, 2023)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Pivô Pesquisa (São Paulo, Brasil, 2022)</span></li>
                <li><span className="text-highlight text-muted-foreground">- Flora ars+natura (Bogotá, Colombia, 2019)</span></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4">
                <span className="text-highlight">Publicaciones</span>
              </h2>
              <ul className="space-y-3">
                <li><span className="text-highlight text-muted-foreground">- La trayectoria intermedial del gesto (Ciudad de México, México, Silvestre, 2024).</span></li>
                <li><span className="text-highlight text-muted-foreground">- La habitación de la lengua o la lengua de la habitación (Ciudad de México, México, Silvestre, 2021). Proyecto en colaboración con Iván Martínez.</span></li>
                <li><span className="text-highlight text-muted-foreground">- Cuerpo hablante (CDMX, México, ESPAC, 2023). Participación en el libro colectivo editado por nohacernada.org</span></li>
                <li><span className="text-highlight text-muted-foreground">- Trazar las disidencias (CDMX, México, 2022) Participación en el libro colectivo compilado por Yolanda Benalba y Fernanda Ramos Mena.</span></li>
                <li><span className="text-highlight text-muted-foreground">- Mundos Mutuos (Bogotá, Colombia, Cajón de Sastre, 2020). Participación en el libro colectivo editado por Cristina Consuegra y Carlos Alfonso.</span></li>
                <li><span className="text-highlight text-muted-foreground">- El movimiento no está en la pantalla (CDMX, México, Fundación Alumnos 47, 2018). Participación en el libro colectivo editado por SOMA.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
