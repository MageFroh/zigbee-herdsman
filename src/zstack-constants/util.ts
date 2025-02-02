const UTIL = {
    getNvStatus: {
        SUCCESS: 0,
        GET_IEEE_ADDR_FAIL: 1,
        GET_SCAN_CHANNEL_FAIL: 2,
        GET_PAN_ID_FAIL: 4,
        GET_SECURITY_LEVEL_FAIL: 8,
        GET_PRECONFIG_KEY_FAIL: 16
    },
    subsystemId: {
        SYS: 256,
        MAC: 512,
        NWK: 768,
        AF: 1024,
        ZDO: 1280,
        SAPI: 1536,
        UTIL: 1792,
        DBG: 2048,
        APP: 2304,
        ALL_SUBSYSTEM: 65535
    },
    deviceType: {
        NONE: 0,
        COORDINATOR: 1,
        ROUTER: 2,
        END_DEVICE: 4
    },
    keyEvent: {
        KEY_1: 0,
        KEY_2: 1,
        KEY_3: 2,
        KEY_4: 3,
        KEY_5: 4,
        KEY_6: 5,
        KEY_7: 6,
        KEY_8: 7
    },
    keyValue: {
        KEY_1: 1,
        KEY_2: 2,
        KEY_3: 4,
        KEY_4: 8,
        KEY_5: 16,
        KEY_6: 32,
        KEY_7: 64,
        KEY_8: 128
    },
    ledMode: {
        OFF: 0,
        ON: 1,
        BLINK: 2,
        FLASH: 3,
        TOGGLE: 4
    },
    ledNum: {
        LED_1: 1,
        LED_2: 2,
        LED_3: 3,
        LED_4: 4,
        ALL_LEDS: 255
    },
    subsAction: {
        UNSUBSCRIBE: 0,
        SUBSCRIBE: 1
    },
    ackPendingOption: {
        ACK_DISABLE: 0,
        ACK_ENABLE: 1
    },
    nodeRelation: {
        PARENT: 0,
        CHILD_RFD: 1,
        CHILD_RFD_RX_IDLE: 2,
        CHILD_FFD: 3,
        CHILD_FFD_RX_IDLE: 4,
        NEIGHBOR: 5,
        OTHER: 6,
        NOTUSED: 255
    }
}

export default UTIL;