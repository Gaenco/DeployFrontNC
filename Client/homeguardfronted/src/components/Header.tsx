import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package2, Menu, CircleUser } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const Header: React.FC = () => {
  const { role } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };


  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link to="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {role === 'superadmin' && (
          <>
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
          </>
        )}
        {role === 'resident-manager' && (
          <>
            <Link to="/resident-manager/dashboard" className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link to="/resident-manager/generate-qr" className="text-muted-foreground transition-colors hover:text-foreground">
              QR
            </Link>
            <Link to="/resident-manager/schedule-permissions" className="text-muted-foreground transition-colors hover:text-foreground">
              Agendar
            </Link>
            <Link to="/resident-manager/manage-permissions" className="text-muted-foreground transition-colors hover:text-foreground">
              Permisos
            </Link>
          </>
        )}
        {role === 'resident' && (
          <>
            <Link to="/resident/dashboard" className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link to="/resident/generate-qr" className="text-muted-foreground transition-colors hover:text-foreground">
              QR
            </Link>
            <Link to="/resident/schedule-permissions" className="text-muted-foreground transition-colors hover:text-foreground">
              Agendar
            </Link>
            <Link to="/resident/manage-permissions" className="text-muted-foreground transition-colors hover:text-foreground">
              Permisos
            </Link>
          </>
        )}
        {role === 'visitor' && (
          <>
            <Link to="/visitor/dashboard" className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
          </>
        )}
        {role === 'scanner' && (
          <>
            <Link to="/scanner/scan-qr" className="hover:text-foreground">
              Dashboard
            </Link>
          </>
        )}
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
            {role === 'superadmin' && (
              <>
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
              </>
            )}
            {role === 'resident-manager' && (
              <>
                <Link to="/resident-manager/dashboard" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link to="/resident-manager/schedule-permissions" className="text-muted-foreground hover:text-foreground">
                  Agendar Permisos
                </Link>
                <Link to="/resident-manager/manage-permissions" className="text-muted-foreground hover:text-foreground">
                  Administrar Permisos
                </Link>
              </>
            )}
            {role === 'resident' && (
              <>
                <Link to="/resident/dashboard" className="text-foreground transition-colors hover:text-foreground">
                  Dashboard
                </Link>
                <Link to="/resident/generate-qr" className="text-muted-foreground transition-colors hover:text-foreground">
                  QR
                </Link>
                <Link to="/resident/schedule-permissions" className="text-muted-foreground transition-colors hover:text-foreground">
                  Agendar
                </Link>
                <Link to="/resident/manage-permissions" className="text-muted-foreground transition-colors hover:text-foreground">
                  Permisos
                </Link>
              </>
            )}
            {role === 'visitor' && (
              <>
                <Link to="/visitor/dashboard" className="hover:text-foreground">
                  Dashboard
                </Link>
              </>
            )}
            {role === 'scanner' && (
              <>
                <Link to="/scanner/scan-qr" className="hover:text-foreground">
                  Dashboard
                </Link>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Label className="text-l text-muted-foreground">Colonia HLVS</Label>
            <Label className="text-2xl font-bold">HomeGuard</Label>
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
            <DropdownMenuItem onClick={handleProfileClick}>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
