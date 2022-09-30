import { User } from './models/User';

const user = new User({ name: 'New Record', age: 9999 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
