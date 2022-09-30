import { User } from './models/User';

const user = new User({ name: 'New Record', age: 9999 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
});

user.set({ name: 'New Name' });
