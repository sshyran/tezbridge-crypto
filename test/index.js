// @flow

import TezBridgeCrypto from './../src/index'
import { assert } from './util'

const TBC = TezBridgeCrypto

const fn_tests = async () => {
  {
    const json_storage = {"prim":"Pair","args":[{"bytes":"01B2A4F12006B191111B11FAA0A126BCDDDED861DE00"},{"prim":"Pair","args":[{"bytes":"0000F9A61EEFD5D12786E70433B1EDC846AC9EB5FCD6"},{"prim":"Pair","args":[{"prim":"True"},{"prim":"Pair","args":[{"int":"213"},{"prim":"Pair","args":[{"int":"1242851"},{"int":"0"}]}]}]}]}]}
    const encoded_storage = TBC.codec.encodeRawBytes(json_storage)
    const decoded_storage = TBC.codec.decodeRawBytes(encoded_storage)
    assert(JSON.stringify(decoded_storage) === JSON.stringify(json_storage), 
      'FN: encodeRawBytes and decodeRawBytes for contract storage')

    const json_code = [{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"address","annots":["%_Liq_entry_buy_for"]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":["%buyer"]},{"prim":"option","args":[{"prim":"mutez"}],"annots":["%tokens"]}],"annots":[":sell_request","%_Liq_entry_sell_for"]},{"prim":"or","args":[{"prim":"mutez","annots":["%_Liq_entry_set_target_supply"]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":["%buyer"]},{"prim":"option","args":[{"prim":"mutez"}],"annots":["%tokens"]}],"annots":[":sell_request","%_Liq_entry_finalize_sale"]},{"prim":"address","annots":["%_Liq_entry_set_sell_adapter"]}]}]}]}],"annots":[":_entries"]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"map","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"mutez","annots":["%balance"]},{"prim":"mutez","annots":["%to_sell"]}],"annots":[":account"]}],"annots":["%accounts"]},{"prim":"pair","args":[{"prim":"mutez","annots":["%held_supply"]},{"prim":"pair","args":[{"prim":"mutez","annots":["%target_supply"]},{"prim":"pair","args":[{"prim":"option","args":[{"prim":"address"}],"annots":["%sell_adapter"]},{"prim":"pair","args":[{"prim":"mutez","annots":["%min_tx"]},{"prim":"pair","args":[{"prim":"key_hash","annots":["%destination"]},{"prim":"pair","args":[{"prim":"address","annots":["%admin"]},{"prim":"pair","args":[{"prim":"string","annots":["%name"]},{"prim":"string","annots":["%symbol"]}]}]}]}]}]}]}]}],"annots":[":storage"]}]},{"prim":"code","args":[[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"CDR","annots":["@storage_slash_1"]}]]},{"prim":"CAR","annots":["@parameter_slash_2"]},{"prim":"DUP","annots":["@parameter"]},{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@buyer_slash_50"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%min_tx"]}],{"prim":"AMOUNT","annots":["@amount"]},{"prim":"COMPARE"},{"prim":"GE"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["@target","%target_supply"]}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["@held","%held_supply"]}],{"prim":"DUP","annots":["@held"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@target"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"GT"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@held"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@target"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"SUB","annots":["@available"]},{"prim":"AMOUNT","annots":["@amount"]},{"prim":"COMPARE"},{"prim":"LE"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"AMOUNT","annots":["@amount"]},{"prim":"PAIR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR","annots":["@buyer"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["@tokens"]}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CDR","annots":["@storage"]}],{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["%held_supply"]}],{"prim":"ADD"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"DUP","annots":["@storage"]},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"ADD"},{"prim":"PAIR","annots":["@account","%balance","%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DIP","args":[[{"prim":"SOME"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR","annots":["%accounts"]},{"prim":"DUP"},{"prim":"NIL","args":[{"prim":"operation"}]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}],[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%destination"]}],{"prim":"IMPLICIT_ACCOUNT"},{"prim":"AMOUNT","annots":["@amount"]},{"prim":"UNIT"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@request_slash_52"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%sell_adapter"]}],{"prim":"IF_NONE","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"OR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"OR"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR","annots":["@request"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["@storage"]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DUP","annots":["@account"]},{"prim":"CDR","annots":["%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"SUB","annots":["@remaining"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%tokens"]},{"prim":"IF_NONE","args":[[{"prim":"DUP","annots":["@remaining"]}],[]]},{"prim":"RENAME","annots":["@tokens"]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@remaining"]}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"LE"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@remaining"]}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"GT"},{"prim":"AND"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%min_tx"]}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"GE"},{"prim":"OR"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}],{"prim":"PAIR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR","annots":["@buyer"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CDR","annots":["@storage"]}],{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["@tokens"]}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%to_sell"]},{"prim":"ADD"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"PAIR","annots":["@account","%balance","%to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@buyer"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DIP","args":[[{"prim":"SOME"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR","annots":["%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@new_target_supply_slash_54"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"PAIR","annots":["%target_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"RENAME","annots":["@request_slash_57"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP","annots":["@storage"]},{"prim":"CAR","annots":["%accounts"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%buyer"]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR","annots":["@accounts"]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["@buyer"]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"PAIR","annots":["%balance","%to_sell"]}],[]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@request"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%tokens"]},{"prim":"IF_NONE","args":[[{"prim":"DUP","annots":["@account"]},{"prim":"CDR","annots":["%to_sell"]}],[]]},{"prim":"RENAME","annots":["@tokens"]},{"prim":"DUP","annots":["@tokens"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%balance"]},{"prim":"SUB","annots":["@balance"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"CDR"},{"prim":"CAR","annots":["%held_supply"]}],{"prim":"SUB"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"DUP","annots":["@storage"]},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}],{"prim":"CAR","annots":["%accounts"]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@balance"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"mutez","annots":["%balance"]},{"prim":"mutez","annots":["%to_sell"]}],"annots":[":account"]}]}],[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@tokens"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@account"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"CDR","annots":["%to_sell"]},{"prim":"SUB","annots":["@to_sell"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@balance"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"PAIR","annots":["%balance","%to_sell"]},{"prim":"SOME"}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"},{"prim":"DROP"}]]}]]}]]}],{"prim":"RENAME","annots":["@account"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}]]}],{"prim":"CAR","annots":["%buyer"]},{"prim":"UPDATE"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}],[{"prim":"RENAME","annots":["@sell_adapter_slash_67"]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP","annots":["@storage"]}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],{"prim":"DUP","annots":["@storage"]},{"prim":"DUP","annots":["@storage"]},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR","annots":["%admin"]}],{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"DUP","annots":["@b"]},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"CAR","annots":["%accounts"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR","annots":["%target_supply"]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}]]},{"prim":"SWAP"}],[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]}]]}]]}]]}],{"prim":"SOME"},{"prim":"PAIR","annots":["%sell_adapter"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["%target_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["%held_supply"]},{"prim":"SWAP"},{"prim":"PAIR","annots":["@storage","%accounts"]},{"prim":"NIL","args":[{"prim":"operation"}],"annots":["@noop"]},{"prim":"PAIR"}]]}]]}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]}]]}]
    const encoded_code = TBC.codec.encodeRawBytes(json_code)
    const decoded_code = TBC.codec.decodeRawBytes(encoded_code)
    assert(JSON.stringify(json_code) === JSON.stringify(decoded_code), 
      'FN: encodeRawBytes and decodeRawBytes for contract code')
  }

  {
    const a1 = new Uint8Array([])
    const a2 = new Uint8Array([1])
    const a3 = new Uint8Array([2, 255])
    {
      const r = TBC.codec.bytesConcat(a1, a1)
      assert(r.length === 0, 'FN: bytesConcat empty with empty')
    }
    {
      const r = TBC.codec.bytesConcat(a1, a2)
      assert(r.length === 1 && r[0] === 1, 'FN: bytesConcat empty with non-empty')
    }
    {
      const r = TBC.codec.bytesConcat(a2, a3)
      assert(r.length === 3 && r[0] === 1 && r[1] === 2 && r[2] === 255, 
             'FN: bytesConcat non-empty with non-empty')
    }
  }

  {
    const source = 'tz1TUswtLE1cTBgoBC2JAtQ5Jsz2crp1tZvJ'
    const prefix = TBC.codec.prefix.ed25519_public_key_hash
    const bytes = TBC.codec.bs58checkDecode(source, prefix)
    const bytes_auto = TBC.codec.bs58checkDecode(source)
    assert(bytes.length === 20 && bytes.toString() === bytes_auto.toString(), 'FN: bs58checkDecode')
    const str = TBC.codec.bs58checkEncode(bytes, prefix)
    assert(str === source, 'FN: bs58checkEncode')
  }

  {
    const words12 = TBC.crypto.getMnemonic(128)
    assert(words12.split(' ').length === 12, 'FN: getMnemonic 128')

    const words18 = TBC.crypto.getMnemonic(192)
    assert(words18.split(' ').length === 18, 'FN: getMnemonic 192')

    const words24 = TBC.crypto.getMnemonic(256)
    assert(words24.split(' ').length === 24, 'FN: getMnemonic 256')

    const key = TBC.crypto.getKeyFromWords(words24, 'abcdefg')
    const secret_key = key.getSecretKey()
    assert(secret_key.slice(0,4) === 'edsk' && secret_key.length === 98, 'FN: getKeyFromWords')
  }

  {
    const hex_key = TBC.codec.getContractHexKey('KT1UynVe2zgSht3QHFUDpWkKvonFrcE1PZ8q')
    assert(hex_key === 'df/bc/db/b1/14/77863511f6ada9978be77b690be14a', 'FN: getContractHexKey')
  }

  {
    const edsig = TBC.crypto.signOperation(new Uint8Array([1,2,3,4,5,6]), 'edskS68LAmi2nQHCEzvMs9CAJaCpWWtkFTavc2DBnxLaNvFerXBgjggKNu9QFPTyT5BuE1ttNbkHj7c3Q4AuPtjaFzfyj4t9un')
    const spsig1 = TBC.crypto.signOperation(new Uint8Array([1,2,3,4,5,6]), 'spsk2nG1XBRvSJmh6BiwcBxox5DpMn4NcRzJakgACsrydqXRhXfBej')
    const p2sig = TBC.crypto.signOperation(new Uint8Array([1,2,3,4,5,6]), 'p2sk2ucp48wneFz9rwDvd4vsoqxNWHe5QTKcfnJ1JAyVJ3y77PgPSr')

    const edsig_prefix = TBC.codec.bs58checkPrefixPick(edsig)
    const spsig1_prefix = TBC.codec.bs58checkPrefixPick(spsig1)
    const p2sig_prefix = TBC.codec.bs58checkPrefixPick(p2sig)

    assert(edsig.length === 99 && edsig_prefix.name === 'ed25519_signature', 'FN: signOperation edsig')
    assert(spsig1.length === 99 && spsig1_prefix.name === 'secp256k1_signature', 'FN: signOperation spsig1')
    assert(p2sig.length === 98 && p2sig_prefix.name === 'p256_signature', 'FN: signOperation p2sig')
  }

  {
    const edesk = TBC.crypto.decryptKey('edesk1TgH1sGSQ2rwM1Sk475ikTLqeYrSH2a6tvUuZdzkox8C91n55pVGo7QpxbFhT1KAe3zpPFWPvrusrBY9fnc', 'a')
    const spesk = TBC.crypto.decryptKey('spesk29FVwwKJ4FXpJtGKraxS4QcDeaoBL1JPsnqnofUSAf9yFioRbfRq5eJEoXpcUBPKnFjj8WEfj7cQjZkRxAs', 'a')
    const p2esk = TBC.crypto.decryptKey('p2esk1qLhMDUemxyMkfjAjmKw5QQSp7FhGadvBgthrehjWwJSofUtcd56HpEv8GqutoA3hC8wMAqeU2sX5p4XHjX', 'a')

    assert(
      edesk.address === 'tz1hgWvYdzLECdrq5zndGHwCGnUCJq1KFe3r'
      && edesk.getPublicKey() === 'edpkunm1aRnRtHwVsBGSFgKmw5EhBn4gR6NC5JqVoAi57viSgAN3t5',
      'FN: decryptKey edesk')

    assert(
      spesk.address === 'tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB'
      && spesk.getPublicKey() === 'sppk7aLxNrEXqt52YTEXmVwKQSu2phVrjnSQmF7V31xSAFXEq9PSETE', 
      'FN: decryptKey spesk')

    assert(
      p2esk.address === 'tz3Vrs3r11Tu9fZvu4mHFcuNt9FK9QuCw83X'
      && p2esk.getPublicKey() === 'p2pk67SFY4XDMaACBrbJfvhmfLVx3wNfNt4inWHRsCdZc13b7CASxbm', 
      'FN: decryptKey p2esk')

  }
}

const main = async () => {
  await fn_tests()
}

main()