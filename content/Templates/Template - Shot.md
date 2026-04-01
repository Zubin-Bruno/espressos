---
fecha: <% tp.date.now("YYYY-MM-DD") %>
hora: <% tp.date.now("HH:mm") %>
cafe: "[[]]"
gramos_in:
gramos_out:
setting_molino:
tiempo_total_s:
tiempo_preinfusion_s:
tiempo_extraccion_s:
temp_agua:
perfil_presion:
score_general:
score_acidez:
score_dulzor:
score_cuerpo:
score_agrura: 
channeling:
calibracion: false
tags:
  - espresso
---
<%* await tp.file.move("Espresso/Shots/" + tp.date.now("YYYY-MM-DD-HHmm") + " - Shot") %>

### Observaciones
