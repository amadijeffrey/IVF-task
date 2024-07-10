import React, { useState, useCallback, useRef, useEffect } from "react";
import Chart from "chart.js/auto"; 
import { useGetServiceUsageQuery, useGetAllServicesUsageQuery } from "../../../redux/services/dashboardQueries";

const DoughnutChart = () => {
  const [service, setService] = useState("appointment");
  const [interval, setInterval] = useState("week");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { data: serviceUsage } = useGetServiceUsageQuery({ service, interval });
  const { data: allServicesUsage } = useGetAllServicesUsageQuery({ interval });
  const chartData = [
    allServicesUsage?.data?.medicationCount || 0,
    allServicesUsage?.data?.appointmentCount || 0,
    allServicesUsage?.data?.ambulanceTripCount || 0,
  ];

  const serviceMap = {
    medication_service: {
      cost: "medicationCost", 
      count: "medicationCount",
      users: "medicationUsers"
     },
    appointment: {
      cost: "appointmentCost",
      count: "appointmentCount",
      users: "appointmentUsers"
    },
    ambulance_trip: {
      cost: "ambulanceTripCost",
      count: "ambulanceTripCost",
      users: "ambulanceTripUsers"
    },
  };

  const handleSelectedService = useCallback((index) => {
    const serviceMap = {
      0: "medication_service",
      1: "appointment",
      2: "ambulance_trip",
    };

    if (serviceMap.hasOwnProperty(index)) {
      setService(serviceMap[index]);
    }
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Ongoing", "Completed", "Cancelled"],
          datasets: [
            {
              data: [60, 35, 22],
              backgroundColor: ["#140882", "#ffaac9", "#aba2f6"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "70%",
          plugins: {
            legend: {
              display: true,
              position: "right",
              labels: {
                color: "#333",
                usePointStyle: true,
                boxWidth: 10,
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          events: ["click"],
          onClick: (event, elements) => {
            if (elements.length) {
              handleSelectedService(elements[0].index);
            }
          },
        },
      });

      if (chartInstance.current) {
        chartInstance.current.tooltip.setActiveElements(
          [{ datasetIndex: 0, index: service === 'appointment' ? 1 : service === 'medication_service' ? 0 : 2 }],
          { x: 0, y: 0 }
        );
        chartInstance.current.update();
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [allServicesUsage]);

  return (
    <>
      <div
        className={`bg-white w-full`}
      >
       <p className="text-primary text-xl font-bold">
            Treatment Overview
          </p>
        <div className="h-[80%] w-full p-[24px]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </>
  );
};

export default DoughnutChart;
