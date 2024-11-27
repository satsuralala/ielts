import Image from "next/image";

type TeamMember = {
  userName: string;
  userTitle: string;
  userDescription: string[];
  userImage: string;
};

export const TeamMemberCard = ({
  userName,
  userTitle,
  userDescription,
  userImage,
}: TeamMember) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full min-h-[500px] sm:h-56 md:h-48">
        <Image
          src={userImage}
          alt={userName}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="absolute bottom-5 left-6 right-6 rounded-lg bg-[#ffffff40] p-6 sm:p-4 md:p-5 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white-a700">{userName}</h3>
        <p className="text-sm  text-white-a700">{userTitle}</p>
        <div className="mt-3 space-y-2">
          {userDescription.map((desc, i) => (
            <p key={i} className="text-xs text-white-a700 italic">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
