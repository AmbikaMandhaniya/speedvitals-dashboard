import React from 'react';

const DeviceSelector = ({ selectedDevice, onDeviceChange }) => {
  return (
    <div className="w-48">
      <label className="block text-sm text-gray-600 mb-2">Device</label>
      <select
        value={selectedDevice}
        onChange={(e) => onDeviceChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      >
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
};

export default DeviceSelector;