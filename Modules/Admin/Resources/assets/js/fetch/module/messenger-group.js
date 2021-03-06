import config from '../../config/api.conf';
import {mixGetJson} from '../api';

export default {
    list(cb, params, conf) {
        mixGetJson(config.group.list,'post',params,conf).then((data)=>{cb(data)})
    },
    modify(cb, params, conf) {
        mixGetJson(config.group.modify,'post',params,conf).then((data)=>{cb(data)})
    },
    delete(cb, params, conf) {
        mixGetJson(config.group.delete,'post',params,conf).then((data)=>{cb(data)})
    },
    add(cb, params, conf) {
        mixGetJson(config.group.add,'post',params,conf).then((data)=>{cb(data)})
    },
    get_rule_list(cb, params, conf) {
        mixGetJson(config.newRule.list,'post',params,conf).then((data)=>{cb(data)})
    },
}