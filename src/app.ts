import { data } from './data.js';
import { Serie } from './Serie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedioTbody: HTMLElement = document.getElementById('promedio')!;
let totalSeasons: number = 0;

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <th>${serie.id}</th>
            <td class="text-primary"><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        
        seriesTbody.appendChild(trElement);
        totalSeasons += serie.seasons;
    });

    const promedio = totalSeasons / series.length;
    promedioTbody.innerHTML = `Promedio de temporadas: ${promedio.toFixed(2)}`;
}

renderSeriesInTable(data);
