window.pathwayData = [
  {
    id: 'glycolysis',
    name: 'Glucólisis',
    type: 'catabolic',
    description: 'Degradación de glucosa para producir ATP, NADH y piruvato',
    detailedDescription: 'La glucólisis es la ruta metabólica central que convierte la glucosa en piruvato, generando ATP y NADH. Es fundamental para el metabolismo energético y ocurre en el citoplasma de todas las células.',
    location: 'Citoplasma',
    color: 'bg-red-500',
    icon: 'icon-activity',
    totalGibbs: -146,
    keyEnzymes: ['Hexoquinasa', 'Fosfofructoquinasa', 'Piruvato quinasa'],
    precursors: ['Glucosa', 'ATP', 'NAD+', 'Pi'],
    products: ['Piruvato', 'ATP neto (2)', 'NADH (2)', 'H2O'],
    keyPoint: 'La glucólisis es la única fuente de ATP en condiciones anaeróbicas y es esencial para el metabolismo de eritrocitos y neuronas.',
    clinicalImportance: 'La glucólisis es esencial para la supervivencia celular, especialmente en tejidos con alta demanda energética como el cerebro y los eritrocitos. Su disfunción está asociada con diabetes, cáncer, enfermedades neurodegenerativas y trastornos metabólicos hereditarios como deficiencias enzimáticas específicas.',
    activationConditions: [
      'Estado postprandial (niveles elevados de glucosa)',
      'Ejercicio moderado (aumento de AMP/ATP)',
      'Hipoxia o condiciones anaeróbicas',
      'Activación por insulina (fosforilación de enzimas clave)',
      'Presencia de fructosa-2,6-bisfosfato (activador de PFK-1)',
      'Deficiencia energética celular (ratio ADP/ATP elevado)'
    ],
    inhibitionFactors: [
      'Estado de ayuno prolongado (glucagón inhibe PFK-2)',
      'Concentraciones altas de ATP y citrato',
      'Acidosis metabólica (pH bajo inhibe PFK-1)',
      'Ácidos grasos libres (efecto Randle)',
      'Glucosa-6-fosfato elevada (inhibición por producto)',
      'Lactato acumulado (inhibición por retroalimentación)'
    ],
    pathwayInteractions: 'La glucólisis se conecta íntimamente con múltiples rutas: el piruvato alimenta el ciclo de Krebs en condiciones aeróbicas o se convierte a lactato anaeróbicamente. La glucosa-6-fosfato puede derivarse hacia la vía de pentosas para generar NADPH. Los intermediarios como el 3-fosfoglicerato son precursores para síntesis de aminoácidos. La regulación coordinada con gluconeogénesis evita ciclos fútiles, mientras que la interacción con el metabolismo lipídico (ciclo de Randle) optimiza el uso de combustibles según las necesidades celulares.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de diabetes, monitoreo de cetoacidosis diabética, interpretación de lactato sérico en sepsis, manejo de hipoglucemia en UCI, comprensión de resistencia a la insulina.'
      },
      {
        profession: 'Enfermería',
        application: 'Monitoreo de glucemia capilar, reconocimiento de signos de hipoglucemia, administración segura de insulina, educación diabetológica, cuidados en pacientes con cetoacidosis.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de diabetes en pequeños animales, manejo de cetosis en rumiantes, evaluación del estado energético en animales de producción, nutrición en animales diabéticos.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión del metabolismo energético en plantas, optimización de la fotosíntesis y respiración celular, mejoramiento de cultivos para eficiencia energética, manejo de estrés hídrico.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en metabolismo celular, estudios de evolución metabólica, análisis de adaptaciones energéticas, biotecnología para producción de metabolitos.'
      },
      {
        profession: 'Nutriología',
        application: 'Planificación dietética en diabetes, cálculo de índice glucémico, manejo nutricional en deportistas, diseño de dietas cetogénicas, educación en carbohidratos complejos.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo oral, manejo de pacientes diabéticos en procedimientos dentales, cicatrización en diabéticos, prevención de infecciones orales.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de antidiabéticos, diseño de inhibidores enzimáticos, farmacocinética de medicamentos en diabéticos, desarrollo de biosensores de glucosa.'
      }
    ],
    precursorOrigins: [
      'Glucosa de la dieta (intestino)',
      'Glucógeno hepático (glucogenólisis)',
      'Gluconeogénesis (hígado, riñón)',
      'Glucosa sanguínea (transportador GLUT)'
    ],
    productDestinations: [
      'Piruvato → Ciclo de Krebs (condiciones aeróbicas)',
      'Piruvato → Lactato (condiciones anaeróbicas)',
      'ATP → Procesos energéticos celulares',
      'NADH → Cadena respiratoria'
    ],
    reactions: [
      {
        name: 'Fosforilación de glucosa',
        equation: 'Glucosa + ATP → Glucosa-6-fosfato + ADP + H+',
        enzyme: 'Hexoquinasa (EC 2.7.1.1)',
        gibbs: -16.7,
        reversible: false,
        mechanism: 'Transferencia de fosfato desde ATP mediante mecanismo de ajuste inducido',
        regulation: ['Inhibición por Glucosa-6-fosfato', 'Activación por Mg2+']
      },
      {
        name: 'Isomerización',
        equation: 'Glucosa-6-fosfato ⇌ Fructosa-6-fosfato',
        enzyme: 'Fosfoglucosa isomerasa (EC 5.3.1.9)',
        gibbs: 1.7,
        reversible: true,
        mechanism: 'Isomerización aldosa-cetosa mediante intermediario enediol',
        regulation: ['Equilibrio cercano a 1:2 (G6P:F6P)']
      },
      {
        name: 'Segunda fosforilación',
        equation: 'Fructosa-6-fosfato + ATP → Fructosa-1,6-bisfosfato + ADP + H+',
        enzyme: 'Fosfofructoquinasa-1 (EC 2.7.1.11)',
        gibbs: -14.2,
        reversible: false,
        mechanism: 'Transferencia de fosfato con cambio conformacional alostérico',
        regulation: ['Inhibición por ATP, citrato', 'Activación por AMP, fructosa-2,6-bisfosfato']
      },
      {
        name: 'Escisión aldólica',
        equation: 'Fructosa-1,6-bisfosfato ⇌ DHAP + G3P',
        enzyme: 'Aldolasa (EC 4.1.2.13)',
        gibbs: 23.8,
        reversible: true,
        mechanism: 'Escisión aldólica reversible tipo I',
        regulation: ['Equilibrio desplazado por consumo de productos']
      },
      {
        name: 'Oxidación y fosforilación',
        equation: 'G3P + NAD+ + Pi → 1,3-BPG + NADH + H+',
        enzyme: 'Gliceraldehído-3-fosfato deshidrogenasa',
        gibbs: 6.3,
        reversible: true,
        mechanism: 'Oxidación acoplada a fosforilación',
        regulation: ['Inhibición por NADH', 'Activación por NAD+']
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la enzima reguladora clave de la glucólisis?',
        options: ['Hexoquinasa', 'Fosfofructoquinasa-1', 'Aldolasa', 'Piruvato quinasa'],
        correct: 1,
        explanation: 'La fosfofructoquinasa-1 es la enzima reguladora principal de la glucólisis, controlando el flujo de la ruta mediante regulación alostérica.'
      },
      {
        question: '¿Por qué la glucólisis produce ATP neto de 2 moléculas?',
        options: ['Se consumen 2 ATP y se producen 2 ATP', 'Se consumen 2 ATP y se producen 4 ATP', 'Se consumen 4 ATP y se producen 2 ATP', 'Se producen directamente 2 ATP'],
        correct: 1,
        explanation: 'Se invierten 2 ATP en las primeras fases (hexoquinasa y PFK-1) y se generan 4 ATP en las fases finales, resultando en un neto de 2 ATP.'
      },
      {
        question: '¿Qué cofactor es esencial para la reacción de la hexoquinasa?',
        options: ['Ca²⁺', 'Mg²⁺', 'Mn²⁺', 'Zn²⁺'],
        correct: 1,
        explanation: 'El Mg²⁺ es esencial para la actividad de la hexoquinasa, formando complejos con ATP y estabilizando la conformación activa de la enzima.'
      },
      {
        question: '¿En qué condiciones se inhibe la fosfofructoquinasa-1?',
        options: ['Altos niveles de AMP', 'Altos niveles de ATP', 'Bajos niveles de citrato', 'Presencia de fructosa-2,6-bisfosfato'],
        correct: 1,
        explanation: 'La PFK-1 se inhibe por ATP y citrato (indicadores de estado energético alto), mientras que se activa por AMP y fructosa-2,6-bisfosfato.'
      },
      {
        question: '¿Cuál es el destino del piruvato en condiciones anaeróbicas?',
        options: ['Acetil-CoA', 'Lactato', 'Oxaloacetato', 'Citrato'],
        correct: 1,
        explanation: 'En condiciones anaeróbicas, el piruvato se reduce a lactato por la lactato deshidrogenasa para regenerar NAD⁺ y mantener la glucólisis.'
      },
      {
        question: '¿Qué enzima cataliza la conversión de glucosa-6-fosfato a fructosa-6-fosfato?',
        options: ['Hexoquinasa', 'Fosfoglucosa isomerasa', 'Aldolasa', 'Triosa fosfato isomerasa'],
        correct: 1,
        explanation: 'La fosfoglucosa isomerasa cataliza la isomerización reversible de glucosa-6-fosfato a fructosa-6-fosfato.'
      },
      {
        question: '¿Cuál es la función principal de la regulación alostérica en glucólisis?',
        options: ['Aumentar la velocidad máxima', 'Controlar el flujo metabólico', 'Reducir la energía de activación', 'Cambiar la especificidad del sustrato'],
        correct: 1,
        explanation: 'La regulación alostérica permite controlar el flujo metabólico respondiendo a las necesidades energéticas celulares.'
      },
      {
        question: '¿Qué producto de la glucólisis es importante para la síntesis de ácidos grasos?',
        options: ['Lactato', 'Piruvato', 'NADH', 'ATP'],
        correct: 1,
        explanation: 'El piruvato se convierte en acetil-CoA, que es el precursor principal para la síntesis de ácidos grasos.'
      },
      {
        question: '¿En qué paso de la glucólisis se produce la primera molécula de ATP?',
        options: ['Hexoquinasa', 'Fosfoglicerato quinasa', 'Piruvato quinasa', 'Aldolasa'],
        correct: 1,
        explanation: 'La fosfoglicerato quinasa cataliza la primera reacción que produce ATP en la glucólisis, convirtiendo 1,3-bisfosfoglicerato en 3-fosfoglicerato.'
      },
      {
        question: '¿Qué efecto tiene la glucosa en la actividad de la hexoquinasa?',
        options: ['Activación alostérica', 'Inhibición competitiva', 'Inhibición por producto', 'No tiene efecto'],
        correct: 2,
        explanation: 'La glucosa-6-fosfato (producto de la hexoquinasa) inhibe la enzima por retroalimentación negativa, controlando el flujo de entrada a la glucólisis.'
      }
    ]
  },
  {
    id: 'krebs',
    name: 'Ciclo de Krebs',
    type: 'catabolic',
    description: 'Oxidación completa de acetil-CoA para generar NADH, FADH2 y GTP',
    detailedDescription: 'El ciclo del ácido cítrico es la ruta central del metabolismo oxidativo que completa la oxidación de los combustibles metabólicos. Ocurre en la matriz mitocondrial.',
    location: 'Matriz mitocondrial',
    color: 'bg-green-500',
    icon: 'icon-refresh-cw',
    totalGibbs: -40,
    keyEnzymes: ['Citrato sintasa', 'Isocitrato deshidrogenasa', 'α-cetoglutarato deshidrogenasa'],
    precursors: ['Acetil-CoA', 'Oxaloacetato', 'NAD+', 'FAD', 'GDP + Pi'],
    products: ['CO2 (2)', 'NADH (3)', 'FADH2 (1)', 'GTP (1)', 'CoA-SH'],
    keyPoint: 'El ciclo de Krebs es anfibólico: cataboliza acetil-CoA y proporciona precursores para biosíntesis.',
    clinicalImportance: 'El ciclo de Krebs es fundamental para la producción eficiente de ATP y la homeostasis metabólica. Su disfunción está implicada en enfermedades mitocondriales, insuficiencia cardíaca, neurodegeneración, envejecimiento y cáncer. Las deficiencias enzimáticas causan acidosis láctica, encefalopatías y trastornos del desarrollo.',
    activationConditions: [
      'Disponibilidad de oxígeno (condiciones aeróbicas)',
      'Concentraciones adecuadas de NAD+ y FAD',
      'Presencia de acetil-CoA (de glucólisis, β-oxidación, aminoácidos)',
      'Activación por Ca2+ (isocitrato deshidrogenasa)',
      'Ratio ADP/ATP elevado (estado de demanda energética)',
      'Activación por ADP de la citrato sintasa'
    ],
    inhibitionFactors: [
      'Concentraciones altas de ATP, NADH y GTP',
      'Acumulación de succinil-CoA',
      'Hipoxia severa (deficiencia de aceptores de electrones)',
      'Inhibición por citrato (retroalimentación negativa)',
      'Deficiencia de cofactores (tiamina, riboflavina, niacina)',
      'Toxinas mitocondriales (cianuro, monóxido de carbono)'
    ],
    pathwayInteractions: 'El ciclo de Krebs es el centro metabólico celular, integrando catabolismo de carbohidratos, lípidos y proteínas. Sus intermediarios son precursores biosintéticos: oxaloacetato para gluconeogénesis y síntesis de aminoácidos, α-cetoglutarato para síntesis de glutamato, succinil-CoA para síntesis de hemo. Se conecta con la cadena respiratoria para producción de ATP, con la síntesis de ácidos grasos (citrato → acetil-CoA citoplásmico) y con el metabolismo de aminoácidos mediante transaminaciones. La regulación coordinada con glucólisis y β-oxidación optimiza la utilización de sustratos.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de enfermedades mitocondriales, manejo de acidosis láctica, evaluación de función cardíaca, comprensión de fatiga crónica, tratamiento de deficiencias vitamínicas del complejo B.'
      },
      {
        profession: 'Enfermería',
        application: 'Reconocimiento de signos de fatiga metabólica, administración de suplementos vitamínicos, cuidados en pacientes con enfermedades mitocondriales, monitoreo de lactato.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de miopatías metabólicas, evaluación de rendimiento en animales de trabajo, manejo nutricional en enfermedades mitocondriales, suplementación vitamínica.'
      },
      {
        profession: 'Agronomía',
        application: 'Optimización de la respiración celular en plantas, mejoramiento de eficiencia energética en cultivos, manejo de estrés oxidativo, biofortificación con vitaminas del complejo B.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en bioenergética celular, estudios de evolución mitocondrial, análisis de adaptaciones metabólicas, biotecnología para producción de metabolitos del ciclo.'
      },
      {
        profession: 'Nutriología',
        application: 'Diseño de dietas ricas en precursores del ciclo de Krebs, suplementación con vitaminas del complejo B, optimización del metabolismo energético en atletas.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo energético oral, manejo de pacientes con fatiga crónica, cicatrización y metabolismo celular en tejidos orales.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de moduladores mitocondriales, diseño de suplementos energéticos, investigación en neuroprotección, desarrollo de antioxidantes mitocondriales.'
      }
    ],
    precursorOrigins: [
      'Acetil-CoA de glucólisis (piruvato deshidrogenasa)',
      'Acetil-CoA de β-oxidación (ácidos grasos)',
      'Acetil-CoA de aminoácidos (desaminación)',
      'Oxaloacetato de aspartato o malato'
    ],
    productDestinations: [
      'NADH → Cadena de transporte de electrones',
      'FADH2 → Complejo II de cadena respiratoria',
      'GTP → Conversión a ATP',
      'Intermediarios → Biosíntesis (gluconeogénesis, síntesis de lípidos)'
    ],
    reactions: [
      {
        name: 'Formación de citrato',
        equation: 'Acetil-CoA + Oxaloacetato + H2O → Citrato + CoA-SH + H+',
        enzyme: 'Citrato sintasa (EC 2.3.3.1)',
        gibbs: -31.5,
        reversible: false,
        mechanism: 'Condensación aldólica con cambio conformacional inducido por sustratos',
        regulation: ['Inhibición por ATP, NADH, succinil-CoA', 'Activación por ADP']
      },
      {
        name: 'Primera isomerización',
        equation: 'Citrato ⇌ Isocitrato (vía cis-aconitato)',
        enzyme: 'Aconitasa (EC 4.2.1.3)',
        gibbs: 13.3,
        reversible: true,
        mechanism: 'Deshidratación-rehidratación con centro hierro-azufre',
        regulation: ['Inhibición por fluoroacetato']
      },
      {
        name: 'Primera oxidación',
        equation: 'Isocitrato + NAD+ → α-cetoglutarato + NADH + H+ + CO2',
        enzyme: 'Isocitrato deshidrogenasa (EC 1.1.1.41)',
        gibbs: -8.4,
        reversible: false,
        mechanism: 'Oxidación acoplada a descarboxilación con cofactor Mn2+ o Mg2+',
        regulation: ['Inhibición por ATP, NADH', 'Activación por ADP, Ca2+']
      }
    ],
    quiz: [
      {
        question: '¿Cuántas moléculas de NADH se producen por vuelta del ciclo de Krebs?',
        options: ['2', '3', '4', '6'],
        correct: 1,
        explanation: 'Se producen 3 NADH por vuelta: en las reacciones de isocitrato deshidrogenasa, α-cetoglutarato deshidrogenasa y malato deshidrogenasa.'
      },
      {
        question: '¿Cuál es la función principal del ciclo de Krebs?',
        options: ['Síntesis de glucosa', 'Oxidación completa de acetil-CoA', 'Síntesis de ácidos grasos', 'Degradación de proteínas'],
        correct: 1,
        explanation: 'El ciclo de Krebs oxida completamente el acetil-CoA a CO₂, generando NADH, FADH₂ y GTP para la producción de ATP.'
      },
      {
        question: '¿Qué enzima cataliza la formación de citrato?',
        options: ['Aconitasa', 'Citrato sintasa', 'Isocitrato deshidrogenasa', 'Succinato deshidrogenasa'],
        correct: 1,
        explanation: 'La citrato sintasa cataliza la condensación de acetil-CoA con oxaloacetato para formar citrato, la primera reacción del ciclo.'
      },
      {
        question: '¿Cuántas moléculas de CO₂ se liberan por vuelta del ciclo?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'Se liberan 2 moléculas de CO₂ por vuelta: una en la reacción de isocitrato deshidrogenasa y otra en α-cetoglutarato deshidrogenasa.'
      },
      {
        question: '¿Qué cofactor requiere la aconitasa para su actividad?',
        options: ['NAD⁺', 'FAD', 'Centro hierro-azufre', 'CoA-SH'],
        correct: 2,
        explanation: 'La aconitasa contiene un centro hierro-azufre [4Fe-4S] esencial para su actividad catalítica en la isomerización de citrato.'
      },
      {
        question: '¿Cuál es el principal punto de regulación del ciclo de Krebs?',
        options: ['Citrato sintasa', 'Aconitasa', 'Isocitrato deshidrogenasa', 'Malato deshidrogenasa'],
        correct: 2,
        explanation: 'La isocitrato deshidrogenasa es el principal punto de control, regulada por ATP/ADP y NADH/NAD⁺.'
      },
      {
        question: '¿Qué reacción produce GTP directamente?',
        options: ['Citrato sintasa', 'Succinil-CoA sintasa', 'Fumarasa', 'Malato deshidrogenasa'],
        correct: 1,
        explanation: 'La succinil-CoA sintasa produce GTP (equivalente a ATP) mediante fosforilación a nivel de sustrato.'
      },
      {
        question: '¿Qué función tiene el ciclo además de la producción de energía?',
        options: ['Solo produce energía', 'Proporciona precursores biosintéticos', 'Almacena glucosa', 'Degrada lípidos'],
        correct: 1,
        explanation: 'El ciclo es anfibólico: además de generar energía, proporciona intermediarios para biosíntesis (gluconeogénesis, síntesis de aminoácidos, etc.).'
      },
      {
        question: '¿Dónde ocurre el ciclo de Krebs en la célula?',
        options: ['Citoplasma', 'Matriz mitocondrial', 'Espacio intermembrana', 'Retículo endoplásmico'],
        correct: 1,
        explanation: 'El ciclo de Krebs ocurre en la matriz mitocondrial, donde se encuentran todas las enzimas del ciclo.'
      },
      {
        question: '¿Qué inhibe la citrato sintasa?',
        options: ['ADP', 'ATP y NADH', 'NAD⁺', 'CoA-SH'],
        correct: 1,
        explanation: 'La citrato sintasa se inhibe por ATP y NADH, indicadores de alto estado energético celular.'
      }
    ]
  },
  {
    id: 'electron-transport',
    name: 'Cadena de Transporte de Electrones',
    type: 'catabolic',
    description: 'Transferencia de electrones acoplada a síntesis de ATP',
    detailedDescription: 'Sistema de complejos proteicos que transfieren electrones desde NADH y FADH2 al oxígeno, bombeando protones para generar el gradiente que impulsa la síntesis de ATP.',
    location: 'Membrana mitocondrial interna',
    color: 'bg-purple-500',
    icon: 'icon-zap',
    totalGibbs: -220,
    keyEnzymes: ['Complejo I (NADH deshidrogenasa)', 'Complejo III (citocromo bc1)', 'Complejo IV (citocromo oxidasa)'],
    precursors: ['NADH', 'FADH2', 'O2', 'ADP + Pi'],
    products: ['NAD+', 'FAD', 'H2O', 'ATP'],
    keyPoint: 'La quimiosmosis acopla el transporte de electrones con la síntesis de ATP mediante el gradiente electroquímico de protones.',
    clinicalImportance: 'La cadena respiratoria es responsable del 90% de la producción de ATP celular. Su disfunción causa enfermedades mitocondriales, envejecimiento acelerado, insuficiencia cardíaca, neurodegeneración y contribuye a la patogénesis del cáncer. La producción de especies reactivas de oxígeno (ROS) en esta cadena está implicada en el daño oxidativo celular.',
    activationConditions: [
      'Disponibilidad de sustratos (NADH, FADH2)',
      'Presencia de oxígeno molecular (aceptor final)',
      'Gradiente de protones funcional',
      'Integridad de la membrana mitocondrial interna',
      'Concentraciones adecuadas de ADP + Pi',
      'Actividad coordinada de los complejos respiratorios'
    ],
    inhibitionFactors: [
      'Hipoxia severa (falta de oxígeno)',
      'Inhibidores específicos (rotenona, antimicina A, cianuro)',
      'Desacopladores (DNP, termogenina)',
      'Daño mitocondrial (isquemia-reperfusión)',
      'Concentraciones altas de ATP (inhibición por producto)',
      'Especies reactivas de oxígeno excesivas'
    ],
    pathwayInteractions: 'La cadena de transporte de electrones es el destino final de los equivalentes reductores de todas las rutas catabólicas. Recibe NADH de glucólisis, ciclo de Krebs y β-oxidación, así como FADH2 del ciclo de Krebs. Su función está íntimamente ligada a la síntesis de ATP, regulación de la temperatura corporal (termogénesis), producción de ROS para señalización celular, y mantenimiento del equilibrio redox celular. La eficiencia de esta cadena determina la economía energética celular y la capacidad de respuesta a demandas metabólicas variables.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de enfermedades mitocondriales, manejo de intoxicaciones (cianuro, CO), evaluación de función cardíaca, comprensión de shock séptico, medicina del envejecimiento.'
      },
      {
        profession: 'Enfermería',
        application: 'Monitoreo de saturación de oxígeno, reconocimiento de hipoxia tisular, cuidados en intoxicaciones, administración de oxigenoterapia, vigilancia de signos vitales.'
      },
      {
        profession: 'Veterinaria',
        application: 'Manejo de hipoxia en anestesia, diagnóstico de enfermedades respiratorias, evaluación de rendimiento atlético, intoxicaciones en animales.'
      },
      {
        profession: 'Agronomía',
        application: 'Optimización de la respiración en plantas, manejo de estrés hipóxico en cultivos, mejoramiento de eficiencia energética, tolerancia a condiciones adversas.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en bioenergética, estudios de evolución mitocondrial, análisis de adaptaciones a hipoxia, biotecnología energética.'
      },
      {
        profession: 'Nutriología',
        application: 'Suplementación con antioxidantes, optimización del metabolismo energético, manejo nutricional en enfermedades mitocondriales, nutrición deportiva.'
      },
      {
        profession: 'Estomatología',
        application: 'Manejo de hipoxia en anestesia dental, comprensión del metabolismo energético oral, cicatrización en condiciones de hipoxia.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de antioxidantes mitocondriales, diseño de moduladores de la cadena respiratoria, investigación en neuroprotección, desarrollo de suplementos energéticos.'
      }
    ],
    reactions: [
      {
        name: 'Complejo I',
        equation: 'NADH + H+ + CoQ + 4H+matriz → NAD+ + CoQH2 + 4H+espacio',
        enzyme: 'NADH:ubiquinona oxidorreductasa',
        gibbs: -69.5,
        reversible: false,
        mechanism: 'Transferencia de electrones acoplada a bombeo de protones mediante cambios conformacionales',
        regulation: ['Inhibición por rotenona', 'Modulación por estado energético celular']
      },
      {
        name: 'Complejo III',
        equation: 'CoQH2 + 2Cit c(ox) + 2H+matriz → CoQ + 2Cit c(red) + 4H+espacio',
        enzyme: 'Complejo citocromo bc1',
        gibbs: -32.1,
        reversible: false,
        mechanism: 'Ciclo Q con bombeo de protones',
        regulation: ['Inhibición por antimicina A']
      },
      {
        name: 'Complejo IV',
        equation: '4Cit c(red) + O2 + 8H+matriz → 4Cit c(ox) + 2H2O + 4H+espacio',
        enzyme: 'Citocromo c oxidasa',
        gibbs: -112.0,
        reversible: false,
        mechanism: 'Reducción de O2 con bombeo de protones',
        regulation: ['Inhibición por cianuro, CO']
      },
      {
        name: 'ATP sintasa',
        equation: 'ADP + Pi + 3H+espacio → ATP + H2O + 3H+matriz',
        enzyme: 'ATP sintasa (Complejo V)',
        gibbs: -30.5,
        reversible: true,
        mechanism: 'Síntesis rotatoria impulsada por gradiente de protones',
        regulation: ['Inhibición por oligomicina']
      }
    ],
    quiz: [
      {
        question: '¿Cuántos protones bombea el Complejo I por cada NADH oxidado?',
        options: ['2', '4', '6', '10'],
        correct: 1,
        explanation: 'El Complejo I bombea 4 protones desde la matriz al espacio intermembrana por cada NADH oxidado.'
      },
      {
        question: '¿Cuál es el aceptor final de electrones en la cadena respiratoria?',
        options: ['NAD⁺', 'FAD', 'Oxígeno', 'Citocromo c'],
        correct: 2,
        explanation: 'El oxígeno es el aceptor final de electrones, siendo reducido a agua por el Complejo IV.'
      },
      {
        question: '¿Qué complejo no bombea protones?',
        options: ['Complejo I', 'Complejo II', 'Complejo III', 'Complejo IV'],
        correct: 1,
        explanation: 'El Complejo II (succinato deshidrogenasa) transfiere electrones pero no bombea protones.'
      },
      {
        question: '¿Cuántos ATP se producen aproximadamente por cada NADH?',
        options: ['1', '2', '2.5', '3'],
        correct: 2,
        explanation: 'Cada NADH genera aproximadamente 2.5 ATP a través de la fosforilación oxidativa.'
      },
      {
        question: '¿Qué transportador móvil conecta los Complejos I/II con el III?',
        options: ['Citocromo c', 'Ubiquinona (CoQ)', 'NAD⁺', 'FAD'],
        correct: 1,
        explanation: 'La ubiquinona (coenzima Q) es el transportador móvil lipofílico que conecta los complejos I/II con el III.'
      },
      {
        question: '¿Cómo se llama el proceso que acopla el transporte de electrones con la síntesis de ATP?',
        options: ['Glucólisis', 'Quimiosmosis', 'Fermentación', 'Fosforilación directa'],
        correct: 1,
        explanation: 'La quimiosmosis acopla el gradiente electroquímico de protones con la síntesis de ATP.'
      },
      {
        question: '¿Qué inhibidor bloquea específicamente el Complejo I?',
        options: ['Cianuro', 'Rotenona', 'Antimicina A', 'Oligomicina'],
        correct: 1,
        explanation: 'La rotenona es un inhibidor específico del Complejo I que bloquea el transporte de electrones desde NADH.'
      },
      {
        question: '¿Cuántos protones requiere la ATP sintasa para sintetizar un ATP?',
        options: ['1', '2', '3', '4'],
        correct: 2,
        explanation: 'La ATP sintasa requiere aproximadamente 3 protones por cada molécula de ATP sintetizada.'
      },
      {
        question: '¿Qué sucede cuando se desacopla la fosforilación oxidativa?',
        options: ['Se detiene el transporte de electrones', 'Se produce calor en lugar de ATP', 'Se acumula NADH', 'Se inhibe la glucólisis'],
        correct: 1,
        explanation: 'El desacoplamiento permite que el transporte de electrones continúe, pero la energía se libera como calor en lugar de formar ATP.'
      },
      {
        question: '¿Dónde se localiza la ATP sintasa?',
        options: ['Matriz mitocondrial', 'Membrana mitocondrial interna', 'Espacio intermembrana', 'Membrana externa'],
        correct: 1,
        explanation: 'La ATP sintasa está incrustada en la membrana mitocondrial interna, con su dominio catalítico hacia la matriz.'
      }
    ]
  },
  {
    id: 'fatty-acid-oxidation',
    name: 'β-Oxidación de Ácidos Grasos',
    type: 'catabolic',
    description: 'Degradación de ácidos grasos para producir acetil-CoA',
    detailedDescription: 'Proceso catabólico que degrada ácidos grasos mediante ciclos repetitivos de cuatro reacciones, generando acetil-CoA, NADH y FADH2.',
    location: 'Matriz mitocondrial',
    color: 'bg-orange-500',
    icon: 'icon-scissors',
    totalGibbs: -35,
    keyEnzymes: ['Acil-CoA deshidrogenasa', 'Enoil-CoA hidratasa', '3-hidroxiacil-CoA deshidrogenasa'],
    precursors: ['Ácidos grasos', 'CoA-SH', 'NAD+', 'FAD'],
    products: ['Acetil-CoA', 'NADH', 'FADH2'],
    keyPoint: 'La β-oxidación es altamente eficiente energéticamente: un ácido graso de 16 carbonos produce 129 ATP.',
    clinicalImportance: 'La β-oxidación es esencial para el metabolismo energético durante el ayuno, ejercicio y estados catabólicos. Su disfunción causa trastornos metabólicos graves como deficiencias de acil-CoA deshidrogenasas, síndrome de Reye, y cardiomiopatías. Es fundamental en tejidos con alta demanda energética como corazón, músculo esquelético e hígado.',
    activationConditions: [
      'Estado de ayuno (glucagón elevado, insulina baja)',
      'Ejercicio prolongado (>30 minutos)',
      'Concentraciones bajas de malonil-CoA',
      'Activación del sistema nervioso simpático',
      'Disponibilidad de carnitina para transporte',
      'Concentraciones adecuadas de CoA-SH y NAD+'
    ],
    inhibitionFactors: [
      'Estado alimentado (insulina alta)',
      'Concentraciones elevadas de malonil-CoA',
      'Deficiencia de carnitina',
      'Concentraciones altas de acetil-CoA',
      'Hipoxia severa (deficiencia de FAD regeneration)',
      'Inhibición por productos (NADH, acetil-CoA)'
    ],
    pathwayInteractions: 'La β-oxidación se integra estrechamente con otras rutas metabólicas: el acetil-CoA producido alimenta el ciclo de Krebs para producción de ATP, puede convertirse en cuerpos cetónicos durante ayuno prolongado, o usarse para síntesis de colesterol. Su regulación está coordinada con glucólisis y gluconeogénesis mediante el ciclo de Randle. La disponibilidad de carnitina conecta esta ruta con el metabolismo de aminoácidos, y los productos NADH y FADH₂ alimentan la cadena respiratoria.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de deficiencias enzimáticas de β-oxidación, manejo de cetoacidosis diabética, evaluación de cardiomiopatías metabólicas, comprensión de trastornos del metabolismo lipídico.'
      },
      {
        profession: 'Enfermería',
        application: 'Monitoreo de pacientes con trastornos metabólicos, reconocimiento de signos de hipoglucemia hipocetósica, administración de suplementos de carnitina, educación nutricional.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de lipidosis hepática felina, manejo de cetosis en rumiantes, evaluación del estado energético en animales de rendimiento, nutrición en ayuno.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión del metabolismo lipídico en semillas oleaginosas, optimización de contenido de aceites en cultivos, manejo de reservas energéticas en plantas.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en bioenergética mitocondrial, estudios de adaptación metabólica, análisis de eficiencia energética, biotecnología para producción de biocombustibles.'
      },
      {
        profession: 'Nutriología',
        application: 'Diseño de dietas cetogénicas, optimización del metabolismo de grasas en atletas, suplementación con MCT, manejo nutricional en deficiencias enzimáticas.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo energético oral, manejo de pacientes diabéticos, cicatrización en condiciones de cetosis, halitosis cetónica.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de moduladores de β-oxidación, diseño de suplementos de carnitina, investigación en terapias para trastornos metabólicos, desarrollo de MCT terapéuticos.'
      }
    ],
    precursorOrigins: [
      'Ácidos grasos del tejido adiposo (lipolisis)',
      'Ácidos grasos de la dieta (absorción intestinal)',
      'Ácidos grasos de síntesis de novo (hígado)',
      'Liberación desde lipoproteínas (LPL)'
    ],
    productDestinations: [
      'Acetil-CoA → Ciclo de Krebs (producción de ATP)',
      'Acetil-CoA → Síntesis de cuerpos cetónicos',
      'NADH y FADH₂ → Cadena respiratoria',
      'Acetil-CoA → Síntesis de colesterol (hígado)'
    ],
    reactions: [
      {
        name: 'Primera oxidación',
        equation: 'Acil-CoA + FAD → trans-Δ2-Enoil-CoA + FADH2',
        enzyme: 'Acil-CoA deshidrogenasa',
        gibbs: -7.5,
        reversible: false,
        mechanism: 'Oxidación que introduce doble enlace trans entre C2 y C3',
        regulation: ['Inhibición por malonil-CoA', 'Activación por carnitina']
      },
      {
        name: 'Hidratación',
        equation: 'trans-Δ2-Enoil-CoA + H2O → L-3-Hidroxiacil-CoA',
        enzyme: 'Enoil-CoA hidratasa',
        gibbs: -4.2,
        reversible: true,
        mechanism: 'Adición de agua al doble enlace trans',
        regulation: ['Actividad constitutiva']
      },
      {
        name: 'Segunda oxidación',
        equation: 'L-3-Hidroxiacil-CoA + NAD+ → 3-Cetoacil-CoA + NADH + H+',
        enzyme: '3-Hidroxiacil-CoA deshidrogenasa',
        gibbs: -15.7,
        reversible: false,
        mechanism: 'Oxidación del grupo hidroxilo a cetona',
        regulation: ['Inhibición por NADH']
      },
      {
        name: 'Tiolisis',
        equation: '3-Cetoacil-CoA + CoA-SH → Acetil-CoA + Acil-CoA(n-2)',
        enzyme: 'β-Cetotiolasa',
        gibbs: -7.5,
        reversible: false,
        mechanism: 'Escisión tiolítica del enlace C-C',
        regulation: ['Disponibilidad de CoA-SH']
      }
    ],
    quiz: [
      {
        question: '¿Cuál es el producto final de cada ciclo de β-oxidación?',
        options: ['Acetil-CoA', 'Propionil-CoA', 'Succinil-CoA', 'Malonil-CoA'],
        correct: 0,
        explanation: 'Cada ciclo de β-oxidación produce una molécula de acetil-CoA y acorta la cadena de ácido graso en 2 carbonos.'
      },
      {
        question: '¿Cuántas moléculas de ATP produce la oxidación completa del palmitato (16C)?',
        options: ['106', '129', '147', '160'],
        correct: 1,
        explanation: 'El palmitato produce 129 ATP: 8 acetil-CoA (96 ATP) + 7 FADH₂ (10.5 ATP) + 7 NADH (17.5 ATP) - 2 ATP de activación.'
      },
      {
        question: '¿Dónde ocurre la β-oxidación de ácidos grasos?',
        options: ['Citoplasma', 'Matriz mitocondrial', 'Peroxisomas', 'Ambas B y C'],
        correct: 3,
        explanation: 'La β-oxidación ocurre principalmente en la matriz mitocondrial, pero también en peroxisomas para ácidos grasos muy largos.'
      },
      {
        question: '¿Qué enzima cataliza el primer paso de la β-oxidación?',
        options: ['Acil-CoA sintasa', 'Acil-CoA deshidrogenasa', 'Enoil-CoA hidratasa', 'β-cetotiolasa'],
        correct: 1,
        explanation: 'La acil-CoA deshidrogenasa cataliza la primera oxidación, introduciendo un doble enlace trans entre C2 y C3.'
      },
      {
        question: '¿Qué cofactor se reduce en el primer paso de cada ciclo?',
        options: ['NAD⁺', 'FAD', 'NADP⁺', 'FMN'],
        correct: 1,
        explanation: 'El FAD se reduce a FADH₂ en la primera reacción catalizada por acil-CoA deshidrogenasa.'
      },
      {
        question: '¿Qué regula negativamente la β-oxidación?',
        options: ['Carnitina', 'Malonil-CoA', 'Acetil-CoA', 'CoA-SH'],
        correct: 1,
        explanation: 'El malonil-CoA inhibe la CPT-I, bloqueando el transporte de ácidos grasos a la mitocondria y por tanto la β-oxidación.'
      },
      {
        question: '¿Cuántos ciclos de β-oxidación requiere el ácido esteárico (18C)?',
        options: ['7', '8', '9', '18'],
        correct: 1,
        explanation: 'El ácido esteárico (18C) requiere 8 ciclos de β-oxidación para producir 9 moléculas de acetil-CoA.'
      },
      {
        question: '¿Qué tipo de enlace rompe la β-cetotiolasa?',
        options: ['Enlace éster', 'Enlace C-C', 'Enlace C-H', 'Enlace doble'],
        correct: 1,
        explanation: 'La β-cetotiolasa rompe el enlace C-C entre C2 y C3, liberando acetil-CoA.'
      },
      {
        question: '¿Por qué los ácidos grasos de número impar de carbonos requieren pasos adicionales?',
        options: ['Son más difíciles de oxidar', 'Producen propionil-CoA', 'Requieren más energía', 'Son tóxicos'],
        correct: 1,
        explanation: 'Los ácidos grasos impares producen propionil-CoA en el último ciclo, que requiere conversión a succinil-CoA.'
      },
      {
        question: '¿En qué condiciones metabólicas se activa principalmente la β-oxidación?',
        options: ['Estado alimentado', 'Ayuno y ejercicio', 'Después de las comidas', 'Durante el sueño'],
        correct: 1,
        explanation: 'La β-oxidación se activa durante el ayuno y ejercicio cuando se necesita movilizar las reservas de grasa para energía.'
      }
    ]
  },
  {
    id: 'gluconeogenesis',
    name: 'Gluconeogénesis',
    type: 'anabolic',
    description: 'Síntesis de glucosa a partir de precursores no glucídicos',
    detailedDescription: 'Ruta anabólica que sintetiza glucosa desde lactato, aminoácidos, glicerol y otros precursores. Es esencial durante el ayuno y ejercicio prolongado.',
    location: 'Hígado (principalmente), riñón, intestino',
    color: 'bg-blue-500',
    icon: 'icon-arrow-up',
    totalGibbs: 16,
    keyEnzymes: ['Piruvato carboxilasa', 'PEPCK', 'Fructosa-1,6-bisfosfatasa'],
    precursors: ['Lactato', 'Alanina', 'Glicerol', 'ATP', 'GTP'],
    products: ['Glucosa', 'ADP', 'GDP', 'Pi'],
    keyPoint: 'La gluconeogénesis no es simplemente la glucólisis inversa: utiliza 4 enzimas diferentes para superar las reacciones irreversibles.',
    clinicalImportance: 'La gluconeogénesis es vital para mantener la glucemia durante el ayuno, especialmente para el cerebro que requiere glucosa constante. Su disfunción causa hipoglucemia severa, especialmente en neonatos y durante enfermedades. Es fundamental en diabetes tipo 2 donde está desregulada, contribuyendo a hiperglucemia. Las deficiencias enzimáticas causan hipoglucemia mortal.',
    activationConditions: [
      'Estado de ayuno (glucagón elevado)',
      'Ejercicio prolongado (cortisol y catecolaminas)',
      'Diabetes mellitus (resistencia a insulina)',
      'Concentraciones bajas de insulina',
      'Disponibilidad de precursores gluconeogénicos',
      'Activación por AMPc y fosforilación enzimática'
    ],
    inhibitionFactors: [
      'Estado alimentado (insulina elevada)',
      'Concentraciones altas de glucosa',
      'AMP y fructosa-2,6-bisfosfato elevados',
      'Inhibición alostérica por ATP',
      'Deficiencia de cofactores (biotina, vitaminas B)',
      'Acidosis metabólica severa'
    ],
    pathwayInteractions: 'La gluconeogénesis está íntimamente conectada con múltiples rutas: recibe lactato del ciclo de Cori (músculo-hígado), alanina del ciclo glucosa-alanina, glicerol de la lipolisis, y aminoácidos del catabolismo proteico. Se coordina recíprocamente con glucólisis mediante regulación hormonal, comparte intermediarios con el ciclo de Krebs, y sus productos alimentan la síntesis de glucógeno. La regulación coordinada previene ciclos fútiles y optimiza la homeostasis glucémica.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Manejo de hipoglucemia, diagnóstico de deficiencias enzimáticas, control de diabetes tipo 2, evaluación de función hepática, manejo de pacientes críticos en ayuno.'
      },
      {
        profession: 'Enfermería',
        application: 'Monitoreo de glucemia en ayuno, reconocimiento de hipoglucemia, administración de glucosa IV, cuidados en pacientes diabéticos, educación sobre ayuno perioperatorio.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de cetosis en rumiantes, manejo de hipoglucemia neonatal, evaluación del estado metabólico en animales en ayuno, nutrición parenteral.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión de la síntesis de azúcares en plantas, optimización de almacenamiento de carbohidratos, mejoramiento de resistencia al estrés hídrico.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en homeostasis glucémica, estudios de adaptación metabólica, análisis de regulación génica, biotecnología para producción de glucosa.'
      },
      {
        profession: 'Nutriología',
        application: 'Diseño de dietas para diabéticos, planificación de ayuno intermitente, optimización de recuperación post-ejercicio, suplementación con precursores.'
      },
      {
        profession: 'Estomatología',
        application: 'Manejo de pacientes diabéticos en cirugía oral, comprensión de cicatrización en hipoglucemia, prevención de complicaciones en ayuno.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de inhibidores de gluconeogénesis, diseño de antidiabéticos, investigación en moduladores metabólicos, desarrollo de suplementos gluconeogénicos.'
      }
    ],
    precursorOrigins: [
      'Lactato del músculo (ciclo de Cori)',
      'Alanina del músculo (ciclo glucosa-alanina)',
      'Glicerol del tejido adiposo',
      'Aminoácidos del catabolismo proteico'
    ],
    productDestinations: [
      'Glucosa → Circulación sanguínea',
      'Glucosa → Almacenamiento como glucógeno',
      'Glucosa → Metabolismo cerebral',
      'Intermediarios → Síntesis de lípidos'
    ],
    reactions: [
      {
        name: 'Carboxilación de piruvato',
        equation: 'Piruvato + CO2 + ATP → Oxaloacetato + ADP + Pi',
        enzyme: 'Piruvato carboxilasa (EC 6.4.1.1)',
        gibbs: -2.1,
        reversible: false,
        mechanism: 'Carboxilación dependiente de biotina con activación por acetil-CoA',
        regulation: ['Activación alostérica por acetil-CoA', 'Inhibición por ADP']
      },
      {
        name: 'Conversión a PEP',
        equation: 'Oxaloacetato + GTP → PEP + GDP + CO2',
        enzyme: 'PEPCK (EC 4.1.1.32)',
        gibbs: 0.9,
        reversible: false,
        mechanism: 'Descarboxilación acoplada a fosforilación',
        regulation: ['Inducción por glucagón', 'Represión por insulina']
      },
      {
        name: 'Hidrólisis de F-1,6-BP',
        equation: 'Fructosa-1,6-bisfosfato + H2O → Fructosa-6-fosfato + Pi',
        enzyme: 'Fructosa-1,6-bisfosfatasa',
        gibbs: -16.3,
        reversible: false,
        mechanism: 'Hidrólisis específica del fosfato en C1',
        regulation: ['Inhibición por AMP, fructosa-2,6-bisfosfato']
      },
      {
        name: 'Hidrólisis final',
        equation: 'Glucosa-6-fosfato + H2O → Glucosa + Pi',
        enzyme: 'Glucosa-6-fosfatasa',
        gibbs: -13.8,
        reversible: false,
        mechanism: 'Hidrólisis en retículo endoplásmico',
        regulation: ['Inhibición por glucosa-6-fosfato']
      }
    ],
    quiz: [
      {
        question: '¿Por qué la gluconeogénesis requiere más energía que la glucólisis?',
        options: ['Porque sintetiza moléculas más complejas', 'Porque debe superar reacciones termodinámicamente desfavorables', 'Porque ocurre en diferentes compartimentos', 'Porque utiliza diferentes cofactores'],
        correct: 1,
        explanation: 'La gluconeogénesis debe superar las tres reacciones irreversibles de la glucólisis, lo que requiere energía adicional (6 ATP vs 2 ATP producidos en glucólisis).'
      },
      {
        question: '¿Cuál es la enzima clave que convierte piruvato en oxaloacetato?',
        options: ['Piruvato quinasa', 'Piruvato carboxilasa', 'PEPCK', 'Lactato deshidrogenasa'],
        correct: 1,
        explanation: 'La piruvato carboxilasa cataliza la carboxilación de piruvato a oxaloacetato, el primer paso comprometido de la gluconeogénesis.'
      },
      {
        question: '¿Qué activador alostérico requiere la piruvato carboxilasa?',
        options: ['ADP', 'Acetil-CoA', 'NADH', 'ATP'],
        correct: 1,
        explanation: 'La piruvato carboxilasa requiere acetil-CoA como activador alostérico, coordinando la gluconeogénesis con el estado metabólico.'
      },
      {
        question: '¿Cuántas moléculas de ATP se consumen para sintetizar una glucosa desde piruvato?',
        options: ['2', '4', '6', '8'],
        correct: 2,
        explanation: 'Se requieren 6 ATP para sintetizar glucosa desde 2 piruvatos: 2 ATP (piruvato carboxilasa) + 2 GTP (PEPCK) + 2 ATP (3-fosfoglicerato quinasa).'
      },
      {
        question: '¿Cuál es el principal precursor de la gluconeogénesis durante el ejercicio?',
        options: ['Alanina', 'Lactato', 'Glicerol', 'Glutamina'],
        correct: 1,
        explanation: 'El lactato producido por el músculo durante el ejercicio es el principal precursor gluconeogénico, reciclado en el hígado (ciclo de Cori).'
      },
      {
        question: '¿Qué hormona estimula la gluconeogénesis?',
        options: ['Insulina', 'Glucagón', 'Leptina', 'Tiroxina'],
        correct: 1,
        explanation: 'El glucagón estimula la gluconeogénesis aumentando la expresión de PEPCK y activando enzimas clave durante el ayuno.'
      },
      {
        question: '¿Dónde ocurre principalmente la gluconeogénesis?',
        options: ['Músculo', 'Hígado', 'Cerebro', 'Tejido adiposo'],
        correct: 1,
        explanation: 'El hígado es el principal sitio de gluconeogénesis, aunque también ocurre en riñón, intestino y músculo en menor medida.'
      },
      {
        question: '¿Qué enzima es específica de gluconeogénesis y no está en glucólisis?',
        options: ['Hexoquinasa', 'PEPCK', 'Aldolasa', 'Triosa fosfato isomerasa'],
        correct: 1,
        explanation: 'La PEPCK (fosfoenolpiruvato carboxiquinasa) es específica de gluconeogénesis y convierte oxaloacetato en fosfoenolpiruvato.'
      },
      {
        question: '¿Qué inhibe la fructosa-1,6-bisfosfatasa?',
        options: ['Glucagón', 'AMP', 'Citrato', 'Acetil-CoA'],
        correct: 1,
        explanation: 'El AMP inhibe la fructosa-1,6-bisfosfatasa, coordinando la gluconeogénesis con el estado energético celular.'
      },
      {
        question: '¿Cuál es la función del ciclo glucosa-alanina?',
        options: ['Transportar glucosa al músculo', 'Transportar nitrógeno al hígado', 'Sintetizar proteínas', 'Almacenar energía'],
        correct: 1,
        explanation: 'El ciclo glucosa-alanina transporta nitrógeno desde el músculo al hígado de forma no tóxica, donde la alanina se usa para gluconeogénesis.'
      }
    ]
  },
  {
    id: 'glycogenolysis',
    name: 'Glucogenólisis',
    type: 'catabolic',
    description: 'Degradación del glucógeno para liberar glucosa',
    detailedDescription: 'Proceso catabólico que moviliza las reservas de glucógeno hepático y muscular para mantener la glucemia y proporcionar energía durante el ejercicio.',
    location: 'Hígado, músculo esquelético',
    color: 'bg-yellow-500',
    icon: 'icon-trending-down',
    totalGibbs: -5.2,
    keyEnzymes: ['Glucógeno fosforilasa', 'Enzima desramificante', 'Fosfoglucomutasa'],
    precursors: ['Glucógeno', 'Pi', 'H2O'],
    products: ['Glucosa-1-fosfato', 'Glucosa libre', 'Glucógeno residual'],
    keyPoint: 'La glucogenólisis produce glucosa-1-fosfato que puede entrar directamente en glucólisis o convertirse en glucosa libre.',
    clinicalImportance: 'La glucogenólisis es crucial para mantener la glucemia entre comidas y durante el ejercicio. Su disfunción causa glucogenosis (enfermedades de almacenamiento de glucógeno), hipoglucemia severa, y intolerancia al ejercicio. Es esencial en la respuesta al estrés, hipoglucemia, y demandas energéticas agudas. Las deficiencias causan hepatomegalia, miopatías y crisis hipoglucémicas.',
    activationConditions: [
      'Hipoglucemia (glucagón y adrenalina)',
      'Ejercicio físico (activación simpática)',
      'Estrés y respuesta de lucha-huida',
      'Ayuno entre comidas (4-6 horas)',
      'Activación por AMPc y fosforilación',
      'Concentraciones bajas de insulina'
    ],
    inhibitionFactors: [
      'Estado alimentado (insulina elevada)',
      'Concentraciones altas de glucosa',
      'ATP y glucosa-6-fosfato elevados',
      'Activación de fosfatasas (PP1)',
      'Inhibición por productos de la reacción',
      'Depleción completa de reservas de glucógeno'
    ],
    pathwayInteractions: 'La glucogenólisis se coordina estrechamente con glucólisis (la glucosa-6-P puede entrar directamente), gluconeogénesis (regulación recíproca), y síntesis de glucógeno (control bidireccional). En hígado, libera glucosa libre a circulación; en músculo, la glucosa-6-P se usa localmente. Se conecta con metabolismo lipídico mediante regulación hormonal, y con el ciclo de Krebs a través de los productos glucolíticos.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de glucogenosis, manejo de hipoglucemia, evaluación de reservas glucémicas, comprensión de diabetes, manejo de pacientes en ayuno quirúrgico.'
      },
      {
        profession: 'Enfermería',
        application: 'Monitoreo de glucemia pre y post-ejercicio, reconocimiento de síntomas de depleción glucogénica, administración de carbohidratos, educación diabetológica.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de glucogenosis en animales, evaluación de rendimiento atlético, manejo de hipoglucemia en cachorros, nutrición en animales de trabajo.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión del metabolismo de almidón en plantas, optimización de reservas energéticas en tubérculos, mejoramiento de cultivos energéticos.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en regulación metabólica, estudios de adaptación energética, análisis de señalización hormonal, biotecnología de polisacáridos.'
      },
      {
        profession: 'Nutriología',
        application: 'Optimización de carga de glucógeno en deportistas, diseño de estrategias de hidratación con carbohidratos, planificación de comidas pre-ejercicio.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo oral, manejo de pacientes diabéticos en procedimientos, prevención de hipoglucemia durante cirugías.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de moduladores de glucogenólisis, diseño de suplementos deportivos, investigación en terapias para glucogenosis, desarrollo de sensores de glucosa.'
      }
    ],
    precursorOrigins: [
      'Glucógeno hepático (12-24h de reserva)',
      'Glucógeno muscular (uso local)',
      'Fosfato inorgánico celular',
      'Agua del citoplasma'
    ],
    productDestinations: [
      'Glucosa-1-P → Glucosa-6-P → Glucólisis',
      'Glucosa libre → Circulación (hígado)',
      'ATP → Contracción muscular',
      'Glucosa-6-P → Vía de pentosas'
    ],
    reactions: [
      {
        name: 'Fosforolisis del glucógeno',
        equation: '(Glucosa)n + Pi → (Glucosa)n-1 + Glucosa-1-fosfato',
        enzyme: 'Glucógeno fosforilasa (EC 2.4.1.1)',
        gibbs: 3.1,
        reversible: true,
        mechanism: 'Fosforolisis secuencial desde extremos no reductores',
        regulation: ['Activación por fosforilación', 'Inhibición por glucosa, ATP']
      },
      {
        name: 'Desramificación',
        equation: 'Punto de ramificación → Cadena lineal + Glucosa libre',
        enzyme: 'Enzima desramificante (EC 3.2.1.33)',
        gibbs: -5.4,
        reversible: false,
        mechanism: 'Transferasa + α-1,6-glucosidasa',
        regulation: ['Actividad constitutiva']
      },
      {
        name: 'Isomerización',
        equation: 'Glucosa-1-fosfato ⇌ Glucosa-6-fosfato',
        enzyme: 'Fosfoglucomutasa (EC 5.4.2.2)',
        gibbs: -1.7,
        reversible: true,
        mechanism: 'Transferencia intramolecular de fosfato',
        regulation: ['Cofactor Mg2+']
      }
    ],
    quiz: [
      {
        question: '¿Qué ventaja metabólica tiene la fosforolisis sobre la hidrólisis en glucogenólisis?',
        options: ['Produce más energía', 'Es más rápida', 'Conserva energía al producir glucosa-1-fosfato', 'Requiere menos enzimas'],
        correct: 2,
        explanation: 'La fosforolisis conserva energía porque produce glucosa-1-fosfato que puede entrar directamente en glucólisis sin gastar ATP en la hexoquinasa.'
      },
      {
        question: '¿Qué enzima es responsable de la degradación del glucógeno?',
        options: ['Glucógeno sintasa', 'Glucógeno fosforilasa', 'Hexoquinasa', 'Glucosa-6-fosfatasa'],
        correct: 1,
        explanation: 'La glucógeno fosforilasa cataliza la fosforolisis del glucógeno, liberando glucosa-1-fosfato desde los extremos no reductores.'
      },
      {
        question: '¿Cómo se activa la glucógeno fosforilasa durante el ejercicio?',
        options: ['Por desfosforilación', 'Por fosforilación', 'Por unión de glucosa', 'Por unión de ATP'],
        correct: 1,
        explanation: 'La glucógeno fosforilasa se activa por fosforilación mediada por la fosforilasa quinasa durante el ejercicio y estrés.'
      },
      {
        question: '¿Qué función tiene la enzima desramificante?',
        options: ['Crear nuevas ramas', 'Eliminar puntos de ramificación α-1,6', 'Fosforilar glucógeno', 'Sintetizar glucógeno'],
        correct: 1,
        explanation: 'La enzima desramificante elimina los enlaces α-1,6 en los puntos de ramificación, permitiendo la degradación completa del glucógeno.'
      },
      {
        question: '¿En qué tejidos es más importante la glucogenólisis?',
        options: ['Solo hígado', 'Solo músculo', 'Hígado y músculo', 'Tejido adiposo'],
        correct: 2,
        explanation: 'La glucogenólisis es crucial tanto en hígado (mantiene glucemia) como en músculo (proporciona energía para contracción).'
      },
      {
        question: '¿Qué hormona inhibe la glucogenólisis?',
        options: ['Glucagón', 'Adrenalina', 'Insulina', 'Cortisol'],
        correct: 2,
        explanation: 'La insulina inhibe la glucogenólisis promoviendo la desfosforilación y inactivación de la glucógeno fosforilasa.'
      },
      {
        question: '¿Cuántas horas de reserva energética proporciona el glucógeno hepático?',
        options: ['6-8 horas', '12-24 horas', '2-3 días', '1 semana'],
        correct: 1,
        explanation: 'Las reservas de glucógeno hepático pueden mantener la glucemia durante aproximadamente 12-24 horas de ayuno.'
      },
      {
        question: '¿Qué diferencia hay entre glucogenólisis hepática y muscular?',
        options: ['No hay diferencias', 'El hígado libera glucosa libre, el músculo usa glucosa-6-P localmente', 'El músculo es más rápido', 'El hígado no tiene glucógeno'],
        correct: 1,
        explanation: 'El hígado tiene glucosa-6-fosfatasa y libera glucosa libre a la sangre; el músculo carece de esta enzima y usa la glucosa-6-P localmente.'
      },
      {
        question: '¿Qué segundo mensajero activa la glucogenólisis?',
        options: ['IP3', 'DAG', 'cAMP', 'cGMP'],
        correct: 2,
        explanation: 'El cAMP (AMP cíclico) es el segundo mensajero que activa la cascada de fosforilación que conduce a la glucogenólisis.'
      },
      {
        question: '¿Qué enfermedad resulta de la deficiencia de glucógeno fosforilasa muscular?',
        options: ['Enfermedad de Von Gierke', 'Enfermedad de McArdle', 'Enfermedad de Pompe', 'Enfermedad de Cori'],
        correct: 1,
        explanation: 'La enfermedad de McArdle (glucogenosis tipo V) resulta de la deficiencia de glucógeno fosforilasa muscular, causando intolerancia al ejercicio.'
      }
    ]
  },
  {
    id: 'urea-cycle',
    name: 'Ciclo de la Urea',
    type: 'anabolic',
    description: 'Detoxificación del amoniaco mediante síntesis de urea',
    detailedDescription: 'Proceso metabólico esencial que convierte el amoniaco tóxico en urea, principalmente en el hígado, permitiendo la excreción segura del nitrógeno.',
    location: 'Hígado (mitocondria y citoplasma)',
    color: 'bg-indigo-500',
    icon: 'icon-recycle',
    totalGibbs: -15.1,
    keyEnzymes: ['CPS I', 'Ornitina transcarbamilasa', 'Argininosuccinato sintasa', 'Arginasa'],
    precursors: ['NH3', 'CO2', 'Aspartato', 'ATP'],
    products: ['Urea', 'Fumarato', 'AMP', 'PPi'],
    keyPoint: 'El ciclo de la urea es el único mecanismo para eliminar el exceso de nitrógeno en mamíferos, consumiendo 4 ATP por molécula de urea.',
    clinicalImportance: 'El ciclo de la urea es vital para prevenir la toxicidad por amoniaco, especialmente neurotoxicidad. Su disfunción causa hiperamonemia, que puede ser mortal causando edema cerebral, coma y muerte. Las deficiencias enzimáticas son emergencias metabólicas que requieren tratamiento inmediato. Es fundamental en el manejo de pacientes con insuficiencia hepática y trastornos del metabolismo proteico.',
    activationConditions: [
      'Ingesta proteica elevada (aminoácidos → NH₃)',
      'Catabolismo proteico (ayuno, enfermedad)',
      'Activación por N-acetilglutamato',
      'Disponibilidad de aspartato y ATP',
      'Función hepática normal',
      'Concentraciones adecuadas de cofactores'
    ],
    inhibitionFactors: [
      'Insuficiencia hepática severa',
      'Deficiencias de cofactores (Mg²⁺, biotina)',
      'Concentraciones bajas de aspartato',
      'Depleción de ATP (estado energético bajo)',
      'Inhibición por productos (urea alta)',
      'Toxinas hepáticas (alcohol, medicamentos)'
    ],
    pathwayInteractions: 'El ciclo de la urea se conecta con el metabolismo de aminoácidos recibiendo NH₃ de transaminaciones y desaminaciones. El aspartato proviene del ciclo de Krebs (transamination de oxaloacetato), conectando ambos ciclos. El fumarato producido puede reintegrarse al ciclo de Krebs. Se coordina con gluconeogénesis durante el catabolismo proteico, y su regulación está ligada al estado nutricional y función hepática.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de hiperamonemia, manejo de insuficiencia hepática, evaluación de deficiencias enzimáticas del ciclo, interpretación de niveles de amoniaco, hepatología.'
      },
      {
        profession: 'Enfermería',
        application: 'Monitoreo de pacientes con encefalopatía hepática, reconocimiento de signos de hiperamonemia, administración de tratamientos quelantes de amoniaco, cuidados intensivos.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de shunts portosistémicos, manejo de insuficiencia hepática en pequeños animales, evaluación de función hepática, toxicología.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión del metabolismo nitrogenado en plantas, optimización de fertilización nitrogenada, manejo de toxicidad por amoniaco en suelos.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en detoxificación metabólica, estudios de evolución del metabolismo nitrogenado, análisis de adaptaciones en diferentes especies.'
      },
      {
        profession: 'Nutriología',
        application: 'Manejo dietético en insuficiencia hepática, restricción proteica terapéutica, suplementación con aminoácidos ramificados, nutrición enteral.'
      },
      {
        profession: 'Estomatología',
        application: 'Reconocimiento de halitosis amoniacal, manejo de pacientes con insuficiencia hepática, prevención de complicaciones en cirugía oral.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de quelantes de amoniaco, diseño de hepatoprotectores, investigación en terapias para deficiencias enzimáticas, desarrollo de suplementos.'
      }
    ],
    precursorOrigins: [
      'NH3 del catabolismo de aminoácidos',
      'CO2 del metabolismo celular',
      'Aspartato de la transaminación',
      'ATP de la fosforilación oxidativa'
    ],
    productDestinations: [
      'Urea → Excreción renal',
      'Fumarato → Ciclo de Krebs',
      'Ornitina → Reciclaje en el ciclo',
      'AMP → Regeneración de ATP'
    ],
    reactions: [
      {
        name: 'Síntesis de carbamoil fosfato',
        equation: 'NH3 + CO2 + 2ATP → Carbamoil-P + 2ADP + Pi',
        enzyme: 'Carbamoil fosfato sintasa I (EC 6.3.4.16)',
        gibbs: -19.5,
        reversible: false,
        mechanism: 'Fosforilación de CO2 seguida de condensación con NH3',
        regulation: ['Activación por N-acetilglutamato', 'Inhibición por UMP']
      },
      {
        name: 'Formación de citrulina',
        equation: 'Carbamoil-P + Ornitina → Citrulina + Pi',
        enzyme: 'Ornitina transcarbamilasa (EC 2.1.3.3)',
        gibbs: -12.6,
        reversible: false,
        mechanism: 'Transferencia de carbamoil a ornitina',
        regulation: ['Inhibición competitiva por citrulina']
      },
      {
        name: 'Síntesis de argininosuccinato',
        equation: 'Citrulina + Aspartato + ATP → Argininosuccinato + AMP + PPi',
        enzyme: 'Argininosuccinato sintasa (EC 6.3.4.5)',
        gibbs: -14.2,
        reversible: false,
        mechanism: 'Activación por ATP y condensación',
        regulation: ['Inhibición por argininosuccinato']
      },
      {
        name: 'Escisión a arginina',
        equation: 'Argininosuccinato → Arginina + Fumarato',
        enzyme: 'Argininosuccinato liasa (EC 4.3.2.1)',
        gibbs: -5.5,
        reversible: false,
        mechanism: 'Eliminación β de fumarato',
        regulation: ['Actividad constitutiva']
      },
      {
        name: 'Hidrólisis final',
        equation: 'Arginina + H2O → Urea + Ornitina',
        enzyme: 'Arginasa (EC 3.5.3.1)',
        gibbs: -29.7,
        reversible: false,
        mechanism: 'Hidrólisis dependiente de Mn2+',
        regulation: ['Inhibición por ornitina']
      }
    ],
    quiz: [
      {
        question: '¿Cuántas moléculas de ATP se consumen por cada molécula de urea sintetizada?',
        options: ['2', '3', '4', '5'],
        correct: 2,
        explanation: 'Se consumen 4 ATP: 2 en CPS I, 1 en argininosuccinato sintasa (equivalente a 2 ATP por la hidrólisis de PPi), totalizando 4 ATP por urea.'
      },
      {
        question: '¿Cuál es la función principal del ciclo de la urea?',
        options: ['Síntesis de aminoácidos', 'Detoxificación del amoniaco', 'Producción de energía', 'Síntesis de proteínas'],
        correct: 1,
        explanation: 'El ciclo de la urea convierte el amoniaco tóxico en urea, que puede ser excretada de forma segura por los riñones.'
      },
      {
        question: '¿Dónde ocurre la primera reacción del ciclo de la urea?',
        options: ['Citoplasma', 'Matriz mitocondrial', 'Espacio intermembrana', 'Núcleo'],
        correct: 1,
        explanation: 'La carbamoil fosfato sintasa I (primera reacción) está localizada en la matriz mitocondrial.'
      },
      {
        question: '¿Qué activador alostérico requiere la CPS I?',
        options: ['ATP', 'N-acetilglutamato', 'Aspartato', 'Ornitina'],
        correct: 1,
        explanation: 'La CPS I requiere N-acetilglutamato como activador alostérico obligatorio para su actividad.'
      },
      {
        question: '¿Cuál es el principal órgano donde ocurre el ciclo de la urea?',
        options: ['Riñón', 'Hígado', 'Músculo', 'Cerebro'],
        correct: 1,
        explanation: 'El hígado es el principal sitio del ciclo de la urea, aunque también ocurre en menor medida en riñón e intestino.'
      },
      {
        question: '¿Qué aminoácido proporciona el segundo nitrógeno de la urea?',
        options: ['Alanina', 'Glutamina', 'Aspartato', 'Serina'],
        correct: 2,
        explanation: 'El aspartato proporciona el segundo átomo de nitrógeno que se incorpora en la urea a través de la reacción de argininosuccinato sintasa.'
      },
      {
        question: '¿Qué enfermedad resulta de la deficiencia de ornitina transcarbamilasa?',
        options: ['Aciduria argininosuccínica', 'Hiperamonemia tipo II', 'Deficiencia de arginasa', 'Citrullinemia'],
        correct: 1,
        explanation: 'La deficiencia de OTC causa hiperamonemia tipo II, caracterizada por niveles muy altos de amoniaco y ácido orótico en orina.'
      },
      {
        question: '¿Cuántos compartimentos celulares involucra el ciclo de la urea?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'El ciclo involucra dos compartimentos: las primeras dos reacciones en la mitocondria y las últimas tres en el citoplasma.'
      },
      {
        question: '¿Qué producto del ciclo de la urea puede reintegrarse al ciclo de Krebs?',
        options: ['Urea', 'Ornitina', 'Fumarato', 'Arginina'],
        correct: 2,
        explanation: 'El fumarato producido por la argininosuccinato liasa puede convertirse en malato y reintegrarse al ciclo de Krebs.'
      },
      {
        question: '¿Qué sucede con la concentración de amoniaco en deficiencias del ciclo de la urea?',
        options: ['Disminuye', 'Se mantiene normal', 'Aumenta peligrosamente', 'Se convierte en lactato'],
        correct: 2,
        explanation: 'Las deficiencias del ciclo causan hiperamonemia, que es neurotóxica y puede causar coma y muerte si no se trata.'
      }
    ]
  },
  {
    id: 'carnitine-shuttle',
    name: 'Sistema de Carnitina',
    type: 'transport',
    description: 'Transporte de ácidos grasos al interior mitocondrial',
    detailedDescription: 'Sistema de transporte especializado que permite el paso de ácidos grasos de cadena larga a través de la membrana mitocondrial interna para su β-oxidación.',
    location: 'Membrana mitocondrial interna',
    color: 'bg-teal-500',
    icon: 'icon-truck',
    totalGibbs: 0.8,
    keyEnzymes: ['CPT-I', 'Translocasa carnitina/acilcarnitina', 'CPT-II'],
    precursors: ['Acil-CoA', 'Carnitina', 'CoA-SH'],
    products: ['Acil-CoA mitocondrial', 'Carnitina libre'],
    keyPoint: 'La carnitina es esencial para el metabolismo de ácidos grasos, y CPT-I es el punto de control principal de la β-oxidación.',
    clinicalImportance: 'El sistema de carnitina es esencial para el metabolismo energético, especialmente durante ayuno y ejercicio. Su disfunción causa cardiomiopatía, debilidad muscular, hipoglucemia hipocetósica y acumulación de lípidos. Las deficiencias primarias y secundarias de carnitina son emergencias metabólicas. Es crucial para la función cardíaca y muscular normal.',
    activationConditions: [
      'Estado de ayuno (malonil-CoA bajo)',
      'Ejercicio prolongado (demanda energética)',
      'Activación simpática (catecolaminas)',
      'Disponibilidad adecuada de carnitina libre',
      'Concentraciones normales de CoA-SH',
      'Función mitocondrial normal'
    ],
    inhibitionFactors: [
      'Estado alimentado (malonil-CoA elevado)',
      'Deficiencia de carnitina (primaria o secundaria)',
      'Saturación del sistema de transporte',
      'Disfunción mitocondrial',
      'Inhibición farmacológica (valproato)',
      'Acumulación de acilcarnitinas tóxicas'
    ],
    pathwayInteractions: 'El sistema de carnitina es el puente esencial entre el metabolismo lipídico citoplásmico y mitocondrial. Se coordina con β-oxidación como su paso limitante, interactúa con síntesis de ácidos grasos mediante inhibición por malonil-CoA, y se conecta con gluconeogénesis durante ayuno. Su función está integrada con el metabolismo de aminoácidos (carnitina deriva de lisina y metionina) y con la regulación hormonal del metabolismo energético.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de deficiencias de carnitina, manejo de cardiomiopatías metabólicas, evaluación de miopatías, comprensión de trastornos mitocondriales, medicina deportiva.'
      },
      {
        profession: 'Enfermería',
        application: 'Administración de suplementos de carnitina, monitoreo de pacientes con trastornos metabólicos, reconocimiento de signos de deficiencia, cuidados cardiológicos.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de cardiomiopatía dilatada en perros, manejo de lipidosis hepática en gatos, evaluación del rendimiento en caballos de carreras, suplementación nutricional.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión del transporte de lípidos en semillas, optimización de contenido de aceites en cultivos oleaginosos, mejoramiento de eficiencia energética en plantas.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en transporte mitocondrial, estudios de bioenergética celular, análisis de adaptaciones metabólicas, biotecnología de sistemas de transporte.'
      },
      {
        profession: 'Nutriología',
        application: 'Suplementación con L-carnitina en atletas, diseño de dietas para optimizar metabolismo lipídico, manejo nutricional en deficiencias, nutrición deportiva.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo energético en tejidos orales, manejo de pacientes con trastornos mitocondriales, cicatrización en deficiencias metabólicas.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de análogos de carnitina, diseño de moduladores de CPT-I, investigación en terapias para deficiencias, desarrollo de suplementos nutricionales.'
      }
    ],
    precursorOrigins: [
      'Ácidos grasos activados en citoplasma',
      'Carnitina de la dieta o síntesis endógena',
      'CoA-SH mitocondrial',
      'ATP para activación inicial'
    ],
    productDestinations: [
      'Acil-CoA → β-oxidación mitocondrial',
      'Acetil-CoA → Ciclo de Krebs',
      'Carnitina → Reciclaje del sistema',
      'NADH y FADH2 → Cadena respiratoria'
    ],
    reactions: [
      {
        name: 'Formación de acilcarnitina',
        equation: 'Acil-CoA + Carnitina → Acilcarnitina + CoA-SH',
        enzyme: 'Carnitina palmitoiltransferasa I (CPT-I)',
        gibbs: 1.2,
        reversible: true,
        mechanism: 'Transferencia de acilo dependiente de carnitina',
        regulation: ['Inhibición por malonil-CoA', 'Activación por ayuno']
      },
      {
        name: 'Translocación',
        equation: 'Acilcarnitina(ext) + Carnitina(int) → Acilcarnitina(int) + Carnitina(ext)',
        enzyme: 'Translocasa carnitina/acilcarnitina',
        gibbs: 0.4,
        reversible: true,
        mechanism: 'Antiporte específico de carnitina',
        regulation: ['Actividad constitutiva']
      },
      {
        name: 'Regeneración de acil-CoA',
        equation: 'Acilcarnitina + CoA-SH → Acil-CoA + Carnitina',
        enzyme: 'Carnitina palmitoiltransferasa II (CPT-II)',
        gibbs: -0.8,
        reversible: true,
        mechanism: 'Transferencia de acilo a CoA mitocondrial',
        regulation: ['Disponibilidad de CoA-SH']
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la función principal del sistema de carnitina?',
        options: ['Síntesis de ácidos grasos', 'Transporte de ácidos grasos a mitocondrias', 'Oxidación de glucosa', 'Síntesis de ATP'],
        correct: 1,
        explanation: 'El sistema de carnitina transporta ácidos grasos de cadena larga desde el citoplasma al interior mitocondrial para su β-oxidación.'
      },
      {
        question: '¿Qué enzima cataliza el paso limitante del transporte de ácidos grasos?',
        options: ['CPT-II', 'CPT-I', 'Translocasa', 'Acil-CoA sintasa'],
        correct: 1,
        explanation: 'La CPT-I (carnitina palmitoiltransferasa I) cataliza el paso limitante y es el principal punto de regulación del sistema.'
      },
      {
        question: '¿Qué inhibe específicamente a la CPT-I?',
        options: ['Acetil-CoA', 'Malonil-CoA', 'Carnitina', 'CoA-SH'],
        correct: 1,
        explanation: 'El malonil-CoA inhibe específicamente a la CPT-I, coordinando la síntesis y oxidación de ácidos grasos.'
      },
      {
        question: '¿Dónde se localiza la CPT-I?',
        options: ['Matriz mitocondrial', 'Cara externa de membrana mitocondrial interna', 'Citoplasma', 'Cara interna de membrana mitocondrial interna'],
        correct: 1,
        explanation: 'La CPT-I está localizada en la cara externa de la membrana mitocondrial interna, accesible al malonil-CoA citoplásmico.'
      },
      {
        question: '¿Qué deficiencia causa cardiomiopatía y debilidad muscular?',
        options: ['Deficiencia de CPT-I', 'Deficiencia de carnitina', 'Deficiencia de CPT-II', 'Deficiencia de translocasa'],
        correct: 1,
        explanation: 'La deficiencia primaria de carnitina causa cardiomiopatía dilatada y debilidad muscular por incapacidad de oxidar ácidos grasos.'
      },
      {
        question: '¿Cuándo se activa principalmente el sistema de carnitina?',
        options: ['Estado alimentado', 'Durante el ayuno', 'Después de las comidas', 'Durante el sueño'],
        correct: 1,
        explanation: 'El sistema se activa durante el ayuno cuando disminuye la insulina y se reduce la síntesis de malonil-CoA.'
      },
      {
        question: '¿Qué ácidos grasos NO requieren el sistema de carnitina?',
        options: ['Cadena larga (>12C)', 'Cadena media (6-12C)', 'Cadena muy larga (>20C)', 'Todos requieren carnitina'],
        correct: 1,
        explanation: 'Los ácidos grasos de cadena media pueden atravesar la membrana mitocondrial directamente sin requerir el sistema de carnitina.'
      },
      {
        question: '¿Dónde se localiza la CPT-II?',
        options: ['Cara externa de membrana mitocondrial', 'Cara interna de membrana mitocondrial', 'Matriz mitocondrial', 'Citoplasma'],
        correct: 1,
        explanation: 'La CPT-II está en la cara interna de la membrana mitocondrial interna, regenerando acil-CoA en la matriz.'
      },
      {
        question: '¿Qué tipo de transporte realiza la translocasa carnitina/acilcarnitina?',
        options: ['Uniporte', 'Simporte', 'Antiporte', 'Transporte activo'],
        correct: 2,
        explanation: 'La translocasa realiza antiporte, intercambiando acilcarnitina por carnitina libre a través de la membrana mitocondrial interna.'
      },
      {
        question: '¿Qué sucede en la deficiencia de CPT-II?',
        options: ['Hipoglucemia', 'Acumulación de acilcarnitinas', 'Cardiomiopatía', 'Miopatía y rabdomiólisis'],
        correct: 3,
        explanation: 'La deficiencia de CPT-II causa miopatía y episodios de rabdomiólisis, especialmente durante ejercicio prolongado o ayuno.'
      }
    ]
  },
  {
    id: 'pentose-phosphate',
    name: 'Ruta de las Pentosas',
    type: 'anabolic',
    description: 'Generación de NADPH y ribosa-5-fosfato para biosíntesis',
    detailedDescription: 'La vía de las pentosas fosfato es una ruta metabólica paralela a la glucólisis que genera NADPH para biosíntesis reductiva y ribosa-5-fosfato para síntesis de nucleótidos.',
    location: 'Citoplasma',
    color: 'bg-pink-500',
    icon: 'icon-hexagon',
    totalGibbs: -12.2,
    keyEnzymes: ['Glucosa-6-fosfato deshidrogenasa', '6-fosfogluconato deshidrogenasa', 'Transcetolasa'],
    precursors: ['Glucosa-6-fosfato', 'NADP+', 'H2O'],
    products: ['NADPH', 'Ribosa-5-fosfato', 'CO2'],
    keyPoint: 'La vía de las pentosas es la principal fuente de NADPH citoplásmico para biosíntesis reductiva y defensa antioxidante.',
    clinicalImportance: 'La vía de las pentosas es esencial para la síntesis de ácidos grasos, colesterol, esteroides y nucleótidos. Su producto NADPH es crucial para mantener el glutatión reducido y la defensa antioxidante. Las deficiencias de G6PD causan anemia hemolítica, especialmente bajo estrés oxidativo. Es fundamental en células de rápida división y tejidos lipogénicos.',
    activationConditions: [
      'Demanda de NADPH para biosíntesis',
      'Síntesis activa de ácidos grasos',
      'Estrés oxidativo (defensa antioxidante)',
      'Proliferación celular (síntesis de nucleótidos)',
      'Estado alimentado (insulina alta)',
      'Actividad de tejidos esteroidogénicos'
    ],
    inhibitionFactors: [
      'Concentraciones altas de NADPH',
      'Inhibición por retroalimentación',
      'Estado de ayuno (baja demanda biosintética)',
      'Deficiencia de glucosa-6-fosfato',
      'Inhibición competitiva por ATP',
      'Daño oxidativo a enzimas clave'
    ],
    pathwayInteractions: 'La vía de las pentosas se ramifica de la glucólisis en glucosa-6-fosfato, proporcionando NADPH para síntesis de ácidos grasos, colesterol y esteroides. Sus productos se reintegran a glucólisis como fructosa-6-fosfato y gliceraldehído-3-fosfato. Se coordina con síntesis de nucleótidos proporcionando ribosa-5-fosfato, y con defensa antioxidante manteniendo glutatión reducido. Su actividad se correlaciona con estado nutricional y demandas biosintéticas.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Diagnóstico de deficiencia de G6PD, manejo de anemia hemolítica, comprensión de resistencia a antimálaricos, evaluación de estrés oxidativo, oncología (metabolismo tumoral).'
      },
      {
        profession: 'Enfermería',
        application: 'Reconocimiento de crisis hemolíticas en deficiencia de G6PD, administración segura de medicamentos oxidantes, educación sobre alimentos y fármacos a evitar.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de deficiencias enzimáticas en animales, manejo de estrés oxidativo, evaluación de la capacidad antioxidante, nutrición en animales de alto rendimiento.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión de síntesis de nucleótidos en plantas, optimización de resistencia al estrés oxidativo, mejoramiento de capacidad antioxidante en cultivos.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en metabolismo redox, estudios de proliferación celular, análisis de defensa antioxidante, biotecnología para producción de NADPH.'
      },
      {
        profession: 'Nutriología',
        application: 'Diseño de dietas ricas en antioxidantes, suplementación en deficiencia de G6PD, optimización del metabolismo en síntesis de lípidos.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo antioxidante oral, manejo de pacientes con deficiencia de G6PD, cicatrización en condiciones de estrés oxidativo.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de antioxidantes, diseño de moduladores de la vía, investigación en terapias para deficiencias enzimáticas, desarrollo de pro-fármacos.'
      }
    ],
    reactions: [
      {
        name: 'Oxidación de G6P',
        equation: 'Glucosa-6-fosfato + NADP+ → 6-fosfogluconolactona + NADPH + H+',
        enzyme: 'Glucosa-6-fosfato deshidrogenasa (EC 1.1.1.49)',
        gibbs: -17.6,
        reversible: false,
        mechanism: 'Oxidación del carbono 1 con reducción de NADP+',
        regulation: ['Inhibición por NADPH', 'Activación por NADP+']
      },
      {
        name: 'Hidrólisis de lactona',
        equation: '6-fosfogluconolactona + H2O → 6-fosfogluconato',
        enzyme: 'Lactonasa',
        gibbs: -21.0,
        reversible: false,
        mechanism: 'Hidrólisis espontánea o catalizada',
        regulation: ['Actividad constitutiva']
      },
      {
        name: 'Descarboxilación oxidativa',
        equation: '6-fosfogluconato + NADP+ → Ribulosa-5-fosfato + NADPH + H+ + CO2',
        enzyme: '6-fosfogluconato deshidrogenasa (EC 1.1.1.44)',
        gibbs: -8.9,
        reversible: false,
        mechanism: 'Oxidación seguida de descarboxilación',
        regulation: ['Inhibición por NADPH']
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la función principal de la vía de las pentosas fosfato?',
        options: ['Producir ATP', 'Generar NADPH para biosíntesis', 'Degradar glucosa', 'Sintetizar proteínas'],
        correct: 1,
        explanation: 'La vía de las pentosas produce NADPH, esencial para biosíntesis reductiva (ácidos grasos, colesterol) y defensa antioxidante.'
      },
      {
        question: '¿Qué enfermedad está asociada con la deficiencia de G6PD?',
        options: ['Diabetes', 'Anemia hemolítica', 'Hipertensión', 'Obesidad'],
        correct: 1,
        explanation: 'La deficiencia de G6PD causa anemia hemolítica, especialmente bajo estrés oxidativo, debido a la falta de NADPH para mantener glutatión reducido.'
      },
      {
        question: '¿Dónde se ramifica la vía de las pentosas de la glucólisis?',
        options: ['Fructosa-6-fosfato', 'Glucosa-6-fosfato', 'Piruvato', 'Gliceraldehído-3-fosfato'],
        correct: 1,
        explanation: 'La vía de las pentosas se ramifica de la glucólisis en glucosa-6-fosfato, el primer intermediario de la glucólisis.'
      },
      {
        question: '¿Cuántas moléculas de NADPH se producen en la fase oxidativa?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'Se producen 2 NADPH en la fase oxidativa: uno en la reacción de G6PD y otro en 6-fosfogluconato deshidrogenasa.'
      },
      {
        question: '¿Qué azúcar de 5 carbonos se produce en esta vía?',
        options: ['Arabinosa', 'Xilosa', 'Ribosa-5-fosfato', 'Lixosa'],
        correct: 2,
        explanation: 'La ribosa-5-fosfato es el producto principal, esencial para la síntesis de nucleótidos y ácidos nucleicos.'
      }
    ]
  },
  {
    id: 'triglyceride-biosynthesis',
    name: 'Biosíntesis de Triglicéridos',
    type: 'anabolic',
    description: 'Síntesis de triglicéridos para almacenamiento energético',
    detailedDescription: 'Proceso anabólico que sintetiza triglicéridos a partir de glicerol-3-fosfato y ácidos grasos activados, constituyendo la principal forma de almacenamiento energético en el organismo.',
    location: 'Retículo endoplásmico, tejido adiposo',
    color: 'bg-amber-500',
    icon: 'icon-droplets',
    totalGibbs: -12.5,
    keyEnzymes: ['Glicerol-3-fosfato aciltransferasa', 'Ácido fosfatídico fosfatasa', 'Diacilglicerol aciltransferasa'],
    precursors: ['Glicerol-3-fosfato', 'Acil-CoA', 'ATP'],
    products: ['Triglicéridos', 'CoA-SH', 'Pi'],
    keyPoint: 'La síntesis de triglicéridos es el mecanismo principal de almacenamiento de energía a largo plazo en el organismo.',
    clinicalImportance: 'La biosíntesis de triglicéridos es fundamental para el almacenamiento energético y la homeostasis metabólica. Su desregulación causa obesidad, diabetes tipo 2, esteatosis hepática y dislipidemia. Es crucial en el desarrollo de síndrome metabólico y enfermedad cardiovascular. Su comprensión es esencial para el manejo de trastornos del metabolismo lipídico.',
    activationConditions: [
      'Estado alimentado (insulina elevada)',
      'Exceso de carbohidratos en la dieta',
      'Disponibilidad de ácidos grasos',
      'Activación de SREBP-1c',
      'Concentraciones altas de glucosa',
      'Señalización anabólica (mTOR activa)'
    ],
    inhibitionFactors: [
      'Estado de ayuno (glucagón elevado)',
      'Activación de AMPK (estado catabólico)',
      'Concentraciones altas de AMPc',
      'Deficiencia de sustrato (glicerol-3-P)',
      'Inhibición por ácidos grasos libres',
      'Estrés del retículo endoplásmico'
    ],
    pathwayInteractions: 'La síntesis de triglicéridos integra múltiples rutas metabólicas: recibe glicerol-3-fosfato de la glucólisis, ácidos grasos de la síntesis de novo o dieta, y se regula coordinadamente con glucólisis, lipogénesis y gluconeogénesis. Se conecta con el metabolismo de lipoproteínas para transporte, y con la lipolisis para movilización energética. Su regulación está integrada con señalización hormonal (insulina/glucagón) y estado nutricional.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Manejo de obesidad y síndrome metabólico, diagnóstico de esteatosis hepática, control de dislipidemia, prevención cardiovascular, endocrinología.'
      },
      {
        profession: 'Enfermería',
        application: 'Educación nutricional en diabetes, monitoreo de peso y composición corporal, administración de hipolipemiantes, cuidados en síndrome metabólico.'
      },
      {
        profession: 'Veterinaria',
        application: 'Manejo de obesidad en mascotas, diagnóstico de lipidosis hepática, evaluación del estado nutricional, medicina de animales de producción.'
      },
      {
        profession: 'Agronomía',
        application: 'Optimización del contenido lipídico en semillas oleaginosas, mejoramiento de cultivos para producción de aceites, biofortificación lipídica.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en metabolismo lipídico, estudios de adipogénesis, análisis de regulación metabólica, biotecnología de lípidos.'
      },
      {
        profession: 'Nutriología',
        application: 'Diseño de dietas para control de peso, manejo nutricional de dislipidemia, planificación de macronutrientes, educación en grasas saludables.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo lipídico oral, manejo de pacientes con síndrome metabólico, cicatrización en obesidad.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de inhibidores de síntesis lipídica, diseño de hipolipemiantes, investigación en moduladores metabólicos, desarrollo de nutracéuticos.'
      }
    ],
    reactions: [
      {
        name: 'Primera acilación',
        equation: 'Glicerol-3-fosfato + Acil-CoA → Ácido lisofosfatídico + CoA-SH',
        enzyme: 'Glicerol-3-fosfato aciltransferasa (GPAT)',
        gibbs: -8.4,
        reversible: false,
        mechanism: 'Transferencia de acilo al carbono 1 del glicerol',
        regulation: ['Inhibición por insulina', 'Activación por glucagón']
      },
      {
        name: 'Segunda acilación',
        equation: 'Ácido lisofosfatídico + Acil-CoA → Ácido fosfatídico + CoA-SH',
        enzyme: 'Ácido lisofosfatídico aciltransferasa (LPAAT)',
        gibbs: -7.2,
        reversible: false,
        mechanism: 'Transferencia de acilo al carbono 2 del glicerol',
        regulation: ['Regulación por disponibilidad de sustrato']
      },
      {
        name: 'Desfosforilación',
        equation: 'Ácido fosfatídico + H2O → Diacilglicerol + Pi',
        enzyme: 'Ácido fosfatídico fosfatasa (PAP)',
        gibbs: -12.1,
        reversible: false,
        mechanism: 'Hidrólisis del fosfato',
        regulation: ['Activación por insulina']
      },
      {
        name: 'Tercera acilación',
        equation: 'Diacilglicerol + Acil-CoA → Triglicérido + CoA-SH',
        enzyme: 'Diacilglicerol aciltransferasa (DGAT)',
        gibbs: -6.8,
        reversible: false,
        mechanism: 'Transferencia final de acilo al carbono 3',
        regulation: ['Activación por insulina', 'Inhibición por AMPc']
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la enzima limitante en la síntesis de triglicéridos?',
        options: ['DGAT', 'GPAT', 'LPAAT', 'PAP'],
        correct: 1,
        explanation: 'GPAT (glicerol-3-fosfato aciltransferasa) es la enzima limitante y principal punto de regulación en la síntesis de triglicéridos.'
      },
      {
        question: '¿Dónde ocurre principalmente la síntesis de triglicéridos?',
        options: ['Mitocondrias', 'Citoplasma', 'Retículo endoplásmico', 'Núcleo'],
        correct: 2,
        explanation: 'La síntesis de triglicéridos ocurre en el retículo endoplásmico, donde están localizadas las enzimas clave del proceso.'
      },
      {
        question: '¿Qué hormona estimula la síntesis de triglicéridos?',
        options: ['Glucagón', 'Cortisol', 'Insulina', 'Adrenalina'],
        correct: 2,
        explanation: 'La insulina estimula la síntesis de triglicéridos activando las enzimas clave y promoviendo el estado anabólico.'
      },
      {
        question: '¿Cuántas moléculas de acil-CoA se requieren para un triglicérido?',
        options: ['1', '2', '3', '4'],
        correct: 2,
        explanation: 'Se requieren 3 moléculas de acil-CoA para esterificar las tres posiciones del glicerol en un triglicérido.'
      },
      {
        question: '¿Qué patología está asociada con el exceso de síntesis de triglicéridos?',
        options: ['Anemia', 'Obesidad', 'Osteoporosis', 'Anorexia'],
        correct: 1,
        explanation: 'El exceso de síntesis de triglicéridos está directamente asociado con obesidad y acumulación de grasa corporal.'
      }
    ]
  },
  {
    id: 'cholesterol-biosynthesis',
    name: 'Biosíntesis del Colesterol',
    type: 'anabolic',
    description: 'Síntesis de colesterol para membranas y hormonas esteroideas',
    detailedDescription: 'Compleja ruta anabólica que sintetiza colesterol a partir de acetil-CoA, fundamental para la estructura de membranas celulares y precursor de hormonas esteroideas y ácidos biliares.',
    location: 'Retículo endoplásmico liso, hígado',
    color: 'bg-violet-500',
    icon: 'icon-layers',
    totalGibbs: -18.6,
    keyEnzymes: ['HMG-CoA reductasa', 'Escualeno sintasa', 'Lanosterol 14α-desmetilasa'],
    precursors: ['Acetil-CoA', 'NADPH', 'ATP', 'O2'],
    products: ['Colesterol', 'NADP+', 'CoA-SH', 'CO2'],
    keyPoint: 'La HMG-CoA reductasa es la enzima limitante y principal punto de control en la síntesis de colesterol.',
    clinicalImportance: 'La biosíntesis de colesterol es fundamental para la integridad de membranas celulares y síntesis de hormonas esteroideas. Su desregulación causa hipercolesterolemia, aterosclerosis y enfermedad cardiovascular. Es el blanco terapéutico de las estatinas. Su comprensión es crucial para el manejo de dislipidemia y prevención cardiovascular.',
    activationConditions: [
      'Estado alimentado (insulina elevada)',
      'Depleción de colesterol celular',
      'Activación de SREBP-2',
      'Demanda de síntesis de membranas',
      'Proliferación celular activa',
      'Síntesis de hormonas esteroideas'
    ],
    inhibitionFactors: [
      'Concentraciones altas de colesterol',
      'Estado de ayuno (baja insulina)',
      'Inhibición por estatinas',
      'Retroalimentación negativa por colesterol',
      'Activación de AMPK',
      'Glucagón elevado'
    ],
    pathwayInteractions: 'La síntesis de colesterol se integra con múltiples rutas: recibe acetil-CoA de glucólisis, β-oxidación y aminoácidos, requiere NADPH de la vía de las pentosas, y se coordina con síntesis de ácidos grasos. Sus productos alimentan síntesis de hormonas esteroideas, ácidos biliares y ésteres de colesterol. Se regula coordinadamente con captación de LDL y está integrada con homeostasis lipídica general.',
    professionalRelevance: [
      {
        profession: 'Medicina Clínica',
        application: 'Manejo de hipercolesterolemia, prescripción de estatinas, prevención cardiovascular, diagnóstico de dislipidemias familiares, cardiología preventiva.'
      },
      {
        profession: 'Enfermería',
        application: 'Educación sobre factores de riesgo cardiovascular, administración de hipolipemiantes, monitoreo de efectos adversos de estatinas, promoción de estilos de vida saludables.'
      },
      {
        profession: 'Veterinaria',
        application: 'Diagnóstico de trastornos lipídicos en animales, manejo nutricional para control de colesterol, medicina preventiva en animales de compañía.'
      },
      {
        profession: 'Agronomía',
        application: 'Comprensión de síntesis de esteroles en plantas, mejoramiento de cultivos para contenido de fitoesteroles, biofortificación con compuestos beneficiosos.'
      },
      {
        profession: 'Biología',
        application: 'Investigación en metabolismo de esteroles, estudios de regulación génica, análisis de evolución de rutas biosintéticas, biotecnología de esteroides.'
      },
      {
        profession: 'Nutriología',
        application: 'Diseño de dietas hipolipemiantes, educación sobre colesterol dietético vs endógeno, planificación nutricional para prevención cardiovascular.'
      },
      {
        profession: 'Estomatología',
        application: 'Comprensión del metabolismo lipídico en salud oral, manejo de pacientes con dislipidemia, prevención de enfermedad periodontal en riesgo cardiovascular.'
      },
      {
        profession: 'Química Farmacobiológica',
        application: 'Desarrollo de inhibidores de HMG-CoA reductasa, diseño de moduladores de síntesis de colesterol, investigación en nuevos hipolipemiantes.'
      }
    ],
    reactions: [
      {
        name: 'Síntesis de HMG-CoA',
        equation: 'Acetoacetil-CoA + Acetil-CoA + H2O → HMG-CoA + CoA-SH',
        enzyme: 'HMG-CoA sintasa',
        gibbs: -31.4,
        reversible: false,
        mechanism: 'Condensación aldólica entre acetoacetil-CoA y acetil-CoA',
        regulation: ['Regulación por disponibilidad de sustrato']
      },
      {
        name: 'Reducción a mevalonato',
        equation: 'HMG-CoA + 2NADPH + 2H+ → Mevalonato + 2NADP+ + CoA-SH',
        enzyme: 'HMG-CoA reductasa (EC 1.1.1.34)',
        gibbs: -20.5,
        reversible: false,
        mechanism: 'Reducción en dos pasos con intermediario aldehído',
        regulation: ['Inhibición por colesterol', 'Inhibición por estatinas', 'Regulación transcripcional por SREBP-2']
      },
      {
        name: 'Fosforilación de mevalonato',
        equation: 'Mevalonato + ATP → 5-fosfomevalonato + ADP',
        enzyme: 'Mevalonato quinasa',
        gibbs: -16.7,
        reversible: false,
        mechanism: 'Fosforilación del grupo hidroxilo terminal',
        regulation: ['Actividad constitutiva']
      },
      {
        name: 'Formación de escualeno',
        equation: '2 Farnesil-PP → Escualeno + 2PPi',
        enzyme: 'Escualeno sintasa',
        gibbs: -12.1,
        reversible: false,
        mechanism: 'Condensación reductiva de dos moléculas de farnesil-PP',
        regulation: ['Regulación por SREBP-2']
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la enzima limitante en la síntesis de colesterol?',
        options: ['Acetil-CoA carboxilasa', 'HMG-CoA reductasa', 'Escualeno sintasa', 'Mevalonato quinasa'],
        correct: 1,
        explanation: 'HMG-CoA reductasa es la enzima limitante y principal punto de control en la síntesis de colesterol, blanco de las estatinas.'
      },
      {
        question: '¿Cuántas moléculas de acetil-CoA se requieren para sintetizar una molécula de colesterol?',
        options: ['6', '12', '18', '24'],
        correct: 2,
        explanation: 'Se requieren 18 moléculas de acetil-CoA para sintetizar una molécula de colesterol (C27).'
      },
      {
        question: '¿Qué cofactor es esencial para la HMG-CoA reductasa?',
        options: ['NADH', 'FADH2', 'NADPH', 'ATP'],
        correct: 2,
        explanation: 'La HMG-CoA reductasa requiere NADPH como cofactor para la reducción de HMG-CoA a mevalonato.'
      },
      {
        question: '¿Cómo actúan las estatinas?',
        options: ['Inhiben la absorción de colesterol', 'Inhiben HMG-CoA reductasa', 'Activan la excreción biliar', 'Bloquean receptores de LDL'],
        correct: 1,
        explanation: 'Las estatinas son inhibidores competitivos de la HMG-CoA reductasa, bloqueando la síntesis endógena de colesterol.'
      },
      {
        question: '¿Qué regula negativamente la síntesis de colesterol?',
        options: ['Insulina', 'El propio colesterol', 'Glucagón', 'Cortisol'],
        correct: 1,
        explanation: 'El colesterol regula negativamente su propia síntesis mediante retroalimentación negativa sobre HMG-CoA reductasa.'
      }
    ]
  }
];
