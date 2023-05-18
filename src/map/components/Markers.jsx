import { Marker, Popup } from 'react-leaflet';

export const Markers = () => {

    return (
        <>
            <Marker position={[38.90892927891196, -6.617053521585592]} >
                <Popup >
                    <div>
                        Mi Pueblo jejejej
                    </div>
                </Popup>
            </Marker>
        </>
    )
}
