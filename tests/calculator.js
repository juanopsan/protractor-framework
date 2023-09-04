let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');
    
        homepage.enterFirstNumber(2);
    
        homepage.enterSecondNumber(3);
    
        homepage.clickGo();
    
        homepage.verifyResult('5');
    
        browser.sleep(2000);
    });

    it('substraction test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.selectOperator('SUBTRACTION');

        homepage.enterFirstNumber(7);

        homepage.enterSecondNumber(3);

        homepage.clickGo();

        homepage.verifyResult('4');
    
        browser.sleep(2000);
    });
    
});