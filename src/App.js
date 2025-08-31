import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    aircraftType: 'Boeing 737-800',
    aircraftWeight: 70000,
    targetAltitude: 35000,
    fuelOnboard: 15000,
    fuelCost: 85,
  });
  const [optimizationResults, setOptimizationResults] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Chart data for Step 3
  const chartData = {
    labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
    datasets: [
      {
        label: 'Standard Climb',
        data: [0, 5000, 10000, 15000, 20000, 25000, 30000, 32000, 33000, 34000, 34500, 34800, 35000],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Optimized Climb',
        data: [0, 6000, 12000, 18000, 24000, 28000, 32000, 34000, 34500, 34800, 34900, 34950, 35000],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: '600',
          },
        },
      },
      title: {
        display: true,
        text: 'Altitude vs Time',
        font: {
          size: 18,
          weight: '700',
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Altitude (ft)',
          font: {
            size: 14,
            weight: '600',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time (minutes)',
          font: {
            size: 14,
            weight: '600',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStartOptimization = () => {
    setCurrentStep(2);
  };

  const handleOptimization = () => {
    setIsOptimizing(true);
    
    // Simulate optimization process with dummy computed values
    setTimeout(() => {
      const results = {
        fuelSaved: Math.round(Math.random() * 500 + 200), // 200-700 kg
        timeToClimb: Math.round(Math.random() * 5 + 2), // 2-7 minutes
        emissionsReduced: Math.round(Math.random() * 15 + 8), // 8-23%
        standardFuel: Math.round(formData.fuelOnboard * 0.15), // 15% of onboard fuel
        optimizedFuel: Math.round(formData.fuelOnboard * 0.12), // 12% of onboard fuel
        standardTime: Math.round(Math.random() * 10 + 15), // 15-25 minutes
        optimizedTime: Math.round(Math.random() * 8 + 12), // 12-20 minutes
        standardEmissions: Math.round(formData.fuelOnboard * 3.15), // 3.15 kg CO2 per kg fuel
        optimizedEmissions: Math.round(formData.fuelOnboard * 2.8), // 2.8 kg CO2 per kg fuel
      };
      
      setOptimizationResults(results);
      setIsOptimizing(false);
      setCurrentStep(3);
    }, 3000);
  };

  const performanceData = optimizationResults ? [
    { 
      metric: 'Fuel Consumption', 
      standard: `${optimizationResults.standardFuel} kg`, 
      optimized: `${optimizationResults.optimizedFuel} kg`, 
      improvement: `${Math.round(((optimizationResults.standardFuel - optimizationResults.optimizedFuel) / optimizationResults.standardFuel) * 100)}%` 
    },
    { 
      metric: 'Time to Climb', 
      standard: `${optimizationResults.standardTime} min`, 
      optimized: `${optimizationResults.optimizedTime} min`, 
      improvement: `${Math.round(((optimizationResults.standardTime - optimizationResults.optimizedTime) / optimizationResults.standardTime) * 100)}%` 
    },
    { 
      metric: 'CO2 Emissions', 
      standard: `${optimizationResults.standardEmissions} kg`, 
      optimized: `${optimizationResults.optimizedEmissions} kg`, 
      improvement: `${Math.round(((optimizationResults.standardEmissions - optimizationResults.optimizedEmissions) / optimizationResults.standardEmissions) * 100)}%` 
    },
  ] : [];

  // Step 1: Landing Page
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-aviation-blue via-aviation-light-blue to-blue-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ✈️ Aircraft Climb Trajectory Optimization
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Optimize your climb profile for maximum efficiency, reduced fuel consumption, and minimal environmental impact
          </p>
          <button
            onClick={handleStartOptimization}
            className="btn-primary text-xl px-8 py-4 bg-white text-aviation-blue hover:bg-gray-100"
          >
            Start Optimization
          </button>
        </div>
      </div>
    );
  }

  // Step 2: Input Form Section
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gray-50 font-aviation">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-aviation-dark mb-2">
                Flight Parameters
              </h2>
              <p className="text-gray-600">
                Enter your aircraft details and flight conditions
              </p>
            </div>

            <div className="card">
              <form onSubmit={(e) => { e.preventDefault(); handleOptimization(); }} className="space-y-6">
                {/* Aircraft Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aircraft Type
                  </label>
                  <select
                    name="aircraftType"
                    value={formData.aircraftType}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="Boeing 737-800">Boeing 737-800</option>
                    <option value="Airbus A320">Airbus A320</option>
                    <option value="Boeing 777-300ER">Boeing 777-300ER</option>
                    <option value="Airbus A350">Airbus A350</option>
                    <option value="Embraer E190">Embraer E190</option>
                    <option value="Boeing 787-9">Boeing 787-9</option>
                  </select>
                </div>

                {/* Aircraft Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aircraft Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="aircraftWeight"
                    value={formData.aircraftWeight}
                    onChange={handleInputChange}
                    className="input-field"
                    min="30000"
                    max="400000"
                    step="1000"
                    required
                  />
                </div>

                {/* Target Altitude */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Altitude (feet)
                  </label>
                  <input
                    type="number"
                    name="targetAltitude"
                    value={formData.targetAltitude}
                    onChange={handleInputChange}
                    className="input-field"
                    min="1000"
                    max="45000"
                    step="1000"
                    required
                  />
                </div>

                {/* Fuel Onboard */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fuel Onboard (kg)
                  </label>
                  <input
                    type="number"
                    name="fuelOnboard"
                    value={formData.fuelOnboard}
                    onChange={handleInputChange}
                    className="input-field"
                    min="1000"
                    max="50000"
                    step="100"
                    required
                  />
                </div>

                {/* Fuel Cost */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fuel Cost (₹/liter)
                  </label>
                  <input
                    type="number"
                    name="fuelCost"
                    value={formData.fuelCost}
                    onChange={handleInputChange}
                    className="input-field"
                    min="50"
                    max="200"
                    step="1"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isOptimizing}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isOptimizing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Running Optimization...</span>
                      </div>
                    ) : (
                      'Run Optimization'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Output Display
  if (currentStep === 3 && optimizationResults) {
    return (
      <div className="min-h-screen bg-gray-50 font-aviation">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-aviation-dark mb-2">
              Optimization Results
            </h2>
            <p className="text-gray-600">
              Your optimized climb trajectory analysis
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="metric-card">
              <div className="text-3xl font-bold">{optimizationResults.fuelSaved} kg</div>
              <div className="text-blue-100 text-lg">Fuel Saved</div>
              <div className="text-green-300 text-sm mt-2">↗ Significant savings</div>
            </div>
            <div className="metric-card">
              <div className="text-3xl font-bold">{optimizationResults.timeToClimb} min</div>
              <div className="text-blue-100 text-lg">Time to Climb</div>
              <div className="text-green-300 text-sm mt-2">↗ Faster ascent</div>
            </div>
            <div className="metric-card">
              <div className="text-3xl font-bold">{optimizationResults.emissionsReduced}%</div>
              <div className="text-blue-100 text-lg">Emissions Reduced</div>
              <div className="text-green-300 text-sm mt-2">↗ Environmental benefit</div>
            </div>
          </div>

          {/* Chart */}
          <div className="card mb-8">
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Performance Comparison Table */}
          <div className="card">
            <h3 className="text-xl font-bold text-aviation-dark mb-4">
              Performance Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Metric</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Standard</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Optimized</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">{row.metric}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.standard}</td>
                      <td className="py-3 px-4 text-center text-success-green font-semibold">{row.optimized}</td>
                      <td className="py-3 px-4 text-center text-success-green font-semibold">{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentStep(1)}
              className="btn-primary bg-gray-600 hover:bg-gray-700"
            >
              Start New Optimization
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App; 