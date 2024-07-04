import { useState } from 'react';

const PhoneNumberInput = ({ onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/\D/g, '');

    if (formattedInput.length <= 10) {
      setPhoneNumber(formattedInput);
      setError('');
      onChange(formattedInput);
    } else {
      setError('Phone number must be 10 digits.');
    }
  };

  const formatPhoneNumber = (number) => {
    if (!number) return '';
    const phoneNumberStr = number.toString();
    const areaCode = phoneNumberStr.slice(0, 3);
    const middle = phoneNumberStr.slice(3, 6);
    const last = phoneNumberStr.slice(6, 10);
    return `(${areaCode}) ${middle}-${last}`;
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formatPhoneNumber(phoneNumber)}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="(123) 456-7890"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;