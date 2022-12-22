# Host it yourself

Docker
```bash
docker pull ghcr.io/angelsflyinhell/qwqsh:latest
docker run --net host --env MONGO_URI=$MONGO_URI -d ghcr.io/angelsflyinhell/qwqsh:latest
```
