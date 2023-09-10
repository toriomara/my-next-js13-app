import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        // placeholder="blur"
        className="logo"
        src="/nextjs-13.svg"
        width="100"
        height="20"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
