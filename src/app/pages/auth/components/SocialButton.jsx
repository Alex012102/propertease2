const SocialButton = ({ src, alt, text }) => {
  return (
    <div className="flex items-center w-full px-4 py-2 border rounded-md">
      <img src={src} alt={alt} className="h-6" />
      <span className="flex-1 text-center font-medium">{text}</span>
    </div>
  );
};

export default SocialButton;
