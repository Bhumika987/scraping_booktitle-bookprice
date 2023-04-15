//const puppeteer = require('puppeteer');

//(async () => {
  //const browser = await puppeteer.launch({
    //headless: false,
    //defaultViewport: false,
    //userDataDir: "./tmp"
    //});
  //const page = await browser.newPage();

  //await page.goto('https://www.1mg.com/drugs-all-medicines?label=b');
   //const productHandles = await page.$$('.style__inner-container___3BZU9 style__product-grid___3noQW style__padding-top-bottom-12px___1-DPF ');
   //for (const producthandle of productHandles){
    //const title = await page.evaluate(el => el.querySelector("div").textContent, producthandle)
    //console.log(title)
   //}
  //await browser.close();
//})();

const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();

await page.goto('http://books.toscrape.com/');

const result = await page.evaluate(() => {
  let data = []; 
  let elements = document.querySelectorAll('.product_pod');

  for (var element of elements){
      let title = element.childNodes[5].innerText;
      let price = element.childNodes[7].children[0].innerText;

      data.push({title, price});
  }

  return data;
});

browser.close();
return result;
};

scrape().then((value) => {
console.log(value);
});