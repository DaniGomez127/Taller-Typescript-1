import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioTbody = document.getElementById('promedio');
var totalSeasons = 0;
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <th>".concat(serie.id, "</th>\n            <td class=\"text-primary\"><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        totalSeasons += serie.seasons;
    });
    var promedio = totalSeasons / series.length;
    promedioTbody.innerHTML = "Promedio de temporadas: ".concat(promedio.toFixed(2));
}
renderSeriesInTable(data);
