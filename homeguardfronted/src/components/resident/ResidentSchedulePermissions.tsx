import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Check } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Schema para validar los campos del formulario
const FormSchema = z.object({
  visitorName: z.string().nonempty("Visitor name is required."),
  visitorEmail: z.string().email("Invalid email address."),
  appointmentType: z.enum(["Unica", "Multiple"], {
    errorMap: () => ({ message: "Appointment type is required." }),
  }),
  appointmentDate: z.date({
    required_error: "A date is required for the appointment.",
  }).refine(date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  }, {
    message: "The date must be today or in the future.",
  }),
})

export const ResidentSchedulePermissions: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold">Solicitar Permiso</h1>
        </div>
        <div className="mx-auto max-w-lg">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Crear Permiso a Visitante</CardTitle>
              <CardDescription>
                Gestión de permiso a visitante
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="visitorName"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nombre del Visitante</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Nombre del Visitante" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="visitorEmail"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Correo del Visitante</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Correo del Visitante" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="appointmentType"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tipo de Visita</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione el tipo de cita" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Unica">Única</SelectItem>
                              <SelectItem value="Multiple">Múltiple</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="appointmentDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Fecha de la Visita</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Seleccionar fecha</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return date < today;
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Seleccione una fecha para la cita. Solo se permiten fechas de hoy o futuras.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      <Check className="mr-2 h-4 w-4" /> Solicitar Permiso
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ResidentSchedulePermissions;
