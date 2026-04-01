# Ranking de Cafés

```dataview
TABLE WITHOUT ID
  cafe AS "Café",
  round(average(rows.score), 1) AS "Score Prom",
  round(min(rows.ratio), 2) AS "Ratio Min",
  round(average(rows.ratio), 2) AS "Ratio Prom",
  round(max(rows.ratio), 2) AS "Ratio Max",
  length(rows) AS "Shots"
FROM "Espresso/Shots"
FLATTEN round(gramos_out / gramos_in, 2) AS ratio
FLATTEN score_general AS score
WHERE cafe != null
GROUP BY cafe
SORT average(rows.score) DESC
```

