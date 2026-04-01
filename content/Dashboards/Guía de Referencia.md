# Guía de Referencia

## Escalas de evaluación

### Score general (1–10)
Evaluación holística del shot. ¿Qué tan bueno estuvo?

### Score acidez (1–5)
| Valor | Significado |
|---|---|
| 1 | Nula o casi nula |
| 2 | Baja |
| 3 | Media |
| 4 | Alta |
| 5 | Dominante |

### Score dulzor (1–5)
| Valor | Significado |
|---|---|
| 1 | Nulo o casi nulo |
| 2 | Bajo |
| 3 | Medio |
| 4 | Alto |
| 5 | Dominante |

### Score cuerpo (1–5)
| Valor | Significado |
|---|---|
| 1 | Aguado |
| 2 | Ligero |
| 3 | Medio |
| 4 | Denso |
| 5 | Syrupy |

### Channeling (0–3)
| Valor | Significado |
|---|---|
| 0 | Ninguno |
| 1 | Leve (flujo desparejo pero se corrige) |
| 2 | Moderado (chorros visibles) |
| 3 | Severo (el shot se arruina) |

---

## Perfiles de presión

| Código | Descripción |
|---|---|
| `flat` | Preinfusión a baja presión, subida directa a presión objetivo, mantener constante |
| `ramp` | Preinfusión a baja presión, subida gradual/lineal a presión objetivo, mantener constante |
| `ramp_decline` | Preinfusión a baja presión, subida gradual a presión objetivo, decline al final (~75% de extracción) |

---

## Perfiles de café

| Perfil | Descripción | Ejemplo típico |
|---|---|---|
| `claro_africano` | Tueste claro, origen africano, alta acidez | Kenia SL28 lavado |
| `claro_latino` | Tueste claro a medio, latinoamérica | Colombia Gesha lavado |
| `medio_clasico` | Tueste medio, perfil balanceado | Guatemala Bourbon |
| `oscuro_cuerpo` | Tueste medio-oscuro a oscuro, baja acidez | Brasil natural |
| `natural_frutal` | Proceso natural o honey, perfil frutal | Etiopía natural |
| `experimental` | Anaeróbicos, fermentaciones, procesos inusuales | Cualquier origen |

---

## Métricas calculadas (nunca guardar en YAML)

| Métrica | Fórmula | Interpretación |
|---|---|---|
| **Brew ratio** | gramos_out / gramos_in | 1.5 = ristretto, 2.0 = normale, 2.5+ = lungo |
| **Flow rate** | gramos_out / tiempo_extraccion_s | 1.0–2.0 g/s es rango típico |
| **Flow rate total** | gramos_out / tiempo_total_s | Incluye preinfusión |
| **% preinfusión** | tiempo_preinfusion_s / tiempo_total_s | >30% = preinfusión agresiva |
| **Días desde tueste** | fecha - cafe.fecha_tueste | Ventana óptima: usualmente 7–21 días |

---

## Reglas del sistema

1. **Registrá datos crudos, calculá métricas en queries.** Nunca guardes brew ratio ni flow rate en el YAML.
2. **Campos numéricos sin comillas, vacíos si no registrás.** Nunca "N/A".
3. **Un template, una carpeta, filtros por query.** No dupliques estructura por café.
4. **Scores subjetivos son brújula de corto plazo.** Compará dentro de ventanas temporales, no entre períodos lejanos.
5. **Análisis de largo plazo con variables objetivas.** Ratio, flow rate, setting, tiempos, días desde tueste.
6. **Tres niveles de análisis:** por café (receta), por perfil (reglas), global (técnica).
7. **El campo `perfil` en la nota de café es tu herramienta de agrupación.** Mantenelo actualizado.

---

## Protocolo de re-calibración

Cada 2–3 meses, o cuando sientas que tu paladar cambió:

1. Elegí un café que ya tengas bien registrado (>10 shots).
2. Usá la misma receta exacta (mismo ratio, setting, preinfusión, perfil de presión).
3. Registrá el shot normalmente pero marcá `calibracion: true`.
4. Compará los scores con los históricos del mismo café y receta.
5. Si hay diferencia >2 puntos en score general (o >1 en scores 1–5), tu escala se movió.
6. No corrijas datos viejos.
