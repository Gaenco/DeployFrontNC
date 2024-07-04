import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowUpRight,
  Car,
  OctagonPause,
  Sofa,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
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

export const ResidentManagerDashboard: React.FC = () => {
    
  const navigate = useNavigate();

  const generarQR = () => {
    navigate('/resident-manager/generate-qr');
  };

  const agendarPermisos = () => {
    navigate('/resident-manager/schedule-permissions');
  };

  const adminPermisos = () => {
    navigate('/resident-manager/manage-permissions');
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
            <Car className="h-4 w-4 text-muted-foreground"  />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground space-y-0 pb-3">Crea un Nuevo Ticket</p>
          <Button className="w-full" onClick={generarQR}> Generar</Button>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Agendar Permisos</CardTitle>
            <Sofa className="h-4 w-4 text-muted-foreground"  />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground space-y-0 pb-3">Crear permisos a visitantes</p>
          <Button className="w-full" onClick={agendarPermisos}> Agendar</Button>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Administrar Permisos</CardTitle>
            <OctagonPause className="h-4 w-4 text-muted-foreground"  />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground space-y-0 pb-3">Modificar permisos activos</p>
          <Button className="w-full" onClick={adminPermisos}> Gestionar Permisos</Button>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader>
                    <CardTitle>Visitas</CardTitle>
                    <CardDescription>Registro histórico de las entradas de visitantes.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nombre</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Correlativo
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            DUI
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Casa a Visitar</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Noah Williams</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              noah@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-25
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            #
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                              #
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">name</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
    </main>
  </div>
);
};

export default ResidentManagerDashboard;
