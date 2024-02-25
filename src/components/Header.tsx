import Notifications from './Notifications';
import Profile from './Profile';

const user = {
  name: 'Kewin Donald',
  profession: 'Frontend Developer',
};

const Header = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="mr-14">
        <Notifications quantity={15} />
      </div>
      <Profile name={user.name} profession={user.profession} />
    </div>
  );
};

export default Header;
