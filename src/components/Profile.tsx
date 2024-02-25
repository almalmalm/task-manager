import Image from 'next/image';

interface ProfileProps {
  name: string;
  profession: string;
}

const Profile: React.FC<ProfileProps> = ({ name, profession }) => {
  return (
    <div className="flex gap-8">
      <div className="text-right flex flex-col justify-center gap-1">
        <div className="font-semibold">{name}</div>
        <div className="text-slate-500 text-xs">{profession}</div>
      </div>
      <div className="bg-yellow-400 w-14 h-14 rounded-full  overflow-hidden">
        <Image src="/profile.svg" width={55} height={55} alt="Picture of the user" className="relative top-[3px]" />
      </div>
    </div>
  );
};

export default Profile;
