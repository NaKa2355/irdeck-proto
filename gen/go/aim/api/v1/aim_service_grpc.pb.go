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
	AddAppliance(ctx context.Context, in *AddApplianceRequest, opts ...grpc.CallOption) (*AddAppResponse, error)
	AddCommand(ctx context.Context, in *AddCommandRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	GetAppliances(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetAppliancesResponse, error)
	GetCommands(ctx context.Context, in *GetCommandsRequest, opts ...grpc.CallOption) (*GetCommandsResponse, error)
	GetIrData(ctx context.Context, in *GetIrDataRequest, opts ...grpc.CallOption) (*any1.Any, error)
	RenameAppliance(ctx context.Context, in *RenameApplianceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	ChangeDevice(ctx context.Context, in *ChangeDeviceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	RenameCommand(ctx context.Context, in *RenameCommandRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	SetIrData(ctx context.Context, in *SetIRDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteAppliance(ctx context.Context, in *DeleteApplianceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	DeleteCommand(ctx context.Context, in *DeleteCommandRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	NotifyApplianceUpdate(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (AimService_NotifyApplianceUpdateClient, error)
}

type aimServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAimServiceClient(cc grpc.ClientConnInterface) AimServiceClient {
	return &aimServiceClient{cc}
}

func (c *aimServiceClient) AddAppliance(ctx context.Context, in *AddApplianceRequest, opts ...grpc.CallOption) (*AddAppResponse, error) {
	out := new(AddAppResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddAppliance", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) AddCommand(ctx context.Context, in *AddCommandRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddCommand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetAppliances(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetAppliancesResponse, error) {
	out := new(GetAppliancesResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetAppliances", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetCommands(ctx context.Context, in *GetCommandsRequest, opts ...grpc.CallOption) (*GetCommandsResponse, error) {
	out := new(GetCommandsResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetCommands", in, out, opts...)
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

func (c *aimServiceClient) RenameAppliance(ctx context.Context, in *RenameApplianceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/RenameAppliance", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) ChangeDevice(ctx context.Context, in *ChangeDeviceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/ChangeDevice", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) RenameCommand(ctx context.Context, in *RenameCommandRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/RenameCommand", in, out, opts...)
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

func (c *aimServiceClient) DeleteAppliance(ctx context.Context, in *DeleteApplianceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/DeleteAppliance", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) DeleteCommand(ctx context.Context, in *DeleteCommandRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/aim.AimService/DeleteCommand", in, out, opts...)
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
	Recv() (*ApplianceUpdateNotification, error)
	grpc.ClientStream
}

type aimServiceNotifyApplianceUpdateClient struct {
	grpc.ClientStream
}

func (x *aimServiceNotifyApplianceUpdateClient) Recv() (*ApplianceUpdateNotification, error) {
	m := new(ApplianceUpdateNotification)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// AimServiceServer is the server API for AimService service.
// All implementations must embed UnimplementedAimServiceServer
// for forward compatibility
type AimServiceServer interface {
	AddAppliance(context.Context, *AddApplianceRequest) (*AddAppResponse, error)
	AddCommand(context.Context, *AddCommandRequest) (*empty.Empty, error)
	GetAppliances(context.Context, *empty.Empty) (*GetAppliancesResponse, error)
	GetCommands(context.Context, *GetCommandsRequest) (*GetCommandsResponse, error)
	GetIrData(context.Context, *GetIrDataRequest) (*any1.Any, error)
	RenameAppliance(context.Context, *RenameApplianceRequest) (*empty.Empty, error)
	ChangeDevice(context.Context, *ChangeDeviceRequest) (*empty.Empty, error)
	RenameCommand(context.Context, *RenameCommandRequest) (*empty.Empty, error)
	SetIrData(context.Context, *SetIRDataRequest) (*empty.Empty, error)
	DeleteAppliance(context.Context, *DeleteApplianceRequest) (*empty.Empty, error)
	DeleteCommand(context.Context, *DeleteCommandRequest) (*empty.Empty, error)
	NotifyApplianceUpdate(*empty.Empty, AimService_NotifyApplianceUpdateServer) error
	mustEmbedUnimplementedAimServiceServer()
}

// UnimplementedAimServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAimServiceServer struct {
}

func (UnimplementedAimServiceServer) AddAppliance(context.Context, *AddApplianceRequest) (*AddAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddAppliance not implemented")
}
func (UnimplementedAimServiceServer) AddCommand(context.Context, *AddCommandRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddCommand not implemented")
}
func (UnimplementedAimServiceServer) GetAppliances(context.Context, *empty.Empty) (*GetAppliancesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppliances not implemented")
}
func (UnimplementedAimServiceServer) GetCommands(context.Context, *GetCommandsRequest) (*GetCommandsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCommands not implemented")
}
func (UnimplementedAimServiceServer) GetIrData(context.Context, *GetIrDataRequest) (*any1.Any, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetIrData not implemented")
}
func (UnimplementedAimServiceServer) RenameAppliance(context.Context, *RenameApplianceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RenameAppliance not implemented")
}
func (UnimplementedAimServiceServer) ChangeDevice(context.Context, *ChangeDeviceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangeDevice not implemented")
}
func (UnimplementedAimServiceServer) RenameCommand(context.Context, *RenameCommandRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RenameCommand not implemented")
}
func (UnimplementedAimServiceServer) SetIrData(context.Context, *SetIRDataRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetIrData not implemented")
}
func (UnimplementedAimServiceServer) DeleteAppliance(context.Context, *DeleteApplianceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAppliance not implemented")
}
func (UnimplementedAimServiceServer) DeleteCommand(context.Context, *DeleteCommandRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteCommand not implemented")
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

func _AimService_AddAppliance_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddApplianceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).AddAppliance(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/AddAppliance",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).AddAppliance(ctx, req.(*AddApplianceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_AddCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).AddCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/AddCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).AddCommand(ctx, req.(*AddCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_GetAppliances_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetAppliances(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetAppliances",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetAppliances(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_GetCommands_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCommandsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetCommands(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetCommands",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetCommands(ctx, req.(*GetCommandsRequest))
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

func _AimService_RenameAppliance_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RenameApplianceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).RenameAppliance(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/RenameAppliance",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).RenameAppliance(ctx, req.(*RenameApplianceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_ChangeDevice_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ChangeDeviceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).ChangeDevice(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/ChangeDevice",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).ChangeDevice(ctx, req.(*ChangeDeviceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_RenameCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RenameCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).RenameCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/RenameCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).RenameCommand(ctx, req.(*RenameCommandRequest))
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

func _AimService_DeleteAppliance_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteApplianceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).DeleteAppliance(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/DeleteAppliance",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).DeleteAppliance(ctx, req.(*DeleteApplianceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_DeleteCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).DeleteCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/DeleteCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).DeleteCommand(ctx, req.(*DeleteCommandRequest))
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
	Send(*ApplianceUpdateNotification) error
	grpc.ServerStream
}

type aimServiceNotifyApplianceUpdateServer struct {
	grpc.ServerStream
}

func (x *aimServiceNotifyApplianceUpdateServer) Send(m *ApplianceUpdateNotification) error {
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
			MethodName: "AddAppliance",
			Handler:    _AimService_AddAppliance_Handler,
		},
		{
			MethodName: "AddCommand",
			Handler:    _AimService_AddCommand_Handler,
		},
		{
			MethodName: "GetAppliances",
			Handler:    _AimService_GetAppliances_Handler,
		},
		{
			MethodName: "GetCommands",
			Handler:    _AimService_GetCommands_Handler,
		},
		{
			MethodName: "GetIrData",
			Handler:    _AimService_GetIrData_Handler,
		},
		{
			MethodName: "RenameAppliance",
			Handler:    _AimService_RenameAppliance_Handler,
		},
		{
			MethodName: "ChangeDevice",
			Handler:    _AimService_ChangeDevice_Handler,
		},
		{
			MethodName: "RenameCommand",
			Handler:    _AimService_RenameCommand_Handler,
		},
		{
			MethodName: "SetIrData",
			Handler:    _AimService_SetIrData_Handler,
		},
		{
			MethodName: "DeleteAppliance",
			Handler:    _AimService_DeleteAppliance_Handler,
		},
		{
			MethodName: "DeleteCommand",
			Handler:    _AimService_DeleteCommand_Handler,
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
