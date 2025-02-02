const MAC = {
    assocStatus: {
        SUCCESSFUL_ASSOCIATION: 0,
        PAN_AT_CAPACITY: 1,
        PAN_ACCESS_DENIED: 2
    },
    channelPage: {
        PAGE_0: 0,
        PAGE_1: 1,
        PAGE_2: 2
    },
    txOpt: {
        UNDEFINED: 0,
        ACK_TRANS: 1,
        GTS_TRANS: 2,
        IND_TRANS: 4,
        SEC_ENABLED_TRANS: 8,
        NO_RE_TRANS: 16,
        NO_CONFIRM_TRANS: 32,
        USE_PIB_VALUE: 64,
        USE_POWER_CHANNEL_VALUES: 128
    },
    commReason: {
        ASSOCIATE_RSP: 0,
        ORPHAN_RSP: 1,
        RX_SECURE: 2
    },
    disassocReason: {
        RESERVED: 0,
        COOR_WISHES_DEV_LEAVE: 1,
        DEV_WISHES_LEAVE: 2
    },
    keyIdMode: {
        MODE_NONE_OR_IMPLICIT: 0,
        MODE_1: 1,
        MODE_4: 2,
        MODE_8: 3
    },
    beaconOrder: {
        ORDER_NO_BEACONS: 15,
        ORDER_4_MINUTES: 14,
        ORDER_2_MINUTES: 13,
        ORDER_1_MINUTE: 12,
        ORDER_31_SECONDS: 11,
        ORDER_15_SECONDS: 10,
        ORDER_7_5_SECONDS: 9,
        ORDER_4_SECONDS: 8,
        ORDER_2_SECONDS: 7,
        ORDER_1_SECOND: 6,
        ORDER_480_MSEC: 5,
        ORDER_240_MSEC: 4,
        ORDER_120_MSEC: 3,
        ORDER_60_MSEC: 2,
        ORDER_30_MSEC: 1,
        ORDER_15_MSEC: 0
    },
    scanType: {
        ENERGY_DETECT: 0,
        ACTIVE: 1,
        PASSIVE: 2,
        ORPHAN: 3,
        ENHANCED: 5
    },
    frontEndMode: {
        PA_LNA_OFF: 0,
        PA_LNA_ON: 1
    },
    pidAttr: {
        ACK_WAIT_DURATION: 64,
        ASSOCIATION_PERMIT: 65,
        AUTO_REQUEST: 66,
        BATT_LIFE_EXT: 67,
        BATT_LIFE_EXT_PERIODS: 68,
        BEACON_PAYLOAD: 69,
        BEACON_PAYLOAD_LENGTH: 70,
        BEACON_ORDER: 71,
        BEACON_TX_TIME: 72,
        BSN: 73,
        COORD_EXTENDED_ADDRESS: 74,
        COORD_SHORT_ADDRESS: 75,
        DSN: 76,
        GTS_PERMIT: 77,
        MAX_CSMA_BACKOFFS: 78,
        MIN_BE: 79,
        PAN_ID: 80,
        PROMISCUOUS_MODE: 81,
        RX_ON_WHEN_IDLE: 82,
        SHORT_ADDRESS: 83,
        SUPERFRAME_ORDER: 84,
        TRANSACTION_PERSISTENCE_TIME: 85,
        ASSOCIATED_PAN_COORD: 86,
        MAX_BE: 87,
        MAX_FRAME_TOTAL_WAIT_TIME: 88,
        MAX_FRAME_RETRIES: 89,
        RESPONSE_WAIT_TIME: 90,
        SYNC_SYMBOL_OFFSET: 91,
        TIMESTAMP_SUPPORTED: 92,
        SECURITY_ENABLED: 93,
        KEY_TABLE: 113,
        KEY_TABLE_ENTRIES: 114,
        DEVICE_TABLE: 115,
        DEVICE_TABLE_ENTRIES: 116,
        SECURITY_LEVEL_TABLE: 117,
        SECURITY_LEVEL_TABLE_ENTRIES: 118,
        FRAME_COUNTER: 119,
        AUTO_REQUEST_SECURITY_LEVEL: 120,
        AUTO_REQUEST_KEY_ID_MODE: 121,
        AUTO_REQUEST_KEY_SOURCE: 122,
        AUTO_REQUEST_KEY_INDEX: 123,
        DEFAULT_KEY_SOURCE: 124,
        PAN_COORD_EXTENDED_ADDRESS: 125,
        PAN_COORD_SHORT_ADDRESS: 126,
        KEY_ID_LOOKUP_ENTRY: 208,
        KEY_DEVICE_ENTRY: 209,
        KEY_USAGE_ENTRY: 210,
        KEY_ENTRY: 211,
        DEVICE_ENTRY: 212,
        SECURITY_LEVEL_ENTRY: 213,
        PHY_TRANSMIT_POWER: 224,
        LOGICAL_CHANNEL: 225,
        EXTENDED_ADDRESS: 226,
        ALT_BE: 227,
        DEVICE_BEACON_ORDER: 228,
        PHY_TRANSMIT_POWER_SIGNED: 229
    }
}

export default MAC;