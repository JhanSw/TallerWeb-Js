var ctx = document.getElementById('Migrafica').getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('botonmain')
    boton.addEventListener('click', () => {
        const labels = document.getElementById('labels')
        const data = document.getElementById('data')

        const listaLabels = labels.value.split(',')
        const listaData = data.value.split(',')

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: listaLabels,
                datasets: [{
                    label: 'Datos',
                    data: listaData,
                    backgroundColor: [
                        'rgba(21, 67, 96, 0.7)',
                        'rgba(120, 40, 31, 0.7)',
                        'rgba(28, 27, 23, 0.5)'
                        
                    ],
                    borderColor: [
                        'rgba(21, 67, 96, 1)',
                        'rgba(120, 40, 31, 1)',
                        'rgba(28, 27, 23, 1)'
                    ],
                    borderWidth: 2
                    
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
})

