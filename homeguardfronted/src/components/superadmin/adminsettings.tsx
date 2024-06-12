import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Label } from "@/components/ui/label"
 
import {
  CircleUser,
  Menu,
  Package2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export const Adminsettings: React.FC = () => {
  const navigate = useNavigate();

  const settings= () => {
    navigate('/superadmin/settings');
  };
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto max-w-lg">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                    <CardTitle>Ajustes de Usuario</CardTitle>
                    <CardDescription>
                    Así es como te verán los demás en el sitio.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <form>
                    <div className="grid gap-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="first-name">Nombre de usuario</Label>
                        <Input id="first-name" placeholder="Max" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        />
                    </div>
                    </div>
                    </form>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
      </div>
    );
  };
  
  export default Adminsettings;

  