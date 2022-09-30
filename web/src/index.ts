import { User } from './models/User';

const user = new User({ name: 'New Record', age: 9999 });

user.on('change', () => {
  console.log('Changed');
});
