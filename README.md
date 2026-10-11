# Task Manager Web App

Aplicación web cliente (SaaS-like) diseñada para la gestión, categorización y seguimiento de tareas diarias. El proyecto funciona como una introducción práctica al desarrollo web moderno, evolucionando desde un entorno básico de Vanilla JavaScript hacia una arquitectura estricta gestionada con Node.js y compilada mediante TypeScript para garantizar seguridad de tipos y mantenibilidad.

## Tecnologías

- **HTML5**: Estructura semántica (separación de `nav`, `main`, `section`).
- **CSS3**: Maquetación responsive, Flexbox y sistema de variables globales para consistencia de UI.
- **TypeScript (v7.0.2)**: Lógica de la aplicación con tipado estricto (prevención de `any` implícitos) e interfaces del DOM.
- **Node.js & npm**: Gestión de dependencias y ejecución del motor de compilación.
- **Git**: Control de versiones mediante estrategia de *branching* (rama principal y `version-typescript`).

## Instalación y Ejecución

Sigue estos pasos para levantar el entorno de desarrollo local y habilitar la compilación automática:

1. Clona el repositorio oficial:
   `git clone https://github.com/mijail-andres-ayala-baez/WEB-Inicial-HTML-CSS-JS_practicas.git`
   
2. Accede al directorio principal del proyecto:
   `cd web-html`

3. Instala las dependencias de desarrollo (`devDependencies`) especificadas en el `package.json` (esto descargará TypeScript localmente):
   `npm install`

4. Inicia el compilador de TypeScript en modo observación continuo:
   `npx tsc --watch`

5. **Importante:** Debido al uso de módulos ESNext (`type="module"` en el HTML) para aislar el *scope* de las variables, el navegador bloqueará la ejecución por políticas CORS si se abre el archivo localmente. Es obligatorio servir el `index.html` a través de un servidor local (por ejemplo, utilizando la extensión **Live Server** en VS Code).

## Variables de entorno

En esta fase inicial iterativa, la aplicación opera exclusivamente en el cliente manipulando el DOM de forma estática. No hay integraciones con backend o bases de datos, por lo que **no es necesario** configurar el archivo `.env.local`.

## Estructura

La arquitectura de carpetas sigue las convenciones estándar para separar el entorno de desarrollo del entorno de producción:

- `src/`: Contiene todo el código fuente original. Aquí reside `app.ts`, con la lógica y las firmas de tipo, aplicando las convenciones de nombres indicadas en el manual (camelCase para funciones y variables).
- `dist/`: Carpeta autogenerada por el compilador (ignorada por Git parcialmente) que aloja el código transpilado `app.js` en formato ESNext y sus correspondientes *source maps*.
- `node_modules/`: Dependencias del motor de Node.js (excluida del control de versiones mediante `.gitignore`).
- `index.html`: Punto de entrada de la aplicación con maquetación estática.
- `styles.css`: Estilos de interfaz de usuario.
- `tsconfig.json`: Archivo de configuración del compilador TS, adaptado para target ESNext y resolución de módulos estricta.

## Checklist de Calidad Cumplido

- [x] Ausencia de errores de compilación (`tsc`) y warnings en la consola del navegador.
- [x] Identación de 2 espacios y uso de comillas simples aplicados consistentemente.
- [x] Comentarios explicativos y preventivos redactados en inglés (`// TODO`, `// fallback`).
- [x] Declaraciones estrictas (uso prioritario de `const`, exclusión de `var`).
- [x] Inexistencia de `console.log()` en el código de producción.