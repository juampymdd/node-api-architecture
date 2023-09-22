# Api NodeJS Postgres Sequelize
<hr>

## Instalación

```bash
pnpm install
```

## Configurar entorno

```bash
cp .env.example .env
```
## Setear variables de entorno

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

