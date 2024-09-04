import React from 'react';

const ButtonComponent = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full py-2 px-4 ${disabled ? 'bg-gray-400' : 'bg-blue-600'} text-white rounded-md shadow-sm hover:${disabled ? '' : 'bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      Login
    </button>
  );
};

export default ButtonComponent;
