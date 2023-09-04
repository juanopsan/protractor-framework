let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let go_button = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };
    
    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function(){
        go_button.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('h2.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();