# CV — Juan Manuel Jiménez Sánchez

Sitio web personal / CV interactivo: una sola página, bilingüe (ES/EN), responsive y con
animaciones. Construido con **React + TypeScript + Vite + Tailwind CSS + shadcn/ui**.

🔗 **Demo local:** abre `docs/index.html` tras compilar, o usa el servidor de desarrollo (ver abajo).

---

## Estructura del repositorio

```
cv/
├── cv-site/        # Código fuente de la aplicación (React + Vite)
│   ├── src/        # Componentes, contenido bilingüe y estilos
│   ├── index.html  # Plantilla HTML (fuentes, metadatos)
│   └── public/     # favicon.svg y el CV en PDF
├── docs/           # 👉 Sitio compilado que publica GitHub Pages (generado, se commitea)
├── build.sh        # Compila cv-site/ y copia el resultado a docs/
└── README.md
```

> El contenido del CV (textos en ES/EN, experiencia, skills, etc.) vive en
> [`cv-site/src/content.ts`](cv-site/src/content.ts). Para actualizar datos, edita ese archivo
> y vuelve a compilar.

---

## Desarrollo local

Requisitos: **Node 18+** y **pnpm**.

```bash
cd cv-site
pnpm install
pnpm dev          # servidor de desarrollo en http://localhost:5173
```

## Compilar y publicar

Desde la raíz del repo:

```bash
./build.sh
```

Esto compila la app y deja el sitio listo en `docs/`. Luego haz commit y push.

---

## 🚀 Publicar en GitHub Pages (paso a paso)

El sitio es **100% estático** (no necesita servidor ni CI) y usa rutas relativas, así que
funciona tanto en una URL raíz como en una subruta.

### 1. Crear el repositorio en GitHub
- **Opción A — URL raíz** `https://juanmjimenezs.github.io/`
  Crea un repo llamado **exactamente** `juanmjimenezs.github.io`.
- **Opción B — subruta** `https://juanmjimenezs.github.io/cv/`
  Crea un repo con cualquier nombre, p. ej. `cv`.

### 2. Subir el código
```bash
cd /Users/juanmjimenezs/Documents/development/cv
git add .
git commit -m "CV website"
git branch -M main
git remote add origin https://github.com/juanmjimenezs/<NOMBRE-DEL-REPO>.git
git push -u origin main
```

### 3. Activar GitHub Pages
En GitHub: **Settings → Pages → Build and deployment**
- **Source:** `Deploy from a branch`
- **Branch:** `main` y carpeta **`/docs`**
- **Save**

Espera ~1 minuto. Tu sitio quedará publicado en la URL correspondiente
(`https://juanmjimenezs.github.io/` o `.../<NOMBRE-DEL-REPO>/`).

### 4. Actualizaciones futuras
Cada vez que cambies algo:
```bash
./build.sh
git add .
git commit -m "Actualiza CV"
git push
```
GitHub Pages se actualiza solo tras el push.

### (Opcional) Dominio propio
**Settings → Pages → Custom domain**, escribe tu dominio y crea en tu proveedor DNS un
registro `CNAME` apuntando a `juanmjimenezs.github.io`.

---

## Características

- 🌐 Bilingüe ES/EN con toggle (recuerda tu preferencia y detecta el idioma del navegador).
- 📱 Diseño responsive (móvil, tablet, escritorio).
- ✨ Animaciones de entrada al hacer scroll y microinteracciones.
- 📄 Botón de descarga del CV en PDF.
- 🎨 Tema oscuro con gradientes y acentos cian/teal/ámbar.
- ♿ Respeta `prefers-reduced-motion`.

---

## Créditos

Diseñado y construido con React, Tailwind y un flujo de desarrollo potenciado por IA y guiado por
especificaciones (Spec-Driven Development).
