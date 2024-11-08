/* 
    BLOCK SCOPE
*/



function showUserName() {
    // local or function scope
    let canShowUserName = true;

    if(canShowUserName) {
        //block scope
        let userName = 'Andres';

        console.log('Hello ',userName); //output: Hello Andres
    }

    console.log('Nice to meet ',userName);//ReferenceError: userName is not defined
}

showUserName();