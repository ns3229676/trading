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
     await page.type('input[name="price"]', "5360");
     await page.waitForTimeout(1000)
     await page.type('input[name="quantity"]', "1000");
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
    let b = await page.$('input[name="price"]');
     await b.press('Backspace'); 
     await page.waitForTimeout(1000)
     await b.press('Backspace'); 
     await page.waitForTimeout(1000)
     await b.press('Backspace'); 
     await page.waitForTimeout(1000)
     await b.press('Backspace'); 
     await page.waitForTimeout(1000)
    await page.type('input[name="price"]', "5360");
    await page.waitForTimeout(1000)
    await page.type('input[name="quantity"]', "1500");
    await page.waitForTimeout(1000)
    await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");


      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let c = await page.$('input[name="price"]');
       await c.press('Backspace'); 
       await page.waitForTimeout(1000)
       await c.press('Backspace'); 
       await page.waitForTimeout(1000)
       await c.press('Backspace'); 
       await page.waitForTimeout(1000)
       await c.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");


      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let d = await page.$('input[name="price"]');
       await d.press('Backspace'); 
       await page.waitForTimeout(1000)
       await d.press('Backspace'); 
       await page.waitForTimeout(1000)
       await d.press('Backspace'); 
       await page.waitForTimeout(1000)
       await d.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");



      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let e = await page.$('input[name="price"]');
       await e.press('Backspace'); 
       await page.waitForTimeout(1000)
       await e.press('Backspace'); 
       await page.waitForTimeout(1000)
       await e.press('Backspace'); 
       await page.waitForTimeout(1000)
       await e.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   
    

      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let f = await page.$('input[name="price"]');
       await f.press('Backspace'); 
       await f.waitForTimeout(1000)
       await f.press('Backspace'); 
       await page.waitForTimeout(1000)
       await f.press('Backspace'); 
       await page.waitForTimeout(1000)
       await f.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   

    
  
      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let g = await page.$('input[name="price"]');
       await g.press('Backspace'); 
       await page.waitForTimeout(1000)
       await g.press('Backspace'); 
       await page.waitForTimeout(1000)
       await g.press('Backspace'); 
       await page.waitForTimeout(1000)
       await g.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   

    
      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let h = await page.$('input[name="price"]');
       await h.press('Backspace'); 
       await page.waitForTimeout(1000)
       await h.press('Backspace'); 
       await page.waitForTimeout(1000)
       await h.press('Backspace'); 
       await page.waitForTimeout(1000)
       await h.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   
     

      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let i = await page.$('input[name="price"]');
       await i.press('Backspace'); 
       await page.waitForTimeout(1000)
       await i.press('Backspace'); 
       await page.waitForTimeout(1000)
       await i.press('Backspace'); 
       await page.waitForTimeout(1000)
       await i.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");
   
 
      //  FOR PLACING BUY ORDER 2

      await page.waitForTimeout(5000)
      let j = await page.$('input[name="price"]');
       await j.press('Backspace'); 
       await page.waitForTimeout(1000)
       await j.press('Backspace'); 
       await page.waitForTimeout(1000)
       await j.press('Backspace'); 
       await page.waitForTimeout(1000)
       await j.press('Backspace'); 
       await page.waitForTimeout(1000)
      await page.type('input[name="price"]', "5360");
      await page.waitForTimeout(1000)
      await page.type('input[name="quantity"]', "1500");
      await page.waitForTimeout(1000)
      await page.click('button[class="btn BuyNavButton btn-block w-100"]', "100");

   
    
 
 
 
      
     

      

    
    

     


    

     
})();


