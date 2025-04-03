import { MinusSquare, PlusSquare } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Define prop types for the FooterCard component
interface FooterCardProps {
  heading: string;
  details: string;
  image: string;
}

export default function FooterCard({ heading, details, image }: FooterCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex p-2 bg-[#2A2A2A] shadow-lg mb-1 ">
      {/* Left side: Small Image */}
      <div className="w-20 h-20 mr-4">
        <Image
          src={`${image}`} // Image path
          alt={`${heading} Image`}
          width={80} // Specify width
          height={80} // Specify height
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right side: Heading and Details */}
      <div className="flex flex-col w-full">
        <h3
          className="flex justify-between items-center text-xl font-semibold text-[#7B5B4C] cursor-pointer"
          onClick={toggleExpansion}
        >
          <span>{heading}</span>
          {/* Conditionally render the icon */}
          {isExpanded ? <MinusSquare /> : <PlusSquare />}
        </h3>

        {/* Details section with smooth transition */}
        <div
          className={`overflow-y-scroll transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
        >
          <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: details }} />
        </div>
      </div>
    </div>
  );
}
