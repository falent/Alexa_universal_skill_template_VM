// newSession.handlers.js

const States = require('./states.const');
const SpeechOutputUtils = require('../utils/speech-output.utils');
var User = require('../models/user');

const inNewSessionStartableIntents = [
    'NameIntent'
];

module.exports = {

    'NewSession': function() {
        // Intent Request:
        if (this.event.request.type === 'IntentRequest') {
            const intentName = this.event.request.intent.name;
            if (inNewSessionStartableIntents.indexOf(intentName) > -1) {
                return this.emit(intentName);
            }
        }
        // else: Launch Request
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
    	
        this.response.speak(SpeechOutputUtils.pickRandom(this.t('WELCOME')).listen(this.t('REPEAT')));
        this.emit(':responseReady');

        
    },
    // Custom Intents:
    'NameIntent': function() {
        this.handler.state = States.NAME;
        this.emitWithState('NameIntent');
    },
    'Unhandled': function () {
      this.emit(':ask',
          SpeechOutputUtils.pickRandom(this.t('UNDEFINED'))
      );
    },

    // Built-In Intents:

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', SpeechOutputUtils.pickRandom(this.t('HELP')));
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', SpeechOutputUtils.pickRandom(this.t('STOP_ANSWER')));
    },

    'AMAZON.CancelIntent': function () {
        this.emit(':tell', SpeechOutputUtils.pickRandom(this.t('CANCEL_ANSWER')));
    }
};
