# Conecta Cartagena

**Conecta Cartagena** es una aplicación móvil desarrollada con **React Native 0.75**. Esta aplicación permite a los usuarios explorar y personalizar su experiencia en la ciudad de Cartagena de forma intuitiva. 

Las siguientes instrucciones te ayudarán a configurar y ejecutar el proyecto en tu entorno local.

## Requisitos previos

Antes de comenzar, asegúrate de que tu sistema cumpla con los siguientes requisitos:

- **Node.js**: Versión 18.x.x
- **Yarn**: Para gestionar las dependencias (opcional, pero recomendado)
- **Java**: JDK 11
- **Android Studio**: Para configurar el entorno de desarrollo Android
- **Xcode** (para macOS): Para compilar en iOS (si lo deseas)

### 1. Instalar Node.js

Descarga e instala Node.js 18 desde [nodejs.org](https://nodejs.org/). Puedes verificar que se haya instalado correctamente ejecutando:

```bash
node -v
# Debe mostrar algo similar a: v18.x.x
```

### 2. Instalar Yarn (opcional)

Yarn es el gestor de paquetes recomendado para proyectos de React Native. Para instalar Yarn, ejecuta:

```bash
npm install -g yarn
```

Verifica la instalación ejecutando:

```bash
yarn -v
```

### 3. Instalar Java 11

Asegúrate de tener Java 11 instalado en tu máquina. Puedes descargarlo desde [AdoptOpenJDK](https://adoptopenjdk.net/). Luego, verifica la instalación:

```bash
java -version
# Debe mostrar algo similar a: openjdk version "11.0.x"
```

### 4. Configurar Android Studio

Si planeas ejecutar la aplicación en dispositivos Android, instala **Android Studio**. Asegúrate de configurar las siguientes opciones:

1. Instala el **Android SDK**.
2. Asegúrate de tener las variables de entorno `ANDROID_HOME` y las rutas al SDK configuradas. Añade lo siguiente a tu archivo `~/.bashrc` o `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 5. Configurar Xcode (solo para macOS y iOS)

Si planeas desarrollar para iOS, asegúrate de tener **Xcode** instalado desde la App Store.

- Abre Xcode y navega a **Preferences > Locations** para asegurarte de que la versión de la línea de comandos está configurada.
- Instala las dependencias necesarias para iOS ejecutando el siguiente comando en la raíz del proyecto:

```bash
npx pod-install ios
```

## Instrucciones para clonar y ejecutar el proyecto

### 1. Clonar el repositorio

Clona el repositorio de Conecta Cartagena:

```bash
git clone https://github.com/tu-usuario/ConectaCartagena.git
cd ConectaCartagena
```

### 2. Instalar las dependencias

Una vez clonado el proyecto, instala las dependencias utilizando Yarn:

```bash
yarn install
```

Si prefieres usar `npm`:

```bash
npm install
```

### 3. Configurar el archivo `.env` (opcional)

Si el proyecto utiliza variables de entorno, asegúrate de crear un archivo `.env` en la raíz del proyecto con las variables necesarias. Un ejemplo de archivo `.env` podría ser:

```bash
BASE_URL=http://tuservidor.com/api
```

### 4. Ejecutar la aplicación en Android

Para ejecutar la aplicación en un dispositivo o emulador Android, asegúrate de tener un emulador corriendo o un dispositivo conectado. Luego, ejecuta:

```bash
yarn android
```

O con npm:

```bash
npm run android
```

### 5. Ejecutar la aplicación en iOS (solo en macOS)

Si estás desarrollando en macOS y deseas correr la aplicación en un dispositivo o simulador iOS, ejecuta:

```bash
yarn ios
```

O con npm:

```bash
npm run ios
```

### 6. Iniciar el servidor Metro

Si no se inició automáticamente el servidor Metro, puedes iniciarlo manualmente con:

```bash
yarn start
```

## Solución de problemas

### Error: SDK location not found

Si obtienes un error relacionado con la ubicación del SDK de Android, verifica que la variable de entorno `ANDROID_HOME` esté correctamente configurada. Revisa que tu archivo `~/.bashrc` o `~/.zshrc` incluya las rutas al SDK de Android:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Si aún tienes problemas, asegúrate de haber instalado el SDK correcto desde **Android Studio**.

## Estructura del Proyecto

```bash
ConectaCartagena/
├── src/
│   ├── application/
│   │   └── controllers/
│   │       └── AuthController.ts       # Controladores para manejar la lógica de los casos de uso
│   ├── config/
│   │   ├── axios.ts                    # Configuración de Axios
│   │   ├── store.ts                    # Configuración de Redux (si se utiliza)
│   ├── domain/
│   │   ├── entities/
│   │   │   └── User.ts                 # Entidades que definen la lógica central
│   │   ├── interfaces/
│   │   │   └── IUserRepository.ts      # Interfaces que definen el contrato de los repositorios
│   │   ├── services/
│   │   │   └── AuthService.ts          # Servicios para manejar la lógica relacionada con casos de uso
│   │   └── usecases/
│   │       └── LoginUserUseCase.ts     # Casos de uso de la aplicación
│   ├── infrastructure/
│   │   ├── api/
│   │   │   └── ApiService.ts           # Interacción con la API
│   │   ├── repositories/
│   │   │   └── UserRepository.ts       # Implementación de repositorios que interactúan con la base de datos o la API
│   ├── ui/
│   │   ├── components/
│   │   │   └── Button.tsx              # Componentes reutilizables de UI
│   │   ├── screens/
│   │   │   └── LoginScreen.tsx         # Pantallas de la aplicación
│   │   └── navigation/
│   │       └── AppNavigator.tsx        # Configuración de la navegación
│   └── index.tsx                       # Punto de entrada de la aplicación
├── .env                                # Archivo de variables de entorno
├── package.json                        # Dependencias del proyecto
└── README.md                           # Instrucciones para configurar y ejecutar el proyecto

```

## Licencia

Este proyecto está bajo la licencia MIT.
```

### Explicación de las secciones:

1. **Requisitos previos**: Explica las versiones necesarias de Node, Yarn, Java, Android Studio y Xcode.
2. **Configuración**: Instrucciones detalladas para configurar el entorno en Android e iOS.
3. **Instrucciones para ejecutar el proyecto**: Incluye los comandos para clonar, instalar dependencias, configurar variables de entorno y ejecutar la aplicación en diferentes plataformas.
4. **Solución de problemas**: Describe cómo solucionar algunos problemas comunes, como la falta del SDK de Android.
5. **Estructura del proyecto**: Una visión general de la estructura de archivos del proyecto.
6. **Licencia**: Define la licencia bajo la cual se distribuye el proyecto.