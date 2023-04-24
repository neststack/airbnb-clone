'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const mainClass = 'mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20';

const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;

  return (
    // <div className="mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20">
    <div className={mainClass}>{children}</div>
  );
};

export default Container;
