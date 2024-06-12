import React from 'react';
import { useAuth } from '../context/AuthContext';

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Profile: React.FC = () => {
  const { role } = useAuth();
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleSave = () => {
    // Lógica para guardar los cambios
    console.log('Guardado:', { email, username });
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
              <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Nombre de usuario</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Max"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  {role === 'superadmin' && (
                    <div className="grid gap-2">
                      <Label htmlFor="superadmin-field">Campo específico de Superadmin</Label>
                      <Input
                        id="superadmin-field"
                        placeholder="Valor específico de Superadmin"
                      />
                    </div>
                  )}
                  {role === 'resident-manager' && (
                    <div className="grid gap-2">
                      <Label htmlFor="resident-manager-field">Campo específico de Resident Manager</Label>
                      <Input
                        id="resident-manager-field"
                        placeholder="Valor específico de Resident Manager"
                      />
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button onClick={handleSave}>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
