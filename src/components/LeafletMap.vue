<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted, useId, watch } from 'vue';

const { center, zoom } = defineProps(['center', 'zoom']);
const id = 'map-' + useId();
const kodu = [59.44178, 24.79882];
let map;

onMounted(() => {
    map = L.map(id).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.4269, 24.7434]).addTo(map);


    const HomeControl = L.Control.extend({
        onAdd: function() {
            const btn = L.DomUtil.create('button');
            btn.textContent = 'Kodu';
            btn.style.background = 'white';
            btn.style.padding = '5px';
            btn.onclick = () => map.setView(kodu, 16);
            return btn;
        }
    });
    new HomeControl({position: 'topleft'}).addTo(map);
    L.marker(kodu).addTo(map).bindPopup("Kodu");
    const kolmnurk = [
        [kodu[0], kodu[1] + 0.003],
        [kodu[0] - 0.0026, kodu[1] - 0.0015], 
        [kodu[0] + 0.0026, kodu[1] - 0.0015]
    ];
    L.polygon(kolmnurk, {
        color: 'blue',
        fillOpacity: 0.1
    }).addTo(map).bindPopup("Mingi ala");
});

watch(() => center, (center, oldCenter) => {
    map.panTo(center);
});

watch(() => zoom, (zoom) => {
    map.setZoom(zoom);
});
</script>

<template>
    <div :id="id"></div>
</template>

<style scoped>
div {
    height: 90vh;
}
</style>