import React from "react";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 ">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <div className="text-center">
        <h2 className="feature-CardTxt">{title}</h2>
        <p className="feature-CardDes">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
