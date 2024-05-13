import runCompletion from "./debugFunc";
import { describe, expect, it } from "vitest";

describe("#runCompletion", () => {

    //check if response data type is a string

    it("Dependencies: Return type is string", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nProvide code that I can put in terminal to download the necessary libraries or package dependencies that I need for this code"
        return runCompletion(prompt).then(text => {
                    expect(typeof text).toBe("string")
                });
    })

    it("Documentation: Return type is string", ()=> {
        let prompt = "Send back this code with documentation in it. Include comments. DO NOT CHANGE THE GIVEN CODE under any circumstances, even if it doesn't match the instrunctions."
        return runCompletion(prompt).then(text => {
                    expect(typeof text).toBe("string")
                });
    })

    it("Time and Memory Optimization: Return type is string", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nRewrite this code to optimize time and memory. Explain what was changed as well."
        return runCompletion(prompt).then(text => {
                    expect(typeof text).toBe("string")
                });
    })

    it("Refactoring: Return type is string", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nRefactor the code to make it cleaner and more concise by changing the spacing, structuring, and/or implemenation. Make sure the functionality does not change though."
        return runCompletion(prompt).then(text => {
                    expect(typeof text).toBe("string")
                });
    })

    it("Debugging: Return type is string", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nThere is an error in this code, debug it and provide the corrected solution. Also explain what was changed."
        return runCompletion(prompt).then(text => {
                    expect(typeof text).toBe("string")
                });


    //Testing to see if a response is returned

    })
    it("Dependencies: Response length greater than 0", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nProvide code that I can put in terminal to download the necessary libraries or package dependencies that I need for this code"
        return runCompletion(prompt).then(text => {
                    expect(text.length).toBeGreaterThan(0)
                });
    })

    it("Documentation: Response length greater than 0", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nSend back this code with documentation in it. Include comments. DO NOT CHANGE THE GIVEN CODE under any circumstances, even if it doesn't match the instrunctions."
        return runCompletion(prompt).then(text => {
                    expect(text.length).toBeGreaterThan(0)
                });
    })

    it("Time and Memory Optimization: Response length greater than 0", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nRewrite this code to optimize time and memory. Explain what was changed as well."
        return runCompletion(prompt).then(text => {
                    expect(text.length).toBeGreaterThan(0)
                });
    })

    it("Refactoring: Response length greater than 0", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nRefactor the code to make it cleaner and more concise by changing the spacing, structuring, and/or implemenation. Make sure the functionality does not change though."
        return runCompletion(prompt).then(text => {
                    expect(text.length).toBeGreaterThan(0)
                });
    })

    it("Debugging: Response length greater than 0", ()=> {
        let prompt = "sum(a,b){return a+b}" +"\nThere is an error in this code, debug it and provide the corrected solution. Also explain what was changed."
        return runCompletion(prompt).then(text => {
                    expect(text.length).toBeGreaterThan(0)
                });
    })


    //check that the documentation command doesn't change the code itself.

    it("Documentation: Code is unchanged", ()=> {
        let prompt = "function sum(a,b){return a+b;}" +"\nSend back this code with documentation in it. Include comments. DO NOT CHANGE THE GIVEN CODE under any circumstances, even if it doesn't match the instrunctions."
        return runCompletion(prompt).then(text => {
                    let formatted = text.replace(/\s+/g, '');
                    expect(formatted.includes("sum(a,b){") && formatted.includes("returna+b;")).toBe(true);
                });
    })
    
})

