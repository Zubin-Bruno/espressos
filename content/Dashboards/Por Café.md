# Análisis por Café



```dataview
TABLE WITHOUT ID
  fecha AS "Fecha",
  round(gramos_out / gramos_in, 2) AS "Ratio",
  setting_molino AS "Molino",
  tiempo_preinfusion_s AS "Preinf",
  tiempo_extraccion_s AS "Ext",
  round(gramos_out / tiempo_extraccion_s, 2) AS "Flow",
  perfil_presion AS "Presión",
  score_general AS "Score",
  score_acidez AS "Acid",
  score_dulzor AS "Dulz",
  score_cuerpo AS "Cuerpo"
FROM "Espresso/Shots"
WHERE cafe = [[Peru Gesha]]
SORT fecha DESC
```


