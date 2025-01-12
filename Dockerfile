FROM node:20-alpine

WORKDIR /app

# Instala dependências primeiro para aproveitar o cache
COPY package*.json ./
RUN npm ci

# Copia o resto dos arquivos
COPY . .

# Configura variáveis de ambiente
ENV PORT=5000
ENV NODE_ENV=production

# Expõe a porta
EXPOSE 5000

# Configura o healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:2000 || exit 1

# Comando para iniciar
CMD ["node", "app.js"]