# Portafolio personal

Landing page de desarrollo web y diseño UX con ASP.NET Core Razor Pages, .NET 8 y Bootstrap local.

La única página, `UX-Page/Pages/Index.cshtml`, contiene cuatro secciones: Inicio, Sobre mí, Proyectos y Contacto. La navegación usa anclas y desplazamiento suave definido en `UX-Page/wwwroot/css/site.css`, respetando la preferencia de movimiento reducido.

Inicio reproduce el diseño de Figma de Jesús Ulises con fuentes Bebas Neue y Dongle locales, navegación por anclas y el pez original como enlace a Sobre mí. La sección usa el patrón exportado de Figma; el resto conserva Pattern.png. Sobre mí reproduce la imagen de Balandra, la biografía y el título con Yanone Kaffeesatz del diseño de Figma. El panel crema pertenece a Sobre mí y se desplaza con la sección; el menú fijo cambia su texto a oscuro al entrar y Work enlaza a Proyectos. Proyectos muestra Page1–Page4 con paneles que se expanden al pasar el mouse o recibir foco del teclado. Al salir regresan a su estado inicial; en pantallas táctiles se abren y cierran con un toque. La sección reutiliza el fondo global. Contacto reproduce el título, el pez y la onda del diseño, con correo, teléfono e iconos de LinkedIn e Instagram. Ambos enlaces sociales conservan href vacío; los archivos de currículum están pendientes de proporcionar.

Ejecutar desde la raíz del repositorio con el SDK de .NET 8 o posterior:

```sh
dotnet run --project UX-Page
```

La consola indica la dirección local.

Cada sección ocupa como mínimo una pantalla y se acopla al desplazarse mediante CSS scroll snap. El fondo #212F40 usa resources/Pattern.png como mosaico animado hacia la derecha. La animación y el acoplamiento se desactivan si el usuario prefiere movimiento reducido.
