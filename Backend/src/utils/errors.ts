export class AuthenticationError extends Error {
  statusCode: number;

  constructor(message: string = 'Authentication failed') {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}

export class AuthorizationError extends Error {
  statusCode: number;

  constructor(message: string = 'Not authorized') {
    super(message);
    this.name = 'AuthorizationError';
    this.statusCode = 403;
  }
} 