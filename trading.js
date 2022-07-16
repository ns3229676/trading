const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args:[
           '--no-sandbox',
           '--disable-gpu',
           '--enable-webgl',
           '--window-size=800,800'
        ]
     }); 
  
     const loginUrl = "https://jncx.io/spot/ETH_INR";
     const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'; 
     const page = await browser.newPage();
  
     await page.setUserAgent(ua);
     await page.goto(loginUrl, { waitUntil: 'networkidle2' });
     await page.waitForTimeout(2000)
     await page.click('button[class="btn BuyNavButton"]')
     await page.waitForTimeout(2000)
     await page.type('input[type="email"]', "nitinsaxena1899@gmail.com");
     await page.type('input[type="password"]', "Nitinsaxena@1899");
     await page.click('span[class="MuiButton-label"]')
     await page.waitForTimeout(25000)
     await page.goto(loginUrl, { waitUntil: 'networkidle2' });
     await page.waitForTimeout(2000)
     await page.type('input[name="total"]', "100");
     await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");

     
})();