// Base de datos completa de películas (más de 150)
const MOVIES = [
  // ACCIÓN
  { title: "Titanic", alt: ["titanic"], genre: "drama", difficulty: "easy", clues: ["🚢❄️❤️","Barco famoso se hunde","Historia amor trágica 1912","Jack y Rose proa","Soy el rey del mundo","Leonardo DiCaprio 1997"]},
  { title: "Matrix", alt: ["The Matrix","matriz"], genre: "ciencia-ficcion", difficulty: "easy", clues: ["💊🔴🔵","Realidad simulada máquinas","Elige pastilla correcta","Keanu esquiva balas","Neo el elegido","1999"]},
  { title: "Gladiator", alt: ["Gladiador"], genre: "accion", difficulty: "easy", clues: ["🏟️⚔️👑","General romano venganza","Me entretendréis","Máximo Décimo Meridio","Russell Crowe arena","2000"]},
  { title: "John Wick", alt: [], genre: "accion", difficulty: "easy", clues: ["🔫🐕💀","Asesino retirado venganza","Mataron su perro","Keanu Reeves","Continental Hotel","2014"]},
  { title: "Duro de Matar", alt: ["Die Hard","Jungla de cristal"], genre: "accion", difficulty: "medium", clues: ["🏢💣👮","Policía vs terroristas","Yippee ki-yay","Bruce Willis descalzo","Nakatomi Plaza","1988"]},
  { title: "Mad Max Fury Road", alt: ["Mad Max", "Mad Max: Furia en el camino"], genre: "accion", difficulty: "medium", clues: ["🏜️🚗🔥","Persecución postapocalíptica","Lovely day","Furiosa","Charlize Theron","2015"]},
  { title: "Kill Bill", alt: [], genre: "accion", difficulty: "medium", clues: ["⚔️👰💛","Novia busca venganza","Katana samurai","Uma Thurman","Tarantino sangre","2003"]},
  { title: "Misión Imposible", alt: ["Mission Impossible"], genre: "accion", difficulty: "easy", clues: ["🕵️💻🎭","Agente secreto misiones","Tom Cruise corre","IMF equipo","Tema musical icónico","1996"]},
  { title: "Casino Royale", alt: [], genre: "accion", difficulty: "medium", clues: ["🎰🔫🍸","James Bond reinicio","Daniel Craig rubio","Poker alto riesgo","Vesper Lynd","2006"]},
  { title: "300", alt: ["trescientos"], genre: "accion", difficulty: "easy", clues: ["⚔️🛡️🏛️","Espartanos vs persas","This is Sparta","Leónidas 300 guerreros","Termópilas batalla","2006"]},
  { title: "The Raid", alt: ["La redada", "Redada asesina"], genre: "accion", difficulty: "hard", clues: ["🥋🏢💥","Artes marciales edificio","Indonesia brutal","Iko Uwais","Silat combate","2011"]},
  { title: "Máxima Velocidad", alt: ["Speed","Speed: Máxima potencia"], genre: "accion", difficulty: "medium", clues: ["🚌💣⏱️","Autobús bomba velocidad","Keanu Reeves joven","Sandra Bullock conduce","Menos 50 mph explota","1994"]},
  { title: "Rápidos y Furiosos", alt: ["Fast Furious","Fast and Furious","Fast & Furious Aún más rápido"], genre: "accion", difficulty: "easy", clues: ["🚗💨👨‍👩‍👧‍👦","Carreras ilegales familia","Vin Diesel calvo","Paul Walker","Cuarto de milla","2001"]},
  { title: "Depredador", alt: ["Predator"], genre: "accion", difficulty: "medium", clues: ["👽🌴💪","Cazador alienígena selva","Get to chopper","Arnold Schwarzenegger","Camuflaje invisible","1987"]},
  { title: "Terminator 2", alt: ["Terminator 2: El juicio final","Terminator 2: Judgment Day"], genre: "accion", difficulty: "easy", clues: ["🤖🔫⏰","Robot del futuro","I'll be back","Arnold protege niño","Hasta la vista baby","1991"]},
  { title: "Top Gun", alt: ["Top Gun: Pasión y gloria","Top Gun: Ídolos del aire","Top Gun: Reto a la gloria"], genre: "accion", difficulty: "easy", clues: ["✈️😎🏍️","Pilotos caza élite","Maverick apodo","Tom Cruise joven","Voleibol playa","1986"]},
  { title: "Batman El Caballero Oscuro", alt: ["The Dark Knight","Batman El caballero de la noche"], genre: "superheroes", difficulty: "easy", clues: ["🦇🃏🌃","Héroe Gotham contra caos","Why so serious","Heath Ledger Joker","Batman Bale","2008"]},
  { title: "Inception", alt: ["El Origen","Origen"], genre: "ciencia-ficcion", difficulty: "medium", clues: ["🧠⏳🌆","Sueños dentro sueños","Tótem trompo","Leonardo DiCaprio","Arquitectura mental","2010"]},
  { title: "Los Vengadores", alt: ["The Avengers"], genre: "superheroes", difficulty: "easy", clues: ["🦸‍♂️🛡️⚡","Héroes se unen","Yo soy Iron Man","Loki villano","Nueva York batalla","2012"]},
  { title: "Logan", alt: [], genre: "superheroes", difficulty: "medium", clues: ["🧔‍♂️🗡️👧","Mutante envejecido","Garras adamantium","Niña clon","Western moderno","2017"]},

  // ANIMACIÓN
  { title: "El Rey León", alt: ["The Lion King"], genre: "animacion", difficulty: "easy", clues: ["🦁👑🌅","Animales sabana africana","León huye tragedia","Hakuna Matata","Ciclo vida","Disney 1994"]},
  { title: "Toy Story", alt: [], genre: "animacion", difficulty: "easy", clues: ["🤠🚀🧸","Juguetes cobran vida","Infinito más allá","Woody Buzz","Andy dueño","Pixar 1995"]},
  { title: "Frozen", alt: ["Congelado", "Frozen El reino del hielo", "Frozen: Una aventura congelada"], genre: "animacion", difficulty: "easy", clues: ["❄️👭🏰","Hermanas poderes hielo","Let it go","Elsa Anna","Olaf muñeco nieve","Disney 2013"]},
  { title: "Coco", alt: [], genre: "animacion", difficulty: "easy", clues: ["💀🎸👨‍👩‍👧","Día muertos música","Remember me","Tierra muertos","Miguel guitarra","Pixar 2017"]},
  { title: "Buscando a Nemo", alt: ["Finding Nemo"], genre: "animacion", difficulty: "easy", clues: ["🐠🤿🌊","Pez payaso busca hijo","Keep swimming","Dory memoria corta","Aleta afortunada","Pixar 2003"]},
  { title: "Shrek", alt: [], genre: "animacion", difficulty: "easy", clues: ["🧅👹🏰","Ogro verde pantano","Cebollas capas","Burro hablador","Fiona princesa","DreamWorks 2001"]},
  { title: "Up", alt: ["Up una aventura de altura"], genre: "animacion", difficulty: "easy", clues: ["🏠🎈🧓","Viejo casa voladora","Aventura Sudamérica","Perro Squirrel","Carl Russell","Pixar 2009"]},
  { title: "El Viaje de Chihiro", alt: ["Spirited Away"], genre: "animacion", difficulty: "medium", clues: ["👻🏮🐷","Niña mundo espíritus","Casa baños","Studio Ghibli","Haku dragón","Miyazaki 2001"]},
  { title: "Inside Out", alt: ["Intensa-Mente","Intensamente","Del Revés"], genre: "animacion", difficulty: "easy", clues: ["🧠😃😭","Emociones dentro cabeza","Alegría Tristeza Ira","Riley niña","Islas personalidad","Pixar 2015"]},
  { title: "Spider-Man: Un Nuevo Universo", alt: ["Spider-Verse","Into the Spider-Verse"], genre: "animacion", difficulty: "medium", clues: ["🕷️🎨🌌","Miles Morales animación","Múltiples Spider-Man","Cualquiera máscara","Animación innovadora","2018"]},
  { title: "Ratatouille", alt: [], genre: "animacion", difficulty: "medium", clues: ["🐀👨‍🍳🍽️","Rata cocina París","Remy gorro","Cualquiera cocinar","Gusteau restaurante","Pixar 2007"]},
  { title: "Wall-E", alt: [], genre: "animacion", difficulty: "medium", clues: ["🤖🌍💚","Robot limpia Tierra","Evaaa","Compacta basura","Axiom nave","Pixar 2008"]},
  { title: "Kung Fu Panda", alt: [], genre: "animacion", difficulty: "easy", clues: ["🐼🥋🍜","Panda gordo kung fu","Guerrero Dragón","Po Cinco Furiosos","Skadoosh","DreamWorks 2008"]},
  { title: "Moana", alt: ["Vaiana","Moana: Un mar de aventuras"], genre: "animacion", difficulty: "easy", clues: ["🌊🏝️⛵","Princesa polinesia navega","Te Fiti corazón","Maui semidiós","How far go","Disney 2016"]},
  { title: "Los Increíbles", alt: ["The Incredibles"], genre: "animacion", difficulty: "easy", clues: ["🦸‍♂️👨‍👩‍👧‍👦💪","Familia superhéroes","No capes","Síndrome villano","Mr Increíble","Pixar 2004"]},
  { title: "Monsters Inc", alt: ["Monstruos S.A."], genre: "animacion", difficulty: "easy", clues: ["👹🚪😱","Monstruos asustan niños","Sully Mike","Boo niña","Puertas energía","Pixar 2001"]},
  { title: "Cómo Entrenar a tu Dragón", alt: ["How to Train Your Dragon"], genre: "animacion", difficulty: "medium", clues: ["🐉🏝️⚔️","Vikingo amista dragón","Hipo Desdentao","Vuela dragones","Isla Berk","DreamWorks 2010"]},
  { title: "La Bella y la Bestia", alt: ["Beauty and the Beast"], genre: "animacion", difficulty: "easy", clues: ["🌹🏰📚","Maldición castillo","Be our guest","Bella Bestia","Rosa encantada","Disney 1991"]},
  { title: "Aladdín", alt: ["Aladdin"], genre: "animacion", difficulty: "easy", clues: ["🧞‍♂️🪔✨","Lámpara mágica","Mundo ideal","Genio Robin Williams","Jasmine Aladdín","Disney 1992"]},
  { title: "Soul", alt: [], genre: "animacion", difficulty: "easy", clues: ["🎹👻✨","Alma antes nacer","Jazz pasión","Más allá","Pixar reflexión","2020"]},

  // DRAMA
  { title: "Forrest Gump", alt: [], genre: "drama", difficulty: "easy", clues: ["🏃‍♂️🍫🇺🇸","Vida extraordinaria","Caja chocolates","Jenny amor","Tom Hanks","1994"]},
  { title: "El Club de la Lucha", alt: ["Fight Club", "El club de la pelea"], genre: "drama", difficulty: "medium", clues: ["🥊🧼🔥","No hables club","Doble identidad","Brad Pitt","Final sorpresa","1999"]},
  { title: "La Lista de Schindler", alt: ["Schindler's List"], genre: "drama", difficulty: "easy", clues: ["📜🕊️🕯️","Holocausto","Abrigo rojo","Salvar judíos","Spielberg","1993"]},
  { title: "Cadena Perpetua", alt: ["The Shawshank Redemption","Sueños de libertad","scape a la libertad"], genre: "drama", difficulty: "easy", clues: ["🔒🔨🌧️","Prisión injusta","Esperanza","Andy Dufresne","Red narrador","1994"]},
  { title: "Parásitos", alt: ["Parasite"], genre: "drama", difficulty: "medium", clues: ["🏠⬆️⬇️🍑","Clases sociales","Familia infiltrada","Casa moderna","Corea del Sur","2019"]},

  // TERROR
  { title: "El Exorcista", alt: ["The Exorcist"], genre: "terror", difficulty: "easy", clues: ["👹✝️😱","Posesión demoníaca","Niña poseída","Sacerdotes","Clásico terror","1973"]},
  { title: "El Resplandor", alt: ["The Shining"], genre: "terror", difficulty: "medium", clues: ["🏨🪓❄️","Hotel aislado","Here’s Johnny","Gemelas pasillo","Kubrick","1980"]},
  { title: "It", alt: ["Eso"], genre: "terror", difficulty: "easy", clues: ["🎈🤡🚲","Payaso asesino","Derry pueblo","Niños protagonistas","Stephen King","2017"]},
  { title: "Hereditary", alt: ["El legado del diablo"], genre: "terror", difficulty: "hard", clues: ["🏠🕯️👁️","Trauma familiar","Culto oculto","Cabeza impactante","Terror psicológico","2018"]},

  // Más películas originales
  { title: "Pulp Fiction", alt: ["Tiempos violentos"], genre: "drama", difficulty: "medium", clues: ["💊🔫🍔","Historias entrelazadas","Baile Twist","Tarantino diálogos","Samuel L Jackson","1994"]},
  { title: "Interestelar", alt: ["Interstellar"], genre: "ciencia-ficcion", difficulty: "medium", clues: ["🌌🕳️🚀","Viaje agujero negro","Amor trascende tiempo","Cooper biblioteca","Hans Zimmer música","2014"]},
  { title: "El Padrino", alt: ["The Godfather"], genre: "drama", difficulty: "easy", clues: ["👔💼🐴","Familia mafia","Oferta que no puedes rechazar","Marlon Brando","Vito Corleone","1972"]},
  { title: "Avengers: Endgame", alt: ["Vengadores Endgame"], genre: "superheroes", difficulty: "easy", clues: ["⏳🦸‍♂️💥","Después chasquido","Portal tiempo","I am Iron Man","Final épico","2019"]},

  // === PELÍCULAS NUEVAS AÑADIDAS (más de 80) ===
  { title: "Regreso al Futuro", alt: ["Back to the Future","Volver al futuro","Vuelta al futuro"], genre: "ciencia-ficcion", difficulty: "easy", clues: ["🚗⏰🔥","Delorean 88 mph","Doc Brown","Marty McFly","1.21 gigawatts","1985"]},
  { title: "E.T. el Extraterrestre", alt: ["E.T."], genre: "ciencia-ficcion", difficulty: "easy", clues: ["👽🚲🌕","Amigo alienígena","Telefono casa","Dedos brillan","Elliot bicicleta vuela","1982"]},
  { title: "Tiburón", alt: ["Jaws"], genre: "terror", difficulty: "easy", clues: ["🦈🏖️🎶","Tiburón ataca playa","Dun dun","Necesitas barco más grande","Spielberg verano","1975"]},
  { title: "Salvar al Soldado Ryan", alt: ["Saving Private Ryan","Rescatando al soldado Ryan"], genre: "drama", difficulty: "medium", clues: ["🏖️🔫🇺🇸","Desembarco Normandía","Tom Hanks capitán","Buscar Ryan","Spielberg guerra","1998"]},
  { title: "El Piano", alt: ["The Piano","La lección de piano"], genre: "drama", difficulty: "hard", clues: ["🎹🏞️🔇","Mujer muda Nueva Zelanda","Holly Hunter","Playa piano","Harvey Keitel","1993"]},
  { title: "Brokeback Mountain", alt: ["En terreno vedado","Secreto en la montaña"], genre: "drama", difficulty: "medium", clues: ["🏔️🐑❤️","Vaqueros amor prohibido","I wish I knew how to quit you","Heath Ledger Jake Gyllenhaal","2005"]},
  { title: "Moonlight", alt: ["Moonlight: Historia de una Vida","Luz de luna"], genre: "drama", difficulty: "medium", clues: ["🌕🏖️🖤","Identidad negra gay","Tres etapas vida","Chiron","Miami playa","2016"]},
  { title: "Nomadland", alt: [], genre: "drama", difficulty: "hard", clues: ["🚐🏜️😔","Viuda nómada","Frances McDormand","Vida van","Chloé Zhao","2020"]},
  { title: "Drive", alt: [], genre: "accion", difficulty: "medium", clues: ["🚗🦂😶","Conductor getaway","Chaquetón escorpión","Ryan Gosling","Ascensor beso","2011"]},
  { title: "Oldboy", alt: ["Oldboy: Cinco días para vengarse"], genre: "accion", difficulty: "hard", clues: ["🔨🦑😱","Venganza coreana","Martillo pasillo","Final twist","Park Chan-wook","2003"]},
  { title: "Blade Runner", alt: ["Blade Runner 2049"], genre: "ciencia-ficcion", difficulty: "medium", clues: ["🌧️🤖👁️","Replicantes lluvia","Tears in rain","Harrison Ford","¿Humanos o máquinas?","1982"]},
  { title: "2001: Una Odisea del Espacio", alt: ["2001: A Space Odyssey","2001: Odisea del espacio"], genre: "ciencia-ficcion", difficulty: "hard", clues: ["🪐🤖🎶","Monolito HAL","Kubrick","Thus Spake Zarathustra","Evolución","1968"]},
  { title: "Inglourious Basterds", alt: ["Bastardos sin gloria","Malditos bastardos"], genre: "drama", difficulty: "medium", clues: ["🎥🔥🏞️","Judíos cazan nazis","Tarantino","Cinema quemado","Brad Pitt","2009"]},
  { title: "Django Desencadenado", alt: ["Django Unchained","Django sin cadenas"], genre: "drama", difficulty: "medium", clues: ["🤠🔫🌵","Esclavo venganza","Dentista cazarrecompensas","Jamie Foxx","Tarantino","2012"]},
  { title: "Once Upon a Time in Hollywood", alt: ["Érase una vez en Hollywood"Había una vez en Hollywood,], genre: "drama", difficulty: "medium", clues: ["🌴🎬😎","Los Ángeles 1969","Manson familia","DiCaprio Pitt","Tarantino final alternativo","2019"]},
  { title: "Mi Vecino Totoro", alt: ["My Neighbor Totoro"], genre: "animacion", difficulty: "easy", clues: ["🌳🚌😺","Criaturas bosque","Ghibli","Catbus","Lluvia semillas","1988"]},
  { title: "Princesa Mononoke", alt: [], genre: "animacion", difficulty: "medium", clues: ["🐺🏹🌲","Hombre vs naturaleza","San loba","Ghibli espíritus","1997"]},
  { title: "La Tumba de las Luciérnagas", alt: ["Grave of the Fireflies"], genre: "animacion", difficulty: "hard", clues: ["🔥🍬😢","Hermanos guerra Japón","Ghibli triste","Luciérnagas","1988"]},
  { title: "Zootopia", alt: ["Zootrópolis"], genre: "animacion", difficulty: "easy", clues: ["🐰🦊🏙️","Coneja policía","Try everything","Judy Hopps Nick Wilde","Disney","2016"]},
  { title: "Big Hero 6", alt: ["Grandes Heroes"], genre: "animacion", difficulty: "easy", clues: ["🤖🎈🏙️","Baymax robot","Hiro genio","Superhéroes San Fransokyo","Disney","2014"]},
  { title: "Encanto", alt: [], genre: "animacion", difficulty: "easy", clues: ["🏠🕯️🇨🇴","Familia mágica Colombia","No hablamos de Bruno","Mirabel","Disney 2021"]},
  { title: "Spider-Man: No Way Home", alt: ["Spider-Man: Sin camino a casa"], genre: "superheroes", difficulty: "easy", clues: ["🕷️🌉👥","Multiverso Spider-Man","Tres Peter","Tom Holland","Villanos clásicos","2021"]},
  { title: "Black Panther", alt: ["Pantera negra"], genre: "superheroes", difficulty: "easy", clues: ["🐆🇼🇰💪","Wakanda forever","Vibranium","T'Challa","Marvel rey","2018"]},
  { title: "Guardianes de la Galaxia", alt: ["Guardians of the Galaxy"], genre: "superheroes", difficulty: "easy", clues: ["🎧🌌🦝","Banda sonora 80s","Star-Lord","Árbol baila","Rocket Groot","2014"]},
  { title: "Jurassic Park", alt: ["Parque Jurásico"], genre: "ciencia-ficcion", difficulty: "easy", clues: ["🦖🌴🚙","Dinosaurios revividos","La vida encuentra camino","Isla Nublar","T-Rex jeep","Spielberg 1993"]},
  { title: "Star Wars: El Imperio Contraataca", alt: ["The Empire Strikes Back","La guerra de las galaxias: El Imperio contraataca"], genre: "ciencia-ficcion", difficulty: "easy", clues: ["❄️⚔️👨‍👦","Yo soy tu padre","Hoth batalla","Luke Skywalker","Yoda entrenamiento","1980"]},
  { title: "Indiana Jones: En Busca del Arca Perdida", alt: ["Raiders of the Lost Ark"], genre: "accion", difficulty: "easy", clues: ["🎩🪱🏜️","Arqueólogo aventura","Látigo","Harrison Ford","Nazis arca","1981"]},
  { title: "El Señor de los Anillos: La Comunidad del Anillo", alt: ["The Fellowship of the Ring"], genre: "fantasia", difficulty: "medium", clues: ["💍🏔️👥","Anillo único","Frodo portador","Gandalf balrog","Tolkien adaptación","2001"]},
  { title: "Harry Potter y la Piedra Filosofal", alt: ["Harry Potter and the Sorcerer's Stone"], genre: "fantasia", difficulty: "easy", clues: ["🧙‍♂️⚡🏰","Niño mago cicatriz","Hogwarts escuela","Quidditch","Daniel Radcliffe","2001"]},
  { title: "Piratas del Caribe: La Maldición de la Perla Negra", alt: [], genre: "accion", difficulty: "easy", clues: ["🏴‍☠️🚢🦜","Capitán Jack Sparrow","Rum gone","Johnny Depp","Barco fantasma","2003"]},
  { title: "El Laberinto del Fauno", alt: ["Pan's Labyrinth"], genre: "fantasia", difficulty: "medium", clues: ["🧚‍♀️🔴🌳","España posguerra","Niña fauno","Del Toro","Criatura ojos manos","2006"]},
  { title: "Dune", alt: ["Duna"], genre: "ciencia-ficcion", difficulty: "medium", clues: ["🏜️🪱⚔️","Planeta desierto especias","Paul Atreides","Gusanos arena","Timothée Chalamet","2021"]},
  { title: "Oppenheimer", alt: [], genre: "drama", difficulty: "medium", clues: ["💣🔥🧠","Padre bomba atómica","Trinity prueba","Cillian Murphy","Nolan biopic","2023"]},
  { title: "Todo en Todas Partes al Mismo Tiempo", alt: ["Everything Everywhere All at Once"], genre: "ciencia-ficcion", difficulty: "hard", clues: ["🥯🧦🌭","Multiverso lavandería","Rocks universo","Michelle Yeoh","Dedos salchicha","2022"]},
  { title: "Whiplash", alt: [], genre: "drama", difficulty: "medium", clues: ["🥁🎺💥","Baterista profesor duro","Not quite my tempo","Miles Teller","J.K. Simmons","2014"]},
  { title: "La La Land", alt: [], genre: "drama", difficulty: "easy", clues: ["🎹💃🌆","Musical Los Ángeles","City of stars","Emma Stone Ryan Gosling","Sueños Hollywood","2016"]},
  { title: "Joker", alt: ["Guasón"], genre: "drama", difficulty: "easy", clues: ["🤡🃏🃏","Origen villano Batman","Escaleras baile","Joaquin Phoenix","Sociedad caos","2019"]},
  { title: "Huye", alt: ["Get Out"], genre: "terror", difficulty: "medium", clues: ["🫖👁️🏠","Novio visita familia","Sunken place","Racismo sutil","Jordan Peele","2017"]},
  { title: "El Conjuro", alt: ["The Conjuring"], genre: "terror", difficulty: "easy", clues: ["👻🏠🛌","Investigadores paranormal","Basado hechos reales","Muñeca Annabelle","Warren pareja","2013"]},
  { title: "Un Lugar en Silencio", alt: ["A Quiet Place"], genre: "terror", difficulty: "medium", clues: ["🤫👽🌽","Silencio sobrevivir","Criaturas sonido","Familia granja","John Krasinski","2018"]},
  { title: "Midsommar", alt: [], genre: "terror", difficulty: "hard", clues: ["🌻🏞️😱","Culto sueco día","Festival verano","Dani llanto","Ari Aster","2019"]},
  
  // === MÁS PELÍCULAS AÑADIDAS ===

// FAMILIAR / COMEDIA
{ title: "Mary Poppins", alt: [], genre: "fantasia", difficulty: "easy", clues: ["☂️🎩🎶","Niñera mágica canta","Supercalifragilistico","Familia Banks","Disney clásico","1964"]},
{ title: "Princesa por Sorpresa", alt: ["The Princess Diaries"], genre: "comedia", difficulty: "easy", clues: ["👑📘👧","Chica normal princesa","Antes y después","Anne Hathaway","Abuela reina","2001"]},
{ title: "La Niñera Mágica", alt: ["Nanny McPhee"], genre: "fantasia", difficulty: "easy", clues: ["🪄👵👦","Niños traviesos","Verrugas desaparecen","Emma Thompson","Lecciones morales","2005"]},
{ title: "Matilda", alt: [], genre: "fantasia", difficulty: "easy", clues: ["📚🧠✨","Niña genio poderes","Directora cruel","Telequinesis","Roald Dahl","1996"]},
{ title: "Paddington", alt: [], genre: "comedia", difficulty: "easy", clues: ["🐻🧳🍊","Oso educado Londres","Familia Brown","Mermelada","Humor británico","2014"]},

// COMEDIA
{ title: "Solo en Casa", alt: ["Home Alone"], genre: "comedia", difficulty: "easy", clues: ["🏠🎄🧒","Niño solo Navidad","Ladrones torpes","Trampas","Kevin McCallister","1990"]},
{ title: "Señora Doubtfire", alt: [], genre: "comedia", difficulty: "easy", clues: ["👵🎭👨","Padre disfraz niñera","Robin Williams","Familia divorcio","Cambio voz","1993"]},
{ title: "Legalmente Rubia", alt: ["Legally Blonde"], genre: "comedia", difficulty: "easy", clues: ["💖👱‍♀️⚖️","Rubia abogada","Harvard","No juzgar apariencia","Reese Witherspoon","2001"]},
{ title: "Dos Tontos Muy Tontos", alt: ["Dumb and Dumber"], genre: "comedia", difficulty: "easy", clues: ["🤪🚗💼","Amigos muy tontos","Viaje absurdo","Jim Carrey","Humor slapstick","1994"]},
{ title: "La Máscara", alt: ["The Mask"], genre: "comedia", difficulty: "easy", clues: ["🎭💚🕺","Máscara mágica","Cartoon real","Jim Carrey","Cameron Diaz","1994"]},

// AVENTURA
{ title: "Jumanji", alt: [], genre: "aventura", difficulty: "easy", clues: ["🎲🌴🦁","Juego peligroso","Animales salvajes","Robin Williams","No pares juego","1995"]},
{ title: "Hook", alt: [], genre: "fantasia", difficulty: "easy", clues: ["🏴‍☠️🧚‍♂️⚔️","Peter Pan adulto","Capitán Garfio","Nunca Jamás","Robin Williams","1991"]},
{ title: "Las Crónicas de Narnia", alt: ["El León la Bruja y el Armario"], genre: "fantasia", difficulty: "easy", clues: ["🦁❄️🚪","Mundo mágico armario","Bruja blanca","Aslan","Hermanos Pevensie","2005"]},

// ROMANCE
{ title: "Notting Hill", alt: [], genre: "romance", difficulty: "easy", clues: ["📚❤️🎬","Librero actriz famosa","Soy solo una chica","Julia Roberts","Londres","1999"]},
{ title: "Diario de una Pasión", alt: ["The Notebook"], genre: "romance", difficulty: "easy", clues: ["📓🌧️❤️","Amor toda la vida","Cartas","Ryan Gosling","Final emotivo","2004"]},
{ title: "Titanic", alt: ["titanic"], genre: "drama", difficulty: "easy", clues: ["🚢❄️❤️","Ya sabes esta 😉","Jack y Rose","Iceberg","Tragedia","1997"]},

// ANIMACIÓN (más)
{ title: "Luca", alt: [], genre: "animacion", difficulty: "easy", clues: ["🌊🐟🚲","Monstruos marinos","Verano Italia","Amistad","Pixar","2021"]},
{ title: "Red", alt: ["Turning Red"], genre: "animacion", difficulty: "easy", clues: ["🐼🔴👧","Adolescencia","Emociones","Oso rojo","Pixar","2022"]},
{ title: "El Gigante de Hierro", alt: [], genre: "animacion", difficulty: "medium", clues: ["🤖🚀👦","Robot gigante","Amistad","Guerra fría","Superman","1999"]},

// MUSICAL
{ title: "Grease", alt: [], genre: "musical", difficulty: "easy", clues: ["🕺🎶🚗","Instituto años 50","Verano amor","John Travolta","You're the one","1978"]},
{ title: "The Greatest Showman", alt: [], genre: "musical", difficulty: "easy", clues: ["🎪🎤✨","Circo espectáculo","This is me","Hugh Jackman","Baile y música","2017"]},

// MÁS VARIADAS (hasta +40)
{ title: "Big Fish", alt: [], genre: "drama", difficulty: "medium", clues: ["🐟📖✨","Padre historias exageradas","Realidad fantasía","Tim Burton","Final emotivo","2003"]},
{ title: "Pequeña Miss Sunshine", alt: [], genre: "comedia", difficulty: "medium", clues: ["🚐👨‍👩‍👧‍👦💃","Familia disfuncional","Concurso belleza","Viaje","Indie","2006"]},
{ title: "El Gran Hotel Budapest", alt: [], genre: "comedia", difficulty: "medium", clues: ["🏨🎨🧳","Estilo simétrico","Conserje elegante","Wes Anderson","Europa ficticia","2014"]},
{ title: "Charlie y la Fábrica de Chocolate", alt: [], genre: "fantasia", difficulty: "easy", clues: ["🍫🎩🏭","Fábrica mágica","Wonka","Niños premios","Roald Dahl","2005"]},
{ title: "Peter Pan", alt: [], genre: "fantasia", difficulty: "easy", clues: ["🧚‍♀️🌙✈️","Niño no crece","Campanilla","Nunca Jamás","Disney","1953"]},
{ title: "Alicia en el País de las Maravillas", alt: [], genre: "fantasia", difficulty: "easy", clues: ["🐰⏰🍄","Mundo absurdo","Sombrerero","Reina corazones","Lewis Carroll","1951"]},
{ title: "La Historia Interminable", alt: [], genre: "fantasia", difficulty: "medium", clues: ["🐉📖🌌","Libro mágico","Fantasía","Atreyu","Auryn","1984"]},

// === 50 PELÍCULAS EXTRA ===

// COMEDIA
{ title: "El Diablo Viste de Prada", alt: [], genre: "comedia", difficulty: "easy", clues: ["👠📰👩‍💼","Moda revista","Jefa imposible","Meryl Streep","That’s all","2006"]},
{ title: "Resacón en Las Vegas", alt: ["The Hangover"], genre: "comedia", difficulty: "easy", clues: ["🍺🐯🕶️","Despedida soltero","Amnesia","Bebé inesperado","Vegas","2009"]},
{ title: "Scary Movie", alt: [], genre: "comedia", difficulty: "easy", clues: ["😱😂📞","Parodia terror","Asesino torpe","Referencias cine","Wazzup","2000"]},
{ title: "Ocho Apellidos Vascos", alt: [], genre: "comedia", difficulty: "easy", clues: ["🇪🇸❤️😂","Andaluz País Vasco","Choque cultural","Boda falsa","Taquillazo español","2014"]},
{ title: "Zoolander", alt: [], genre: "comedia", difficulty: "easy", clues: ["🕶️📸🤨","Modelo tonto","Mirada Blue Steel","Ben Stiller","Moda absurda","2001"]},

// ROMANCE
{ title: "Pretty Woman", alt: [], genre: "romance", difficulty: "easy", clues: ["👗❤️💼","Cenicienta moderna","Hotel lujo","Julia Roberts","Richard Gere","1990"]},
{ title: "Love Actually", alt: [], genre: "romance", difficulty: "easy", clues: ["🎄❤️✉️","Historias cruzadas","Navidad","Carteles amor","Londres","2003"]},
{ title: "Bajo la Misma Estrella", alt: [], genre: "romance", difficulty: "easy", clues: ["📘🎢💔","Amor adolescentes","Cáncer","Amsterdam","Okay? Okay.","2014"]},
{ title: "Antes del Amanecer", alt: ["Before Sunrise"], genre: "romance", difficulty: "medium", clues: ["🚶‍♂️🚶‍♀️🌅","Conversaciones Viena","Una noche","Trilogía","Amor realista","1995"]},

// DRAMA
{ title: "Réquiem por un Sueño", alt: ["Requiem for a Dream"], genre: "drama", difficulty: "hard", clues: ["💊📺😵","Adicción","Montaje frenético","Ellen Burstyn","Final devastador","2000"]},
{ title: "El Pianista", alt: [], genre: "drama", difficulty: "medium", clues: ["🎹🕍🪖","Holocausto","Músico judío","Adrien Brody","Supervivencia","2002"]},
{ title: "American Beauty", alt: [], genre: "drama", difficulty: "medium", clues: ["🌹🏠😔","Crisis suburbana","Bolsa volando","Kevin Spacey","Sueño americano","1999"]},
{ title: "Manchester frente al Mar", alt: ["Manchester by the Sea"], genre: "drama", difficulty: "hard", clues: ["❄️🌊😢","Duelo familiar","Pueblo costero","Casey Affleck","Dolor silencioso","2016"]},
{ title: "El Curioso Caso de Benjamin Button", alt: [], genre: "drama", difficulty: "medium", clues: ["⏳👶👴","Nace anciano","Vida inversa","Brad Pitt","Amor tiempo","2008"]},

// ACCIÓN
{ title: "Arma Letal", alt: ["Lethal Weapon"], genre: "accion", difficulty: "easy", clues: ["🔫👮‍♂️😂","Policías opuestos","Pareja explosiva","Mel Gibson","Navidad acción","1987"]},
{ title: "El Protector", alt: ["The Equalizer"], genre: "accion", difficulty: "medium", clues: ["📖🔨⚖️","Justiciero solitario","Denzel Washington","Venganza","Reloj cuenta","2014"]},
{ title: "Distrito 9", alt: [], genre: "ciencia-ficcion", difficulty: "medium", clues: ["👽🏚️🔫","Alienígenas apartheid","Falso documental","Johannesburgo","Metáfora social","2009"]},
{ title: "V de Vendetta", alt: [], genre: "accion", difficulty: "medium", clues: ["🎭🔥🎆","Revolución","Máscara Guy Fawkes","Remember remember","Totalitarismo","2005"]},
{ title: "Snowpiercer", alt: [], genre: "accion", difficulty: "medium", clues: ["🚆❄️⚔️","Tren postapocalíptico","Clases sociales","Chris Evans","Bong Joon-ho","2013"]},

// TERROR
{ title: "La Bruja", alt: ["The VVitch"], genre: "terror", difficulty: "hard", clues: ["🐐🌲😱","Puritanos","Bosque","Terror lento","Black Phillip","2015"]},
{ title: "REC", alt: [], genre: "terror", difficulty: "easy", clues: ["📹🏢🧟","Cámara mano","Edificio infectado","Periodista","Terror español","2007"]},
{ title: "Saw", alt: [], genre: "terror", difficulty: "easy", clues: ["🪚⏱️😨","Juegos macabros","Decisiones morales","Muñeco bici","Giro final","2004"]},
{ title: "La Noche de Halloween", alt: ["Halloween"], genre: "terror", difficulty: "easy", clues: ["🎃🔪😶","Asesino máscara","Michael Myers","Babysitter","Clásico slasher","1978"]},

// ANIMACIÓN
{ title: "Bambi", alt: [], genre: "animacion", difficulty: "easy", clues: ["🦌🌲💔","Crecimiento","Madre tragedia","Naturaleza","Disney clásico","1942"]},
{ title: "Pocahontas", alt: [], genre: "animacion", difficulty: "easy", clues: ["🍃🛶❤️","Amor culturas","Colonos","Colores viento","Disney","1995"]},
{ title: "El Planeta del Tesoro", alt: [], genre: "animacion", difficulty: "medium", clues: ["🚀🏴‍☠️🗺️","Piratas espacio","Mapa","Disney infravalorada","2002"]},
{ title: "Los Mitchell contra las Máquinas", alt: [], genre: "animacion", difficulty: "easy", clues: ["🤖📱👨‍👩‍👧","IA rebelde","Familia disfuncional","Viaje carretera","Netflix","2021"]},
{ title: "Hotel Transilvania", alt: [], genre: "animacion", difficulty: "easy", clues: ["🧛‍♂️🏨😂","Monstruos vacaciones","Drácula padre","Humor familiar","Sony","2012"]},

// FANTASÍA / AVENTURA
{ title: "Willow", alt: [], genre: "fantasia", difficulty: "medium", clues: ["🧙‍♂️⚔️👶","Aventura épica","Enano héroe","Ron Howard","Fantasía clásica","1988"]},
{ title: "Stardust", alt: [], genre: "fantasia", difficulty: "medium", clues: ["🌠❤️⚔️","Estrella humana","Reinos mágicos","Piratas voladores","Cuento adulto","2007"]},
{ title: "La Momia", alt: [], genre: "aventura", difficulty: "easy", clues: ["🧟‍♂️🏺🐫","Egipto maldición","Aventura pulp","Brendan Fraser","Acción divertida","1999"]},
{ title: "Ready Player One", alt: [], genre: "ciencia-ficcion", difficulty: "easy", clues: ["🎮🕶️🏁","Realidad virtual","Referencias 80s","Easter eggs","Spielberg","2018"]},
{ title: "Tron: Legacy", alt: [], genre: "ciencia-ficcion", difficulty: "medium", clues: ["💡🏍️🌐","Mundo digital","Motos luz","Daft Punk","Rejilla","2010"]},

// === NUEVAS PELÍCULAS AÑADIDAS (20 más para variedad) ===
  // ACCIÓN
  { title: "The Bourne Identity", alt: ["El Caso Bourne"], genre: "accion", difficulty: "medium", clues: ["🕵️‍♂️🔫🧠","Amnesia espía","Matt Damon","Persecución autos","Identidad secreta","2002"]},
  { title: "Taken", alt: ["Búsqueda Implacable"], genre: "accion", difficulty: "easy", clues: ["📞🔫👧","Padre rescata hija","Habilidades particulares","Liam Neeson","Secuestro París","2008"]},

  // ANIMACIÓN
  { title: "Zootopia", alt: ["Zootrópolis"], genre: "animacion", difficulty: "easy", clues: ["🐰🦊🏙️","Animales ciudad","Judy Hopps policía","Nick Wilde estafador","Disney diversidad","2016"]},
  { title: "Encanto", alt: [], genre: "animacion", difficulty: "easy", clues: ["🕯️👨‍👩‍👧‍👦🎶","Familia mágica Colombia","No hablamos Bruno","Mirabel sin don","Disney Lin-Manuel","2021"]},

  // DRAMA
  { title: "The Green Mile", alt: ["Milagros Inesperados"], genre: "drama", difficulty: "medium", clues: ["🔒⚡🙏","Prisión 1930s","Tom Hanks guardia","John Coffey milagros","Stephen King","1999"]},
  { title: "12 Years a Slave", alt: ["12 Años de Esclavitud"], genre: "drama", difficulty: "hard", clues: ["⛓️📖🇺🇸","Hombre libre esclavizado","Chiwetel Ejiofor","Plantaciones sur","Historia real","2013"]},

  // TERROR
  { title: "The Conjuring", alt: ["El Conjuro"], genre: "terror", difficulty: "medium", clues: ["👻🏠🕯️","Casa embrujada","Ed y Lorraine Warren","Familia Perron","Basado hechos reales","2013"]},
  { title: "A Quiet Place", alt: ["Un Lugar en Silencio"], genre: "terror", difficulty: "easy", clues: ["🤫👽🌽","Monstruos sonido","Familia Abbott","John Krasinski director","Silencio supervivencia","2018"]},

  // CIENCIA-FICCIÓN
  { title: "Dune", alt: ["Duna"], genre: "ciencia-ficcion", difficulty: "medium", clues: ["🏜️🪐🪱","Planeta desierto especia","Paul Atreides","Timothée Chalamet","Frank Herbert","2021"]},
  { title: "Arrival", alt: ["La Llegada"], genre: "ciencia-ficcion", difficulty: "hard", clues: ["👽🕰️🖋️","Alienígenas lenguaje","Amy Adams lingüista","Tiempo no lineal","Heptápodos","2016"]},

  // SUPERHEROES
  { title: "Spider-Man: No Way Home", alt: ["Spider-Man Sin Camino a Casa"], genre: "superheroes", difficulty: "easy", clues: ["🕷️🌌🦹‍♂️","Multiverso villanos","Tom Holland","Tres Spider-Man","Doctor Strange","2021"]},
  { title: "Black Panther", alt: ["Pantera Negra"], genre: "superheroes", difficulty: "easy", clues: ["🐆👑🇼🇰","Rey Wakanda","Vibranium","Chadwick Boseman","Wakanda forever","2018"]},

  // COMEDIA (añadiendo nuevo género si no existe)
  { title: "The Hangover", alt: ["Qué Pasó Ayer"], genre: "comedia", difficulty: "easy", clues: ["🎰🍻🐅","Despedida soltero Las Vegas","Resaca épica","Bradley Cooper","Tigre baño","2009"]},
  { title: "Superbad", alt: ["Supercool"], genre: "comedia", difficulty: "medium", clues: ["🍻🚔👮","Adolescentes fiesta","McLovin ID falsa","Jonah Hill","Policías locos","2007"]},

  // ROMANCE
  { title: "La La Land", alt: [], genre: "romance", difficulty: "easy", clues: ["🎹🎤🌆","Musical Los Ángeles","Ryan Gosling piano","Emma Stone actriz","Baile estrellas","2016"]},
  { title: "Before Sunrise", alt: ["Antes del Amanecer"], genre: "romance", difficulty: "hard", clues: ["🚂❤️🕰️","Encuentro tren Viena","Ethan Hawke","Julie Delpy","Diálogos profundos","1995"]},

  // FANTASÍA
  { title: "The Lord of the Rings: The Fellowship of the Ring", alt: ["El Señor de los Anillos: La Comunidad del Anillo"], genre: "fantasia", difficulty: "easy", clues: ["🧙‍♂️💍🌋","Anillo poder","Frodo viaje","Gandalf gris","Tierra Media","2001"]},
  { title: "Pan's Labyrinth", alt: ["El Laberinto del Fauno"], genre: "fantasia", difficulty: "medium", clues: ["🧚‍♀️🕰️😱","España posguerra","Ofelia tareas","Guillermo del Toro","Fauno pálido","2006"]},

  // CLÁSICOS
  { title: "Casablanca", alt: [], genre: "clasicos", difficulty: "medium", clues: ["✈️❤️🎹","Amor Marruecos WWII","Here's looking at you kid","Humphrey Bogart","Rick's Café","1942"]},
  { title: "Citizen Kane", alt: ["Ciudadano Kane"], genre: "clasicos", difficulty: "hard", clues: ["📰🛷🎥","Magnate prensa","Rosebud","Orson Welles","Innovación cinematográfica","1941"]}  
  
  // Puedes seguir añadiendo más si quieres, ¡hay espacio de sobra!
];

/* =====================
   VARIABLES Y DOM
===================== */
let currentMovieIndex = 0;
let currentClueIndex = -1;
let score = 0;
let correct = 0;
let streak = 0;
let maxStreak = 0;
let lives = 3;
let timerInterval = null;
let timeLeft = 20;

let movies = [];
let totalMovies = 10;
let gameMode = "classic";

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const finalScreen = document.getElementById("finalScreen");
const startBtn = document.getElementById("startBtn");
const clueBtn = document.getElementById("clueBtn");
const checkBtn = document.getElementById("checkBtn");
const skipBtn = document.getElementById("skipBtn");
const giveUpBtn = document.getElementById("giveUpBtn");
const restartBtn = document.getElementById("restartBtn");
const answerInput = document.getElementById("answerInput");
const clueText = document.getElementById("clueText");
const message = document.getElementById("message");
const levelDisplay = document.getElementById("levelDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const correctDisplay = document.getElementById("correctDisplay");
const streakDisplay = document.getElementById("streakDisplay");
const progressBar = document.getElementById("progressBar");
const livesDisplay = document.getElementById("livesDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const timerSpan = document.getElementById("timer");
const difficultyBadge = document.getElementById("difficultyBadge");

/* =====================
   FUNCIONES
===================== */
function showScreen(screen) {
  [startScreen, gameScreen, finalScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function startGame() {
  totalMovies = parseInt(document.getElementById("numMovies").value) || 10;
  gameMode = document.getElementById("gameMode").value;
  const selectedGenre = document.getElementById("genreFilter").value;
  const selectedDifficulty = document.getElementById("difficulty").value;

  let filtered = MOVIES;
  if (selectedGenre !== "all") filtered = filtered.filter(m => m.genre === selectedGenre);
  if (selectedDifficulty !== "all") filtered = filtered.filter(m => m.difficulty === selectedDifficulty);

  movies = filtered.sort(() => Math.random() - 0.5).slice(0, totalMovies);

  if (movies.length === 0) {
    alert("No hay películas con esos filtros. ¡Elige otros!");
    return;
  }

  currentMovieIndex = 0;
  score = 0;
  correct = 0;
  streak = 0;
  maxStreak = 0;
  lives = 3;

  showScreen(gameScreen);
  setupMode();
  loadMovie();
}

function setupMode() {
  livesDisplay.style.display = ["survival", "hardcore"].includes(gameMode) ? "block" : "none";
  timerDisplay.style.display = gameMode === "arcade" ? "block" : "none";

  if (["survival", "hardcore"].includes(gameMode)) updateLives();
  if (gameMode === "arcade") startTimer();
}

function startTimer() {
  timeLeft = 20;
  timerSpan.textContent = timeLeft;
  timerDisplay.classList.remove("warning");
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 10) timerDisplay.classList.add("warning");
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showMessage("⏰ ¡Tiempo agotado!", "incorrect");
      streak = 0;
      setTimeout(nextMovie, 1400);
    }
  }, 1000);
}

function updateLives() {
  livesDisplay.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("span");
    heart.className = "life-heart";
    heart.textContent = i < lives ? "❤️" : "♡";
    if (i >= lives) heart.classList.add("lost");
    livesDisplay.appendChild(heart);
  }
}

function loseLife() {
  lives--;
  updateLives();
  showMessage("❤️ Vida perdida", "incorrect");
  if (lives <= 0 || gameMode === "hardcore") {
    setTimeout(endGame, 1600);
  }
}

function loadMovie() {
  if (currentMovieIndex >= movies.length) {
    endGame();
    return;
  }

  const movie = movies[currentMovieIndex];
  currentClueIndex = -1;
  answerInput.value = "";
  answerInput.disabled = false;
  clueText.textContent = "¡Presiona el botón para ver la primera pista!";
  message.style.display = "none";

  document.querySelectorAll(".clue-dot").forEach(dot => dot.classList.remove("used"));
  clueBtn.disabled = false;

  if (gameMode === "perfectionist") {
    clueBtn.disabled = true;
    clueText.textContent = movie.clues[0];
    document.querySelector('.clue-dot[data-index="0"]').classList.add("used");
  }

  difficultyBadge.textContent = movie.difficulty === "easy" ? "🟢 Fácil" :
                               movie.difficulty === "medium" ? "🟡 Media" : "🔴 Difícil";
  difficultyBadge.className = `difficulty-badge difficulty-${movie.difficulty}`;

  updateStats();
  if (gameMode === "arcade") startTimer();
}

function nextClue() {
  if (gameMode === "perfectionist") {
    showMessage("🔒 Solo tienes una pista en modo Perfeccionista", "hint");
    return;
  }

  const movie = movies[currentMovieIndex];
  currentClueIndex++;

  if (currentClueIndex >= movie.clues.length) {
    clueBtn.disabled = true;
    clueText.textContent = "¡No quedan más pistas!";
    return;
  }

  clueText.textContent = movie.clues[currentClueIndex];
  const dot = document.querySelector(`.clue-dot[data-index="${currentClueIndex}"]`);
  if (dot) dot.classList.add("used");
}

function normalize(text) {
  return text.toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

function cleanTitle(title) {
  return normalize(title).replace(/^(el|la|los|las|un|una|the|a)\s+/g, "");
}

function checkAnswer() {
  const movie = movies[currentMovieIndex];
  const userInput = answerInput.value;
  const userNorm = normalize(userInput);
  const userClean = cleanTitle(userInput);

  if (!userInput) {
    showMessage("Escribe algo primero", "hint");
    return;
  }

  clearInterval(timerInterval);

  const validAnswers = [movie.title, ...(movie.alt || [])];
  const isCorrect = validAnswers.some(title => {
    const norm = normalize(title);
    const clean = cleanTitle(title);
    return norm === userNorm ||
           clean === userClean ||
           norm.includes(userNorm) ||
           userNorm.includes(norm) ||
           (userNorm.length > norm.length * 0.6 && (norm.startsWith(userNorm) || norm.endsWith(userNorm)));
  });

  if (isCorrect) {
    correct++;
    streak++;
    maxStreak = Math.max(maxStreak, streak);

    let points = gameMode === "perfectionist" ? (currentClueIndex <= 0 ? 6 : 1) : Math.max(1, 7 - (currentClueIndex + 1));
    score += points;

    showMessage(`✅ ¡Correcto! +${points} puntos`, "correct");
    answerInput.disabled = true;
    setTimeout(nextMovie, 1600);
  } else {
    streak = 0;
    showMessage("❌ Incorrecto. ¡Sigue intentándolo o pide pista!", "incorrect");

    if (["hardcore", "survival", "perfectionist"].includes(gameMode)) {
      loseLife();
    }
  }

  updateStats();
}

function nextMovie() {
  currentMovieIndex++;
  loadMovie();
}

function skipMovie() {
  streak = 0;
  showMessage("⏭️ Película saltada", "hint");
  if (["hardcore", "survival", "perfectionist"].includes(gameMode)) loseLife();
  else setTimeout(nextMovie, 1000);
}

function giveUp() {
  clearInterval(timerInterval);
  const movie = movies[currentMovieIndex];
  showMessage(`🏳️ Era: ${movie.title}`, "hint");
  streak = 0;
  if (["hardcore", "survival", "perfectionist"].includes(gameMode)) loseLife();
  else setTimeout(nextMovie, 2000);
}

function updateStats() {
  levelDisplay.textContent = `${currentMovieIndex + 1}/${movies.length}`;
  scoreDisplay.textContent = score;
  correctDisplay.textContent = correct;
  streakDisplay.textContent = `${streak}🔥`;
  const progress = Math.round((currentMovieIndex / movies.length) * 100);
  progressBar.style.width = progress + "%";
  progressBar.textContent = progress + "%";
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message show ${type}`;
  message.style.display = "block";
}

function endGame() {
  clearInterval(timerInterval);
  showScreen(finalScreen);

  const maxPossible = movies.length * 6;
  const accuracy = movies.length > 0 ? Math.round((correct / movies.length) * 100) : 0;

  document.getElementById("finalCorrect").textContent = correct;
  document.getElementById("totalPlayed").textContent = movies.length;
  document.getElementById("accuracy").textContent = accuracy;
  document.getElementById("finalScore").textContent = score;
  document.getElementById("maxPossible").textContent = maxPossible;
  document.getElementById("maxStreak").textContent = maxStreak;

  const avgClues = correct > 0 ? ((movies.length * 6 - score) / correct).toFixed(1) : "0";
  document.getElementById("avgClues").textContent = avgClues;

  const performance = score >= maxPossible * 0.9 ? "¡Cineasta legendario! 🎥" :
                      score >= maxPossible * 0.75 ? "¡Eres un experto! ⭐" :
                      score >= maxPossible * 0.5 ? "¡Muy bien hecho!" :
                      "¡Sigue practicando! 💪";
  document.getElementById("performance").textContent = performance;

  // Logros
  const achievementsList = document.getElementById("achievementsList");
  achievementsList.innerHTML = "";
  const achievements = [];

  if (correct === movies.length) achievements.push("🏆 Partida Perfecta");
  if (maxStreak >= 10) achievements.push("🔥 Racha Épica (10+)");
  if (accuracy >= 90) achievements.push("🎯 Precisión Máxima");
  if (score >= maxPossible * 0.8) achievements.push("💰 Puntuación Alta");
  if (gameMode === "perfectionist" && correct > 0) achievements.push("⭐ Perfeccionista Real");
  if (gameMode === "hardcore" && correct === movies.length) achievements.push("💀 Imbatible en Hardcore");

  if (achievements.length === 0) {
    achievementsList.innerHTML = "<p>¡Ningún logro esta vez! Sigue jugando 😊</p>";
  } else {
    achievements.forEach(ach => {
      const div = document.createElement("div");
      div.className = "achievement";
      div.textContent = ach;
      achievementsList.appendChild(div);
    });
  }
}

/* =====================
   EVENTOS
===================== */
startBtn.onclick = startGame;
clueBtn.onclick = nextClue;
checkBtn.onclick = checkAnswer;
skipBtn.onclick = skipMovie;
giveUpBtn.onclick = giveUp;
restartBtn.onclick = () => showScreen(startScreen);

answerInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkAnswer();
  }
});