import React from 'react';

const MetricSelector = ({ selectedMetric, onMetricChange }) => {
  return (
    <div className="w-48">
      <label className="block text-sm text-gray-600 mb-2">Metric</label>
      <select
        value={selectedMetric}
        onChange={(e) => onMetricChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      >
        <option value="lcp">Largest Contentful Paint</option>
        <option value="cls">Cumulative Layout Shift</option>
      </select>
    </div>
  );
};

export default MetricSelector;