var ctx = document.getElementById('Migrafica').getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('botoncochino')
    boton.addEventListener('click', () => {
        const labels = document.getElementById('labels')
        const data = document.getElementById('data')

        const listaLabels = labels.value.split(',')
        const listaData = data.value.split(',')

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: listaLabels,
                datasets: [{
                    label: 'Domesticos',
                    data: listaData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(28, 27, 23, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(28, 27, 23, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 2
                }]
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

