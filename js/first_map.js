var map = L.map('map').setView([45.731402, 11.329783], 3.78);

L.tileLayer('https://api.mapbox.com/styles/v1/gvelasquezneira/cm3rtcbxu001l01ql4tg50jq2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3ZlbGFzcXVlem5laXJhIiwiYSI6ImNtM3E4MjFuYTBtZzAybG9hN3dsaW5wNGIifQ.fa1AyQBlhc3wA__mrYUF0w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([40.419, -3.695]).addTo(map).bindPopup("This is the first country in Europe I visited.");
let marker2 = L.marker([38.7223, -9.139]).addTo(map);
let marker3 = L.marker([48.857922, 2.331240]).addTo(map);
let marker4 = L.marker([51.5072, -0.1276]).addTo(map);
let marker5 = L.marker([52.5200, 13.4050]).addTo(map);
let marker6 = L.marker([43.7700, 11.2577]).addTo(map);
let marker7 = L.marker([47.3769, 8.5417]).addTo(map);
let marker8 = L.marker([48.2081, 16.3713]).addTo(map);
let marker9 = L.marker([53.3498, 6.2603]).addTo(map);

marker1.openPopup();