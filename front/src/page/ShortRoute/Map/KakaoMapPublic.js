import React, { useRef, useEffect } from 'react';
import axios from 'axios';

const PMap = ({ data, active }) => {
  const container = useRef(null);
  
  const activeData = data.paths[active];
  const activeMapObj = activeData.mapObj;
  const startX = activeData.startPlaceX;
  const startY = activeData.startPlaceY;
  const endX = activeData.endPlaceX;
  const endY = activeData.endPlaceY;

  const drawMarker = (kakao, map) => {
    const positions = [
      {
        title: '출발지점',
        latlng: new kakao.maps.LatLng(startY, startX),
      },
      {
        title: '도착지점',
        latlng: new kakao.maps.LatLng(endY, endX),
      },
    ];

    const imageSrc = '/Img/marker.png';

    positions.forEach((pos) => {
      const imageSize = new kakao.maps.Size(30, 35);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // eslint-disable-next-line
      const marker = new kakao.maps.Marker({
        map: map,
        position: pos.latlng,
        title: pos.title,
        image: markerImage,
      });
    });
  };

  const drawPolyLine = (graphPos, kakao) => {
    let pathPoint = graphPos.map((pos) => {
      return new kakao.maps.LatLng(pos.y, pos.x);
    });

    let polyline = new kakao.maps.Polyline({
      path: pathPoint,
      strokeWeight: 3,
      strokeColor: 'red',
      strokeOpacity: 1,
      strokeStyle: 'solid',
    });

    return polyline;
  };

  useEffect(() => {
    const { kakao } = window;

    const options = {
      center: new kakao.maps.LatLng(startY, startX),
      level: 6,
    };

    const map = new kakao.maps.Map(container.current, options);

    axios
      .get(
        `https://api.odsay.com/v1/api/loadLane?mapObject=0:0@${activeMapObj}&apiKey=${process.env.REACT_APP_ODSAY_API_KEY}`
      )
      .then((response) => {
        const jsonData = response.data;

        const allPos = jsonData.result.lane
          .map((pos) => pos.section[0].graphPos)
          .flat();

        drawMarker(kakao, map);

        let polyline = drawPolyLine(allPos, kakao);

        polyline.setMap(map);
      })
      .catch((error) => {});
    // eslint-disable-next-line
  }, [active, data]);

  return (
    <>
      <div
        className='map'
        style={{ width: '100%', height: '30rem' }}
        ref={container}
      ></div>
    </>
  );
};

export default PMap;
