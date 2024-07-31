import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useCallback } from "react";

type Props = {
  location: number[];
  setLocation: ([latitude, longitude]: number[]) => void;
  viewer?: boolean;
  height?: string;
};

export default function KakaoMap({
  location: [latitude, longitude],
  setLocation,
  viewer = false,
  height = "360px",
}: Props) {
  const onMapClick = useCallback(
    (target: kakao.maps.Map, mouseEvent: kakao.maps.event.MouseEvent) => {
      if (viewer) return;
      const location = [mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng()];
      setLocation([...location]);
    },
    [setLocation, viewer],
  );

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
      onClick={onMapClick}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  );
}
