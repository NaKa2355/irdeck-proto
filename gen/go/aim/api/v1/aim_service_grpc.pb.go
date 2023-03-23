// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: aim/api/v1/aim_service.proto

package v1

import (
	context "context"
	v1 "github.com/NaKa2355/irdeck-proto/gen/go/common/irdata/v1"
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
	AddSwitch(ctx context.Context, in *AddSwitchRequest, opts ...grpc.CallOption) (*Appliance, error)
	AddButton(ctx context.Context, in *AddButtonRequest, opts ...grpc.CallOption) (*Appliance, error)
	AddThermostat(ctx context.Context, in *AddThermostatRequest, opts ...grpc.CallOption) (*Appliance, error)
	GetAppliances(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetAppliancesResponse, error)
	RenameAppliance(ctx context.Context, in *RenameApplianceRequest, opts ...grpc.CallOption) (*Appliance, error)
	ChangeDevice(ctx context.Context, in *ChangeDeviceRequest, opts ...grpc.CallOption) (*Appliance, error)
	DeleteAppliance(ctx context.Context, in *DeleteApplianceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	GetCommands(ctx context.Context, in *GetCommandsRequest, opts ...grpc.CallOption) (*GetCommandsResponse, error)
	GetRawIrData(ctx context.Context, in *GetRawIrDataRequest, opts ...grpc.CallOption) (*v1.RawIrData, error)
	UpdateRawIrData(ctx context.Context, in *UpdateRawIrDataRequest, opts ...grpc.CallOption) (*Command, error)
	NotifyApplianceUpDate(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ApplianceUpDateNotification, error)
}

type aimServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAimServiceClient(cc grpc.ClientConnInterface) AimServiceClient {
	return &aimServiceClient{cc}
}

func (c *aimServiceClient) AddSwitch(ctx context.Context, in *AddSwitchRequest, opts ...grpc.CallOption) (*Appliance, error) {
	out := new(Appliance)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddSwitch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) AddButton(ctx context.Context, in *AddButtonRequest, opts ...grpc.CallOption) (*Appliance, error) {
	out := new(Appliance)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddButton", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) AddThermostat(ctx context.Context, in *AddThermostatRequest, opts ...grpc.CallOption) (*Appliance, error) {
	out := new(Appliance)
	err := c.cc.Invoke(ctx, "/aim.AimService/AddThermostat", in, out, opts...)
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

func (c *aimServiceClient) RenameAppliance(ctx context.Context, in *RenameApplianceRequest, opts ...grpc.CallOption) (*Appliance, error) {
	out := new(Appliance)
	err := c.cc.Invoke(ctx, "/aim.AimService/RenameAppliance", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) ChangeDevice(ctx context.Context, in *ChangeDeviceRequest, opts ...grpc.CallOption) (*Appliance, error) {
	out := new(Appliance)
	err := c.cc.Invoke(ctx, "/aim.AimService/ChangeDevice", in, out, opts...)
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

func (c *aimServiceClient) GetCommands(ctx context.Context, in *GetCommandsRequest, opts ...grpc.CallOption) (*GetCommandsResponse, error) {
	out := new(GetCommandsResponse)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetCommands", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) GetRawIrData(ctx context.Context, in *GetRawIrDataRequest, opts ...grpc.CallOption) (*v1.RawIrData, error) {
	out := new(v1.RawIrData)
	err := c.cc.Invoke(ctx, "/aim.AimService/GetRawIrData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) UpdateRawIrData(ctx context.Context, in *UpdateRawIrDataRequest, opts ...grpc.CallOption) (*Command, error) {
	out := new(Command)
	err := c.cc.Invoke(ctx, "/aim.AimService/UpdateRawIrData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aimServiceClient) NotifyApplianceUpDate(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ApplianceUpDateNotification, error) {
	out := new(ApplianceUpDateNotification)
	err := c.cc.Invoke(ctx, "/aim.AimService/NotifyApplianceUpDate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AimServiceServer is the server API for AimService service.
// All implementations must embed UnimplementedAimServiceServer
// for forward compatibility
type AimServiceServer interface {
	AddSwitch(context.Context, *AddSwitchRequest) (*Appliance, error)
	AddButton(context.Context, *AddButtonRequest) (*Appliance, error)
	AddThermostat(context.Context, *AddThermostatRequest) (*Appliance, error)
	GetAppliances(context.Context, *empty.Empty) (*GetAppliancesResponse, error)
	RenameAppliance(context.Context, *RenameApplianceRequest) (*Appliance, error)
	ChangeDevice(context.Context, *ChangeDeviceRequest) (*Appliance, error)
	DeleteAppliance(context.Context, *DeleteApplianceRequest) (*empty.Empty, error)
	GetCommands(context.Context, *GetCommandsRequest) (*GetCommandsResponse, error)
	GetRawIrData(context.Context, *GetRawIrDataRequest) (*v1.RawIrData, error)
	UpdateRawIrData(context.Context, *UpdateRawIrDataRequest) (*Command, error)
	NotifyApplianceUpDate(context.Context, *empty.Empty) (*ApplianceUpDateNotification, error)
	mustEmbedUnimplementedAimServiceServer()
}

// UnimplementedAimServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAimServiceServer struct {
}

func (UnimplementedAimServiceServer) AddSwitch(context.Context, *AddSwitchRequest) (*Appliance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddSwitch not implemented")
}
func (UnimplementedAimServiceServer) AddButton(context.Context, *AddButtonRequest) (*Appliance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddButton not implemented")
}
func (UnimplementedAimServiceServer) AddThermostat(context.Context, *AddThermostatRequest) (*Appliance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddThermostat not implemented")
}
func (UnimplementedAimServiceServer) GetAppliances(context.Context, *empty.Empty) (*GetAppliancesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppliances not implemented")
}
func (UnimplementedAimServiceServer) RenameAppliance(context.Context, *RenameApplianceRequest) (*Appliance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RenameAppliance not implemented")
}
func (UnimplementedAimServiceServer) ChangeDevice(context.Context, *ChangeDeviceRequest) (*Appliance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangeDevice not implemented")
}
func (UnimplementedAimServiceServer) DeleteAppliance(context.Context, *DeleteApplianceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAppliance not implemented")
}
func (UnimplementedAimServiceServer) GetCommands(context.Context, *GetCommandsRequest) (*GetCommandsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCommands not implemented")
}
func (UnimplementedAimServiceServer) GetRawIrData(context.Context, *GetRawIrDataRequest) (*v1.RawIrData, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRawIrData not implemented")
}
func (UnimplementedAimServiceServer) UpdateRawIrData(context.Context, *UpdateRawIrDataRequest) (*Command, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateRawIrData not implemented")
}
func (UnimplementedAimServiceServer) NotifyApplianceUpDate(context.Context, *empty.Empty) (*ApplianceUpDateNotification, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NotifyApplianceUpDate not implemented")
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

func _AimService_AddSwitch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddSwitchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).AddSwitch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/AddSwitch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).AddSwitch(ctx, req.(*AddSwitchRequest))
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

func _AimService_AddThermostat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddThermostatRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).AddThermostat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/AddThermostat",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).AddThermostat(ctx, req.(*AddThermostatRequest))
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

func _AimService_GetRawIrData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRawIrDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).GetRawIrData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/GetRawIrData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).GetRawIrData(ctx, req.(*GetRawIrDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_UpdateRawIrData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateRawIrDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).UpdateRawIrData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/UpdateRawIrData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).UpdateRawIrData(ctx, req.(*UpdateRawIrDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AimService_NotifyApplianceUpDate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AimServiceServer).NotifyApplianceUpDate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/aim.AimService/NotifyApplianceUpDate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AimServiceServer).NotifyApplianceUpDate(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// AimService_ServiceDesc is the grpc.ServiceDesc for AimService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AimService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "aim.AimService",
	HandlerType: (*AimServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddSwitch",
			Handler:    _AimService_AddSwitch_Handler,
		},
		{
			MethodName: "AddButton",
			Handler:    _AimService_AddButton_Handler,
		},
		{
			MethodName: "AddThermostat",
			Handler:    _AimService_AddThermostat_Handler,
		},
		{
			MethodName: "GetAppliances",
			Handler:    _AimService_GetAppliances_Handler,
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
			MethodName: "DeleteAppliance",
			Handler:    _AimService_DeleteAppliance_Handler,
		},
		{
			MethodName: "GetCommands",
			Handler:    _AimService_GetCommands_Handler,
		},
		{
			MethodName: "GetRawIrData",
			Handler:    _AimService_GetRawIrData_Handler,
		},
		{
			MethodName: "UpdateRawIrData",
			Handler:    _AimService_UpdateRawIrData_Handler,
		},
		{
			MethodName: "NotifyApplianceUpDate",
			Handler:    _AimService_NotifyApplianceUpDate_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "aim/api/v1/aim_service.proto",
}