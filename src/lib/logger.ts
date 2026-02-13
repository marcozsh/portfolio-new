import { Logger } from "next-axiom";

/**
 * Logger específico para server actions
 * Configura el source como 'server' para que Axiom lo reconozca correctamente
 */
export class ServerLogger {
  private logger: Logger;
  private file: string;

  constructor(file?: string) {
    this.logger = new Logger({
      source: 'server',
    });
    this.file = file || 'unknown';
  }

  async info(message: string, data?: Record<string, any>) {
    this.logger.info(message, { ...data, runtime: `server-action - ${this.file}` });
    await this.flush();
  }

  async warn(message: string, data?: Record<string, any>) {
    this.logger.warn(message, { ...data, runtime: `server-action - ${this.file}` });
    await this.flush();
  }

  async error(message: string, data?: Record<string, any>) {
    this.logger.error(message, { ...data, runtime: `server-action - ${this.file}` });
    await this.flush();
  }

  async debug(message: string, data?: Record<string, any>) {
    this.logger.debug(message, { ...data, runtime: `server-action - ${this.file}` });
    await this.flush();
  }

  private async flush() {
    await this.logger.flush();
  }
}

/**
 * Helper function para crear un logger de servidor
 * @param file - Nombre del archivo donde se usa el logger (ej: 'transferencias-actions.ts')
 */
export const createServerLogger = (file?: string) => new ServerLogger(file);
