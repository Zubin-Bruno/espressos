# Últimos Shots

```dataview
TABLE WITHOUT ID
  file.link AS "Shot",
  cafe AS "Café",
  round(gramos_out / gramos_in, 2) AS "Ratio",
  setting_molino AS "Molino",
  tiempo_extraccion_s AS "Ext (s)",
  round(gramos_out / tiempo_extraccion_s, 2) AS "Flow (g/s)",
  score_general AS "Score",
  channeling AS "Channel"
FROM "Espresso/Shots"
WHERE cafe != null
SORT fecha DESC, hora DESC
LIMIT 30
```
