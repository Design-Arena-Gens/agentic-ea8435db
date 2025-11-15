import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Nachricht erforderlich' },
        { status: 400 }
      )
    }

    // Umfassendes Wissenssystem über den Menschen
    const response = await generateHumanKnowledgeResponse(message)

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}

async function generateHumanKnowledgeResponse(message: string): Promise<string> {
  const lowerMessage = message.toLowerCase()

  // Umfassendes Wissenssystem mit vielen Kategorien
  const knowledgeBase: { [key: string]: { keywords: string[], responses: string[] } } = {
    anatomy: {
      keywords: ['anatomie', 'körper', 'organ', 'knochen', 'skelett', 'muskel', 'herz', 'lunge', 'gehirn', 'leber', 'niere', 'magen', 'darm', 'haut', 'blut', 'nerven', 'gefäß', 'vene', 'arterie'],
      responses: [
        'Der menschliche Körper besteht aus etwa 37,2 Billionen Zellen und hat 206 Knochen im erwachsenen Zustand. Unser größtes Organ ist die Haut mit etwa 2 m² Fläche.',
        'Das menschliche Gehirn wiegt durchschnittlich 1,4 kg und enthält etwa 86 Milliarden Neuronen. Es verbraucht etwa 20% der Gesamtenergie des Körpers.',
        'Das Herz schlägt durchschnittlich 100.000 Mal pro Tag und pumpt etwa 7.500 Liter Blut durch ein Netzwerk von etwa 100.000 km Blutgefäßen.',
        'Der menschliche Körper hat über 600 Muskeln. Der stärkste Muskel relativ zur Größe ist der Kaumuskel (Masseter).'
      ]
    },
    biology: {
      keywords: ['biologie', 'zelle', 'dna', 'gen', 'chromosom', 'protein', 'enzym', 'stoffwechsel', 'atmung', 'verdauung', 'fortpflanzung', 'hormone'],
      responses: [
        'Die menschliche DNA enthält etwa 3 Milliarden Basenpaare und ist etwa 2 Meter lang, wenn man sie ausrollen würde. Wir teilen etwa 98,8% unserer DNA mit Schimpansen.',
        'Jede menschliche Zelle enthält 23 Chromosomenpaare, insgesamt 46 Chromosomen. Wir haben etwa 20.000-25.000 proteinkodierende Gene.',
        'Der menschliche Stoffwechsel verbrennt täglich etwa 2000 Kalorien im Durchschnitt. Die Leber ist das zentrale Stoffwechselorgan und führt über 500 verschiedene Funktionen aus.',
        'Menschen atmen etwa 20.000 Mal pro Tag und verarbeiten dabei etwa 10.000 Liter Luft. Der Gasaustausch findet in etwa 300 Millionen Alveolen statt.'
      ]
    },
    evolution: {
      keywords: ['evolution', 'entwicklung', 'ursprung', 'homo sapiens', 'vorfahren', 'neandertaler', 'primaten', 'stammbaum', 'anpassung'],
      responses: [
        'Der Homo sapiens entstand vor etwa 300.000 Jahren in Afrika. Unsere Vorfahren wanderten vor etwa 70.000-100.000 Jahren aus Afrika aus und besiedelten die Welt.',
        'Menschen und Schimpansen teilten vor etwa 6-7 Millionen Jahren einen gemeinsamen Vorfahren. Die Gattung Homo entstand vor etwa 2,5 Millionen Jahren.',
        'Neandertaler und moderne Menschen koexistierten und kreuzten sich. Viele Menschen außerhalb Afrikas tragen 1-4% Neandertaler-DNA in sich.',
        'Die aufrechte Haltung entwickelte sich vor etwa 4-6 Millionen Jahren. Das große Gehirn des Menschen entwickelte sich in den letzten 2 Millionen Jahren.'
      ]
    },
    psychology: {
      keywords: ['psychologie', 'denken', 'gefühl', 'emotion', 'bewusstsein', 'gedächtnis', 'lernen', 'intelligenz', 'persönlichkeit', 'verhalten', 'mental', 'psyche'],
      responses: [
        'Das menschliche Kurzzeitgedächtnis kann etwa 7±2 Informationseinheiten gleichzeitig verarbeiten. Das Langzeitgedächtnis hat praktisch unbegrenzte Kapazität.',
        'Menschen erleben etwa 6.000-80.000 Gedanken pro Tag. Das Gehirn verarbeitet Informationen mit etwa 120 m/s in schnellen Nervenfasern.',
        'Es gibt fünf Grundemotionen nach Paul Ekman: Freude, Trauer, Angst, Ekel und Wut. Diese werden kulturübergreifend durch Mimik ausgedrückt.',
        'Der durchschnittliche IQ liegt definitionsgemäß bei 100. Intelligenz ist zu etwa 50-80% genetisch bedingt, der Rest ist Umwelteinfluss.'
      ]
    },
    senses: {
      keywords: ['sinne', 'sehen', 'hören', 'riechen', 'schmecken', 'tasten', 'auge', 'ohr', 'nase', 'zunge', 'wahrnehmung'],
      responses: [
        'Menschen haben mindestens fünf Hauptsinne: Sehen, Hören, Riechen, Schmecken und Tasten. Dazu kommen Propriozeption (Körperwahrnehmung) und Gleichgewichtssinn.',
        'Das menschliche Auge kann etwa 10 Millionen verschiedene Farben unterscheiden. Wir haben etwa 120 Millionen Stäbchen und 6 Millionen Zapfen in der Retina.',
        'Menschen können Frequenzen zwischen etwa 20 Hz und 20.000 Hz hören. Das Innenohr enthält etwa 15.000 Haarzellen für die Schallwahrnehmung.',
        'Die menschliche Nase kann über 1 Billion verschiedene Gerüche unterscheiden. Wir haben etwa 400 verschiedene Geruchsrezeptoren.'
      ]
    },
    health: {
      keywords: ['gesundheit', 'krankheit', 'immunsystem', 'heilung', 'medizin', 'therapie', 'virus', 'bakterie', 'infektion', 'impfung'],
      responses: [
        'Das menschliche Immunsystem besteht aus angeborener und adaptiver Immunität. Wir produzieren täglich etwa 100 Milliarden weiße Blutkörperchen.',
        'Die durchschnittliche Lebenserwartung weltweit liegt bei etwa 73 Jahren, variiert aber stark nach Region und Geschlecht. Frauen leben im Durchschnitt 5-7 Jahre länger.',
        'Schlaf ist essentiell für Gesundheit. Erwachsene brauchen 7-9 Stunden Schlaf pro Nacht. Im Schlaf konsolidiert das Gehirn Erinnerungen und regeneriert sich.',
        'Der Körper besteht zu etwa 60% aus Wasser. Wir sollten täglich etwa 2-3 Liter Flüssigkeit zu uns nehmen, abhängig von Aktivität und Klima.'
      ]
    },
    reproduction: {
      keywords: ['fortpflanzung', 'schwangerschaft', 'baby', 'geburt', 'entwicklung', 'embryo', 'fötus', 'pubertät', 'wachstum'],
      responses: [
        'Eine normale Schwangerschaft dauert etwa 40 Wochen (280 Tage). Der Embryo entwickelt alle wichtigen Organsysteme in den ersten 8 Wochen.',
        'Bei der Geburt wiegt ein Baby durchschnittlich 3,4 kg und ist etwa 50 cm groß. Das Gehirn eines Neugeborenen ist etwa 25% der Größe eines erwachsenen Gehirns.',
        'Die Pubertät beginnt bei Mädchen durchschnittlich zwischen 10-14 Jahren, bei Jungen zwischen 12-16 Jahren. Sie wird durch Hormone ausgelöst.',
        'Menschen sind eine der wenigen Spezies, die das ganze Jahr über fortpflanzungsfähig sind. Frauen sind von der Menarche bis zur Menopause fruchtbar (etwa 40 Jahre).'
      ]
    },
    culture: {
      keywords: ['kultur', 'gesellschaft', 'sprache', 'kunst', 'religion', 'tradition', 'musik', 'literatur', 'zivilisation'],
      responses: [
        'Es gibt etwa 7.000 verschiedene Sprachen auf der Welt. Die meistgesprochene Muttersprache ist Mandarin-Chinesisch mit über 900 Millionen Sprechern.',
        'Menschen sind die einzige Spezies, die komplexe Kultur über Generationen hinweg kumulativ weiterentwickelt. Dies wird als kumulative Kultur bezeichnet.',
        'Kunst und kreative Ausdrucksformen gibt es seit mindestens 40.000 Jahren. Die ältesten Höhlenmalereien sind über 45.000 Jahre alt.',
        'Religion ist ein universelles menschliches Phänomen. Etwa 84% der Weltbevölkerung identifiziert sich mit einer religiösen Gruppe.'
      ]
    },
    history: {
      keywords: ['geschichte', 'zivilisation', 'antike', 'mittelalter', 'neuzeit', 'revolution', 'krieg', 'erfindung', 'entdeckung'],
      responses: [
        'Die erste städtische Zivilisation entstand vor etwa 10.000 Jahren im Fruchtbaren Halbmond (Mesopotamien). Die Schrift wurde vor etwa 5.000 Jahren erfunden.',
        'Die industrielle Revolution im 18./19. Jahrhundert veränderte die menschliche Gesellschaft fundamental. Die Weltbevölkerung wuchs exponentiell von 1 Milliarde (1800) auf 8 Milliarden (2023).',
        'Der moderne Mensch hat bedeutende Erfindungen gemacht: das Rad (vor 5.500 Jahren), den Buchdruck (1450), die Dampfmaschine (1769), das Internet (1969/1991).',
        'Die durchschnittliche Lebenserwartung hat sich in den letzten 200 Jahren mehr als verdoppelt - von etwa 30-35 Jahren auf über 70 Jahre weltweit.'
      ]
    },
    behavior: {
      keywords: ['verhalten', 'sozial', 'kommunikation', 'interaktion', 'beziehung', 'moral', 'ethik', 'empathie', 'altruismus'],
      responses: [
        'Menschen sind ultrasoziale Wesen. Wir kooperieren in großen Gruppen von Nicht-Verwandten - eine seltene Fähigkeit im Tierreich.',
        'Nonverbale Kommunikation macht etwa 70-93% der gesamten Kommunikation aus. Körpersprache, Mimik und Tonfall sind entscheidend.',
        'Empathie ermöglicht es uns, die Gefühle anderer nachzuvollziehen. Spiegelneuronen im Gehirn spielen dabei eine wichtige Rolle.',
        'Menschen zeigen altruistisches Verhalten - Handlungen zum Nutzen anderer, oft ohne direkten eigenen Vorteil. Dies ist evolutionär vorteilhaft für Gruppenüberleben.'
      ]
    },
    cognition: {
      keywords: ['kognition', 'denken', 'logik', 'problem', 'entscheidung', 'kreativität', 'aufmerksamkeit', 'konzentration'],
      responses: [
        'Das menschliche Gehirn kann etwa 11 Millionen Bits Information pro Sekunde verarbeiten, aber nur etwa 40-50 Bits bewusst wahrnehmen.',
        'Kreativität entsteht durch die Verbindung des Default Mode Network und des Executive Control Network im Gehirn. Menschen können abstrakt und symbolisch denken.',
        'Die Aufmerksamkeitsspanne hat sich durch digitale Medien verändert. Konzentrierte Aufmerksamkeit kann durch Übung trainiert werden.',
        'Menschen nutzen Heuristiken (mentale Abkürzungen) für schnelle Entscheidungen. Dies führt manchmal zu kognitiven Verzerrungen (Biases).'
      ]
    },
    aging: {
      keywords: ['altern', 'alter', 'senior', 'alterung', 'lebenserwartung', 'tod'],
      responses: [
        'Der biologische Alterungsprozess beginnt bereits mit etwa 25-30 Jahren. Zellen können sich nur etwa 40-60 Mal teilen (Hayflick-Limit).',
        'Die ältesten Menschen werden etwa 115-122 Jahre alt. Jeanne Calment erreichte 122 Jahre - der verifizierte Rekord.',
        'Altern ist mit Telomerverkürzung, oxidativem Stress, DNA-Schäden und nachlassender Zellerneuerung verbunden. Forschung an Anti-Aging läuft intensiv.',
        'Das Gehirn kann bis ins hohe Alter neue Verbindungen bilden (Neuroplastizität). Mentale und körperliche Aktivität verlangsamen kognitiven Abbau.'
      ]
    },
    nutrition: {
      keywords: ['ernährung', 'essen', 'nahrung', 'vitamine', 'mineral', 'protein', 'kohlenhydrat', 'fett', 'hunger', 'durst'],
      responses: [
        'Menschen sind Allesfresser und können sich von verschiedensten Nahrungsquellen ernähren. Wir benötigen etwa 40 essentielle Nährstoffe.',
        'Der Mensch braucht 9 essentielle Aminosäuren, 2 essentielle Fettsäuren, 13 Vitamine und etwa 15 Mineralstoffe für optimale Gesundheit.',
        'Der Grundumsatz liegt bei durchschnittlich 1.300-1.800 kcal pro Tag. Der Gesamtumsatz variiert stark nach Aktivität zwischen 2.000-4.000 kcal.',
        'Wasser ist der wichtigste Nährstoff. Menschen können nur etwa 3-4 Tage ohne Wasser überleben, aber mehrere Wochen ohne Nahrung.'
      ]
    },
    movement: {
      keywords: ['bewegung', 'sport', 'laufen', 'gehen', 'muskel', 'kraft', 'ausdauer', 'fitness'],
      responses: [
        'Menschen sind für Ausdauerlauf gebaut. Wir können längere Distanzen laufen als fast jedes andere Säugetier - eine Fähigkeit, die zur Jagd genutzt wurde.',
        'Die schnellsten Menschen erreichen etwa 44 km/h (Usain Bolt). Der Durchschnittsmensch kann etwa 20-25 km/h über kurze Distanzen laufen.',
        'Regelmäßige Bewegung verbessert Herz-Kreislauf-Gesundheit, Stoffwechsel, Knochenstruktur und mentale Gesundheit. 150 Minuten moderate Aktivität pro Woche werden empfohlen.',
        'Der Körper hat drei Energiesysteme: ATP-PCr (0-10 Sek), anaerob-laktazid (10-120 Sek), aerob (>2 Min). Training kann alle drei Systeme verbessern.'
      ]
    },
    sleep: {
      keywords: ['schlaf', 'traum', 'müdigkeit', 'ruhe', 'rem', 'schlafen'],
      responses: [
        'Menschen verbringen etwa ein Drittel ihres Lebens mit Schlafen. Schlaf durchläuft 4-6 Zyklen pro Nacht mit jeweils etwa 90 Minuten.',
        'Es gibt 4 Schlafphasen: N1 (Einschlafphase), N2 (leichter Schlaf), N3 (Tiefschlaf) und REM-Schlaf (Traumphase). REM macht etwa 20-25% des Schlafs aus.',
        'Während des Schlafs werden Toxine aus dem Gehirn entfernt, Erinnerungen konsolidiert und das Immunsystem gestärkt. Schlafmangel beeinträchtigt alle kognitiven Funktionen.',
        'Träume treten hauptsächlich im REM-Schlaf auf. Menschen träumen etwa 4-6 Mal pro Nacht, vergessen aber die meisten Träume.'
      ]
    },
    diversity: {
      keywords: ['vielfalt', 'rasse', 'ethnizität', 'hautfarbe', 'unterschied', 'population', 'variation'],
      responses: [
        'Genetisch sind alle Menschen zu 99,9% identisch. Die genetische Variation innerhalb von Populationen ist größer als zwischen Populationen.',
        'Hautfarbe ist eine Anpassung an UV-Strahlung. Dunklere Haut schützt vor Folsäureschäden, hellere Haut ermöglicht Vitamin-D-Synthese bei wenig Sonnenlicht.',
        'Es gibt keine biologischen Rassen beim Menschen. Ethnizität ist eine soziale und kulturelle Kategorie, keine biologische.',
        'Die größte genetische Vielfalt findet sich in Afrika, da Menschen von dort stammen. Alle nicht-afrikanischen Populationen stammen von einer kleinen Gründerpopulation ab.'
      ]
    }
  }

  // Finde passende Kategorie
  let bestMatch: { category: string, score: number } = { category: '', score: 0 }

  for (const [category, data] of Object.entries(knowledgeBase)) {
    const score = data.keywords.filter(keyword => lowerMessage.includes(keyword)).length
    if (score > bestMatch.score) {
      bestMatch = { category, score }
    }
  }

  // Wenn eine Kategorie gefunden wurde, gib eine zufällige Antwort zurück
  if (bestMatch.score > 0 && knowledgeBase[bestMatch.category]) {
    const responses = knowledgeBase[bestMatch.category].responses
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    return randomResponse + '\n\n💡 Möchtest du mehr über dieses Thema erfahren? Stelle einfach weitere Fragen!'
  }

  // Fallback-Antworten für allgemeine Fragen
  if (lowerMessage.includes('was') || lowerMessage.includes('wie') || lowerMessage.includes('warum') || lowerMessage.includes('wann') || lowerMessage.includes('wo')) {
    const generalResponses = [
      'Das ist eine interessante Frage über den Menschen! Der Mensch (Homo sapiens) ist ein hochentwickeltes Säugetier mit außergewöhnlichen kognitiven Fähigkeiten. Wir sind soziale Wesen, die in komplexen Gesellschaften leben, Sprache und Werkzeuge nutzen, und die Fähigkeit haben, über uns selbst nachzudenken.',
      'Menschen sind bemerkenswerte Lebewesen! Wir haben das größte Gehirn-zu-Körper-Verhältnis unter den Primaten, können abstrakt denken, planen für die Zukunft, und haben Kultur, Kunst, Wissenschaft und Technologie entwickelt.',
      'Die menschliche Spezies ist etwa 300.000 Jahre alt und hat sich über die ganze Welt verbreitet. Wir sind extrem anpassungsfähig und leben in nahezu jedem Klima und Lebensraum der Erde.',
      'Menschen sind einzigartig in ihrer Fähigkeit zur Sprache, zum komplexen Werkzeuggebrauch, zur Kultur und zur sozialen Kooperation in großen Gruppen. Diese Fähigkeiten haben uns zur dominanten Spezies auf dem Planeten gemacht.'
    ]
    return generalResponses[Math.floor(Math.random() * generalResponses.length)]
  }

  // Standard-Antwort
  return 'Das ist eine interessante Frage! Als Agent für menschliches Wissen kann ich dir viel erzählen über:\n\n' +
    '🧬 Biologie und Anatomie\n' +
    '🧠 Psychologie und Kognition\n' +
    '🌍 Evolution und Geschichte\n' +
    '👥 Sozialverhalten und Kultur\n' +
    '⚡ Sinne und Wahrnehmung\n' +
    '💪 Gesundheit und Fitness\n' +
    '🍎 Ernährung und Stoffwechsel\n' +
    '😴 Schlaf und Regeneration\n\n' +
    'Stelle mir eine spezifische Frage über eines dieser Themen!'
}
