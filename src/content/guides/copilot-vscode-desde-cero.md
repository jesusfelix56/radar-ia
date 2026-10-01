---
title: Cómo configurar GitHub Copilot en VS Code desde cero
description: Cuenta, extensión, primer Tab y qué no aceptar. Para que Copilot deje de ser un icono tachado en la barra.
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

Copilot no se configura como un linter. Se instala, se entra con la cuenta de GitHub y se aprende a base de rechazar sugerencias. Esto es el primer día en Visual Studio Code, igual en Windows, macOS o Linux.

## Mira el plan antes de instalar nada

Hace falta una cuenta de GitHub. Copilot Individual se paga aparte. Estudiantes y maintainers de proyectos open source populares pueden tenerlo gratis. Entra en github.com/settings/copilot antes de tocar VS Code: si el plan no está activo, la extensión se instala y no completa.

Si la empresa usa Copilot Business, no montes el plan personal encima. Acabas con dos políticas de retención de código peleándose.

## La extensión que sí es la oficial

En VS Code, Extensiones (`Ctrl+Shift+X`) y busca **GitHub Copilot**. Instala esa. No un «Copilot Chat» suelto ni un fork. Hoy vienen juntas la de autocompletado y la de chat.

Al terminar aparece un icono de cabeza en la barra de estado. Si está tachado, no has entrado.

## Entrar, también si el navegador no se abre

1. Clic en el icono y **Sign in to GitHub**.
2. El navegador abre GitHub. Autoriza el dispositivo.
3. Vuelve a VS Code. El icono deja de estar tachado.

Si el navegador no abre: `Ctrl+Shift+P`, «GitHub Copilot: Sign in». Copia el código y pégalo en github.com/login/device.

## Un archivo pequeño para ver si responde

Crea `iva.js` y escribe:

```js
function calcularIva(base, tipo = 0.21) {
```

Pulsa Enter. Debería salir el cuerpo en gris. **Tab** acepta. **Esc** descarta. `Alt+]` (en macOS, `Option+]`) rota sugerencias.

Si no sale nada, mira que el icono no esté en «Completions disabled» y que abajo a la derecha ponga JavaScript. En un archivo enorme o minificado, Copilot se calla. Es normal.

## El chat, con un encargo concreto

`Ctrl+I` abre el inline. También está el panel de Copilot Chat. No le pidas que te explique programación. Con el archivo abierto, prueba esto:

> "Esta función calcula IVA. Añade validación si base no es número y un test en el mismo archivo con 3 casos: 100€ al 21%, 0, y un string."

Ese encargo ahorra más que veinte autocompletados aceptados por inercia.

## Tres ajustes para el primer día

En Settings, busca `github.copilot`:

- **Enable Auto Completions**: déjalo encendido. Es el producto.
- **Next Edit Suggestions**: si los cambios en gris por todo el archivo te marean, apágalo una semana.
- Excluye `**/.env`, `**/secrets/**` y `**/*.pem` en `github.copilot.ignoredFiles` o en el archivo de tu organización. No pegues claves en el chat «para que las revise».

## Qué aceptar esa semana

El esqueleto, sí. La lógica de negocio, no. Cierra bien un `try/catch` y es peligroso inventando una fórmula de nómina. Si no podrías explicar la línea en una revisión, no la dejes.

Cuando eso falle en un repo concreto, el [análisis de Copilot](/herramientas/github-copilot) entra en qué tipo de código le sienta bien y en cuál estorba.
