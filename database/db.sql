--Comandos desde Terminal para docker 

--Comando para descargar la ultima versión de mysql
docker pull mysql

--Comando para ver las images que tenemos en docker
docker images 

--Comando con el cual hacemos un contenedor de mysql con el (name) son el nombre del contenedor la (PASSWORD) es del root y (DATABASE) es para crear de una vez una base de datos y el ( -p el primer 3306 es para el puerto con el cual se conecta a nuestra pc y el que despues de :3306 es el puerto de docker 
docker run --name DockerMysql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=equiposdb -p 3306:3306 -d mysql 

--Conectarnos a mysql de docker desde terminal
docker exec -it DockerMysql bash

--Ingresar a el mysql 
mysql -u root --password
--Posteriormente se pide la contraseña

--Comando para ver las db
show databases;

--Entrar a la db que necesitamos
use equiposdb

--Creando tabla equpos
CREATE TABLE equipos(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    eq1 varchar(200) NOT NULL,
    eq2 varchar(200) NOT NULL,
    description varchar(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--Para ver la tabla que acabamos de crear
describe equipos;