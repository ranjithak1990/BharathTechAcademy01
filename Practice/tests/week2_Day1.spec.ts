import {test,expect} from '@playwright/test'

  test.beforeAll(async ()=>{
        console.log("global level-Before ALL executed")

    })
    test.afterAll(async ()=>{
         console.log("global level-After ALL executed")
    })
    test.beforeEach(async ()=>{
        console.log("global level-Before Each executed") 
    })
    test.afterEach(async ()=>{
        console.log("global level-After Each executed") 
        
    })



test.describe.only(`group 1 tests`,async ()=>{

    test(`group1 test1`,async ({page})=>{
     console.log("test case1")
    })

     test(`group1 test2`,async ({page})=>{
     console.log("test case2")
    })

})

test.describe.only(`group 2 tests`,async ()=>{
    test.beforeAll(async ()=>{
        console.log("Group 2 Level-Before ALL executed")

    })
    test.afterAll(async ()=>{
         console.log("Group 2 Level-After ALL executed")
    })
    test.beforeEach(async ()=>{
        console.log("Group 2 Level-Before Each executed") 
    })
    test.afterEach(async ()=>{
        console.log("Group 2 Level-After Each executed") 
        
    })

    test(`@check group2 test1`,{tag:['@smoke','@web']},async ({page})=>{
        test.fixme();
     expect(1).toBe(2);
     console.log("test case1") 
    })

     test(`group2 test2`,async ({page})=>{
     console.log("test case2")
    })

})