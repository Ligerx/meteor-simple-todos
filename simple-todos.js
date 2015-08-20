Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function() {
      return Tasks.find({}, { sort: { createdAt: -1 }});
    }
  });

  Template.body.events({
    'submit .new-task': function(event) {
      event.preventDefault();

      // get val from form
      var text = event.target.text.value;

      // insert into collection
      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      // clear form
      event.target.text.value = '';
    }
  });
}
