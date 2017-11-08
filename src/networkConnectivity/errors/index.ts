/**
 * @module Errors
 */

 /**
  * Base class for errors used throughout Network Connectivity tests.
  */
export class NetworkTestError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NetworkTestError.prototype);
    this.name = this.constructor.name;
    this.stack = (new Error(message)).stack;
  }
}

export class MissingOpenTokInstanceError extends NetworkTestError {
  constructor() {
    super('An instance of OT, the OpenTok.js client SDK, is required.');
  }
}

export class IncompleteSessionCredentialsError extends NetworkTestError {
  constructor() {
    super('NetworkConnectivity requires an apiKey, sessionId, and token.');
  }
}

export class InvalidOnStatusCallback extends NetworkTestError {
  constructor() {
    super('The onStatus callback must be a function that accepts a single parameter.');
  }
}
export class InvalidOnCompleteCallback extends NetworkTestError {
  constructor() {
    super('The onComplete callback must be a function that accepts error and results parameters');
  }
}