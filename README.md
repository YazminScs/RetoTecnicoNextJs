# Explorador de Países

Una aplicación Next.js para explorar información de países del mundo.


## 🚀 Características

- Listado de países con búsqueda y filtros
- Modal de detalles para cada país
- Sistema de favoritos con estado global
- Filtros persistentes en la URL
- Diseño responsive

## 🛠️ Tecnologías

- Next.js 14
- Zustand (gestor de estado)
- Tailwind CSS
- REST Countries API

## 📦 Instalación
1. Escoge la carpeta para guardar el repositorio.
2. Abre el terminal en esa carpeta y ejecuta lo siguiente:
```bash
git clone https://github.com/YazminScs/RetoTecnicoNextJs.git
npm install
npm run dev
```
3. Por último, abrir la [Página principal](http://localhost:3000)

## ✅ Opcional implementado

Persistir filtros en la URL - Los filtros de búsqueda se guardan en los parámetros de la URL, permitiendo:
- Compartir enlaces con búsquedas específicas
- Recargar la página sin perder los filtros aplicados
- Usar el navegador hacia atrás/adelante manteniendo el estado
- URLs representativas del estado actual de la aplicación
