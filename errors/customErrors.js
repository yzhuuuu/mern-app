import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFound Error';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequest Error';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Unauthorized Error';
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Unauthenticated Error';
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
