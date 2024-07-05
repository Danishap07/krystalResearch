import Image from 'next/image';

const ImageComponent = ({ src, alt }) => {
  return (
    <div className="w-80 h-64 xl:w-[400px] xl:h-[300px] relative">
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" 
        className="object-cover" 
      />
    </div>
  );
};

export default ImageComponent;