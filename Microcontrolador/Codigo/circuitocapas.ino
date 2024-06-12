#include <Servo.h>

// Crear objetos Servo
Servo servo1;
Servo servo2;

// Definir los pines de control de los servos y los pulsadores
int servoPin1 = 9;
int servoPin2 = 10;
int buttonPin1 = 2;  // Definir el pin del primer pulsador
int buttonPin2 = 3;  // Definir el pin del segundo pulsador

void setup() {
  // Adjuntar los servos a los pines definidos
  servo1.attach(servoPin1);
  servo2.attach(servoPin2);
  
  // Configurar los pines de los pulsadores como entrada con pull-up interno
  pinMode(buttonPin1, INPUT_PULLUP);
  pinMode(buttonPin2, INPUT_PULLUP);
}

void loop() {
  // Leer el estado de los pulsadores
  int buttonState1 = digitalRead(buttonPin1);
  int buttonState2 = digitalRead(buttonPin2);

  // Si el primer pulsador está presionado (LOW en un pull-up), mover servo 1 a 90 grados
  if (buttonState1 == LOW) {
    servo1.write(90);
  } else {
    servo1.write(0);
  }

  // Si el segundo pulsador está presionado (LOW en un pull-up), mover servo 2 a 90 grados
  if (buttonState2 == LOW) {
    servo2.write(90);
  } else {
    servo2.write(0);
  }

  // Esperar un poco para evitar rebotes
  delay(50);
}
