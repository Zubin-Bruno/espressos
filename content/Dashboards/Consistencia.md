# Consistencia Técnica

```dataview
TABLE WITHOUT ID
  round(average(rows.ratio), 2) AS "Ratio Promedio",
  round(min(rows.ratio), 2) AS "Ratio Min",
  round(max(rows.ratio), 2) AS "Ratio Max",
  round(average(rows.flow), 2) AS "Flow Promedio",
  length(rows) AS "Total Shots"
FROM "Espresso/Shots"
FLATTEN round(gramos_out / gramos_in, 2) AS ratio
FLATTEN round(gramos_out / tiempo_extraccion_s, 2) AS flow
WHERE gramos_in != null AND gramos_out != null
GROUP BY true
```

