
## backend (aşağıdaki komutları container da da çalıştırabiliriz burada projenin çalıştığını görmek için bu komutları çalıştırdık)
*   npm i
*   mkdir logs
*   create .env
*   create .dockerignore
# image oluştur
*   docker build ./backend -t backend
# container oluştur
*   docker run --name backend -p 7000:8000 backend 
*   7000:8000 yazılmayabilir yukarıda 7000 dış port 8000 iç yani server port (container çalıştığında => http://127.0.0.1:7000)
# terminali meşgul etmesin arkaplanda çalışsın istiyorsak
*   docker run -d -p 7000:8000 --name backend backend
# terminalden container ı başlatmak ve durdurmak için:
*   docker start backend
*   docker stop backend
# docker hub için
*   docker tag backend brucehillwalley/backend_stock
*   docker push brucehillwalley/backend_stock

## frontend
*  create dockerfile
*  docker build ./frontend -t frontend
*  docker run -d -p 5173:5173 --name frontend frontend 
# docker hub için
*  docker tag frontend brucehillwalley/frontend_stock
*   docker push brucehillwalley/frontend_stock

##  Docker Compose:
    Çok konteynerli Docker uygulamalarını tanımlama ve yönetme.
    Tüm uygulama hizmetlerini bir komutla başlatma ve durdurma.
    Geliştirme, test ve üretim ortamlarında uygulamaların tutarlı ve kolay bir şekilde dağıtımını sağlama.
    Ortamlar arasında tutarlılık ve izlenebilirlik sunma gibi avantajlar sağlar.

## Server Systems

* Physical Servers (BareMetal Servers):
    * Bilgisayar -> Yüksek donanım, özel işlemciler, özel işletim sistemleri.
    * Kurulum: zor
    * VeriTaşıma: zor
    * Maliyet: yüksek
    * Dedicated Servers

* Virtual Servers (VMs: Virtual Machines):
    * Bir fiziksel makina içinde çok sanal makina.
    * Kurulum: orta (iso image)
    * VeriTaşıma: orta
    * Maliyet: orta
    * Bir makiaden diğer makinaya geçiş zorluğu.
    * Hypervisor yazılımları -> vmware.com
    * VPS (Virtual Private Server), VDS (Virtual Dedicated Server)

* Containers:
    * Bir fiziksel/sanal makina içinde çok konteyner.
    * Kurulum: kolay (docker image)
    * VeriTaşıma: kolay
    * Maliyet: düşük
    * Tüm konteynerları aynı ortamdan yönetebilme.
    * Microservice mimarisi.
    * Container yazılımları -> docker.com

# Docker

## Yüklemeler:

* Docker Desktop -> https://www.docker.com/products/docker-desktop/
    * Windows ve Macos için setup dosyası mevcut.
    * Linux sistemlere CLI üzerinden kurulum yapılabilir. -> https://docs.docker.com/desktop/install/linux-install/

* Docker Hub -> https://hub.docker.com

* VSCode Docker Extension -> https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

## .dockerignore

```dockerignore

*.pyc
*.pyo
*.mo
*.db
*.css.map
*.egg-info
*.sql.gz
.cache
.project
.idea
.pydevproject
.idea/workspace.xml
.DS_Store
.git/
.sass-cache
.vagrant/
__pycache__
dist
docs
env/
logs
src/{{ project_name }}/settings/local.py
src/node_modules
web/media
web/static/CACHE
stats
Dockerfile
Footer
node_modules/
npm-debug.log

```
