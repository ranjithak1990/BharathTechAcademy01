import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
test('assignment 02', async () => {
  const browser = await chromium.launch({headless: false,channel: 'chrome',args: ['--start-maximized']});
  const context = await browser.newContext();  
  await context.clearCookies();  
  const page = await context.newPage();
  await page.goto('https://demoqa.com/')
  await page.locator("//h5[text()='Forms']").click();
  await page.locator("//span[text()='Practice Form']").click();
  await page.locator("input#firstName").fill("Ranjitha")
  await page.locator("input#lastName").fill("Karunanithi")
  await page.locator("#userEmail").fill("ranjithak1990@gmail.com")
  await page.locator("#gender-radio-2").click();
  await page.getByPlaceholder("Mobile Number").fill("9566779764") 
  await page.locator("#dateOfBirthInput").click();
  const year= page.locator(".react-datepicker__year-select")
  await year.selectOption({value:'1990'})
  const month= page.locator(".react-datepicker__month-select")
  await month.selectOption({index:2})
  await page.locator(".react-datepicker__day--004").first().click();
  //await page.waitForLoadState('networkidle')
  await page.locator(".subjects-auto-complete__input-container").click();
  await page.locator(".subjects-auto-complete__input-container").pressSequentially("Computer")
  await page.keyboard.press('Enter')  
  await page.locator("#hobbies-checkbox-1").click();
  await page.locator("input#hobbies-checkbox-2").click();
  await page.locator('#uploadPicture').setInputFiles('C:\\Users\\Manikandan\\Documents\\img.png');
  //await page.waitForLoadState('networkidle')
  await page.locator("#react-select-3-input").fill("Haryana")
  await page.keyboard.press('Enter')
  await page.locator("#react-select-4-input").fill("Karnal")
  await page.keyboard.press('Enter')
  await page.locator("#submit").click()
 
});