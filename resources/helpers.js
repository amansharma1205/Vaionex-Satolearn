//import { load } from 'cheerio'
//import _, { isEqual } from 'lodash'
import util from 'util'
import { existsSync, readFileSync } from 'fs'
import { promises as fs } from 'fs'
import camelcase from 'camelcase'
//import moment from 'moment'
//import { Key, until, By } from 'selenium-webdriver'
import { expect } from 'chai'
//const writeFile = util.promisify(fs.writeFile)

class helpersFunction{
  
    randomEmailGenerator(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<10; ii++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
       var randomEmail=string + '@gmail.com';
       return randomEmail;
    }

   async waitforPageload()
		{
		  await	browser.waitUntil(
				() => browser.execute(() => document.readyState === 'complete')),
				{
				  timeout: 60 * 1000, // 60 seconds
				  timeoutMsg: 'Message on failure'
				}
            	console.log("Executing WaitforPageLoad")
            }

  async setValue(object,value){
        await object.waitForExist({ timeout: 5000 })
        await object.waitForDisplayed();
        await object.click();
        await object.clearValue();
        return await object.setValue(value);
    }
    
  async runAutoItScript(pathToScript, scriptName) {
      console.info(`\n> Started execution of ${scriptName} ...`);
    
      execFile(`${pathToScript}/${scriptName}`, (error, stdout, stderr) => {
        if (error) {
          throw error;
        } else {
          console.info(`\n> Finished execution of ${scriptName}! | Output: ${stdout}`);
        }
      });
    }

    async KeyPress(Key, Number) {
        for (let i = 0; i < Number; i++) {
        await browser.keys(Key);
      }
    }

} export default new helpersFunction()
