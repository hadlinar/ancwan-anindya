// import React from 'react'
// import { Row, Col } from 'react-bootstrap'
// import data from '../../../data'
// import './Branch.css'
// import mapboxgl from 'mapbox-gl'
// import { withTranslation } from "react-i18next";

// mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkbGluYSIsImEiOiJja3I4cTVzbmcyNHBsMm5uM3NycXVhbm5yIn0.YflnOZPZMDIMtS9XeAjhZQ';

// class Branch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lng: 117.617216,
//             lat: -1.307473,
//             zoom: 4
//         }

//     }
    

//     componentDidMount() {
//         const map = new mapboxgl.Map({
//             container: this.mapContainer,
//             style: 'mapbox://styles/hadlina/ckr8q6xvv4l0h17qf38zw0gbz',
//             center: [this.state.lng, this.state.lat],
//             zoom: this.state.zoom
//         })

//         map.once('idle', function() {
//             map.resize();
//         })

//         map.on('load', function () {
//             map.addSource('places', {
//                 'type': 'geojson',
//                 'data': {
//                     "type": "FeatureCollection",
//                     "features": [
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 103.607254,-1.609972 ]
//                             },
//                             "properties": {
//                                 "type":"Feature",
//                                 "description":"<div style='text-align:left;'><h5>Jambi</h5><b>Office & Laboratory</b><br/>JI. Abdul Rahman Saleh No. 8<br/>Kel. The Hok, Kec. Jambi Selatan<br/>Jambi 36138<br/>(+62 741) 572805</div>",
//                                 "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 104.756554,-2.990934 ]
//                             },
//                             "properties": {
//                                 "type":"Feature",
//                                 "description":"<div style='text-align:left;'><h5>Palembang</h5><b>Office & Laboratory</b><br/>Komp. Pergudangan Sukarame Blok D No. 9<br/>JI. Tembus Terminal<br/>Kel Talang Kelapa, Kec. Alang-Alang Lebar<br/>Palembang, Sumatera Selatan 30151</div>",
//                                 "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 106.816666,-6.200000 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Jakarta</h5><b>Headquarter</b><br/>Springhill Office Tower 17 th & 18th Floor<br/>Jl. H. Benyamin Suaeb Ruas D7 Block D6<br/>Pademangan Timur, Jakarta Utara 14410<br/>(+62 21) 2260 6207</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 107.15278,-6.26111 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Cikarang</h5><b>Office & Laboratory</b><br/>Kawasan Industri Delta Silikon 3 Lippo Cikarang<br/>Jl. Rotan Blok F 27 No. 23 C<br/>Kel. Cicau, Kec. Cikarang Pusat<br/>Kab. Bekasi, Jawa Barat 17531<div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 107.613144,-6.905977 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Bandung</h5><b>Head Office</b><br/>JI. Buah Batu No. 43 Lt. 2<br/>Kel. Malabar, Kec. Lengkong<br/>Bandung, Jawa Barat 40262<br/>(+62 22) 87346430</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 109.333336,0.000000 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Pontianak</h5><b>Office & Laboratory</b><br/>Office & Laboratory<br/>JI. Arteri Supadio Gg. Anyar RT 07 RW 10<br/>Desa Arang Limbung, Kec. Sungai Raya<br/>Pontianak, Kalimantan Barat 78391</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 114.810318,-3.457242 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Banjarbaru</h5><b>Office</b><br/>Jl. Ahmad Yani KM 22.7 RT 02/RW 01<br/>Kel. Landasan Ulin Tengah, Kec. Liang Anggang<br/>Banjarbaru, Kalimantan Selatan 70722<br/><br/><b>Laboratory</b><br/>Jl. Ahmad Yani KM 21 RT 02/RW 02<br/>Kel. Landasan Ulin Tengah, Kec. Liang Anggang<br/>Banjarbaru, Kalimantan Selatan 70722<br/>(+62 511)4706093</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 116.000519,-3.025327 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Batulicin</h5><b>Office & Laboratory</b><br/>JI. Transmigrasi KM 3,5<br/>Kel. Barokah, Kec. Simpang Empat Batulicin<br/>Kab. Tanah Bumbu, Kalimantan Selatan 72213<br/>(+62 518) 75638</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 122.514900,-3.972201 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Kendari</h5><b>Office & Laboratory</b><br/>JI. Poros Bandara Haluoleo<br/>Desa Onewila, Kec. Ranomeeto<br/>Kab. Konawe Selatan, Sulawesi Tenggara 93372</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 115.153343,-2.111096 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Tamiang Layang</h5><b>Office</b><br/>JI. Tumpa Dayu RT 11<br/>Desa Tamiang Layang, Kec. Dusun Timur<br/>Kab. Barito Timur, Kalimantan Tengah 73617<br/>(+62 526) 2091361</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 117.092110,-0.514462 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Samarinda</h5><b>Office & Laboratory</b><br/>JI. KH. Harun Nafsi No. 56<br/>Kel. Rapak Dalam, Kec. Loa Janan llir<br/>Samarinda, Kalimantan Timur 75131<br/>Phone: (+62 541) 7269686<br/>Fax: (+62 541) 7269705</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 116.702492,1.846291 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Berau</h5><b>Office & Laboratory</b><br/>JI. H.A.R.M Ayoeb RT 13 Gg. Rahmad No. 2<br/>Kel. Gunung Tabur, Kec. Gunung Tabur<br/>Kab. Berau, Kalimantan Timur 77352</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 117.59152,3.31332 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Tarakan</h5><b>Office</b><br/>JI. Flamboyan No. 57 RT 27<br/>Kel. Karang Anyar, Kec. Tarakan Barat<br/>Tarakan, Kalimantan Utara 77111<br/>(+62 511) 25210</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 116.5610, 0.3016 ]
//                             },
//                             "properties": {
//                             "type":"Feature",
//                             "description":"<div style='text-align:left;'><h5>Bara Tambang</h5><b>Office</b><br/>Senyiur KM 00 Jetty PT Bayan Resources Tbk<br/>Desa Senyiur, Kec. Muara Ancalong<br/>Kab. Kutai Timur, Kalimantan Timur 75656</div>",
//                             "geometry_type":"Point"
//                             }
//                         },
//                         {
//                             "type": "Feature",
//                             "geometry": {
//                                 "type": "Point",
//                                 "coordinates":  [ 104.030457,1.082828 ]
//                             },
//                             "properties": {
//                                 "type":"Feature",
//                                 "description":"<div style='text-align:left;'><h5>Batam</h5><b>Office</b><br/>Taman Golf Residence II Blok R1 No. 32<br/>Kel. Sukajadi, Kec. Batam Kota<br/>Batam, Kepulauan Riau 29444</div>",
//                                 "geometry_type":"Point"
//                             }
//                         }
//                     ]
//                  }
//             });

//             map.addLayer({
//                 'id': 'places',
//                 'type': 'circle',
//                 'source': 'places',
//                 'paint': {
//                     'circle-color': '#F4DD6D',
//                     'circle-radius': 8,
//                     'circle-stroke-width': 2,
//                     'circle-stroke-color': '#ffffff'
//                 }
//             });

//             var popup = new mapboxgl.Popup({
//                 closeButton: false,
//                 closeOnClick: false,
//                 className: 'popups'
//             });

//             map.on('mouseenter', 'places', function (e) {
//                 map.getCanvas().style.cursor = 'pointer';
                 
//                 var coordinates = e.features[0].geometry.coordinates.slice();
//                 var description = e.features[0].properties.description;
                 
//                 while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//                 coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//                 }
                 
//                 popup.setLngLat(coordinates)
//                     .setHTML(description)
//                     .addTo(map);
//                 });
                 
//                 map.on('mouseleave', 'places', function () {
//                 map.getCanvas().style.cursor = '';
//                 popup.remove();
//             });

//         });
//     }

//     render() {
//         return (
//             <>
//                 <div  style={{margin: "auto", alignContent: "center"}}>
//                     <Row>
//                         <div className="map-wrapper">
//                             <div id="map" ref={el => this.mapContainer = el}/>
//                         </div>
//                     </Row>
//                     <Row md={3} className="list-branch">
//                         { Array.from(data.branches, (e, i) => {
//                             return (
//                                 <Col className="col-list-branch">
//                                     <div>
//                                         <div className="title-branch">{this.props.t(`branches_our_company.${i}.location`)}</div>
//                                     </div>
//                                     <div>
//                                         <div className="type-branch">{this.props.t(`branches_our_company.${i}.type`)}</div>
//                                     </div>
//                                     <div className="address-branch">
//                                         {
//                                             Array.from(e.address, (item, id) => {
//                                             return (
//                                                 <div>
//                                                     {this.props.t(`branches_our_company.${i}.address.${id}.name`)} <br/>
//                                                     {this.props.t(`branches_our_company.${i}.address.${id}.district`)} <br/>
//                                                     {this.props.t(`branches_our_company.${i}.address.${id}.province`)} <br/>
//                                                     {this.props.t(`branches_our_company.${i}.address.${id}.phone`)}
//                                                 </div>
//                                             )
//                                         })}
//                                     </div>
//                                 </Col>
//                             )
//                         })}
//                     </Row>
//                 </div>
//             </>
//         )
//     }
// }

// export default withTranslation() (Branch)


import React, { useState, useRef, useEffect } from 'react'
import './Branch.css'
import { Row, Col } from 'react-bootstrap'
import VisibilitySensor from 'react-visibility-sensor'
import MapsImg from '../../../images/branches-map.png'
import { useTranslation } from "react-i18next"
import data from '../../../data'

function Branch() {
    const [focus, setFocus] = useState(false)
    const [mobile, setMobile] = useState(false)
    const { t } = useTranslation()


    const canvasRef = useRef(null)
    const [context, setContext] = useState(null)
    const [canvasImg, setImage] = useState(null)
    
    useEffect(() => {
        mobileVer();
    }, [])

    const mobileVer = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', mobileVer);

    
    useEffect(() => {
        if(canvasRef.current) {
            const canvasImg = document.getElementById('canvas')
            const ctx = canvasRef.current.getContext('2d')

            if(ctx) {
                setContext(ctx)
                setImage(canvasImg)
            }
        }
        
        var background = new Image()
        background.src = MapsImg
        
        if(context && canvasImg) {

            background.onload = function() {
                canvasImg.width = background.width
                canvasImg.height = background.height
                context.drawImage(background, 0, 0)
            }

            function animatePathDrawing(ctx) {
                var start = null;
                
                var step = function animatePathDrawingStep(timestamp) {
                    if (start === null)
                        start = timestamp;
                    
                    var delta = timestamp - start,
                        progress = Math.min(delta / 900, 1);
                    drawBezierSplit(ctx, 599.15625, 715, 590.15625, 472, 466.15625, 357, 0, progress) //batam
                    drawBezierSplit(ctx, 599.15625, 715, 504.15625, 563, 504.15625, 563, 0, progress) //palembang
                    drawBezierSplit(ctx, 599.15625, 715, 570.15625, 542, 446.15625, 492, 0, progress) //jambi
                    drawBezierSplit(ctx, 599.15625, 715, 615.15625, 721, 616.15625, 721, 0, progress) //cikarang
                    drawBezierSplit(ctx, 599.15625, 715, 640.15625, 755, 640.15625, 755, 0, progress) //bandung
                    drawBezierSplit(ctx, 599.15625, 715, 1393.15625, 608, 1393.15625, 608, 0, progress) //kendari
                    drawBezierSplit(ctx, 599.15625, 715, 1004.75625, 585, 1004.75625, 585, 0, progress) //banjarbaru
                    drawBezierSplit(ctx, 599.15625, 715, 800.75625, 580, 1060.75625, 559, 0, progress) //batulicin
                    drawBezierSplit(ctx, 599.15625, 715, 780.75625, 570, 1017.75625, 514, 0, progress) //tamiang layang
                    drawBezierSplit(ctx, 599.15625, 715, 784.75625, 558, 1118.75625, 434, 0, progress) //samarinda
                    drawBezierSplit(ctx, 599.15625, 715, 784.75625, 558, 1095.75625, 378, 0, progress) //bara tabang
                    drawBezierSplit(ctx, 599.15625, 715, 784.75625, 558, 1099.75625, 315, 0, progress) //berau
                    drawBezierSplit(ctx, 599.15625, 715, 1144.75625, 241, 1144.75625, 241, 0, progress) //tarakan
                    drawBezierSplit(ctx, 599.15625, 715, 729.75625, 412, 729.75625, 412, 0, progress) //bara tabang
                    
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                
                window.requestAnimationFrame(step);
            }
            
            function lerp(v0, v1, t) {
                return ( 1.0 - t ) * v0 + t * v1;
            }
            
            function drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, t0, t1) {
                ctx.beginPath();
                
                if( 0.0 === t0 && t1 === 1.0 ) {
                    ctx.moveTo( x0, y0 );
                    ctx.quadraticCurveTo( x1, y1, x2, y2 );
                } else if( t0 !== t1 ) {
                    var t00 = t0 * t0,
                        t01 = 1.0 - t0,
                        t02 = t01 * t01,
                        t03 = 2.0 * t0 * t01;
                    
                    var nx0 = t02 * x0 + t03 * x1 + t00 * x2,
                        ny0 = t02 * y0 + t03 * y1 + t00 * y2;
                    
                    t00 = t1 * t1;
                    t01 = 1.0 - t1;
                    t02 = t01 * t01;
                    t03 = 2.0 * t1 * t01;
                    
                    var nx2 = t02 * x0 + t03 * x1 + t00 * x2,
                        ny2 = t02 * y0 + t03 * y1 + t00 * y2;
                    
                    var nx1 = lerp ( lerp ( x0 , x1 , t0 ) , lerp ( x1 , x2 , t0 ) , t1 ),
                        ny1 = lerp ( lerp ( y0 , y1 , t0 ) , lerp ( y1 , y2 , t0 ) , t1 );
                    
                    ctx.moveTo( nx0, ny0 );
                    ctx.quadraticCurveTo( nx1, ny1, nx2, ny2 );
                }
                
                ctx.stroke();
                ctx.closePath();
            }

            if(window.scrollY > 286) {
                animatePathDrawing(context);
            }
        }
    })

    return (
        <>
            <div  style={{margin: "auto", alignContent: "center"}}>
                {
                    mobile ? <div/> :
                    <Row className="maps">
                        <VisibilitySensor
                            onChange={(isVisible) => {
                                setFocus(isVisible)
                            }}
                        >
                            <canvas id='canvas' ref={canvasRef}/>
                        </VisibilitySensor>
                    </Row>
                }
                <Row md={3} className="list-branch">
                    { Array.from(data.branches, (e, i) => {
                        return (
                            <Col className="col-list-branch">
                                <div>
                                    <div className="title-branch">{t(`branches_our_company.${i}.location`)}</div>
                                </div>
                                <div>
                                    <div className="type-branch">{t(`branches_our_company.${i}.type`)}</div>
                                </div>
                                <div className="address-branch">
                                    {
                                        Array.from(e.address, (item, id) => {
                                        return (
                                            <div>
                                                {t(`branches_our_company.${i}.address.${id}.name`)} <br/>
                                                {t(`branches_our_company.${i}.address.${id}.district`)} <br/>
                                                {t(`branches_our_company.${i}.address.${id}.province`)} <br/>
                                                {t(`branches_our_company.${i}.address.${id}.phone`)}
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default Branch