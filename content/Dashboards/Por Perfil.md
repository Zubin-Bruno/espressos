### Shots por Perfil de Café

```dataview
TABLE WITHOUT ID
  cafe AS "Café",
  fecha AS "Fecha",
  round(gramos_out / gramos_in, 2) AS "Ratio",
  setting_molino AS "Molino",
  perfil_presion AS "Presión",
  score_general AS "Score"
FROM "Espresso/Shots"
WHERE cafe.perfil = "frutal"
SORT score_general DESC
```

