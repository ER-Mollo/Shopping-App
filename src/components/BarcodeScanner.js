import { useEffect, useRef } from "react";
import Quagga from "quagga";


export default function BarcodeScanner({ onScan }) {
    const scannerRef = useRef(null);

    useEffect(() => {
        Quagga.init(
            {
                inputStream: {
                    type: "LiveStream",
                    target: scannerRef.current,
                },
                decoder: { readers: ["ean_reader"] },
            },
            (err) => {
                if (!err) Quagga.start();
            }
        );

        Quagga.onDetected((data) => {
            onScan(data.codeResult.code);
            Quagga.stop();
        });

        return () => Quagga.stop();
    }, [onScan]);

    return <div ref={scannerRef} className="w-full h-40 bg-gray-300"></div>;
}
