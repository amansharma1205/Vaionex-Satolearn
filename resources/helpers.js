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

class healperFunctios{
    randomEmailGenerator(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<10; ii++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
       var randomEmail=string + '@gmail.com';
       return randomEmail;
    }

} export default new healperFunctios()
