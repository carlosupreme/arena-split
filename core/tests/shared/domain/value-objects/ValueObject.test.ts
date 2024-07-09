import {describe, expect, it} from "vitest";
import {ValueObject} from "../../../../src/shared/domain/values-objects/ValueObject";

class FullName extends ValueObject {
    constructor(public firstName: string, public lastName: string) {
        super();
    }

    getEqualityComponents(): unknown[] {
        return [
            this.firstName,
            this.lastName
        ];
    }
}

describe("Value object", () => {
    it("should be compare two equal objects", () => {
        const name1 = new FullName('carlos', 'sosa');
        const name2 = new FullName('carlos', 'sosa');

        expect(name1.equals(name2)).toBe(true);
    });

    it("should compare two distinct objects", () => {

        const name1 = new FullName('carlos', 'sosa');
        const name2 = new FullName('carlos', 'other');

        expect(name1.equals(name2)).toBe(false);
    });

    it("should compare two distinct objects from different Classes", () => {
        class FullNameFake extends ValueObject {
            constructor(public firstName: string, public lastName: string) {
                super();
            }

            getEqualityComponents(): unknown[] {
                // just inverting the order we know that is a different class
                return [
                    this.lastName,
                    this.firstName
                ];
            }
        }

        const name1 = new FullName('carlos', 'sosa');
        const name2 = new FullNameFake('carlos', 'other');

        expect(name1.equals(name2)).toBe(false);
    });
});