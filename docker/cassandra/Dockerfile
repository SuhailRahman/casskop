FROM cassandra:3.11

RUN apt-get update && \
      apt-get -y install sudo && \
      apt-get -y install zip && \ 
      curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
      unzip awscliv2.zip 

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo


USER docker



