import Ember from 'ember';

//the route would connect to the store, but until a db is created, this will hold sample data
// note the find by at the end which grabs individual records

export default Ember.Route.extend({
  model: function(params){
    return [
      {
      id: 1,
      title: 'Fall of the Roman Empire',
      items: ['Height of power, crises, and recoveries',
        '313–376: Abuse of power, frontier warfare, and rise of Christianity',
        '376–395; invasions, civil wars, and religious discord',
        'Military, financial, and political ineffectiveness: the process of failure']
      },
      {
      id: 2,
      title: 'NASA Missions',
      items:
        ['X-15 rocket plane (1959–68)',
        'Project Mercury (1959–63)',
        'Project Gemini (1961–66)',
        'Project Apollo (1961–72)'
        ]
      },
      {
      id: 3,
      title: 'Art History',
      items:
        ['Renaissance',
        'Renaissance to Neoclassicism',
        'Romanticism',
        'Romanticism to Modern Art',
        'Modern Art',
        'Contemporary Art'
        ]
      },
    ][params.list_id -1];
  }
});
