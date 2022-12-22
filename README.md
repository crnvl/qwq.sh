[![Deploy Docker Image](https://github.com/angelsflyinhell/qwq.sh/actions/workflows/deploy.yml/badge.svg)](https://github.com/angelsflyinhell/qwq.sh/actions/workflows/deploy.yml)

# Host it yourself
Docker
```bash
docker pull ghcr.io/angelsflyinhell/qwqsh:latest
docker run --net host --env MONGO_URI=$MONGO_URI -d ghcr.io/angelsflyinhell/qwqsh:latest
```
