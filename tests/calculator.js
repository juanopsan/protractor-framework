let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');
        //browser.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(2);
        //element(by.model('first')).sendKeys(2);

        homepage.enterSecondNumber(3);
        //element(by.model('second')).sendKeys(3);

        homepage.clickGo();
        //element(by.css('[ng-click="doAddition()"]')).click();

        homepage.verifyResult('5');
        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');

        browser.sleep(2000);
    });

    it('substraction test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');
        //browser.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(2);
        //element(by.model('first')).sendKeys(2);

        homepage.enterSecondNumber(3);
        //element(by.model('second')).sendKeys(3);

        homepage.clickGo1();
        //element(by.css('[ng-click="doAddition()"]')).click();

        homepage.verifyResult('5');
        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');

        browser.sleep(2000);
    });
    
});