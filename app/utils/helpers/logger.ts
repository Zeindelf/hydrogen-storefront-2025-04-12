import {pad} from './pad';

export type Colors = {[key in Level]: ColorsContent};
export type Level = 'fatal' | 'silent' | StreamLevel;

export interface Stream {
  readonly debug: (args?: any[]) => void;
  readonly error: (args?: any[]) => void;
  readonly group: (label?: string) => void;
  readonly groupEnd: (label?: string) => void;
  readonly info: (args?: any[]) => void;
  readonly log: (args?: any[]) => void;
  readonly warn: (args?: any[]) => void;
}

export type StreamLevel = 'debug' | 'error' | 'info' | 'log' | 'warn';

type ColorsContent = {
  background: string;
  text: string;
};

const defaultColors: Colors = {
  debug: {background: '#e2e3e5', text: '#2b2f32'},
  error: {background: '#f8d7da', text: '#58151c'},
  fatal: {background: '#f8d7da', text: '#58151c'},
  info: {background: '#cff4fc', text: '#055160'},
  log: {background: '#d1e7dd', text: '#0a3622'},
  silent: {background: '', text: ''},
  warn: {background: '#fff3cd', text: '#664d03'},
};

type Callback = () => void;

interface Config {
  readonly colors?: Colors;
  readonly format?: (message: Message) => any[];
  readonly level?: Level;
  readonly name?: string;
  readonly stream?: Stream;
}

interface Message {
  readonly content: any[];
  readonly date: Date;
  readonly level: string;
  readonly name: string;
}

/**
 * The default formatting function
 *
 * @param {Date} message.date - The message time
 * @param {Level} message.level - The message level
 * @param {string} message.name - The logger name
 * @param {any[]=} message.content - The message arguments (e.g. text, JSON)
 *
 * @returns An array of arguments that are forwarded to the Logger stream
 */
// function format({content, date, level, name}: Message): any[] {
//   const ts = date.toISOString();

//   return [`${ts} [${level.toUpperCase()}] ${name}:`, ...content];
// }

/**
 * A tiny logger intended for browsers and space-constrained applications
 *
 * @example <caption>Log Levels</caption>
 * const logger = new Logger({name: 'App', level: 'info'});
 * logger.debug('what is this');
 * logger.info('starting app');
 * logger.log('useful information');
 * logger.warn('something might fail');
 * logger.error('not good');
 * logger.fatal('everything is bad');
 *
 * @example <caption>Multiple arguments</caption>
 * const logger = new Logger({name: 'App', level: 'info'});
 * logger.info('response data', data);
 *
 * @example <caption>Message Groups</caption>
 * const logger = new Logger({name: 'App', level: 'info'});
 * logger.group('starting group', () => {
 *   logger.info('here we go');
 *   logger.info('one more time');
 * });
 *
 * @example <caption>Silenced Logger</caption>
 * const logger = new Logger({name: 'App', level: 'silent'});
 * logger.fatal('this message will be ignored');
 */
export class Logger {
  private static levels: Level[] = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'fatal',
    'silent',
  ];
  private colors: Required<Config>['colors'];
  // private format: Required<Config>['format'];
  private level: Required<Config>['level'];
  private name: Required<Config>['name'];
  private stream: Required<Config>['stream'];

  /**
   * Creates a Logger instance
   *
   * The logger will conditionally output messages based on the config.level
   * value. If the logger's level is less noisy than the message level, no
   * message is output.
   *
   * **Log Levels:**
   * * fatal (least noisy)
   * * error
   * * warn
   * * info
   * * debug (most noisy)
   *
   * @param {string='app'} config.name - The logger name
   * @param {string='warn'} config.level - The log level
   * @param {Function=} config.format - A message formatter function
   * @param {Object=} config.stream - The destination stream (e.g. console)
   */
  constructor(config: Config) {
    const isProd = process.env.NODE_ENV === 'production';
    const level = isProd ? 'silent' : config.level || 'log';

    this.name = config.name || '';
    this.level = level;
    this.stream = config.stream || console;
    this.colors = config.colors || defaultColors;
  }

  /** Logs a message if the Logger is 'debug' */
  public debug(...args: any[]): void {
    this.logMessage('debug', ...args);
  }

  /** Logs a message if the Logger level is 'error' or lower */
  public error(...args: any[]): void {
    this.logMessage('error', ...args);
  }

  /** Logs a message if the Logger level is 'fatal' or lower */
  public fatal(...args: any[]): void {
    this.logMessage('fatal', ...args);
  }

  /**
   * Creates a log group
   *
   * @example
   * const logger = new Logger({name: 'App', level: 'info'});
   * logger.group('starting group', () => {
   *   logger.info('here we go');
   *   logger.info('one more time');
   * });
   */
  public group(label: string, callback: Callback): void {
    try {
      this.stream.group(label);
      callback();
    } finally {
      this.stream.groupEnd();
    }
  }

  /**
   * Logs a message if the Logger level is 'info' or lower
   */
  public info(...args: any[]): void {
    this.logMessage('info', ...args);
  }

  /**
   * Logs a message if the Logger level is 'info' or lower
   */
  public log(...args: any[]): void {
    this.logMessage('log', ...args);
  }

  /**
   * Logs a message if the Logger level is 'warn' or lower
   */
  public warn(...args: any[]): void {
    this.logMessage('warn', ...args);
  }

  /**
   * The default formatting function
   *
   * @param {Date} message.date - The message time
   * @param {Level} message.level - The message level
   * @param {string} message.name - The logger name
   * @param {any[]=} message.content - The message arguments (e.g. text, JSON)
   *
   * @returns An array of arguments that are forwarded to the Logger stream
   */
  private format({content, date, level, name}: Message): any[] {
    const ts = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds(),
    )}`;
    const style = this.getColorStyle(level);

    return [`%c${ts} [${level.toUpperCase()}]${name}:`, style, ...content];
  }

  private getColorStyle(level: string): string {
    const color = this.colors[level as keyof Colors];

    return `color: ${color.text}; background-color: ${color.background}; padding: 2px 6px; border-radius: 2px; font-size: 12px`;
  }

  private logMessage(level: Level, ...args: any[]): void {
    // Can be validate ´isProd´ here intead of log level
    if (this.shouldDisplay(level)) {
      const message = {
        content: args,
        date: new Date(),
        level,
        name: this.name,
      };
      const formattedMessage = this.format(message);
      const streamFuncName = (
        level === 'fatal' ? 'error' : level
      ) as StreamLevel;

      this.stream[streamFuncName](...formattedMessage);
    }
  }

  private shouldDisplay(level: Level): boolean {
    return Logger.levels.indexOf(level) >= Logger.levels.indexOf(this.level);
  }
}

export const logger = new Logger({});
