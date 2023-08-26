var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEMARCACIONES_HIDROGRAFICAS_050K_A_1 = new ol.format.GeoJSON();
var features_DEMARCACIONES_HIDROGRAFICAS_050K_A_1 = format_DEMARCACIONES_HIDROGRAFICAS_050K_A_1.readFeatures(json_DEMARCACIONES_HIDROGRAFICAS_050K_A_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMARCACIONES_HIDROGRAFICAS_050K_A_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEMARCACIONES_HIDROGRAFICAS_050K_A_1.addFeatures(features_DEMARCACIONES_HIDROGRAFICAS_050K_A_1);
var lyr_DEMARCACIONES_HIDROGRAFICAS_050K_A_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEMARCACIONES_HIDROGRAFICAS_050K_A_1, 
                style: style_DEMARCACIONES_HIDROGRAFICAS_050K_A_1,
                interactive: true,
    title: 'DEMARCACIONES_HIDROGRAFICAS_050K_A<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_0.png" /> ESMERALDAS<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_1.png" /> GUAYAS<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_2.png" /> JUBONES<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_3.png" /> MANABÍ<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_4.png" /> MIRA<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_5.png" /> NAPO<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_6.png" /> PASTAZA<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_7.png" /> PUYANGO-CATAMAYO<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_8.png" /> SANTIAGO<br />\
    <img src="styles/legend/DEMARCACIONES_HIDROGRAFICAS_050K_A_1_9.png" /> <br />'
        });
var format_CDA_2016_2 = new ol.format.GeoJSON();
var features_CDA_2016_2 = format_CDA_2016_2.readFeatures(json_CDA_2016_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDA_2016_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDA_2016_2.addFeatures(features_CDA_2016_2);
var lyr_CDA_2016_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CDA_2016_2, 
                style: style_CDA_2016_2,
                interactive: true,
                title: '<img src="styles/legend/CDA_2016_2.png" /> CDA_2016'
            });
var format_CDA_2017_3 = new ol.format.GeoJSON();
var features_CDA_2017_3 = format_CDA_2017_3.readFeatures(json_CDA_2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDA_2017_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDA_2017_3.addFeatures(features_CDA_2017_3);
var lyr_CDA_2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CDA_2017_3, 
                style: style_CDA_2017_3,
                interactive: true,
                title: '<img src="styles/legend/CDA_2017_3.png" /> CDA_2017'
            });
var format_CDA_2018_4 = new ol.format.GeoJSON();
var features_CDA_2018_4 = format_CDA_2018_4.readFeatures(json_CDA_2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDA_2018_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDA_2018_4.addFeatures(features_CDA_2018_4);
var lyr_CDA_2018_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CDA_2018_4, 
                style: style_CDA_2018_4,
                interactive: true,
                title: '<img src="styles/legend/CDA_2018_4.png" /> CDA_2018'
            });
var format_CDA_2019_5 = new ol.format.GeoJSON();
var features_CDA_2019_5 = format_CDA_2019_5.readFeatures(json_CDA_2019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDA_2019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDA_2019_5.addFeatures(features_CDA_2019_5);
var lyr_CDA_2019_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CDA_2019_5, 
                style: style_CDA_2019_5,
                interactive: true,
                title: '<img src="styles/legend/CDA_2019_5.png" /> CDA_2019'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DEMARCACIONES_HIDROGRAFICAS_050K_A_1.setVisible(true);lyr_CDA_2016_2.setVisible(true);lyr_CDA_2017_3.setVisible(true);lyr_CDA_2018_4.setVisible(true);lyr_CDA_2019_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DEMARCACIONES_HIDROGRAFICAS_050K_A_1,lyr_CDA_2016_2,lyr_CDA_2017_3,lyr_CDA_2018_4,lyr_CDA_2019_5];
lyr_DEMARCACIONES_HIDROGRAFICAS_050K_A_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMBRE_DH': 'NOMBRE_DH', 'CODIGO_DH': 'CODIGO_DH', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_CDA_2016_2.set('fieldAliases', {'CDA': 'CDA', 'TRAM_ADMI': 'TRAM_ADMI', 'DHNOM': 'DHNOM', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_DESLOC': 'DPA_DESLOC', 'X_CERT': 'X_CERT', 'Y_CERT': 'Y_CERT', 'Z_CERT': 'Z_CERT', 'FTE_CERT': 'FTE_CERT', 'TIPO_FTE_C': 'TIPO_FTE_C', 'DESTI_CERT': 'DESTI_CERT', 'ESTADO': 'ESTADO', 'ANIO': 'ANIO', });
lyr_CDA_2017_3.set('fieldAliases', {'CDA': 'CDA', 'TRAM_ADMI': 'TRAM_ADMI', 'INST_SOLI': 'INST_SOLI', 'DHNOM': 'DHNOM', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_DESLOC': 'DPA_DESLOC', 'X_CERT': 'X_CERT', 'Y_CERT': 'Y_CERT', 'Z_CERT': 'Z_CERT', 'FTE_CERT': 'FTE_CERT', 'TIPO_FTE_C': 'TIPO_FTE_C', 'DESTI_CERT': 'DESTI_CERT', 'ESTADO': 'ESTADO', 'ANIO': 'ANIO', });
lyr_CDA_2018_4.set('fieldAliases', {'CDA': 'CDA', 'TRAM_ADMI': 'TRAM_ADMI', 'INST_SOLI': 'INST_SOLI', 'DHNOM': 'DHNOM', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_DESLOC': 'DPA_DESLOC', 'X_CERT': 'X_CERT', 'Y_CERT': 'Y_CERT', 'Z_CERT': 'Z_CERT', 'FTE_CERT': 'FTE_CERT', 'TIPO_FTE_C': 'TIPO_FTE_C', 'DESTI_CERT': 'DESTI_CERT', 'ESTADO': 'ESTADO', 'ANIO': 'ANIO', });
lyr_CDA_2019_5.set('fieldAliases', {'CDA': 'CDA', 'TRAM_ADMI': 'TRAM_ADMI', 'DHNOM': 'DHNOM', 'INST_SOLI': 'INST_SOLI', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_DESLOC': 'DPA_DESLOC', 'X_CERT': 'X_CERT', 'Y_CERT': 'Y_CERT', 'Z_CERT': 'Z_CERT', 'FTE_CERT': 'FTE_CERT', 'TIPO_FTE_C': 'TIPO_FTE_C', 'DESTI_CERT': 'DESTI_CERT', 'ESTADO': 'ESTADO', 'ANIO': 'ANIO', });
lyr_DEMARCACIONES_HIDROGRAFICAS_050K_A_1.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'NOMBRE_DH': 'TextEdit', 'CODIGO_DH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_CDA_2016_2.set('fieldImages', {'CDA': 'TextEdit', 'TRAM_ADMI': 'TextEdit', 'DHNOM': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_DESLOC': 'TextEdit', 'X_CERT': 'TextEdit', 'Y_CERT': 'TextEdit', 'Z_CERT': 'TextEdit', 'FTE_CERT': 'TextEdit', 'TIPO_FTE_C': 'TextEdit', 'DESTI_CERT': 'TextEdit', 'ESTADO': 'TextEdit', 'ANIO': 'TextEdit', });
lyr_CDA_2017_3.set('fieldImages', {'CDA': 'TextEdit', 'TRAM_ADMI': 'TextEdit', 'INST_SOLI': 'TextEdit', 'DHNOM': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_DESLOC': 'TextEdit', 'X_CERT': 'TextEdit', 'Y_CERT': 'TextEdit', 'Z_CERT': 'TextEdit', 'FTE_CERT': 'TextEdit', 'TIPO_FTE_C': 'TextEdit', 'DESTI_CERT': 'TextEdit', 'ESTADO': 'TextEdit', 'ANIO': 'TextEdit', });
lyr_CDA_2018_4.set('fieldImages', {'CDA': 'TextEdit', 'TRAM_ADMI': 'TextEdit', 'INST_SOLI': 'TextEdit', 'DHNOM': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_DESLOC': 'TextEdit', 'X_CERT': 'TextEdit', 'Y_CERT': 'TextEdit', 'Z_CERT': 'TextEdit', 'FTE_CERT': 'TextEdit', 'TIPO_FTE_C': 'TextEdit', 'DESTI_CERT': 'TextEdit', 'ESTADO': 'TextEdit', 'ANIO': 'TextEdit', });
lyr_CDA_2019_5.set('fieldImages', {'CDA': 'TextEdit', 'TRAM_ADMI': 'TextEdit', 'DHNOM': 'TextEdit', 'INST_SOLI': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_DESLOC': 'TextEdit', 'X_CERT': 'TextEdit', 'Y_CERT': 'TextEdit', 'Z_CERT': 'TextEdit', 'FTE_CERT': 'TextEdit', 'TIPO_FTE_C': 'TextEdit', 'DESTI_CERT': 'TextEdit', 'ESTADO': 'TextEdit', 'ANIO': 'TextEdit', });
lyr_DEMARCACIONES_HIDROGRAFICAS_050K_A_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOMBRE_DH': 'no label', 'CODIGO_DH': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_CDA_2016_2.set('fieldLabels', {'CDA': 'no label', 'TRAM_ADMI': 'no label', 'DHNOM': 'no label', 'DPA_DESPRO': 'no label', 'DPA_DESCAN': 'no label', 'DPA_DESPAR': 'no label', 'DPA_DESLOC': 'no label', 'X_CERT': 'no label', 'Y_CERT': 'no label', 'Z_CERT': 'no label', 'FTE_CERT': 'no label', 'TIPO_FTE_C': 'no label', 'DESTI_CERT': 'no label', 'ESTADO': 'no label', 'ANIO': 'no label', });
lyr_CDA_2017_3.set('fieldLabels', {'CDA': 'no label', 'TRAM_ADMI': 'no label', 'INST_SOLI': 'no label', 'DHNOM': 'no label', 'DPA_DESPRO': 'no label', 'DPA_DESCAN': 'no label', 'DPA_DESPAR': 'no label', 'DPA_DESLOC': 'no label', 'X_CERT': 'no label', 'Y_CERT': 'no label', 'Z_CERT': 'no label', 'FTE_CERT': 'no label', 'TIPO_FTE_C': 'no label', 'DESTI_CERT': 'no label', 'ESTADO': 'no label', 'ANIO': 'no label', });
lyr_CDA_2018_4.set('fieldLabels', {'CDA': 'no label', 'TRAM_ADMI': 'no label', 'INST_SOLI': 'no label', 'DHNOM': 'no label', 'DPA_DESPRO': 'no label', 'DPA_DESCAN': 'no label', 'DPA_DESPAR': 'no label', 'DPA_DESLOC': 'no label', 'X_CERT': 'no label', 'Y_CERT': 'no label', 'Z_CERT': 'no label', 'FTE_CERT': 'no label', 'TIPO_FTE_C': 'no label', 'DESTI_CERT': 'no label', 'ESTADO': 'no label', 'ANIO': 'no label', });
lyr_CDA_2019_5.set('fieldLabels', {'CDA': 'no label', 'TRAM_ADMI': 'no label', 'DHNOM': 'no label', 'INST_SOLI': 'no label', 'DPA_DESPRO': 'no label', 'DPA_DESCAN': 'no label', 'DPA_DESPAR': 'no label', 'DPA_DESLOC': 'no label', 'X_CERT': 'no label', 'Y_CERT': 'no label', 'Z_CERT': 'no label', 'FTE_CERT': 'no label', 'TIPO_FTE_C': 'no label', 'DESTI_CERT': 'no label', 'ESTADO': 'no label', 'ANIO': 'no label', });
lyr_CDA_2019_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});