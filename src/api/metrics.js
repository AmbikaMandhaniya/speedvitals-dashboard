const API_BASE = 'https://example-metrics.speedvitals.workers.dev';

export async function fetchMetrics(metric, device) {
  try {
    const response = await fetch(`${API_BASE}/?metric=${metric}&device=${device}`);
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${metric} metrics:`, error);
    throw error;
  }
}
