import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import { Check,} from "lucide-react"

export const VisitorQR: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div className="flex items-center">
        <h1 className="text-3xl font-semibold">Generar Ticket QR</h1>
      </div>
      <div className="mx-auto max-w-lg">
            <Card className="w-full max-w-lg">
                <CardHeader>
                <CardTitle>Nuevo QR</CardTitle>
                <CardDescription>
                Genera tu ticket QR, para poder ingresar a la residencial, tienes 10 minutos...
                </CardDescription>
                </CardHeader>
                <CardContent>
                <form>
                <div className="gap-2 lg:flex items-center justify-center">
                    <img
                        alt="QR image"
                        className="h-full w-full object-cover"
                        height="300"
                        src="/images/qr.png"
                        width="300"
                    />
                    </div>
                </form>
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

export default VisitorQR;