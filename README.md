# Api NodeJS Postgres Sequelize
<hr>

## Instalación

#### Instalar pnpm
> pnpm es un gestor de paquetes que funciona de manera similar a npm, pero con mejoras en cuanto a velocidad y espacio en disco.

```bash
npm install -g pnpm
```

#### Instalar dependencias
```bash
pnpm install
```

## Configurar entorno

#### Crear archivo .env
```bash
cp .env.example .env
```
#### Setear variables de entorno

```bash
DB_PASSWORD=
DB_USER=
DB_NAME=
DB_HOST=
DB_PORT=
```

## Levantar base de datos
  
```bash
docker-compose up -d
```

<hr>

## Levantar servidor

#### Modo desarrollo

```bash
pnpm dev
```

#### Modo producción

```bash
pnpm start
```
