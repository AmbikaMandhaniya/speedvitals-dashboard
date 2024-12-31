import React, { useState, useEffect } from 'react';
import { fetchMetrics } from '../api/metrics';
import MetricSelector from './MetricSelector';
import DeviceSelector from './DeviceSelector';
import MetricsGraph from './MetricsGraph';
import Navbar from './Navbar';

const Dashboard = () => {
  const [metric, setMetric] = useState('lcp');
  const [device, setDevice] = useState('desktop');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchMetrics(metric, device);
        setData(result);
        setError(null);
      } catch (err) {
        setError('Failed to load metrics data');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [metric, device]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">Performance Report</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <MetricSelector
            selectedMetric={metric}
            onMetricChange={setMetric}
          />
          <DeviceSelector
            selectedDevice={device}
            onDeviceChange={setDevice}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {loading ? (
            <div className="h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="h-[400px] flex items-center justify-center text-red-500">
              {error}
            </div>
          ) : (
            <MetricsGraph data={data} metricType={metric} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
