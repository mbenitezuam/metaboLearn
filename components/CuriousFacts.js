function CuriousFacts(props) {
  try {
    const { pathway } = props || {};
    
    if (!pathway || !pathway.id) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6" data-name="curious-facts" data-file="components/CuriousFacts.js">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="icon-lightbulb text-yellow-500 mr-3"></div>
            Datos Curiosos
          </h2>
          <p className="text-gray-600">Selecciona una ruta metabólica para ver datos curiosos.</p>
        </div>
      );
    }

    // Pathway-specific curious facts
    const pathwayFacts = {
      glycolysis: [
        {
          title: "La Hexoquinasa Cerebral",
          content: "El cerebro tiene una isoforma especial de hexoquinasa (tipo I) que tiene mayor afinidad por la glucosa, asegurando el suministro energético prioritario al tejido nervioso.",
          icon: "brain"
        },
        {
          title: "Glucólisis en Cáncer",
          content: "Las células cancerosas utilizan glucólisis incluso en presencia de oxígeno (efecto Warburg), consumiendo hasta 10 veces más glucosa que las células normales.",
          icon: "activity"
        },
        {
          title: "El Músculo en Ejercicio",
          content: "Durante ejercicio intenso, el músculo puede aumentar su tasa glucolítica hasta 1000 veces, produciendo lactato que el hígado convierte nuevamente en glucosa.",
          icon: "zap"
        },
        {
          title: "Eritrocitos Únicos",
          content: "Los glóbulos rojos carecen de mitocondrias, por lo que dependen exclusivamente de la glucólisis para obtener ATP, procesando unos 2.4 moles de glucosa por día.",
          icon: "droplet"
        }
      ],
      krebs: [
        {
          title: "El Ciclo Evolutivo",
          content: "El ciclo de Krebs es tan antiguo que se cree existía antes del oxígeno atmosférico, funcionando de manera reversa para sintetizar compuestos orgánicos.",
          icon: "refresh-cw"
        },
        {
          title: "Corazón Incansable",
          content: "El músculo cardíaco obtiene 95% de su energía del ciclo de Krebs, procesando el equivalente a su propio peso en ATP cada día.",
          icon: "heart"
        },
        {
          title: "Regulación por Calcio",
          content: "El Ca²⁺ activa tres enzimas del ciclo simultáneamente, coordinando la producción de ATP con la contracción muscular y señalización celular.",
          icon: "settings"
        },
        {
          title: "Versatilidad Metabólica",
          content: "Aunque se llama 'ciclo', puede funcionar como una 'espiral' cuando sus intermediarios se desvían hacia biosíntesis, siendo reabastecido por reacciones anapleróticas.",
          icon: "shuffle"
        }
      ],
      "electron-transport": [
        {
          title: "Eficiencia Energética",
          content: "La cadena respiratoria convierte aproximadamente 38% de la energía química en ATP, siendo más eficiente que la mayoría de motores artificiales.",
          icon: "zap"
        },
        {
          title: "Producción de Calor",
          content: "En tejido adiposo marrón, la proteína UCP1 desacopla la cadena respiratoria para generar calor, crucial para la termorregulación en recién nacidos.",
          icon: "thermometer"
        },
        {
          title: "Especies Reactivas",
          content: "Aproximadamente 1-2% del oxígeno consumido se convierte en especies reactivas (ROS), que aunque potencialmente dañinas, también actúan como moléculas señalizadoras.",
          icon: "alert-triangle"
        },
        {
          title: "Adaptación a la Altura",
          content: "En personas adaptadas a grandes altitudes, las mitocondrias aumentan en número y eficiencia para compensar la menor disponibilidad de oxígeno.",
          icon: "mountain"
        }
      ],
      "fatty-acid-oxidation": [
        {
          title: "Combustible de Larga Duración",
          content: "Los ácidos grasos proporcionan 2.3 veces más ATP por gramo que los carbohidratos, siendo el combustible preferido durante ayuno prolongado.",
          icon: "battery"
        },
        {
          title: "Migración Animal",
          content: "Las aves migratorias pueden duplicar su masa grasa antes de vuelos transoceánicos, utilizando β-oxidación para vuelos de hasta 100 horas sin parar.",
          icon: "feather"
        },
        {
          title: "Ayuno Adaptativo",
          content: "Después de 12-16 horas de ayuno, el hígado puede obtener hasta 80% de su energía de β-oxidación, preservando glucosa para el cerebro.",
          icon: "clock"
        },
        {
          title: "Corazón Lipívoro",
          content: "El músculo cardíaco obtiene 60-70% de su energía de ácidos grasos, cambiando a glucosa solo durante isquemia o ejercicio intenso.",
          icon: "heart"
        }
      ],
      gluconeogenesis: [
        {
          title: "Supervivencia en Ayuno",
          content: "Durante ayuno prolongado, la gluconeogénesis puede producir hasta 150g de glucosa diarios, principalmente a partir de aminoácidos musculares.",
          icon: "shield"
        },
        {
          title: "Ciclo de Cori",
          content: "El lactato muscular viaja al hígado para convertirse en glucosa, creando un 'reciclaje energético' que puede manejar hasta 40g de lactato por hora durante ejercicio.",
          icon: "recycle"
        },
        {
          title: "Regulación Inteligente",
          content: "La gluconeogénesis nunca ocurre simultáneamente con glucólisis en la misma célula, evitando 'ciclos fútiles' mediante regulación hormonal precisa.",
          icon: "cpu"
        },
        {
          title: "Adaptación Neonatal",
          content: "Los recién nacidos tienen gluconeogénesis hepática muy activa desde el nacimiento, compensando la transición de glucosa placentaria a alimentación intermitente.",
          icon: "baby"
        }
      ],
      glycogenolysis: [
        {
          title: "Respuesta Ultrarrápida",
          content: "La glucogenólisis puede activarse en segundos mediante fosforilación enzimática, liberando glucosa 100 veces más rápido que la gluconeogénesis.",
          icon: "zap"
        },
        {
          title: "Reserva Estratégica",
          content: "El glucógeno muscular (400g) solo se usa localmente, mientras que el hepático (100g) mantiene la glucemia de todo el organismo.",
          icon: "database"
        },
        {
          title: "Estructura Fractal",
          content: "El glucógeno tiene estructura ramificada fractal que permite liberación simultánea desde múltiples puntos, maximizando la velocidad de movilización.",
          icon: "git-branch"
        },
        {
          title: "Señal de Adrenalina",
          content: "Una sola molécula de adrenalina puede activar la liberación de 10⁸ moléculas de glucosa mediante amplificación en cascada de segundos mensajeros.",
          icon: "radio"
        }
      ],
      "urea-cycle": [
        {
          title: "Detoxificación Vital",
          content: "El hígado procesa 15-20g de nitrógeno diarios mediante el ciclo de urea, evitando concentraciones de amoniaco que serían letales en 24 horas.",
          icon: "shield"
        },
        {
          title: "Compartimentalización",
          content: "Es el único ciclo metabólico que ocurre en dos compartimentos celulares: mitocondria y citoplasma, requiriendo transportadores específicos.",
          icon: "layers"
        },
        {
          title: "Evolución Acuática",
          content: "Los peces excretan amoniaco directamente por las branquias, pero los mamíferos evolucionaron el ciclo de urea para conservar agua en ambientes terrestres.",
          icon: "fish"
        },
        {
          title: "Costo Energético",
          content: "Convertir amoniaco en urea consume 4 ATP por molécula, representando hasta 20% del gasto energético hepático en dietas ricas en proteínas.",
          icon: "dollar-sign"
        }
      ],
      "carnitine-shuttle": [
        {
          title: "Llave Mitocondrial",
          content: "La carnitina es la única molécula que puede transportar ácidos grasos de cadena larga al interior mitocondrial, actuando como 'llave' del metabolismo lipídico.",
          icon: "key"
        },
        {
          title: "Síntesis Endógena",
          content: "El cuerpo sintetiza carnitina a partir de lisina y metionina en hígado y riñón, pero los vegetarianos estrictos pueden tener niveles 20% menores.",
          icon: "leaf"
        },
        {
          title: "Adaptación Cardíaca",
          content: "El corazón contiene las concentraciones más altas de carnitina del organismo, reflejando su dependencia casi absoluta del metabolismo de ácidos grasos.",
          icon: "heart"
        },
        {
          title: "Transporte Selectivo",
          content: "CPT-I tiene especificidad por ácidos grasos de 12-18 carbonos, mientras que los de cadena media (<12C) no requieren carnitina y entran directamente.",
          icon: "filter"
        }
      ],
      "pentose-phosphate": [
        {
          title: "Defensa Antioxidante",
          content: "La vía de pentosas es la única fuente de NADPH en eritrocitos, esencial para mantener glutatión reducido y proteger contra estrés oxidativo.",
          icon: "shield"
        },
        {
          title: "Proliferación Celular",
          content: "Las células cancerosas pueden aumentar la actividad de G6PD hasta 10 veces para generar NADPH necesario para síntesis de ácidos nucleicos.",
          icon: "trending-up"
        },
        {
          title: "Adaptación Geográfica",
          content: "La deficiencia de G6PD protege contra malaria, explicando su alta frecuencia (8%) en regiones endémicas de África y Mediterráneo.",
          icon: "map"
        },
        {
          title: "Regulación Metabólica",
          content: "La relación NADP+/NADPH regula automáticamente el flujo de la vía: cuando hay demanda de NADPH, la vía se activa instantáneamente.",
          icon: "settings"
        }
      ],
      "triglyceride-biosynthesis": [
        {
          title: "Almacenamiento Eficiente",
          content: "Los triglicéridos almacenan 6 veces más energía por gramo que glucógeno debido a su naturaleza anhidra y mayor contenido calórico.",
          icon: "archive"
        },
        {
          title: "Adipocitos Expandibles",
          content: "Los adipocitos pueden aumentar su volumen hasta 1000 veces llenándose de triglicéridos, siendo las células más variables del organismo.",
          icon: "maximize"
        },
        {
          title: "Regulación Hormonal",
          content: "La insulina activa simultáneamente la síntesis de triglicéridos e inhibe su degradación, creando un 'interruptor metabólico' perfecto.",
          icon: "toggle-right"
        },
        {
          title: "Lipogénesis de Novo",
          content: "En humanos modernos, hasta 30% de los triglicéridos hepáticos pueden sintetizarse a partir de carbohidratos, proceso casi inexistente en ayuno.",
          icon: "plus-circle"
        }
      ],
      "cholesterol-biosynthesis": [
        {
          title: "Molécula Compleja",
          content: "El colesterol requiere 37 pasos enzimáticos y 18 moléculas de acetil-CoA, siendo una de las biosíntesis más complejas del organismo.",
          icon: "hexagon"
        },
        {
          title: "Ritmo Circadiano",
          content: "La síntesis de colesterol sigue ritmo circadiano, siendo máxima entre medianoche y amanecer cuando la HMG-CoA reductasa está más activa.",
          icon: "moon"
        },
        {
          title: "Retroalimentación Perfecta",
          content: "El colesterol regula su propia síntesis con precisión: un aumento de 10% en colesterol celular reduce la síntesis en 50%.",
          icon: "refresh-ccw"
        },
        {
          title: "Precursor Universal",
          content: "Del colesterol derivan todas las hormonas esteroideas: cortisol, testosterona, estrógenos y aldosterona, además de ácidos biliares y vitamina D.",
          icon: "git-branch"
        }
      ]
    };

    const facts = pathwayFacts[pathway?.id] || [];
    
    if (facts.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6" data-name="curious-facts" data-file="components/CuriousFacts.js">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="icon-lightbulb text-yellow-500 mr-3"></div>
            Datos Curiosos
          </h2>
          <p className="text-gray-600">No hay datos curiosos disponibles para esta ruta metabólica.</p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-6" data-name="curious-facts" data-file="components/CuriousFacts.js">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="icon-lightbulb text-yellow-500 mr-3"></div>
          Datos Curiosos: {pathway.name}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className={`icon-${fact.icon} text-white`}></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{fact.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{fact.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">💡 ¿Sabías que...?</h3>
          <p className="text-blue-800 text-sm">
            {(() => {
              switch(pathway?.id) {
                case 'glycolysis':
                  return 'La glucólisis es tan antigua que evolucionó hace más de 3.5 mil millones de años, antes de que existiera oxígeno en la atmósfera. Algunos organismos como Pyrococcus furiosus (arquea hipertermófila) han modificado esta ruta para funcionar a temperaturas superiores a 100°C utilizando enzimas únicas resistentes al calor.';
                
                case 'krebs':
                  return 'El ciclo de Krebs puede funcionar de manera reversa en algunas bacterias autótrofas como Aquifex aeolicus, utilizándolo para fijar CO₂ y sintetizar compuestos orgánicos. Curiosamente, las plantas C4 como el maíz han "secuestrado" parte de este ciclo en diferentes compartimentos celulares para optimizar la fotosíntesis.';
                
                case 'electron-transport':
                  return 'Algunas bacterias extremófilas como Shewanella oneidensis pueden usar metales como hierro o manganeso como aceptores finales de electrones en lugar de oxígeno. Los tardígrados pueden sobrevivir décadas sin respiración celular, entrando en criptobiosis y reactivando su cadena respiratoria cuando las condiciones mejoran.';
                
                case 'fatty-acid-oxidation':
                  return 'Los colibríes han evolucionado una β-oxidación súper eficiente que les permite metabolizar grasas a velocidades 10 veces superiores a otros vertebrados. En contraste, los tiburones de Groenlandia carecen de β-oxidación eficiente para ciertos ácidos grasos, acumulando TMAO que actúa como anticongelante natural.';
                
                case 'gluconeogenesis':
                  return 'Los osos en hibernación mantienen niveles normales de glucosa sin comer durante 6 meses gracias a una gluconeogénesis ultra-eficiente desde aminoácidos reciclados. Las plantas carnívoras como Venus atrapamoscas usan gluconeogénesis para convertir las proteínas de sus presas en azúcares para crecimiento.';
                
                case 'glycogenolysis':
                  return 'Los camarones mantis tienen la glucogenólisis más rápida del reino animal, liberando energía en microsegundos para sus golpes devastadores. Algunas levaduras como Saccharomyces cerevisiae han perdido completamente la capacidad de almacenar glucógeno, dependiendo exclusivamente de azúcares externos.';
                
                case 'urea-cycle':
                  return 'Los tiburones y rayas nunca desarrollaron el ciclo de la urea completo, reteniendo urea como osmorregulador para vivir en agua salada. Los ornitorrincos tienen una versión modificada que produce alantoína en lugar de urea, herencia de su ancestro reptiliano común con las aves.';
                
                case 'carnitine-shuttle':
                  return 'Los pingüinos emperador han desarrollado concentraciones de carnitina 50 veces superiores a otros vertebrados para metabolizar grasa durante ayunos de 4 meses en la Antártida. Algunas plantas como el aguacate sintetizan carnitina en sus frutos para facilitar la germinación rica en lípidos.';
                
                case 'pentose-phosphate':
                  return 'La vía de pentosas evolucionó independientemente al menos 3 veces en diferentes dominios de la vida. Los parásitos de la malaria (Plasmodium) dependen críticamente de esta vía y carecen de rutas alternativas para generar NADPH, convirtiéndola en un blanco terapéutico único.';
                
                case 'triglyceride-biosynthesis':
                  return 'Las ballenas azules pueden sintetizar hasta 150 kg de grasa por día durante la temporada de alimentación. En el extremo opuesto, los colibrís han perdido casi completamente la capacidad de sintetizar y almacenar triglicéridos, viviendo al borde del colapso energético constantemente.';
                
                case 'cholesterol-biosynthesis':
                  return 'Las plantas nunca desarrollaron síntesis de colesterol, usando fitoesteroles como sustitutos funcionales. Los insectos perdieron la capacidad de sintetizar esteroles durante su evolución y deben obtenerlos de su dieta, razón por la cual algunos son vectores de enfermedades al buscar sangre rica en colesterol.';
                
                default:
                  return 'Esta ruta metabólica representa millones de años de evolución bioquímica finamente ajustada, con variaciones fascinantes entre diferentes formas de vida que revelan la increíble diversidad de soluciones que la naturaleza ha desarrollado para los mismos desafíos metabólicos.';
              }
            })()}
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CuriousFacts component error:', error);
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.CuriousFacts = CuriousFacts;
}
