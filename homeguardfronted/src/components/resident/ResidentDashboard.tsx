import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowUpRight,
  CalendarCheck,
  Glasses,
  QrCode,
  Car,
  OctagonPause,
  Sofa,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const ResidentDashboard: React.FC = () => {
    
  const navigate = useNavigate();

  const generarQR = () => {
    navigate('/resident/generate-qr');
  };

  const agendarPermisos = () => {
    navigate('/resident/schedule-permissions');
  };

  const adminPermisos = () => {
    navigate('/resident/manage-permissions');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div className="flex items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle >Generar Ticket QR</CardTitle>
            <QrCode className="h-4 w-4 text-muted-foreground"  />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground space-y-0 pb-3">Crea un Nuevo Ticket</p>
          <Button className="w-full" onClick={generarQR}> Generar</Button>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Solicitar Permisos</CardTitle>
            <CalendarCheck className="h-4 w-4 text-muted-foreground"  />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground space-y-0 pb-3">Crear permisos a visitantes</p>
          <Button className="w-full" onClick={agendarPermisos}> Agendar</Button>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Visualizar Permisos</CardTitle>
            <Glasses className="h-4 w-4 text-muted-foreground"  />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground space-y-0 pb-3">Modificar permisos activos</p>
          <Button className="w-full" onClick={adminPermisos}> Gestionar Permisos</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Created at</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Laser Lemonade Machine
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Draft</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-07-12 10:42 AM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Hypernova Headphones
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Active</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-10-18 03:21 PM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>
                      <TableCell>
                        <Badge variant="outline">Active</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-11-29 08:15 AM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        TechTonic Energy Drink
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Draft</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-12-25 11:59 PM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Gamer Gear Pro Controller
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Active</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-01-01 12:00 AM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Luminous VR Headset</TableCell>
                      <TableCell>
                        <Badge variant="outline">Active</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-02-14 02:14 PM
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
              </CardFooter>
            </Card>
    </main>
  </div>
);
};

export default ResidentDashboard;
