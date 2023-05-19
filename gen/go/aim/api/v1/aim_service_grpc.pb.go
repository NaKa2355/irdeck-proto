// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: aim/api/v1/aim_service.proto

package v1

import (
	context "context"
	any1 "github.com/golang/protobuf/ptypes/any"
	empty "github.com/golang/protobuf/ptypes/empty"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AimServiceClient is the client API for AimService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AimServiceClient interface {
	AddRemote(ctx context.Context, in *AddRemoteRequest, opts ...grpc.CallOption) (*AddRemoteResponse, error)
	AddButton(ctx context.Context, in *AddButtonRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	GetRemotes(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetRemotesResponse, error)
	GetRemote(ctx context.Context, in *GetRemoteRequest, opts ...grpc.CallOption) (*GetRemoteResponse, error)
	GetButtons(ctx context.Context, in *GetButtonsRequest, opts ...grpc.CallOption) (*GetButtonssResponse, error)
	GetIrData(ctx context.Context, in *GetIrDataRequest, opts ...grpc.CallOption) (*any1.Any, error)
	EditRemote(ctx context.Context, in *EditRemoteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	EditButton(ctx context.Context, in *EditButtonRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	SetIrData(ctx context.Context, in *SetIRDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteRemote(ctx context.Context, in *DeleteRemoteRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteButton(ctx context.Context, in *DeleteButtonRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	NotifyApplianceUpdate(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (AimService_NotifyApplianceUpdateClient, error)
}

type aimServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAimServiceClient(cc grpc.ClientConnInterface) AimServiceClient {
	return &aimServiceClient{cc}
}

func (c *aimServiceClient) AddRemote(ctx context.Context, in *AddRemoteRequest, opts ...grpc.CallOption) (*AddRemoteResponse, error) {
	out := new(AddRemoteResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddRemote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) AddButton(ctx context.Context, in *AddButtonRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddButton", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetRemotes(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetRemotesResponse, error) {
	out := new(GetRemotesResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetRemotes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetRemote(ctx context.Context, in *GetRemoteRequest, opts ...grpc.CallOption) (*GetRemoteResponse, error) {
	out := new(GetRemoteResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetRemote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetButtons(ctx context.Context, in *GetButtonsRequest, opts ...grpc.CallOption) (*GetButtonssResponse, error) {
	out := new(GetButtonssResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetButtons", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetIrData(ctx context.Context, in *GetIrDataRequest, opts ...grpc.CallOption) (*any1.Any, error) {
	out := new(any1.Any)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetIrData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) EditRemote(ctx context.Context, in *EditRemoteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/EditRemote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) EditButton(ctx context.Context, in *EditButtonRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/EditButton", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) SetIrData(ctx context.Context, in *SetIRDataRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/SetIrData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) DeleteRemote(ctx context.Context, in *DeleteRemoteRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/DeleteRemote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) DeleteButton(ctx context.Context, in *DeleteButtonRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/DeleteButton", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) NotifyApplianceUpdate(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (AimService_NotifyApplianceUpdateClient, error) {
	stream, err := c.cc.NewStream(ctx, &AimService_ServiceDesc.Streams[0], "/aim.AimService/NotifyApplianceUpdate", opts...)
	if err != nil {
		return nil, err
	}
	x := &aimServiceNotifyApplianceUpdateClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type AimService_NotifyApplianceUpdateClient interface {
	Recv() (*RemoteUpdateNotification, error)
	grpc.ClientStream
}

type aimServiceNotifyApplianceUpdateClient struct {
	grpc.ClientStream
}

func (x *aimServiceNotifyApplianceUpdateClient) Recv() (*RemoteUpdateNotification, error) {
	m := new(RemoteUpdateNotification)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// AimServiceServer is the server API for AimService service.
// All implementations must embed UnimplementedAimServiceServer
// for forward compatibility
type AimServiceServer interface {
	AddRemote(context.Context, *AddRemoteRequest) (*AddRemoteResponse, error)
	AddButton(context.Context, *AddButtonRequest) (*empty.Empty, error)
	GetRemotes(context.Context, *empty.Empty) (*GetRemotesResponse, error)
	GetRemote(context.Context, *GetRemoteRequest) (*GetRemoteResponse, error)
	GetButtons(context.Context, *GetButtonsRequest) (*GetButtonssResponse, error)
	GetIrData(context.Context, *GetIrDataRequest) (*any1.Any, error)
	EditRemote(context.Context, *EditRemoteRequest) (*empty.Empty, error)
	EditButton(context.Context, *EditButtonRequest) (*empty.Empty, error)
	SetIrData(context.Context, *SetIRDataRequest) (*empty.Empty, error)
	DeleteRemote(context.Context, *DeleteRemoteRequest) (*empty.Empty, error)
	DeleteButton(context.Context, *DeleteButtonRequest) (*empty.Empty, error)
	NotifyApplianceUpdate(*empty.Empty, AimService_NotifyApplianceUpdateServer) error
	mustEmbedUnimplementedAimServiceServer()
}

// UnimplementedAimServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAimServiceServer struct {
}

func (UnimplementedAimServiceServer) AddRemote(context.Context, *AddRemoteRequest) (*AddRemoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddRemote not implemented")
}
func (UnimplementedAimServiceServer) AddButton(context.Context, *AddButtonRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddButton not implemented")
}
func (UnimplementedAimServiceServer) GetRemotes(context.Context, *empty.Empty) (*GetRemotesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRemotes not implemented")
}
func (UnimplementedAimServiceServer) GetRemote(context.Context, *GetRemoteRequest) (*GetRemoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRemote not implemented")
}
func (UnimplementedAimServiceServer) GetButtons(context.Context, *GetButtonsRequest) (*GetButtonssResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetButtons not implemented")
}
func (UnimplementedAimServiceServer) GetIrData(context.Context, *GetIrDataRequest) (*any1.Any, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetIrData not implemented")
}
func (UnimplementedAimServiceServer) EditRemote(context.Context, *EditRemoteRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method EditRemote not implemented")
}
func (UnimplementedAimServiceServer) EditButton(context.Context, *EditButtonRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method EditButton not implemented")
}
func (UnimplementedAimServiceServer) SetIrData(context.Context, *SetIRDataRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetIrData not implemented")
}
func (UnimplementedAimServiceServer) DeleteRemote(context.Context, *DeleteRemoteRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteRemote not implemented")
}
func (UnimplementedAimServiceServer) DeleteButton(context.Context, *DeleteButtonRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteButton not implemented")
}
func (UnimplementedAimServiceServer) NotifyApplianceUpdate(*empty.Empty, AimService_NotifyApplianceUpdateServer) error {
	return status.Errorf(codes.Unimplemented, "method NotifyApplianceUpdate not implemented")
}
func (UnimplementedAimServiceServer) mustEmbedUnimplementedAimServiceServer() {}

// UnsafeAimServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AimServiceServer will
// result in compilation errors.
type UnsafeAimServiceServer interface {
	mustEmbedUnimplementedAimServiceServer()
}

func RegisterAimServiceServer(s grpc.ServiceRegistrar, srv AimServiceServer) {
	s.RegisterService(&AimService_ServiceDesc, srv)
}

func _AimService_AddRemote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddRemoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).AddRemote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/AddRemote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).AddRemote(ctx, req.(*AddRemoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_AddButton_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddButtonRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).AddButton(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/AddButton",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).AddButton(ctx, req.(*AddButtonRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_GetRemotes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetRemotes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetRemotes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetRemotes(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_GetRemote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRemoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetRemote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetRemote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetRemote(ctx, req.(*GetRemoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_GetButtons_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetButtonsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetButtons(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetButtons",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetButtons(ctx, req.(*GetButtonsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_GetIrData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetIrDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetIrData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetIrData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetIrData(ctx, req.(*GetIrDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_EditRemote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EditRemoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).EditRemote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/EditRemote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).EditRemote(ctx, req.(*EditRemoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_EditButton_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EditButtonRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).EditButton(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/EditButton",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).EditButton(ctx, req.(*EditButtonRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_SetIrData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetIRDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).SetIrData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/SetIrData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).SetIrData(ctx, req.(*SetIRDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_DeleteRemote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRemoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).DeleteRemote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/DeleteRemote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).DeleteRemote(ctx, req.(*DeleteRemoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_DeleteButton_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteButtonRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).DeleteButton(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/DeleteButton",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).DeleteButton(ctx, req.(*DeleteButtonRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_NotifyApplianceUpdate_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(empty.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(AimServiceServer).NotifyApplianceUpdate(m, &aimServiceNotifyApplianceUpdateServer{stream})
}

type AimService_NotifyApplianceUpdateServer interface {
	Send(*RemoteUpdateNotification) error
	grpc.ServerStream
}

type aimServiceNotifyApplianceUpdateServer struct {
	grpc.ServerStream
}

func (x *aimServiceNotifyApplianceUpdateServer) Send(m *RemoteUpdateNotification) error {
	return x.ServerStream.SendMsg(m)
}

// AimService_ServiceDesc is the grpc.ServiceDesc for AimService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AimService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "aim.AimService",
	HandlerType: (*AimServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddRemote",
			Handler:    _AimService_AddRemote_Handler,
		},
		{
			MethodName: "AddButton",
			Handler:    _AimService_AddButton_Handler,
		},
		{
			MethodName: "GetRemotes",
			Handler:    _AimService_GetRemotes_Handler,
		},
		{
			MethodName: "GetRemote",
			Handler:    _AimService_GetRemote_Handler,
		},
		{
			MethodName: "GetButtons",
			Handler:    _AimService_GetButtons_Handler,
		},
		{
			MethodName: "GetIrData",
			Handler:    _AimService_GetIrData_Handler,
		},
		{
			MethodName: "EditRemote",
			Handler:    _AimService_EditRemote_Handler,
		},
		{
			MethodName: "EditButton",
			Handler:    _AimService_EditButton_Handler,
		},
		{
			MethodName: "SetIrData",
			Handler:    _AimService_SetIrData_Handler,
		},
		{
			MethodName: "DeleteRemote",
			Handler:    _AimService_DeleteRemote_Handler,
		},
		{
			MethodName: "DeleteButton",
			Handler:    _AimService_DeleteButton_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "NotifyApplianceUpdate",
			Handler:       _AimService_NotifyApplianceUpdate_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "aim/api/v1/aim_service.proto",
}
