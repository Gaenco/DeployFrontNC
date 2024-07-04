import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { Label } from "@/components/ui/label"
 
import {
  ArrowUpRight,
  CircleUser,
  Car,
  Menu,
  Package2,
  OctagonPause,
  Sofa,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const Admindashboard: React.FC = () => {
  
  const navigate = useNavigate();

  const verEntradas = () => {
    navigate('/superadmin/view-entries');
  };

  const verResidencias = () => {
    navigate('/superadmin/manage-residences');
  };

  const verVigilantes = () => {
    navigate('/superadmin/guards');
  };

  const settings= () => {
    navigate('/superadmin/settings');
  };

    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {/* <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link to="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link to="/superadmin/dashboard" className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link to="/superadmin/view-entries" className="text-muted-foreground transition-colors hover:text-foreground">
              Entradas
            </Link>
            <Link to="/superadmin/manage-residences" className="text-muted-foreground transition-colors hover:text-foreground">
              Residencias
            </Link>
            <Link to="/superadmin/guards" className="text-muted-foreground transition-colors hover:text-foreground">
              Vigilantes
            </Link>
            <Link to="/superadmin/terminals" className="text-muted-foreground transition-colors hover:text-foreground">
              Terminales
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link to="#" className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link to="/superadmin/dashboard" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link to="/superadmin/view-entries" className="text-muted-foreground hover:text-foreground">
                  Entradas
                </Link>
                <Link to="/superadmin/manage-residences" className="text-muted-foreground hover:text-foreground">
                  Residencias
                </Link>
                <Link to="/superadmin/guards" className="text-muted-foreground hover:text-foreground">
                  Vigilantes
                </Link>
                <Link to="/superadmin/terminals" className="text-muted-foreground hover:text-foreground">
                  Terminales
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Label className="text-l text-muted-foreground">Colonia HLVS  </Label>
                <Label className="text-2xl font-bold">  HomeGuard</Label>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={settings}>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header> */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle >Visualizar entradas</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground"  />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground space-y-0 pb-3">Registro de entradas y salidas</p>
              <Button className="w-full" onClick={verEntradas}> Ver Visitas</Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Gestionar residencias</CardTitle>
                <Sofa className="h-4 w-4 text-muted-foreground"  />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground space-y-0 pb-3">Resumen de todas las casas</p>
              <Button className="w-full" onClick={verResidencias}> Ver Residencias</Button>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Vigilantes y terminales</CardTitle>
                <OctagonPause className="h-4 w-4 text-muted-foreground"  />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground space-y-0 pb-3">Administración de vigilantes y terminales</p>
              <Button className="w-full" onClick={verVigilantes}> Gestionar Vigilantes</Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Descripción general (visitas por mes)</CardTitle>
                  <CardDescription>(visitas por mes)</CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link to="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden xl:table-column">Type</TableHead>
                      <TableHead className="hidden xl:table-column">Status</TableHead>
                      <TableHead className="hidden xl:table-column">Date</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">Sale</TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">Approved</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">2023-06-23</TableCell>
                      <TableCell className="text-right">2024-02-22 05:14 PM</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Olivia Smith</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">Refund</TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">Declined</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">2023-06-24</TableCell>
                      <TableCell className="text-right">2024-02-22 05:14 PM</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Noah Williams</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">noah@example.com</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">Subscription</TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">Approved</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">2023-06-25</TableCell>
                      <TableCell className="text-right">2024-02-22 05:14 PM</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Emma Brown</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">Sale</TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">Approved</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">2023-06-26</TableCell>
                      <TableCell className="text-right">2024-02-22 05:14 PM</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">Sale</TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">Approved</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">2023-06-27</TableCell>
                      <TableCell className="text-right">2024-02-22 05:14 PM</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Visitas Recientes</CardTitle>                  
                <CardDescription>Se han registrado 40 visitas este día</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+1</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                    <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+2</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+1</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">William Kim</p>
                    <p className="text-sm text-muted-foreground">will@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+3</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Sofia Davis</p>
                    <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+1</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  };
  
  export default Admindashboard;