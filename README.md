## Construção de Software - Grupo 2

URL - Keycloak Amazon
http://3.16.255.145:8080/auth/

Caso de teste
POST - http://3.16.255.145:3456/login

Body: 
{
	"login": "user",
	"password": "Senha@123"
}



- Para fazer rodar essa joça sem ssl, rode o seguinte comando:
```sh
$ docker exec -it constr-sw-2020-1-grupo2_keycloak_1 bash

$ cd opt/jboss/keycloak/bin

$ ./kcadm.sh config credentials --server http://localhost:8080/auth 
--realm master --user usr-admin --password

$ ./kcadm.sh update realms/master -s sslRequired=NONE
```

- Após configurar um novo realm, execute novamente o último comando citado acima.
```sh
$ docker exec -it constr-sw-2020-1-grupo2_keycloak_1 bash

$ cd opt/jboss/keycloak/bin

$ ./kcadm.sh update realms/newrealm -s sslRequired=NONE
```
#### Modelagem do CRUD de Reservas
