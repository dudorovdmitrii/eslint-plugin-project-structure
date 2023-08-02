import { getNextPath } from "./getNextPath";

jest.mock("path", () => ({
    sep: "/",
}));

describe("getNextPath", () => {
    it("should return correct next path", () => {
        expect(
            getNextPath("src/features/ComponentName.tsx", "src/features"),
        ).toEqual("ComponentName.tsx");
    });
});