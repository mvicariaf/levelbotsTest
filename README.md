## Synopsis

Prueba de código para la empresa LevelBots. 
API REST que maneja una base de datos de empresas con mongodb y express con oauth para gestionar accesos a algunas de las rutas.

## Uso de la API
	
Rutas disponibles en la API	
	
	GET /companies => Devuelve lista con los nombres de cada empresa junto a con el link de su web y su id.
	GET /company/:id => El objeto de la empresa completo.
	GET /company/:id/products => Lista con los nombres de los productos.
	GET /company/:id/members => Lista con los nombres y títulos de los miembros actuales de la compañía.
	POST /company => Añade una nueva compañía a la empresa. La empresa debe tener como mínimo id, lista de productos y listas de miembros.
	POST /company/:id/producto => Añade un nuevo producto a una empresa.
	PUT /company/:id => Actualiza los datos de una empresa.
	DELETE /company/:id => Borra los datos de una empresa.
	
Para hacer uso de los endpoints de POST PUT y DELETE es necesario estar logeado. Para crear un usuario y logearse se definen las siguientes rutas:
	POST /signup => crear usuario, es necesario añadir email, nombre y contraseña al cuerpo de la petición. Esto generará un token para acceder a ciertas rutas.
	POST /signin => logearse con usuario ya creado, es necesario especificaar email y contraseña. Al logearnos, si los datos son correctos, aparece el token para el usuario.

Para testear las rutas y hacer peticiones use el programa POSTMAN.

## Estructura del código

- Fichero controllers: contiene las funciones necesarias para realizar las peticiones a la base de datos y las de signup y signin
- Fichero middlewares: contiene la función para decodificar el token 
- Fichero models: contiene los modelos de mongoose de usuarios y compañias
- Fichero routes: donde se define los endpoints de nuestra API
- Fichero services: contiene las funciones para generar tokens y comprobar si el token recibido es válido
- config.js: contiene la configuracion para la conexion a la base de datos y la escucha del puerto
- index.js: realiza la conexión con la configuración que le pasamos desde el archivo config.js
- package.json: contiene la información sobre el proyecto y los módulos que se requieren
- app.js: importa los módulos necesarios para ejercutar nuestra aplicación

## Dificultades a la hora de realizar la prueba

La primera dificultad que encontré fue a la hora de conectar la base de datos en el archivo .json que se nos facilitaba ya que las veces que trabajé con mongodb siempre usé mongoose y definí mi propio esquema y a partir de ahí contruí 
la base de datos, es en este caso era al revés. Investigando decidí usar mongoose de nuevo y pasarle el nombre de la colección como parametro.
La segunda dificultad que me gustaría remarcar ha sido a la hora de gestionar el acceso. Finalmente lo realicé siguiendo varios tutoriales e investigando llegué a jwt.

## Posibles mejoras

- Añadir una interfaz gráfica para no necesitar programas de terceros para manejar la API
