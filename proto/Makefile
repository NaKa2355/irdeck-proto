PROTO := $(shell find ./ -name *.proto)

#--------------golang generator-------------------
GO_OUT := ../gen/go
GO_MODULE := $(shell go list -m)
GO_FILES := $(shell find ../ -name *.go)

gen-go:
	protoc -I. --experimental_allow_proto3_optional \
	--go_opt=paths=source_relative --go_out=$(GO_OUT) \
	--go-grpc_opt=paths=source_relative --go-grpc_out=$(GO_OUT) \
	$(PROTO)
#---------------------------------------------------

#--------------------general------------------------
clean-go:
	rm -rf $(GO_OUT)/**

clean: clean-go

all: gen-go
#---------------------------------------------------