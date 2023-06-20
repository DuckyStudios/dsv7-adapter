import { BaseObjects } from "./base/BaseObjects";
import { Utilities } from "./base/Utilities";
const obj = new BaseObjects.WettkampfdefinitionslisteObject();

obj.update({
    'format': {
        listart: 'test',
        version: '6.22'
    }
});

console.log(obj.data.format);

console.log(Utilities.ObjectUtils.validateObjectAgainstDefaults(obj.data, obj.defaultKeys));