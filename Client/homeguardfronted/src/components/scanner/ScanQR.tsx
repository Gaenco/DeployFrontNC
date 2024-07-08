import React, { useEffect, useRef, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import QrScanner from "qr-scanner";

export const ScanQR: React.FC = () => {
  // QR States
  const scanner = useRef<QrScanner | null>(null);
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);

  // Result
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  // Success
  const onScanSuccess = (result: QrScanner.ScanResult) => {
    console.log("Scan success:", result);
    setScannedResult(result?.data);
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    console.error("Scan error:", err);
  };

  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      console.log("Initializing QR Scanner");
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      scanner.current.start()
        .then(() => {
          setQrOn(true);
          console.log("QR Scanner started successfully");
        })
        .catch((err: Error) => {
          console.error("Failed to start QR Scanner:", err);
          setQrOn(false);
        });
    }

    return () => {
      if (scanner.current) {
        console.log("Stopping QR Scanner");
        scanner.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn) {
      alert("Camera is blocked or not accessible. Please allow camera in your browser permissions and reload.");
    }
  }, [qrOn]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold">Generar Ticket QR</h1>
        </div>
        <div className="mx-auto max-w-lg">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Scanear Nuevo QR</CardTitle>
              <CardDescription>
                Genera tu ticket QR, para poder ingresar a la residencial, tienes 10 minutos...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative flex items-center justify-center">
                <video ref={videoEl} className="w-full h-64 bg-gray-200" autoPlay muted></video>
                <div ref={qrBoxEl} className="absolute inset-0 flex items-center justify-center">
                  {/* Puedes agregar un marco o una imagen de guía aquí si es necesario */}
                </div>
              </div>
              {scannedResult && (
                <p className="absolute top-0 left-0 z-50 text-white">
                  Scanned Result: {scannedResult}
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Terminar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ScanQR;
