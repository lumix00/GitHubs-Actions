# Use a imagem base do Node.js
FROM node:20

# Instale o OpenSSH e outros utilitários
RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Crie o diretório para o serviço SSH
RUN mkdir /var/run/sshd

# Adicione um usuário e defina uma senha
RUN useradd -ms /bin/bash myuser && echo "myuser:0311" | chpasswd && adduser myuser sudo

# Configure o SSH para permitir autenticação por senha
RUN sed -i 's/^#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/^#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que a aplicação vai rodar e a porta SSH
EXPOSE 3000 22

# Comando para iniciar o SSH e a aplicação
CMD ["/bin/bash", "-c", "service ssh start && npm start"]
