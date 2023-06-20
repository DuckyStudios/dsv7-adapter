import RandExp from "randexp";

export module Utilities {
    export class ObjectUtils {
        public static generateRandomExampleForRegex(regex: string): string {
            return new RandExp(regex).gen();
        }

        public static copyDefaultsWithoutOperators(defaults: any): any {
            const copy = JSON.parse(JSON.stringify(defaults));

            for (const key in copy) {
                for (const val in copy[key]) {
                    const value = copy[key][val];

                    delete copy[key]['min_vorkommen'];
                    delete copy[key]['max_vorkommen'];
                    
                    for (const operator in value) {
                        if (operator.startsWith("required")
                            || operator.startsWith("type")
                            || operator.startsWith("regex")
                            || operator.startsWith("options")
                            || operator.startsWith("default")) {
                            delete copy[key][val][operator];
                        }
                    }
                }
            }

            return copy;
        }

        public static removeEmptyObjects(obj: any): any {
            for (var key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    this.removeEmptyObjects(obj[key]);
                  if (Object.keys(obj[key]).length === 0) {
                    delete obj[key];
                  }
                }
              }

            return obj;
        }

        public static validateObjectAgainstDefaults(obj: any, defaults: any): any {
            const errors = {};

            for (const key in defaults) {
                for (const val in defaults[key]) {
                    const value = defaults[key][val];

                    errors[key] = {};
                    errors[key][val] = {};

                    if (typeof obj[key][val] === 'object' && obj[key][val] !== null)   {
                        if (value.default) {
                            obj[key][val] = value.default;
                            console.log('Default value ' + value.default + ' is set for ' + val);
                            continue;
                        }

                        obj[key][val] = null;
                        console.log('Value ' + val + ' is set to null');

                        if (value.required) {
                            errors['errors'] = true;
                            errors[key][val]['message'] = 'Required value ' + val + ' is missing';
                            console.log('Required value ' + val + ' is missing');
                            continue;
                        }
                    }

                    if (key === 'min_vorkommen' || key === 'max_vorkommen') {
                        continue;
                    }

                    if (value.required && !obj[key][val]) {
                        errors['errors'] = true;
                        errors[key][val]['messages'] = 'Required value ' + val + ' is missing';
                    }

                    if (value.type && typeof obj[key][val] !== value.type) {
                        if (obj[key][val] === null) {
                            continue;
                        }

                        errors['errors'] = true;
                        errors[key][val]['message'] = 'Type mismatch. Should be ' + value.type + ' but is ' + typeof obj[key][val];
                    }

                    if (value.regex && !new RegExp(value.regex).test(obj[key][val])) {
                        errors['errors'] = true;
                        errors[key][val]['message'] = 'Regex mismatch. Should match ' + value.regex + ' but does not (Example: ' + ObjectUtils.generateRandomExampleForRegex(value.regex) + ')';
                    }

                    if (value.options && !value.options.includes(obj[key][val])) {
                        errors['errors'] = true;
                        errors[key][val]['message'] = 'Value ' + obj[key][val] + ' is not in options ' + value.options;
                    }
                }
            }

            return this.removeEmptyObjects(errors);
        }
    }
}