// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.12.4
// source: pirem/api/v1/device_info.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type DeviceInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id              string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name            string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	BufferSize      int32  `protobuf:"varint,3,opt,name=buffer_size,json=bufferSize,proto3" json:"buffer_size,omitempty"`
	CanSend         bool   `protobuf:"varint,4,opt,name=can_send,json=canSend,proto3" json:"can_send,omitempty"`
	CanReceive      bool   `protobuf:"varint,5,opt,name=can_receive,json=canReceive,proto3" json:"can_receive,omitempty"`
	DriverVersion   string `protobuf:"bytes,7,opt,name=driver_version,json=driverVersion,proto3" json:"driver_version,omitempty"`
	FirmwareVersion string `protobuf:"bytes,8,opt,name=firmware_version,json=firmwareVersion,proto3" json:"firmware_version,omitempty"`
}

func (x *DeviceInfo) Reset() {
	*x = DeviceInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pirem_api_v1_device_info_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeviceInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeviceInfo) ProtoMessage() {}

func (x *DeviceInfo) ProtoReflect() protoreflect.Message {
	mi := &file_pirem_api_v1_device_info_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeviceInfo.ProtoReflect.Descriptor instead.
func (*DeviceInfo) Descriptor() ([]byte, []int) {
	return file_pirem_api_v1_device_info_proto_rawDescGZIP(), []int{0}
}

func (x *DeviceInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *DeviceInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *DeviceInfo) GetBufferSize() int32 {
	if x != nil {
		return x.BufferSize
	}
	return 0
}

func (x *DeviceInfo) GetCanSend() bool {
	if x != nil {
		return x.CanSend
	}
	return false
}

func (x *DeviceInfo) GetCanReceive() bool {
	if x != nil {
		return x.CanReceive
	}
	return false
}

func (x *DeviceInfo) GetDriverVersion() string {
	if x != nil {
		return x.DriverVersion
	}
	return ""
}

func (x *DeviceInfo) GetFirmwareVersion() string {
	if x != nil {
		return x.FirmwareVersion
	}
	return ""
}

var File_pirem_api_v1_device_info_proto protoreflect.FileDescriptor

var file_pirem_api_v1_device_info_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x70, 0x69, 0x72, 0x65, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x64,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x05, 0x70, 0x69, 0x72, 0x65, 0x6d, 0x22, 0xdf, 0x01, 0x0a, 0x0a, 0x44, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x62, 0x75,
	0x66, 0x66, 0x65, 0x72, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x0a, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x63,
	0x61, 0x6e, 0x5f, 0x73, 0x65, 0x6e, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x63,
	0x61, 0x6e, 0x53, 0x65, 0x6e, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x61, 0x6e, 0x5f, 0x72, 0x65,
	0x63, 0x65, 0x69, 0x76, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0a, 0x63, 0x61, 0x6e,
	0x52, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x64, 0x72, 0x69, 0x76, 0x65,
	0x72, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0d, 0x64, 0x72, 0x69, 0x76, 0x65, 0x72, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x29,
	0x0a, 0x10, 0x66, 0x69, 0x72, 0x6d, 0x77, 0x61, 0x72, 0x65, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x66, 0x69, 0x72, 0x6d, 0x77, 0x61,
	0x72, 0x65, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x4e, 0x61, 0x4b, 0x61, 0x32, 0x33, 0x35, 0x35,
	0x2f, 0x69, 0x72, 0x64, 0x65, 0x63, 0x6b, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65,
	0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x69, 0x72, 0x65, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pirem_api_v1_device_info_proto_rawDescOnce sync.Once
	file_pirem_api_v1_device_info_proto_rawDescData = file_pirem_api_v1_device_info_proto_rawDesc
)

func file_pirem_api_v1_device_info_proto_rawDescGZIP() []byte {
	file_pirem_api_v1_device_info_proto_rawDescOnce.Do(func() {
		file_pirem_api_v1_device_info_proto_rawDescData = protoimpl.X.CompressGZIP(file_pirem_api_v1_device_info_proto_rawDescData)
	})
	return file_pirem_api_v1_device_info_proto_rawDescData
}

var file_pirem_api_v1_device_info_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_pirem_api_v1_device_info_proto_goTypes = []interface{}{
	(*DeviceInfo)(nil), // 0: pirem.DeviceInfo
}
var file_pirem_api_v1_device_info_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_pirem_api_v1_device_info_proto_init() }
func file_pirem_api_v1_device_info_proto_init() {
	if File_pirem_api_v1_device_info_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pirem_api_v1_device_info_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeviceInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pirem_api_v1_device_info_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pirem_api_v1_device_info_proto_goTypes,
		DependencyIndexes: file_pirem_api_v1_device_info_proto_depIdxs,
		MessageInfos:      file_pirem_api_v1_device_info_proto_msgTypes,
	}.Build()
	File_pirem_api_v1_device_info_proto = out.File
	file_pirem_api_v1_device_info_proto_rawDesc = nil
	file_pirem_api_v1_device_info_proto_goTypes = nil
	file_pirem_api_v1_device_info_proto_depIdxs = nil
}
