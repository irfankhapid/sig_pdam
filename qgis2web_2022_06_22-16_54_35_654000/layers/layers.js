var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> Sedikit<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> Cukup banyak<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> Banyak<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> Sangat Banyak<br />'
        });var format_Pdam_1 = new ol.format.GeoJSON();
var features_Pdam_1 = format_Pdam_1.readFeatures(json_Pdam_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pdam_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pdam_1.addFeatures(features_Pdam_1);var lyr_Pdam_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pdam_1, 
                style: style_Pdam_1,
                title: '<img src="styles/legend/Pdam_1.png" /> Pdam'
            });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);lyr_Pdam_1.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,lyr_Pdam_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Kelurahan': 'Kelurahan', 'Dukuh': 'Dukuh', 'P. PDAM': 'P. PDAM', 'Jml Pndudk': 'Jml Pndudk', });
lyr_Pdam_1.set('fieldAliases', {'Pdam': 'Pdam', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Kelurahan': 'TextEdit', 'Dukuh': 'TextEdit', 'P. PDAM': 'TextEdit', 'Jml Pndudk': 'TextEdit', });
lyr_Pdam_1.set('fieldImages', {'Pdam': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'Provinsi': 'inline label', 'Kelurahan': 'no label', 'Dukuh': 'no label', 'P. PDAM': 'no label', 'Jml Pndudk': 'inline label', });
lyr_Pdam_1.set('fieldLabels', {'Pdam': 'inline label', });
lyr_Pdam_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});