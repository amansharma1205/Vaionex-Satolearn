import CreateNewCourse_Page from "../../pageObjects/CreateNewCourse/CreateNewCourse_Page";
import helpers from "../../resources/helpers.js"
import Login_Page from "../../pageObjects/login/Login_Page.js";

describe('Verify Create New Course test',()=>{
    
    beforeEach (async function (){
	    browser.url('/')
      await helpers.waitforPageload();})
    
    it('Test 1 Verify user is able to Crete New Course',async()=>{

      await Login_Page.LoginToSato();
      await  CreateNewCourse_Page.CreateNewCourse();

    })
})