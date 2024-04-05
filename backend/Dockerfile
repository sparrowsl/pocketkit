FROM alpine:3

WORKDIR /app

ARG PB_VERSION=0.22.7

RUN apk add --no-cache \
	unzip \
	ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /app

# uncomment to copy the local pb_migrations dir into the image
# COPY ./pb_migrations ./pb_migrations

# uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks ./pb_hooks
COPY . .

EXPOSE 8090 

# start PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
