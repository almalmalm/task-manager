import Image from 'next/image';

interface NotificationsProps {
  quantity: number;
}

const Notifications: React.FC<NotificationsProps> = ({ quantity }) => {
  return (
    <div className="relative">
      <div className="bg-yellow-400 h-6 w-6 rounded-full absolute left-3.5 bottom-3.5 flex items-center justify-center font-semibold text-sm">
        {quantity}
      </div>
      <Image src="/ic_bell.svg" width={28} height={28} alt="Notifications icon" />
    </div>
  );
};

export default Notifications;
