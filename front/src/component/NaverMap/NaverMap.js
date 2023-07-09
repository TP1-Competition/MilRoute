import { useEffect, useRef } from 'react';

const NaverMap=(props)=>{
    const mapElement = useRef(null);

    useEffect(() => {
      const { naver } = window;
      if (!mapElement.current || !naver) return;
      // const tm128 = new naver.maps.Point(props.mapx, props.mapy);
      // const location = naver.maps.TransCoord.fromTM128ToLatLng(tm128);

      const location = new naver.maps.LatLng(props.mapy, props.mapx);
      //네이버 지도 옵션 선택
      const mapOptions = {
        center: location,
        zoom: props.zoom,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      //지도상에 핀 표시 할 부분
      for(let i =0; i<props.curlength; i++){

        // const xy128 = new naver.maps.Point(props.curlocal[0][i].x, props.curlocal[0][i].y);
        // const location2 = naver.maps.TransCoord.fromTM128ToLatLng(xy128);
        const location = new naver.maps.LatLng(props.curlocal[0][i].y, props.curlocal[0][i].x);
        const marker = new naver.maps.Marker({
          position: location,
          title:props.curlocal[0][i].id,
          map: map,
        });
  
  naver.maps.Event.addListener(marker, "click", function(e) {
    let real = props.curlocal[0].filter(el=>(el.id===e.overlay.title))
    props.setCurrent(real[0].road_address_name||real[0].address_name)
    

    function plusPlace() {
      //색깔 변하기 
      props.setSecondNum(true);
      setTimeout(()=>props.setSecondNum(false),2000)
      props.setSelectPlace(el => [...el, real[0].place_name])
      // props.setSelectPlace(el => console.lo)
      props.setServerData(el=>[...el,real[0]])
      
  }

    let iwContent = document.createElement("div")
    iwContent.style.cssText  ='padding:1%;display:flex;align-items: center;justify-content: center;border-radius:10px; background-color:white; width:150px;height:190px;border-radius:10px; border:1px solid #A49E9E;' 

    let hr = document.createElement("hr")
    hr.style.cssText='border: 0.5px solid #A49E9E'


    let iwContent2 = document.createElement("div")
    iwContent2.style.cssText ='width:95%;position:relative;height:180px;'


    let wapper = document.createElement("div")
    wapper.style.cssText =''

    let companyName = document.createElement("h3")
    companyName.textContent = `${real[0].place_name}`
    companyName.style.cssText ='margin:0; width:100%;font-size:13px'

    let cate = document.createElement("p")
    cate.textContent = `${real[0].category_group_name}`
    cate.style.cssText ='margin:2%;font-size:13px'

    let time = document.createElement("p")
    time.textContent = `${real[0].road_address_name||real[0].address_name}`
    time.style.cssText ='margin:2%; width:100%;font-size:13px'

    let time2 = document.createElement("p")
    time2.textContent = `${real[0].phone}`
    time2.style.cssText ='margin:2%;font-size:13px'

    let monthlyWage = document.createElement("a")
    monthlyWage.setAttribute("href", `${real[0].place_url}`);
    monthlyWage.textContent=`홈페이지 이동`;
    monthlyWage.style.cssText='font-size:13px;max-width:100px'

    let iwContent3 = document.createElement("div")
    iwContent3.style.cssText ='width:95%;display:flex;align-items: center;justify-content: right;position:absolute;bottom:0.5px;'

    let btn = document.createElement("button");
    btn.textContent = `장소추가`;
    btn.onclick =  plusPlace;
    btn.style.cssText='width:50%;font-size:11px; border:2px solid #DADADA;margin-top:3%; background-color:white; border-radius:10px; color:#55B586;'
    

    wapper.append(
      companyName,
      cate 
    )

    iwContent3.append(
      btn
    )

    iwContent2.append(
      wapper,
      hr,
      time,
      time2,
      monthlyWage,
      iwContent3
    );

    iwContent.append(
      iwContent2
    )


var infowindow = new naver.maps.InfoWindow({
  borderWidth: 0,
  backgroundColor: 'transparent',
  content: iwContent,
  maxWidth: 300,
  anchorSize: new naver.maps.Size(30, 30),
  anchorSkew: true,
  anchorColor: "white",
  pixelOffset: new naver.maps.Point(20, -20)
});


    if (infowindow.getMap()) {
        infowindow.close();
    }else {
        infowindow.open(map, marker);
    }
});
      }
// eslint-disable-next-line
    }, [props.curlocal, props.mapx, props.mapy,props.curlength,props.zoom]);

    

  return <div ref={mapElement}
  style={{
    height: '100%',
    borderRadius:'10px',
    zIndex: '1'
  }}
   />;
}


export default NaverMap;