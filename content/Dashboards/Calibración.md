# Calibración de Paladar

> Si el mismo café con la misma receta recibe scores muy distintos entre calibraciones, tu escala se movió. No corrijas datos viejos — usá esta info para interpretar comparaciones entre períodos.

```dataview
TABLE WITHOUT ID
  fecha AS "Fecha",
  cafe AS "Café",
  round(gramos_out / gramos_in, 2) AS "Ratio",
  score_general AS "Score",
  score_acidez AS "Acidez",
  score_dulzor AS "Dulzor",
  score_cuerpo AS "Cuerpo"
FROM "Espresso/Shots"
WHERE calibracion = true
SORT fecha DESC
```

