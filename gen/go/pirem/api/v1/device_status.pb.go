// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.12.4
// source: pirem/api/v1/device_status.proto

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

type DeviceStatus struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// デバイスと意思疎通が取れるかどうか
	IsActive bool `protobuf:"varint,1,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	// バッテリー残量
	Battery *uint32 `protobuf:"varint,2,opt,name=battery,proto3,oneof" json:"battery,omitempty"`
	// 電波強度
	Rssi *float32 `protobuf:"fixed32,3,opt,name=rssi,proto3,oneof" json:"rssi,omitempty"`
}

func (x *DeviceStatus) Reset() {
	*x = DeviceStatus{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pirem_api_v1_device_status_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeviceStatus) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeviceStatus) ProtoMessage() {}

func (x *DeviceStatus) ProtoReflect() protoreflect.Message {
	mi := &file_pirem_api_v1_device_status_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeviceStatus.ProtoReflect.Descriptor instead.
func (*DeviceStatus) Descriptor() ([]byte, []int) {
	return file_pirem_api_v1_device_status_proto_rawDescGZIP(), []int{0}
}

func (x *DeviceStatus) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *DeviceStatus) GetBattery() uint32 {
	if x != nil && x.Battery != nil {
		return *x.Battery
	}
	return 0
}

func (x *DeviceStatus) GetRssi() float32 {
	if x != nil && x.Rssi != nil {
		return *x.Rssi
	}
	return 0
}

var File_pirem_api_v1_device_status_proto protoreflect.FileDescriptor

var file_pirem_api_v1_device_status_proto_rawDesc = []byte{
	0x0a, 0x20, 0x70, 0x69, 0x72, 0x65, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x64,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x05, 0x70, 0x69, 0x72, 0x65, 0x6d, 0x22, 0x78, 0x0a, 0x0c, 0x44, 0x65, 0x76,
	0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f,
	0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73,
	0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x1d, 0x0a, 0x07, 0x62, 0x61, 0x74, 0x74, 0x65, 0x72,
	0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x48, 0x00, 0x52, 0x07, 0x62, 0x61, 0x74, 0x74, 0x65,
	0x72, 0x79, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x72, 0x73, 0x73, 0x69, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x02, 0x48, 0x01, 0x52, 0x04, 0x72, 0x73, 0x73, 0x69, 0x88, 0x01, 0x01, 0x42, 0x0a,
	0x0a, 0x08, 0x5f, 0x62, 0x61, 0x74, 0x74, 0x65, 0x72, 0x79, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x72,
	0x73, 0x73, 0x69, 0x42, 0x29, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x4e, 0x61, 0x4b, 0x61, 0x32, 0x33, 0x35, 0x35, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67,
	0x6f, 0x2f, 0x70, 0x69, 0x72, 0x65, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pirem_api_v1_device_status_proto_rawDescOnce sync.Once
	file_pirem_api_v1_device_status_proto_rawDescData = file_pirem_api_v1_device_status_proto_rawDesc
)

func file_pirem_api_v1_device_status_proto_rawDescGZIP() []byte {
	file_pirem_api_v1_device_status_proto_rawDescOnce.Do(func() {
		file_pirem_api_v1_device_status_proto_rawDescData = protoimpl.X.CompressGZIP(file_pirem_api_v1_device_status_proto_rawDescData)
	})
	return file_pirem_api_v1_device_status_proto_rawDescData
}

var file_pirem_api_v1_device_status_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_pirem_api_v1_device_status_proto_goTypes = []interface{}{
	(*DeviceStatus)(nil), // 0: pirem.DeviceStatus
}
var file_pirem_api_v1_device_status_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_pirem_api_v1_device_status_proto_init() }
func file_pirem_api_v1_device_status_proto_init() {
	if File_pirem_api_v1_device_status_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pirem_api_v1_device_status_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeviceStatus); i {
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
	file_pirem_api_v1_device_status_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pirem_api_v1_device_status_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pirem_api_v1_device_status_proto_goTypes,
		DependencyIndexes: file_pirem_api_v1_device_status_proto_depIdxs,
		MessageInfos:      file_pirem_api_v1_device_status_proto_msgTypes,
	}.Build()
	File_pirem_api_v1_device_status_proto = out.File
	file_pirem_api_v1_device_status_proto_rawDesc = nil
	file_pirem_api_v1_device_status_proto_goTypes = nil
	file_pirem_api_v1_device_status_proto_depIdxs = nil
}
