// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: pirem/api/v1/pirem_service.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PiRemServiceClient is the client API for PiRemService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PiRemServiceClient interface {
	SendRawIr(ctx context.Context, in *SendRawIrRequest, opts ...grpc.CallOption) (*SendRawIrResponse, error)
	ReceiveRawIr(ctx context.Context, in *ReceiveRawIrRequest, opts ...grpc.CallOption) (*ReceiveRawIrResponse, error)
	GetAllDeviceInfo(ctx context.Context, in *GetAllDeviceInfoRequest, opts ...grpc.CallOption) (*GetAllDeviceInfoResponse, error)
	GetDeviceInfo(ctx context.Context, in *GetDeviceInfoRequest, opts ...grpc.CallOption) (*DeviceInfo, error)
}

type piRemServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPiRemServiceClient(cc grpc.ClientConnInterface) PiRemServiceClient {
	return &piRemServiceClient{cc}
}

func (c *piRemServiceClient) SendRawIr(ctx context.Context, in *SendRawIrRequest, opts ...grpc.CallOption) (*SendRawIrResponse, error) {
	out := new(SendRawIrResponse)
	err := c.cc.Invoke(ctx, "/pirem.PiRemService/SendRawIr", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *piRemServiceClient) ReceiveRawIr(ctx context.Context, in *ReceiveRawIrRequest, opts ...grpc.CallOption) (*ReceiveRawIrResponse, error) {
	out := new(ReceiveRawIrResponse)
	err := c.cc.Invoke(ctx, "/pirem.PiRemService/ReceiveRawIr", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *piRemServiceClient) GetAllDeviceInfo(ctx context.Context, in *GetAllDeviceInfoRequest, opts ...grpc.CallOption) (*GetAllDeviceInfoResponse, error) {
	out := new(GetAllDeviceInfoResponse)
	err := c.cc.Invoke(ctx, "/pirem.PiRemService/GetAllDeviceInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *piRemServiceClient) GetDeviceInfo(ctx context.Context, in *GetDeviceInfoRequest, opts ...grpc.CallOption) (*DeviceInfo, error) {
	out := new(DeviceInfo)
	err := c.cc.Invoke(ctx, "/pirem.PiRemService/GetDeviceInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PiRemServiceServer is the server API for PiRemService service.
// All implementations must embed UnimplementedPiRemServiceServer
// for forward compatibility
type PiRemServiceServer interface {
	SendRawIr(context.Context, *SendRawIrRequest) (*SendRawIrResponse, error)
	ReceiveRawIr(context.Context, *ReceiveRawIrRequest) (*ReceiveRawIrResponse, error)
	GetAllDeviceInfo(context.Context, *GetAllDeviceInfoRequest) (*GetAllDeviceInfoResponse, error)
	GetDeviceInfo(context.Context, *GetDeviceInfoRequest) (*DeviceInfo, error)
	mustEmbedUnimplementedPiRemServiceServer()
}

// UnimplementedPiRemServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPiRemServiceServer struct {
}

func (UnimplementedPiRemServiceServer) SendRawIr(context.Context, *SendRawIrRequest) (*SendRawIrResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendRawIr not implemented")
}
func (UnimplementedPiRemServiceServer) ReceiveRawIr(context.Context, *ReceiveRawIrRequest) (*ReceiveRawIrResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReceiveRawIr not implemented")
}
func (UnimplementedPiRemServiceServer) GetAllDeviceInfo(context.Context, *GetAllDeviceInfoRequest) (*GetAllDeviceInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAllDeviceInfo not implemented")
}
func (UnimplementedPiRemServiceServer) GetDeviceInfo(context.Context, *GetDeviceInfoRequest) (*DeviceInfo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDeviceInfo not implemented")
}
func (UnimplementedPiRemServiceServer) mustEmbedUnimplementedPiRemServiceServer() {}

// UnsafePiRemServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PiRemServiceServer will
// result in compilation errors.
type UnsafePiRemServiceServer interface {
	mustEmbedUnimplementedPiRemServiceServer()
}

func RegisterPiRemServiceServer(s grpc.ServiceRegistrar, srv PiRemServiceServer) {
	s.RegisterService(&PiRemService_ServiceDesc, srv)
}

func _PiRemService_SendRawIr_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendRawIrRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PiRemServiceServer).SendRawIr(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pirem.PiRemService/SendRawIr",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PiRemServiceServer).SendRawIr(ctx, req.(*SendRawIrRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PiRemService_ReceiveRawIr_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiveRawIrRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PiRemServiceServer).ReceiveRawIr(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pirem.PiRemService/ReceiveRawIr",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PiRemServiceServer).ReceiveRawIr(ctx, req.(*ReceiveRawIrRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PiRemService_GetAllDeviceInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAllDeviceInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PiRemServiceServer).GetAllDeviceInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pirem.PiRemService/GetAllDeviceInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PiRemServiceServer).GetAllDeviceInfo(ctx, req.(*GetAllDeviceInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PiRemService_GetDeviceInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDeviceInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PiRemServiceServer).GetDeviceInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pirem.PiRemService/GetDeviceInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PiRemServiceServer).GetDeviceInfo(ctx, req.(*GetDeviceInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PiRemService_ServiceDesc is the grpc.ServiceDesc for PiRemService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PiRemService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pirem.PiRemService",
	HandlerType: (*PiRemServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SendRawIr",
			Handler:    _PiRemService_SendRawIr_Handler,
		},
		{
			MethodName: "ReceiveRawIr",
			Handler:    _PiRemService_ReceiveRawIr_Handler,
		},
		{
			MethodName: "GetAllDeviceInfo",
			Handler:    _PiRemService_GetAllDeviceInfo_Handler,
		},
		{
			MethodName: "GetDeviceInfo",
			Handler:    _PiRemService_GetDeviceInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pirem/api/v1/pirem_service.proto",
}
