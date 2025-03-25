# Proyecto Vite + React + TypeScript + SWC

## Tecnologías utilizadas

Este proyecto está construido con las siguientes tecnologías:

- **Vite**: Es un entorno de desarrollo rápido para proyectos frontend. Su principal ventaja es la velocidad en la recarga en caliente (hot module replacement) y su optimización en la construcción final del proyecto.
- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario interactivas y eficientes.
- **TypeScript**: Un superconjunto tipado de JavaScript que permite un desarrollo más seguro y estructurado.
- **SWC (Speedy Web Compiler)**: Un compilador extremadamente rápido que reemplaza a Babel y Terser, mejorando el rendimiento en la transpilación y minificación del código.

## Clonar el repositorio

Antes de comenzar, debes hacer un **fork** del repositorio original en GitHub:

Repositorio original: [hexagonal_front_login](https://github.com/juaaachuc/hexagonal_front_login)

Al hacer el fork, debes renombrarlo siguiendo la notación:

```
ITS_8vo_Analisis_Practica3_[Matricula]
```

Sustituyendo `[Matricula]` por tu número de matrícula.

## Instalación del proyecto

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clonar tu fork del repositorio**:
   ```sh
   git clone https://github.com/TU_USUARIO/ITS_8vo_Analisis_Practica3_TU_MATRICULA.git
   cd ITS_8vo_Analisis_Practica3_TU_MATRICULA
   ```

2. **Instalar las dependencias**:
   ```sh
   npm install
   ```

3. **Ejecutar el proyecto en modo desarrollo**:
   ```sh
   npm run dev
   ```

4. **Construir el proyecto para producción**:
   ```sh
   npm run build
   ```

## Creación de estructura de carpetas en `src`

Una vez instaladas las dependencias, deberás crear la siguiente jerarquía de carpetas dentro del directorio `src/`:

```plaintext
src/
│── core/
│   ├── domain/
│   ├── ports/
│   ├── useCases/
│
│── infrastructure/
│   ├── services/
```

### Explicación de la estructura
- **core/domain**: Contiene las entidades y modelos del dominio de la aplicación.
- **core/ports**: Define interfaces para la comunicación entre capas (ejemplo: repositorios o fuentes de datos).
- **core/useCases**: Contiene la lógica de negocio, aplicando los casos de uso del dominio.
- **infrastructure/services**: Implementaciones concretas de servicios, por ejemplo, llamadas a API externas o acceso a bases de datos.

Con esta estructura, seguimos una arquitectura limpia, separando las preocupaciones del proyecto.

---

¡Listo! Ahora puedes comenzar a desarrollar tu aplicación 🚀.

