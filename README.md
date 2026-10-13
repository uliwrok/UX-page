# Portafolio personal

Landing page de desarrollo web y diseño UX con ASP.NET Core Razor Pages, .NET 8 y Bootstrap local.

La única página, `UX-Page/Pages/Index.cshtml`, contiene cuatro secciones: Inicio, Sobre mí, Proyectos y Contacto. La navegación usa anclas y desplazamiento suave definido en `UX-Page/wwwroot/css/site.css`, respetando la preferencia de movimiento reducido.

El contenido personal, los proyectos y los medios de contacto están pendientes de completar.

Ejecutar desde la raíz del repositorio con el SDK de .NET 8 o posterior:

```sh
dotnet run --project UX-Page
```

La consola indica la dirección local.

Cada sección ocupa como mínimo una pantalla y se acopla al desplazarse mediante CSS scroll snap. El fondo #212F40 usa resources/Pattern.png como mosaico animado hacia la derecha. La animación y el acoplamiento se desactivan si el usuario prefiere movimiento reducido.
