import Button from "./Button"
import { describe, test, expect } from "vitest"
import { render } from "@testing-library/react"
import getData from "../service/getData"

describe("Button hi", () => {

    test("should add two numbers", () => {
        expect(1 + 1).toBe(2)
    })

    test("render", () => {
        render(<Button />)
    })

    test("get data fetch", async () => {
        const { name } = await getData(1)
        expect(name).toBe("Luke Skywalker")
    })

})