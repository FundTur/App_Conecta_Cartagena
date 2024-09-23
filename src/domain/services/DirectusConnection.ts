import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Clase para manejar la conexión a Directus
class DirectusConnection {
  protected axiosInstance: AxiosInstance;
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    // Crear instancia de Axios con la configuración base
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Método para realizar solicitudes HTTP con Axios
  protected async request(
    endpoint: string,
    options?: AxiosRequestConfig
  ): Promise<any> {
    try {
      const response = await this.axiosInstance(endpoint, options);
      return response.data; // Devolver los datos de la respuesta
    } catch (error: any) {
      // Manejo de errores
      if (error.response) {
        throw new Error(error.response.data.errors || 'Error en la solicitud');
      } else {
        throw new Error('Error de conexión');
      }
    }
  }
}