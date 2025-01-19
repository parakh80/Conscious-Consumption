import { useState } from 'react';

function MinimalismItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start">
        <span className="text-green-500 mr-2 mt-1">➤</span>
        <div>
          <div className="font-semibold hover:underline">{title}</div>
          {isOpen && (
            <p className="text-gray-700 mt-2">
              {content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MinimalismItem;