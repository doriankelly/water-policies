import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Importar solo el módulo Chart desde la carpeta 'dist'

// Resto del código del componente...


export const Graphic = () => {
  const chartRef = useRef(null);

  useEffect(() => {

    const fetchData = async () => {
        try {
          const response = await fetch('../../../graphic.json');
          const jsonData = await response.json();
          console.log('Datos cargados:', jsonData);
          // Realiza las operaciones necesarias con los datos cargados

          if (chartRef.current) {
                  const ctx = chartRef.current.getContext('2d');
                  const fechas = Object.values(jsonData.Fecha);
                  const aguaEmbalsada = Object.values(jsonData['Agua embalsada']);
                  const status = Object.values(jsonData.Status);
        
                  const realData = [];
                  const predData = [];
                  for (let i = 0; i < status.length; i++) {
                    if (status[i] === 'Real') {
                      realData.push(aguaEmbalsada[i]);
                      predData.push(null);
                    } else {
                      realData.push(null);
                      predData.push(aguaEmbalsada[i]);
                    }
                  }
        
                  new Chart(ctx, {
                    type: 'line',
                    data: {
                      labels: fechas,
                      datasets: [
                        {
                          label: 'Agua embalsada (Real)',
                          data: realData,
                          backgroundColor: 'rgba(255, 0, 0, 0.5)',
                          borderColor: 'red',
                          fill: false
                        },
                        {
                          label: 'Agua embalsada (Pred)',
                          data: predData,
                          backgroundColor: 'rgba(0, 0, 255, 0.5)',
                          borderColor: 'blue',
                          fill: false
                        }
                      ]
                    },
                    options: {
                      responsive: true,
                      scales: {
                        x: {
                          display: true,
                          title: {
                            display: true,
                            text: 'Fecha'
                          }
                        },
                        y: {
                          display: true,
                          title: {
                            display: true,
                            text: 'Agua embalsada'
                          }
                        }
                      }
                    }
                  });
                }




        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      };
    fetchData();
  }, []);

  return <canvas ref={chartRef} />;
};


