const puppeteer = require('puppeteer');




(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args:[
           '--no-sandbox',
           '--disable-gpu',
           '--enable-webgl',
           '--window-size=1920,1080'
         //   '--window-size=800,800'
        ]
        ,
        defaultViewport: {
         width:1215,
         height:568
       }
     }); 
  
     const loginUrl = "https://jncx.io/spot/IGC_INR";
     const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'; 
     const page = await browser.newPage();
  
     await page.setUserAgent(ua);
     await page.goto(loginUrl, { waitUntil: 'networkidle2' });
     await page.waitForTimeout(1000)
     await page.click('button[class="btn BuyNavButton"]')
     await page.waitForTimeout(2000)
     await page.type('input[type="email"]', "nitinsaxena1899@gmail.com");
     await page.type('input[type="password"]', "Nitinsaxena@1899");
     await page.click('span[class="MuiButton-label"]')
     await page.waitForTimeout(28000)

     

    //  FOR PLACING BUY ORDER 1

     await page.goto(loginUrl, { waitUntil: 'networkidle2' });
     await page.waitForTimeout(2800)
    //  const [A] = await page.$x("//a[contains(., 'Market')]");
    //  if (A) {
    //  await A.click();
    //  }
    //  await page.waitForTimeout(5000)
     let a = await page.$('input[name="price"]');
     await a.press('Backspace'); 
     await page.waitForTimeout(1000)
     await a.press('Backspace'); 
     await page.waitForTimeout(1000)
     await a.press('Backspace'); 
     await page.waitForTimeout(1000)
     await a.press('Backspace'); 
     await page.waitForTimeout(1000)
     await page.type('input[name="price"]', "5200");
     await page.waitForTimeout(1000)
     await page.type('input[name="quantity"]', "1");
     await page.waitForTimeout(1000)
     await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");

   
     
     
    

    //  FOR PLACING SELL ORDER 1

    
    //  await page.waitForTimeout(5000)
    //  await page.type('input[name="quantitysell"]', "0.01865672");
    //  await page.type('input[name="totalsell"]', "200");
    //  await page.waitForTimeout(1000)
    //  await page.click('button[class="btn SellNavButton btn-block w-100"]', "100");



     

      //  FOR PLACING BUY ORDER 2

    await page.waitForTimeout(5000)
    
    await page.type('input[name="price"]', "5300");
    await page.waitForTimeout(1000)
    await page.type('input[name="quantity"]', "2");
    await page.waitForTimeout(1000)
    await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");


      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
     
      await page.type('input[name="price"]', "5400");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "3");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");


      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
     
      await page.type('input[name="price"]', "5500");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "4");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");



      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      
      await page.type('input[name="price"]', "5600");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "5");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   
    

      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
     
      await page.type('input[name="price"]', "5700");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "6");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   

    
  
      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
     
      await page.type('input[name="price"]', "5720");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "7");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   

    
      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
    
      await page.type('input[name="price"]', "5700");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "6");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   
     

      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
    
      await page.type('input[name="price"]', "5600");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "5");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   
 
      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
     
      await page.type('input[name="price"]', "5500");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "4");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");


      await page.waitForTimeout(5000)
     
      await page.type('input[name="price"]', "5400");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "4");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");

   
    
 
 
 
      
     

      

    
    

     


    

     
})();


