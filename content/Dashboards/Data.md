
```dataview
TABLE 
    ("<progress value='" + score_acidez + "' max='5'></progress>") AS Acidez,
    ("<progress value='" + score_dulzor + "' max='5'></progress>") AS Dulzor,
    ("<progress value='" + score_cuerpo + "' max='5'></progress>") AS Cuerpo,
    score_general AS "Puntaje General"
FROM #espresso 
WHERE cafe = [[Peru Gesha]]
SORT fecha DESC
```

```dataview
TABLE 
    round(gramos_out / gramos_in, 2) AS "Ratio (1:X)",
    tiempo_extraccion_s AS "Tiempo (s)",
    temp_agua AS "Temp",
    score_general AS "Score"
FROM #espresso
WHERE gramos_in > 0
SORT score_general DESC
```

```dataview
TABLE 
    score_general AS "Calidad", 
    setting_molino AS "Molienda",
    perfil_presion AS "Perfil"
FROM #espresso
WHERE cafe = [[Peru Gesha]]
SORT fecha ASC
```

```dataview
TABLE 
    length(rows) AS "Total Shots",
    round(average(rows.score_general), 1) AS "Puntaje Promedio"
FROM #espresso
GROUP BY cafe.tostador AS Tostador
SORT length(rows) DESC
```
