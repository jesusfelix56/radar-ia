---
title: Cómo configurar GitHub Copilot en VS Code desde cero
description: Instalación, primer atajo, qué aceptar y qué rechazar. Una hora para que Copilot deje de ser un adorno en la barra de estado.
category: Tutorial
tags:
  - copilot
  - vscode
  - principiantes
relatedTools:
  - github-copilot
  - chatgpt
amazonPicks:
  - search: teclado mecanico silencioso oficina
    title: Teclado silencioso
    note: Vas a pasar la sesión aceptando y rechazando sugerencias. Un teclado que no machaque a quien se sienta al lado ayuda más de lo que parece.
    price: 89
featured: true
pubDate: 2026-08-16
---

Copilot no se "configura" como un linter. Se instala, se autentica y se entrena a base de rechazar basura. Esta guía cubre el primer día en Visual Studio Code, en Windows, macOS o Linux. Mismo proceso.

## 1. Cuenta y plan

Necesitas una cuenta de GitHub. Copilot Individual se paga aparte; estudiantes y maintainers de proyectos open source populares pueden tenerlo gratis. Comprueba en github.com/settings/copilot **antes** de instalar nada: si el plan no está activo, la extensión se instala y no completa.

Si tu empresa usa Copilot Business, no instales el plan personal encima. Te pelearás con dos políticas de retención de código.

## 2. Instalar la extensión correcta

En VS Code, ve a Extensiones (Ctrl+Shift+X) y busca **GitHub Copilot**. Instala esa, no "Copilot Chat" suelta ni forks. Hoy vienen juntas: la de autocompletado y la de chat.

Al terminar, aparece un icono de cabeza en la barra de estado. Si está tachado, no está autenticado.

## 3. Autenticar

1. Clic en el icono → **Sign in to GitHub**
2. El navegador abre GitHub. Autoriza el dispositivo.
3. Vuelve a VS Code. El icono deja de estar tachado.

Si el navegador no abre, `Ctrl+Shift+P` → "GitHub Copilot: Sign in". Copia el código que te da y pégalo en github.com/login/device.

## 4. El primer archivo de prueba

Abre un archivo nuevo, `iva.js`, y escribe esto:

```js
function calcularIva(base, tipo = 0.21) {
```

Pulsa Enter. Copilot debería sugerir el cuerpo en gris. **Tab** acepta. **Esc** descarta. `Alt+]` (macOS `Option+]`) rota sugerencias.

Si no sale nada:

- Mira que el icono no esté en "Completions disabled"
- Comprueba que el lenguaje está detectado (abajo a la derecha, "JavaScript")
- En archivos enormes o de minificado, Copilot se calla. Es normal.

## 5. Chat lateral, que es lo que más rinde

`Ctrl+I` (inline) o el panel Copilot Chat. No le pidas "explícame programación". Pídele esto, con el archivo abierto:

> "Esta función calcula IVA. Añade validación si base no es número y un test en el mismo archivo con 3 casos: 100€ al 21%, 0, y un string."

Ese prompt concreto ahorra más que veinte autocompletados.

## 6. Qué desactivar el primer día

En Settings, busca `github.copilot`:

- **Enable Auto Completions**: déjalo on. Es el producto.
- **Next Edit Suggestions**: si te marean los cambios en gris por todo el archivo, apágalo una semana.
- Excluye `**/.env`, `**/secrets/**` y `**/*.pem` en `github.copilot.ignoredFiles` o en el archivo de tu org. No pegues claves en el chat "para que las revise".

## 7. La regla de oro de la primera semana

Acepta el esqueleto. Rechaza la lógica de negocio. Copilot es excelente cerrando un `try/catch` y peligroso inventando una fórmula de nómina. Si no podrías explicar la línea en una code review, no la dejes.

Cuando eso te falle, el [análisis de Copilot](/herramientas/github-copilot) explica en qué tipo de repos rinde y en cuáles molesta.
