export default {
    /* The local file header */
    LOCHDR: 30, // LOC header size
    LOCSIG: 0x04034b50, // "PK\003\004"
    LOCVER: 4,	// version needed to extract
    LOCFLG: 6, // general purpose bit flag
    LOCHOW: 8, // compression method
    LOCTIM: 10, // modification time (2 bytes time, 2 bytes date)
    LOCCRC: 14, // uncompressed file crc-32 value
    LOCSIZ: 18, // compressed size
    LOCLEN: 22, // uncompressed size
    LOCNAM: 26, // filename length
    LOCEXT: 28, // extra field length

    /* The Data descriptor */
    EXTSIG: 0x08074b50, // "PK\007\008"
    EXTHDR: 16, // EXT header size
    EXTCRC: 4, // uncompressed file crc-32 value
    EXTSIZ: 8, // compressed size
    EXTLEN: 12, // uncompressed size

    /* The central directory file header */
    CENHDR: 46, // CEN header size
    CENSIG: 0x02014b50, // "PK\001\002"
    CENVEM: 4, // version made by
    CENVER: 6, // version needed to extract
    CENFLG: 8, // encrypt, decrypt flags
    CENHOW: 10, // compression method
    CENTIM: 12, // modification time (2 bytes time, 2 bytes date)
    CENCRC: 16, // uncompressed file crc-32 value
    CENSIZ: 20, // compressed size
    CENLEN: 24, // uncompressed size
    CENNAM: 28, // filename length
    CENEXT: 30, // extra field length
    CENCOM: 32, // file comment length
    CENDSK: 34, // volume number start
    CENATT: 36, // internal file attributes
    CENATX: 38, // external file attributes (host system dependent)
    CENOFF: 42, // LOC header offset

    /* The entries in the end of central directory */
    ENDHDR: 22, // END header size
    ENDSIG: 0x06054b50, // "PK\005\006"
    ENDSUB: 8, // number of entries on this disk
    ENDTOT: 10, // total number of entries
    ENDSIZ: 12, // central directory size in bytes
    ENDOFF: 16, // offset of first CEN header
    ENDCOM: 20, // zip file comment length

    /* Compression methods */
    STORED: 0, // no compression
    SHRUNK: 1, // shrunk
    REDUCED1: 2, // reduced with compression factor 1
    REDUCED2: 3, // reduced with compression factor 2
    REDUCED3: 4, // reduced with compression factor 3
    REDUCED4: 5, // reduced with compression factor 4
    IMPLODED: 6, // imploded
    // 7 reserved
    DEFLATED: 8, // deflated
    ENHANCED_DEFLATED: 9, // enhanced deflated
    PKWARE: 10,// PKWare DCL imploded
    // 11 reserved
    BZIP2: 12, //  compressed using BZIP2
    // 13 reserved
    LZMA: 14, // LZMA
    // 15-17 reserved
    IBM_TERSE: 18, // compressed using IBM TERSE
    IBM_LZ77: 19, //IBM LZ77 z

    /* General purpose bit flag */
    FLG_ENC: 0,  // encripted file
    FLG_COMP1: 1,  // compression option
    FLG_COMP2: 2,  // compression option
    FLG_DESC: 4,  // data descriptor
    FLG_ENH: 8,  // enhanced deflation
    FLG_STR: 16, // strong encryption
    FLG_LNG: 1024, // language encoding
    FLG_MSK: 4096, // mask header values

    /* Load type */
    FILE: 0,
    BUFFER: 1,
    NONE: 2,

    /* 4.5 Extensible data fields */
    EF_ID: 0,
    EF_SIZE: 2,

    /* Header IDs */
    ID_ZIP64: 0x0001,
    ID_AVINFO: 0x0007,
    ID_PFS: 0x0008,
    ID_OS2: 0x0009,
    ID_NTFS: 0x000a,
    ID_OPENVMS: 0x000c,
    ID_UNIX: 0x000d,
    ID_FORK: 0x000e,
    ID_PATCH: 0x000f,
    ID_X509_PKCS7: 0x0014,
    ID_X509_CERTID_F: 0x0015,
    ID_X509_CERTID_C: 0x0016,
    ID_STRONGENC: 0x0017,
    ID_RECORD_MGT: 0x0018,
    ID_X509_PKCS7_RL: 0x0019,
    ID_IBM1: 0x0065,
    ID_IBM2: 0x0066,
    ID_POSZIP: 0x4690,

    EF_ZIP64_OR_32: 0xffffffff,
    EF_ZIP64_OR_16: 0xffff,
    EF_ZIP64_SUNCOMP: 0,
    EF_ZIP64_SCOMP: 8,
    EF_ZIP64_RHO: 16,
    EF_ZIP64_DSN: 24
};
