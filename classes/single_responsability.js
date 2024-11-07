/* 
    SINGLE RESPONSABILITY PRINCIPLE
*/

// This class does not achieve with the SRP
/*class UserSettings {

    constructor(user, settings) {
        this.user = user;
        this.settings = settings;
    }

    // Responsability 1
    changeSettings(settings) {
        if(this.verifyCredentials()) {

        }
    }

    //Responsability 2
    verifyCredentials() {

    }
}*/


//This class achieve with the SRP - the user authentication
class UserAuth {
    constructor(user) {
        this.user = user;
    }

    verifyCredentials() {
        return true;
    }
}

//This class achieve with the SRP - The user settings
class UseSettings {
    constructor(user, settings) {
        super(user);
        this.settings = settings;
    }

    
    changeSettings() {
        if(this.verifyCredentials()) {
            console.log('You can change your settings');
        }
    }
}