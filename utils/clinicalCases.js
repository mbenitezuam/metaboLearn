window.clinicalCases = {
  glycolysis: [
    {
      title: "Deficiencia de Piruvato Quinasa",
      description: "Paciente de 8 años con anemia hemolítica crónica y fatiga severa durante ejercicio.",
      symptoms: [
        "Anemia hemolítica crónica",
        "Fatiga severa durante ejercicio",
        "Ictericia intermitente",
        "Esplenomegalia",
        "Reticulocitosis compensatoria"
      ],
      labFindings: [
        "Hemoglobina: 8.5 g/dL (normal: 12-16)",
        "Bilirrubina indirecta elevada",
        "LDH elevada",
        "Actividad de piruvato quinasa reducida",
        "Test de Coombs negativo"
      ],
      metabolicImpact: "La deficiencia de piruvato quinasa causa una reducción severa en la producción de ATP en eritrocitos, que dependen exclusivamente de la glucólisis. Esto resulta en hemólisis crónica debido a la incapacidad de mantener la integridad de la membrana celular.",
      treatment: [
        "Transfusiones sanguíneas según necesidad",
        "Ácido fólico suplementario",
        "Evitar factores desencadenantes de crisis",
        "Esplenectomía en casos severos",
        "Terapia génica en investigación"
      ]
    }
  ],
  krebs: [
    {
      title: "Deficiencia de Fumarasa",
      description: "Recién nacido con encefalopatía severa y acidosis láctica.",
      symptoms: [
        "Encefalopatía neonatal severa",
        "Hipotonía muscular",
        "Convulsiones",
        "Retraso del desarrollo",
        "Microcefalia progresiva"
      ],
      labFindings: [
        "Acidosis láctica persistente",
        "Fumarato elevado en orina",
        "Succinate elevado en orina",
        "Actividad de fumarasa reducida",
        "Resonancia magnética: lesiones cerebrales"
      ],
      metabolicImpact: "La deficiencia de fumarasa interrumpe el ciclo de Krebs, causando acumulación de fumarato y succinate. Esto resulta en producción deficiente de ATP y acumulación de lactato por compensación glucolítica.",
      treatment: [
        "Soporte nutricional especializado",
        "Control de convulsiones",
        "Fisioterapia intensiva",
        "Suplementos antioxidantes",
        "Cuidados paliativos según severidad"
      ]
    }
  ],
  "electron-transport": [
    {
      title: "Intoxicación por Cianuro",
      description: "Trabajador de 35 años expuesto a cianuro en accidente industrial con insuficiencia respiratoria aguda.",
      symptoms: [
        "Disnea severa y taquipnea",
        "Cianosis paradójica (piel rosada)",
        "Alteración del estado mental",
        "Convulsiones",
        "Colapso cardiovascular"
      ],
      labFindings: [
        "Acidosis metabólica severa",
        "Lactato sérico muy elevado (>15 mmol/L)",
        "Saturación venosa de O2 elevada",
        "PO2 arterial normal",
        "Niveles de cianuro en sangre elevados"
      ],
      metabolicImpact: "El cianuro inhibe irreversiblemente la citocromo oxidasa (Complejo IV), bloqueando la cadena de transporte de electrones. Esto impide la utilización celular de oxígeno, causando hipoxia histotóxica y muerte celular por falta de ATP.",
      treatment: [
        "Oxigenoterapia al 100% inmediata",
        "Hidroxocobalamina IV (antídoto específico)",
        "Nitrito de sodio + tiosulfato de sodio",
        "Soporte cardiovascular agresivo",
        "Hemodiálisis en casos severos"
      ]
    },
    {
      title: "Enfermedad de Leigh (Encefalomiopatía Necrotizante)",
      description: "Lactante de 8 meses con retraso del desarrollo y crisis epilépticas recurrentes.",
      symptoms: [
        "Retraso psicomotor severo",
        "Hipotonía muscular",
        "Convulsiones refractarias",
        "Vómitos persistentes",
        "Atrofia óptica bilateral"
      ],
      labFindings: [
        "Acidosis láctica crónica",
        "Elevación de piruvato sérico",
        "Deficiencia del Complejo I mitocondrial",
        "RM cerebral: lesiones en ganglios basales",
        "Elevación de alanina en LCR"
      ],
      metabolicImpact: "Las mutaciones en genes mitocondriales afectan los complejos de la cadena respiratoria, especialmente el Complejo I. Esto resulta en producción deficiente de ATP y acumulación de lactato por compensación glucolítica anaerobia.",
      treatment: [
        "Suplementos de CoQ10 y vitaminas del complejo B",
        "Dicloroacetato para reducir lactato",
        "Dieta cetogénica modificada",
        "Fisioterapia y terapia ocupacional",
        "Manejo sintomático de convulsiones"
      ]
    }
  ],
  "fatty-acid-oxidation": [
    {
      title: "Deficiencia de MCAD",
      description: "Niño de 2 años con episodios de hipoglucemia durante ayuno prolongado.",
      symptoms: [
        "Hipoglucemia durante ayuno",
        "Vómitos recurrentes",
        "Letargia e irritabilidad",
        "Hepatomegalia",
        "Crisis metabólicas durante infecciones"
      ],
      labFindings: [
        "Glucosa sérica: 40 mg/dL durante crisis",
        "Cetonas urinarias ausentes o bajas",
        "Ácidos grasos libres elevados",
        "Carnitina libre reducida",
        "Acilcarnitinas de cadena media elevadas"
      ],
      metabolicImpact: "La deficiencia de acil-CoA deshidrogenasa de cadena media impide la β-oxidación de ácidos grasos de 6-12 carbonos, causando dependencia exclusiva de glucosa para energía durante el ayuno.",
      treatment: [
        "Evitar ayuno prolongado (>12 horas)",
        "Dieta rica en carbohidratos complejos",
        "Suplementación con carnitina",
        "Tratamiento inmediato de infecciones",
        "Plan de emergencia para crisis metabólicas"
      ]
    }
  ],
  "urea-cycle": [
    {
      title: "Deficiencia de Ornitina Transcarbamilasa",
      description: "Recién nacido varón con hiperamonemia severa y encefalopatía.",
      symptoms: [
        "Letargia y somnolencia progresiva",
        "Vómitos persistentes",
        "Hipotonía muscular",
        "Convulsiones",
        "Coma hiperamonémico"
      ],
      labFindings: [
        "Amoniaco sérico: 800 μmol/L (normal: <50)",
        "Ácido orótico elevado en orina",
        "Citrulina plasmática baja",
        "Arginina plasmática baja",
        "Glutamina elevada"
      ],
      metabolicImpact: "La deficiencia de OTC causa acumulación masiva de amoniaco que es neurotóxico, especialmente para el sistema nervioso central en desarrollo.",
      treatment: [
        "Diálisis inmediata para reducir amoniaco",
        "Restricción proteica estricta",
        "Suplementos de arginina",
        "Benzoato de sodio como quelante de amoniaco",
        "Trasplante hepático en casos severos"
      ]
    }
  ],
  "carnitine-shuttle": [
    {
      title: "Deficiencia Primaria de Carnitina",
      description: "Niña de 5 años con debilidad muscular y episodios de hipoglucemia.",
      symptoms: [
        "Debilidad muscular progresiva",
        "Cardiomiopatía dilatada",
        "Hipoglucemia hipocetósica",
        "Fatiga severa",
        "Intolerancia al ejercicio"
      ],
      labFindings: [
        "Carnitina libre plasmática muy baja",
        "Carnitina total <10% del normal",
        "Ácidos grasos libres elevados",
        "CK elevada",
        "Ecocardiograma: disfunción ventricular"
      ],
      metabolicImpact: "Sin carnitina, los ácidos grasos no pueden entrar a las mitocondrias para β-oxidación, causando dependencia exclusiva de glucosa y acumulación de lípidos.",
      treatment: [
        "Suplementación oral con L-carnitina (100-300 mg/kg/día)",
        "Dieta rica en carbohidratos",
        "Evitar ayuno prolongado",
        "Monitoreo cardiológico regular",
        "Tratamiento sintomático de cardiomiopatía"
      ]
    }
  ],
  "pentose-phosphate": [
    {
      title: "Deficiencia de Glucosa-6-fosfato Deshidrogenasa",
      description: "Paciente masculino de 25 años con episodio de anemia hemolítica aguda tras consumir habas.",
      symptoms: [
        "Anemia hemolítica aguda",
        "Ictericia marcada",
        "Orina oscura (hemoglobinuria)",
        "Fatiga severa",
        "Dolor abdominal"
      ],
      labFindings: [
        "Hemoglobina: 6.8 g/dL (normal: 13-17)",
        "Bilirrubina indirecta muy elevada",
        "LDH marcadamente elevada",
        "Haptoglobina indetectable",
        "Actividad de G6PD <10% del normal"
      ],
      metabolicImpact: "La deficiencia de G6PD impide la generación de NADPH necesario para mantener el glutatión reducido. Bajo estrés oxidativo (habas, medicamentos), los eritrocitos no pueden defenderse del daño oxidativo y sufren hemólisis masiva.",
      treatment: [
        "Evitar desencadenantes oxidantes (habas, antimálaricos)",
        "Transfusión sanguínea si anemia severa",
        "Hidratación para prevenir daño renal",
        "Educación sobre alimentos y medicamentos prohibidos",
        "Ácido fólico durante crisis hemolíticas"
      ]
    }
  ],
  "triglyceride-biosynthesis": [
    {
      title: "Esteatosis Hepática No Alcohólica",
      description: "Mujer de 45 años con diabetes tipo 2 y acumulación excesiva de grasa en el hígado.",
      symptoms: [
        "Fatiga crónica",
        "Molestias en hipocondrio derecho",
        "Hepatomegalia",
        "Resistencia a la insulina",
        "Obesidad abdominal"
      ],
      labFindings: [
        "ALT y AST elevadas (2-3x normal)",
        "Triglicéridos séricos: 350 mg/dL (normal: <150)",
        "HDL-colesterol bajo: 32 mg/dL",
        "Glucosa en ayunas: 145 mg/dL",
        "Ecografía hepática: esteatosis grado II-III"
      ],
      metabolicImpact: "La resistencia a la insulina estimula la lipogénesis hepática de novo, aumentando la síntesis de triglicéridos. El exceso se acumula en hepatocitos como gotitas lipídicas, causando esteatosis y eventual progresión a esteatohepatitis.",
      treatment: [
        "Pérdida de peso gradual (5-10% peso corporal)",
        "Dieta baja en carbohidratos refinados",
        "Ejercicio aeróbico regular",
        "Control estricto de diabetes",
        "Evitar alcohol completamente"
      ]
    }
  ],
  "cholesterol-biosynthesis": [
    {
      title: "Hipercolesterolemia Familiar",
      description: "Hombre de 35 años con niveles extremadamente altos de colesterol y antecedentes familiares de infarto temprano.",
      symptoms: [
        "Xantomas tendinosos",
        "Arco corneal prematuro",
        "Xantelasmas palpebrales",
        "Dolor torácico de esfuerzo",
        "Historia familiar de infarto temprano"
      ],
      labFindings: [
        "Colesterol total: 450 mg/dL (normal: <200)",
        "LDL-colesterol: 380 mg/dL (normal: <100)",
        "HDL-colesterol: 45 mg/dL",
        "Triglicéridos: 180 mg/dL",
        "Mutación en receptor de LDL confirmada"
      ],
      metabolicImpact: "La mutación en el receptor de LDL impide la captación normal de colesterol, resultando en síntesis endógena descontrolada por HMG-CoA reductasa. Los niveles extremos causan aterosclerosis acelerada y riesgo cardiovascular muy alto.",
      treatment: [
        "Estatinas de alta potencia (atorvastatina 80mg)",
        "Ezetimibe para bloquear absorción intestinal",
        "Inhibidores de PCSK9 (evolocumab)",
        "Dieta muy baja en grasas saturadas",
        "LDL-aféresis en casos refractarios"
      ]
    }
  ],
  gluconeogenesis: [
    {
      title: "Deficiencia de PEPCK (Fosfoenolpiruvato Carboxiquinasa)",
      description: "Recién nacido con hipoglucemia severa persistente y acidosis láctica.",
      symptoms: [
        "Hipoglucemia neonatal severa (<30 mg/dL)",
        "Convulsiones hipoglucémicas",
        "Hepatomegalia progresiva",
        "Retraso del crecimiento",
        "Acidosis metabólica"
      ],
      labFindings: [
        "Glucosa sérica persistentemente baja",
        "Lactato elevado (5-8 mmol/L)",
        "Alanina sérica elevada",
        "Actividad de PEPCK <10% del normal",
        "Respuesta deficiente a glucagón"
      ],
      metabolicImpact: "La deficiencia de PEPCK bloquea la conversión de oxaloacetato a fosfoenolpiruvato, impidiendo la gluconeogénesis. Esto causa dependencia absoluta de glucosa exógena y acumulación de precursores gluconeogénicos que se desvían hacia lactato.",
      treatment: [
        "Infusión continua de glucosa IV",
        "Alimentación frecuente cada 2-3 horas",
        "Evitar ayuno >4 horas",
        "Suplementos de biotina",
        "Monitoreo glucémico continuo"
      ]
    },
    {
      title: "Hipoglucemia por Alcohol en Ayuno",
      description: "Paciente alcohólico de 45 años con hipoglucemia severa tras 48 horas de ayuno.",
      symptoms: [
        "Confusión y desorientación",
        "Sudoración profusa",
        "Temblor fino",
        "Debilidad generalizada",
        "Pérdida de conciencia"
      ],
      labFindings: [
        "Glucosa sérica: 35 mg/dL",
        "Cetonas séricas ausentes",
        "Lactato ligeramente elevado",
        "Reservas de glucógeno hepático agotadas",
        "Ratio NADH/NAD+ elevado"
      ],
      metabolicImpact: "El alcohol inhibe la gluconeogénesis al alterar el ratio NADH/NAD+, bloqueando la conversión de lactato y alanina a glucosa. Con las reservas de glucógeno agotadas por el ayuno, se desarrolla hipoglucemia severa.",
      treatment: [
        "Dextrosa IV al 50% inmediata",
        "Tiamina IV antes de glucosa",
        "Infusión continua de dextrosa al 10%",
        "Desintoxicación alcohólica",
        "Alimentación rica en carbohidratos complejos"
      ]
    }
  ],
  glycogenolysis: [
    {
      title: "Enfermedad de Von Gierke (Glucogenosis Tipo I)",
      description: "Niña de 2 años con hepatomegalia masiva e hipoglucemia severa durante ayuno.",
      symptoms: [
        "Hepatomegalia masiva",
        "Hipoglucemia severa en ayuno",
        "Retraso del crecimiento",
        "Abdomen prominente",
        "Epistaxis frecuentes"
      ],
      labFindings: [
        "Glucosa en ayuno: 25 mg/dL",
        "Ácido láctico muy elevado",
        "Ácido úrico elevado (hiperuricemia)",
        "Triglicéridos muy elevados",
        "Deficiencia de glucosa-6-fosfatasa"
      ],
      metabolicImpact: "La deficiencia de glucosa-6-fosfatasa impide la liberación de glucosa libre desde glucógeno hepático. La glucosa-6-fosfato se acumula y se desvía hacia glucólisis, produciendo lactato, y hacia síntesis de lípidos, causando hipertrigliceridemia.",
      treatment: [
        "Alimentación frecuente cada 3-4 horas",
        "Almidón de maíz crudo nocturno",
        "Dieta rica en carbohidratos complejos",
        "Restricción de fructosa y galactosa",
        "Alopurinol para hiperuricemia"
      ]
    },
    {
      title: "Enfermedad de McArdle (Glucogenosis Tipo V)",
      description: "Hombre de 28 años con fatiga muscular extrema y calambres durante ejercicio.",
      symptoms: [
        "Fatiga muscular severa al ejercicio",
        "Calambres musculares intensos",
        "Mioglobinuria tras ejercicio",
        "Intolerancia al ejercicio",
        "Fenómeno del 'segundo viento'"
      ],
      labFindings: [
        "CK elevada post-ejercicio (>5000 U/L)",
        "Mioglobina en orina",
        "Lactato no aumenta con ejercicio",
        "Deficiencia de fosforilasa muscular",
        "Biopsia muscular: acúmulos de glucógeno"
      ],
      metabolicImpact: "La deficiencia de glucógeno fosforilasa muscular impide la movilización de glucógeno durante el ejercicio. El músculo no puede generar ATP suficiente de sus reservas, causando rabdomiólisis y dependencia de ácidos grasos y glucosa circulante.",
      treatment: [
        "Evitar ejercicio intenso",
        "Calentamiento gradual prolongado",
        "Ingesta de glucosa antes del ejercicio",
        "Ejercicio aeróbico moderado",
        "Hidratación abundante durante actividad"
      ]
    },
    {
      title: "Hipoglucemia Reactiva Post-Gastrectomía",
      description: "Paciente de 50 años con hipoglucemia severa 2 horas después de las comidas.",
      symptoms: [
        "Hipoglucemia 1-3 horas post-comida",
        "Sudoración y palpitaciones",
        "Ansiedad y temblor",
        "Sensación de hambre intensa",
        "Ocasional pérdida de conciencia"
      ],
      labFindings: [
        "Glucosa post-prandial: 45 mg/dL a las 2h",
        "Insulina inapropiadamente elevada",
        "Péptido C elevado",
        "Curva de tolerancia oral anormal",
        "Respuesta exagerada de incretinas"
      ],
      metabolicImpact: "La absorción rápida de glucosa post-gastrectomía causa hiperglucemia inicial seguida de liberación exagerada de insulina. Cuando la glucosa se agota, la insulina persistente inhibe la glucogenólisis hepática, causando hipoglucemia reactiva severa.",
      treatment: [
        "Comidas pequeñas y frecuentes",
        "Dieta baja en carbohidratos simples",
        "Inhibidores de α-glucosidasa (acarbosa)",
        "Octreotide en casos severos",
        "Evitar líquidos con las comidas"
      ]
    }
  ]
};
