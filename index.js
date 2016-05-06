/*
* Patch for Siphon Sandbox
* Orginal:
* var ReactNative = require('react-native')
* module.exports = ReactNative.NativeModules.Contacts
*/

var React = require('react-native');
var { Platform } = React;

module.exports = {
  getAll: function() {
    console.warn('Warning: getContacts returns dummy data in the Siphon Sandbox');
    if (Platform.OS === 'ios') {
      return [
        {
          recordID: 1,
          familyName: 'Jung',
          givenName: 'Carl',
          middleName: '',
          emailAddresses: [{
            label: 'work',
            email: 'carl-jung@example.com',
          }],
          phoneNumbers: [{
            label: 'mobile',
            number: '(555) 555-5555',
          }],
          thumbnailPath: '',
        }
      ];
    } else {
      return [
        {
          recordID: 1,
          familyName: '',
          givenName: 'Carl Jung',
          middleName: '',
          emailAddresses: [{
            label: 'work',
            email: 'carl-jung@example.com',
          }],
          phoneNumbers: [{
            label: 'mobile',
            number: '(555) 555-5555',
          }],
          thumbnailPath: '',
        }
      ];
    }
  },

  addContact: function() {
    console.warn('Warning: addContact is disabled in the Siphon Sandbox');
  },

  updateContact: function() {
    console.warn('Warning: updateContact is disabled in the Siphon Sandbox');
  },

  deleteContact: function() {
    console.warn('Warning: deleteContact is disabled in the Siphon Sandbox');
  },
};
