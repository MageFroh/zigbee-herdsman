const ZDO = {
    status: {
        SUCCESS: 0,
        INVALID_REQTYPE: 128,
        DEVICE_NOT_FOUND: 129,
        INVALID_EP: 130,
        NOT_ACTIVE: 131,
        NOT_SUPPORTED: 132,
        TIMEOUT: 133,
        NO_MATCH: 134,
        NO_ENTRY: 136,
        NO_DESCRIPTOR: 137,
        INSUFFICIENT_SPACE: 138,
        NOT_PERMITTED: 139,
        TABLE_FULL: 140,
        NOT_AUTHORIZED: 141,
        BINDING_TABLE_FULL: 142
    },
    initDev: {
        RESTORED_NETWORK_STATE: 0,
        NEW_NETWORK_STATE: 1,
        LEAVE_NOT_STARTED: 2
    },
    serverCapability: {
        NOT_SUPPORTED: 0,
        PRIM_TRUST_CENTER: 1,
        BKUP_TRUST_CENTER: 2,
        PRIM_BIND_TABLE: 4,
        BKUP_BIND_TABLE: 8,
        PRIM_DISC_TABLE: 16,
        BKUP_DISC_TABLE: 32,
        NETWORK_MANAGER: 64
    },
    appDevVer: {
        VER_100: 0,
        RESERVE01: 1,
        RESERVE02: 2,
        RESERVE03: 3,
        RESERVE04: 4,
        RESERVE05: 5,
        RESERVE06: 6,
        RESERVE07: 7,
        RESERVE08: 8,
        RESERVE09: 9,
        RESERVE10: 10,
        RESERVE11: 11,
        RESERVE12: 12,
        RESERVE13: 13,
        RESERVE14: 14,
        RESERVE15: 15
    },
    stackProfileId: {
        NETWORK_SPECIFIC: 0,
        HOME_CONTROLS: 1,
        ZIGBEEPRO_PROFILE: 2,
        GENERIC_STAR: 3,
        GENERIC_TREE: 4
    },
    deviceLogicalType: {
        COORDINATOR: 0,
        ROUTER: 1,
        ENDDEVICE: 2,
        COMPLEX_DESC_AVAIL: 4,
        USER_DESC_AVAIL: 8,
        RESERVED1: 16,
        RESERVED2: 32,
        RESERVED3: 64,
        RESERVED4: 128
    },
    addrReqType: {
        SINGLE: 0,
        EXTENDED: 1
    },
    leaveAndRemoveChild: {
        NONE: 0,
        LEAVE_REMOVE_CHILDREN: 1
    },
    leaveIndRequest: {
        INDICATION: 0,
        REQUEST: 1
    },
    leaveIndRemove: {
        NONE: 0,
        REMOVE_CHILDREN: 1
    },
    leaveIndRejoin: {
        NONE: 0,
        REJOIN: 1
    },
    descCapability: {
        EXT_LIST_NOT_SUPPORTED: 0,
        EXT_ACTIVE_EP_LIST_AVAIL: 1,
        EXT_SIMPLE_DESC_LIST_AVAIL: 2,
        RESERVED1: 4,
        RESERVED2: 8,
        RESERVED3: 16,
        RESERVED4: 32,
        RESERVED5: 64,
        RESERVED6: 128
    }
}

export default ZDO;